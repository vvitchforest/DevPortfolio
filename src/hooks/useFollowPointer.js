import { useState, useEffect } from 'react'

export const useFollowPointer = (ref) => {
  const [point, setPoint] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (!ref.current) return

    const handlePointerMove = ({ clientX, clientY  }) => {

      const element = ref.current

      const x = clientX - element.offsetLeft - element.offsetWidth / 2
      const y = clientY - element.offsetTop - element.offsetHeight / 2

      setPoint({
        x: x,
        y: y
      })
    }

    window.addEventListener('pointermove', handlePointerMove)

    // Remove the pointerMove listener on component dismount.
    return () => window.removeEventListener('pointermove', handlePointerMove)
  }, [])

  return point
}