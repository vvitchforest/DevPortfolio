import {  useRef } from 'react'
import { motion, useScroll, isValidMotionProp } from 'framer-motion'
import { Box, chakra, shouldForwardProp } from '@chakra-ui/react'
import { useSmoothScroll } from '../hooks/useSmoothScroll'

/** Allow motion props and non-Chakra props to be forwarded.*/
const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
})

const SmoothScroller = ( { children }) => {
  const scrollRef = useRef(null)
  const { pageHeight, useScrollTransform } = useSmoothScroll(scrollRef)
  const { scrollY } = useScroll()
  const y = useScrollTransform(scrollY, pageHeight)

  return (
    <Box style={{ height: pageHeight }}>
      <ChakraBox ref={scrollRef} style={{ y }} width='100%' position='fixed'>
        {children}
      </ChakraBox>
    </Box>
  )
}

export default SmoothScroller