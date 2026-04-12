
export const dispatchLocalGaEvent = (eventName: string, eventLabel: string | undefined) => {
  document.dispatchEvent(
    new CustomEvent('ga:track', {
      detail: {
        event_name: eventName,
        event_label: eventLabel || 'desconocido',
      },
    })
  )
}

export const dispatchGaEvent = (target: HTMLElement) => {
  const event = target.dataset.gaEvent
  const label = target.dataset.gaLabel

  if (!event) return

  dispatchLocalGaEvent(event, label);
}

export const dispatchGaAllItemsOpenedEvent = (
  allOpenAtLeastOnce: Array<boolean>,
  index: number,
  eventLabel: string
) => {
  if (!allOpenAtLeastOnce.every(el => el === true)) {
    allOpenAtLeastOnce[index] = true
    if (allOpenAtLeastOnce.every(el => el === true)) {
      dispatchLocalGaEvent('all_items_opened', eventLabel)
    }
  }
}

export const getReadingTimeSeconds = (target: HTMLElement): number => {
  const textElements = target.querySelectorAll('p, h2, h3, h4, h5')
  const text = Array.from(textElements)
    .map(el => el.textContent || '')
    .join(' ')
  const words = text.trim().split(/\s+/).length
  return Math.ceil(words / 4)
}

export const dispatchGaEngagementTimeEvent = (
  target: HTMLElement,
  timeLimit: number | Array<number>,
  option?: {
    percentages?: Array<number>
    threshold?: number | number[],
  }
) => {
  let isIntersecting: boolean = false
  let isPageVisible: boolean = !document.hidden
  let timeOutList: Array<ReturnType<typeof setTimeout>> = []
  let sectionEntryTime: number | null = null

  const limits = typeof timeLimit === 'number' ? [timeLimit] : timeLimit
  const length = limits.length
  let isTracked: Array<boolean> = new Array(length).fill(false)
  let remainingTimes: Array<number> = limits.map(t => t * 1000)

  const getEventName = (i: number): string => {
    if (option?.percentages && option?.percentages[i]) {
      return `engagement_${option.percentages[i]}`
    }
    return `engagement_time_${limits[i]}sec`
  }

  const timeOut = (
    limit: number,
    i: number,
    delay: number
  ): ReturnType<typeof setTimeout> => {
    return setTimeout(() => {
      if (isIntersecting && isPageVisible && !isTracked[i]) {
        document.dispatchEvent(
          new CustomEvent('ga:track', {
            detail: {
              event_name: getEventName(i),
              event_label: target.dataset.gaLabel,
              threshold_seconds: limit,
              reading_time_seconds: limits[limits.length - 1],
            }
          })
        )
        isTracked[i] = true
      }
    }, delay)
  }

  const startTimers = () => {
    sectionEntryTime = Date.now()
    limits.forEach((limit, i) => {
      if (!isTracked[i] && remainingTimes[i] > 0) {
        timeOutList.push(timeOut(limit, i, remainingTimes[i]))
      }
    })
  }

  const pauseTimers = () => {
    if (sectionEntryTime === null) return

    // Calculate time spent in section before pausing
    const timeSpentInSection = Date.now() - sectionEntryTime

    // Update remaining times discounting time already spent
    remainingTimes = remainingTimes.map((remaining, i) => {
      if (isTracked[i]) return 0
      return Math.max(0, remaining - timeSpentInSection)
    })

    timeOutList.forEach(el => clearTimeout(el))
    timeOutList = []
    sectionEntryTime = null
  }

  const resumeTimers = () => {
    // isTracked protects against double firing
    // Only starts pending timers with updated remaining time
    startTimers()
  }

  const engagementTimeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Save intersection state
        isIntersecting = true
        // Only start if page is visible
        if (isPageVisible) startTimers()
      } else {
        // Pause - accumulates time
        if (isPageVisible) pauseTimers()
        // Save intersection state
        isIntersecting = false
      }
    })
  }, { threshold: option?.threshold || 0.5 })

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      // User left — pause timers
      isPageVisible = false
      if (isIntersecting) pauseTimers()
    } else {
      // User returned — resume timers
      isPageVisible = true
      if (isIntersecting) resumeTimers()
    }
  })

  engagementTimeObserver.observe(target)
}

export const dispatchGaEngagementTimeByContent = (target: HTMLElement, threshold: number | number[] | undefined) => {
  const readingTime = getReadingTimeSeconds(target)

  const thresholds = [
    Math.round(readingTime * 0.10),
    Math.round(readingTime * 0.25),
    Math.round(readingTime * 0.50),
    Math.round(readingTime * 0.75),
    Math.round(readingTime * 1.00),
  ]

  dispatchGaEngagementTimeEvent(target, thresholds, {percentages: [10, 25, 50, 75, 100], threshold: threshold} )
}

