import React from 'react'
import PropTypes from 'prop-types'
import { chakra, shouldForwardProp } from '@chakra-ui/react'
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  isValidMotionProp
} from 'framer-motion'


const useParallax = (value, intensity) => {
  const range = useTransform(value, [0, 1], [0, 100 * intensity])
  return useSpring(range, { stiffness : 200, damping: 90 })
}

/** Allow motion props and non-Chakra props to be forwarded.*/
const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
})

const Parallax = ({ children, intensity, target, width }) => {

  const { scrollYProgress } = useScroll( {
    target: target,
    offset: ['end end', 'end start']
  })
  const y = useParallax(scrollYProgress, intensity)

  return(
    <ChakraBox style={{ y }} w={width}>
      {children}
    </ChakraBox>
  )
}

Parallax.propTypes = {
  children: PropTypes.element.isRequired,
  intensity: PropTypes.number.isRequired,
  target: PropTypes.any.isRequired
}

export default Parallax