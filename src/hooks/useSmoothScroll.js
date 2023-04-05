import { useState, useEffect, useLayoutEffect } from 'react'
import { useSpring, useTransform } from 'framer-motion'

export const useSmoothScroll = (ref) => {

  const [pageHeight, setPageHeight] = useState(null)

  useEffect(() => {
    const smoothScroll = ref.current
    setPageHeight(smoothScroll.getBoundingClientRect().height)
  }, [])

  useLayoutEffect(() => {
    const smoothScroll = ref.current
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setPageHeight(entry.contentRect.height)
      }
    })
    observer.observe(smoothScroll)
    return () => observer.disconnect()
  }, [])

  const useScrollTransform = (value, pageHeight) => {
    const transform = useTransform(value, [0, pageHeight], [0, -pageHeight])
    const spring = useSpring( transform, { mass: 0.5, stiffness: 50, damping: 10 })
    return spring
  }

  return { pageHeight, useScrollTransform }
}