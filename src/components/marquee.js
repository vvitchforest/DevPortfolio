import { motion, isValidMotionProp } from 'framer-motion'
import { Box, Text, chakra, shouldForwardProp } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'

/** Allow motion props and non-Chakra props to be forwarded.*/
const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop)
})

const marqueeVariants = {
  animate: {
    x: [0, -1035],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 20,
        ease: 'linear'
      }
    }
  }
}

const Marquee = () => {
  return (
    <Box position="relative" w="100vw" maxW="100%" h="300px" overflowX="hidden">
      <ChakraBox
        position="absolute"
        style={{ whiteSpace: 'nowrap' }}
        variants={marqueeVariants}
        animate="animate"
        display="flex"
        alignItems="center"
      >
        <Text mx="20px" my={0} textStyle="h1">
          Crafting experiences for the web
        </Text>
        <StarIcon />
        <Text mx="20px" my={0} textStyle="h1">
          Crafting experiences for the web
        </Text>
        <Text mx="20px" my={0} textStyle="h1">
          Crafting experiences for the web
        </Text>
        <StarIcon />
        <Text mx="20px" my={0} textStyle="h1">
          Crafting experiences for the web
        </Text>
        <StarIcon />
        <Text mx="20px" my={0} textStyle="h1">
          Crafting experiences for the web
        </Text>
        <StarIcon />
        <Text mx="20px" my={0} textStyle="h1">
          Crafting experiences for the web
        </Text>
        <StarIcon />
        <StarIcon />
      </ChakraBox>
    </Box>
  )
}

export default Marquee
