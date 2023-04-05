import {  useRef } from 'react'
import { motion, useScroll, isValidMotionProp } from 'framer-motion'
import { Box, chakra, shouldForwardProp } from '@chakra-ui/react'
import { useSmoothScroll } from '../hooks/useSmoothScroll'

/** Allow motion props and non-Chakra props to be forwarded.*/
const MotionBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
})

const SmoothScroller = ( { children }) => {
  const scrollRef = useRef(null)
  const containerRef = useRef(null)
  const { pageHeight, containerHeight, useScrollTransform } = useSmoothScroll(scrollRef)
  const { scrollY } = useScroll()
  const y = useScrollTransform(scrollY, pageHeight)

  return (
    <Box ref={containerRef} height={containerHeight}>
      <MotionBox ref={scrollRef} style={{ y }} position='fixed'>
        {children}
      </MotionBox>
    </Box>
  )
}

export default SmoothScroller