import { useState, useEffect, useLayoutEffect } from 'react'
import { useSpring, useTransform } from 'framer-motion'

export const useSmoothScroll = (ref) => {

  const [pageHeight, setPageHeight] = useState(null)
  const [containerHeight, setContainerHeight] = useState(null)

  useEffect(() => {
    const smoothScrollDiv = ref.current
    setContainerHeight(smoothScrollDiv.getBoundingClientRect().height)
  }, [])

  useLayoutEffect(() => {
    const smoothScrollDiv = ref.current
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setPageHeight(entry.contentRect.height)
      }
    })
    observer.observe(smoothScrollDiv)
    return () => observer.disconnect()
  }, [])

  const useScrollTransform = (value, pageHeight) => {
    const transform = useTransform(value, [0, pageHeight], [0, -pageHeight])
    const spring = useSpring( transform, { mass: 0.5, stiffness: 50, damping: 10 })
    return spring
  }

  return { pageHeight, containerHeight, useScrollTransform }
}