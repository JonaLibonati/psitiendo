
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

// Tracking residence time with IntersectionObserver

export const dispatchGaResidenceTimeEvent = (target: HTMLElement, timeLimit: number | Array<number>) => {
  let isIntersecting: boolean = false;
  let timeOutList: Array<ReturnType<typeof setTimeout>> = [];

  const length = typeof timeLimit === 'number' ? 1 : timeLimit.length
  let isTracked: Array<boolean> = new Array(length).fill(false)

  const timeOut = (timeLimit: number, i: number) : NodeJS.Timeout => {
    return setTimeout(() => {
      if (isIntersecting && !isTracked[i]) {
        dispatchLocalGaEvent(`residence_time_greater_than_${timeLimit}sec`, target.dataset.gaLabel);
        isTracked[i] = true;
        return
      };
    }, timeLimit*1000)
  }

  const residenceTimeGaObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
         //Save intersection state
        isIntersecting = true;
        //Run time outs
        if (typeof timeLimit === "number") {
          timeOutList.push(timeOut(timeLimit, 0))
        } else {
          timeLimit.forEach((time, i) => {
            timeOutList.push(timeOut(time, i))
          })
        }
      } else {
        //Resets the clock if user leaves the section before the limit time ends.
        timeOutList.forEach(el => {
          clearTimeout(el)
        })
        //Save intersection state
        isIntersecting = false;
      }
    })
  }, { threshold: 0.5 })

  residenceTimeGaObserver.observe(target)
}

