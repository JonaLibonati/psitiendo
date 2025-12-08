import { useEffect } from "react"

const scrollAction = (scrollTo) => {
  const el = document.getElementById(scrollTo)
  if (el) {
    el.scrollIntoView({ behavior: "smooth" })
  }
}

export const useScrollTo = (scrollTo) => {
  useEffect(() => {
    if (!scrollTo) return
    scrollAction(scrollTo)
  }, [])
}
