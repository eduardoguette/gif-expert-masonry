import { useState } from 'react'
export function useObserver (elementObserver) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  if (!elementObserver?.current) {
    return ({ state: false, error: 'Element is not available' })
  }
  // eslint-disable-next-line no-undef
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(function (entry) {
        setIsIntersecting(entry.isIntersecting)
      })
    },
    {
      rootMargin: `${window.innerHeight / 2}px`,
      threshold: [0.2]
    }
  )
  observer.observe(elementObserver.current)
  return { isIntersecting }
}
