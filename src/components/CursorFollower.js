import '../App.css'
import { useRef } from 'react'
import { useFollowPointer } from '../hooks/useFollowPointer'
import { chakra, shouldForwardProp } from '@chakra-ui/react'
import { motion, isValidMotionProp } from 'framer-motion'

/**Forwards Framer Motion props to Chakra components */
const MotionBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
})

/**Custom cursor component, not in use */
const CursorFollower = () => {
  const ref = useRef(null)
  const { x, y } = useFollowPointer(ref)

  const cursorFollowerOuterStyle = {
    position: 'fixed',
    display: { base: 'none', lg: 'block' },
    zIndex: 99,
    height: '50px',
    width: '50px',
    borderRadius: '50%',
    border: '1px solid',
    borderColor: 'text',
    background: 'transparent',
    pointerEvents: 'none'
  }

  const transition = {
    type: 'spring',
    damping: 15,
    stiffness: 50,
    restDelta: 0.05
  }


  return (
    <MotionBox
      ref={ref}
      sx={cursorFollowerOuterStyle}
      animate={{ x, y }}
      transition={transition}
    />
  )
}

export default CursorFollower