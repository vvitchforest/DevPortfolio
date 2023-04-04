import { useState, useEffect } from 'react'

export const useOnScreen = (ref) => {
  const [isOnScreen, setOnScreen] = useState(false)
  //const [isSmallerThanMedium] = useMediaQuery('(max-width: 48em)')

  const observer = new IntersectionObserver(
    ([entry]) => setOnScreen(entry.isIntersecting),
    {
      threshold:  0.2
    }
  )

  useEffect(() => {
    observer.observe(ref.current)
    return () => {
      observer.disconnect()
    }
  })

  return isOnScreen
}
