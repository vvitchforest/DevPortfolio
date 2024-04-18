import { useEffect } from 'react'
import {
  Box,
  Flex,
  Text,
  Grid,
  GridItem,
  Button,
  chakra,
  shouldForwardProp,
  useColorMode
} from '@chakra-ui/react'
import { useNav } from '../hooks/useNav'
import {
  useInView,
  motion,
  isValidMotionProp,
  useMotionTemplate,
  useMotionValue,
  animate
} from 'framer-motion'
import { BsArrowDown } from 'react-icons/bs'

/** Allow motion props and non-Chakra props to be forwarded.*/
const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop)
})

const ChakraButton = chakra(motion.button, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop)
})

const COLORS = ['#4d47a3', '#1E67C6', '#13FFAA']

const LandingPage = () => {
  const homeRef = useNav('home')
  const isInView = useInView(homeRef, { once: true })

  const handleClick = () => {
    const container = document.getElementById('works-container')
    const offset = 100
    const containerPosition = container.getBoundingClientRect().top
    const offsetPosition = containerPosition + window.pageYOffset - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }

  const mode = useColorMode()
  const color = useMotionValue(COLORS[0])
  const backgroundImage =
    mode.colorMode === 'light'
      ? useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #FAF5FF 40%, ${color})`
      : useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000005 40%, ${color})`
  const border = useMotionTemplate`2px solid ${color}`
  console.log('mode', mode)

  useEffect(() => {
    animate(color, COLORS, {
      ease: 'easeInOut',
      duration: 10,
      repeat: Infinity,
      // eslint-disable-next-line quotes
      repeatType: 'mirror'
    })
  }, [])

  return (
    <ChakraBox
      id="landing-page-container"
      ref={homeRef}
      w="100%"
      h="95vh"
      style={{ backgroundImage }}
    >
      <Flex
        w={{ base: '90%', lg: '80%' }}
        height="90%"
        justifyContent="center"
        alignItems="center"
        m="auto"
      >
        <Grid w="inherit">
          <GridItem
            colSpan={2}
            style={{
              opacity: isInView ? 1 : 0,
              transition: 'all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s'
            }}
          >
            <Text textStyle="display">Welcome to</Text>
          </GridItem>
          <GridItem
            colSpan={2}
            style={{
              transform: isInView ? 'none' : 'translateX(-200px)',
              opacity: isInView ? 1 : 0,
              transition: 'all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s'
            }}
          >
            <Text textStyle="display">
              {
                // eslint-disable-next-line quotes
                "Irina's"
              }
            </Text>
          </GridItem>
          <GridItem
            colSpan={1}
            style={{
              opacity: isInView ? 1 : 0,
              transition: 'all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s'
            }}
          >
            <Text textStyle="display">portfolio</Text>
          </GridItem>
          <GridItem
            colSpan={{ base: 2, md: 1 }}
            alignSelf="end"
            ml="auto"
            style={{
              opacity: isInView ? 1 : 0,
              transition: 'all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s'
            }}
          >
            <Text
              fontSize={['2rem', '3rem']}
              fontFamily="Syne Tactile, cursive"
            >
              (2024)
            </Text>
          </GridItem>
          <GridItem
            colSpan={2}
            mt={{ base: '2rem', md: '6rem' }}
            style={{
              opacity: isInView ? 1 : 0,
              transition: 'all 1.3s cubic-bezier(0.17, 0.55, 0.55, 1) 1s'
            }}
          >
            <Flex
              flexDirection={{ base: 'column-reverse', md: 'row' }}
              justifyContent="space-between"
            >
              <ChakraButton
                size="lg"
                onClick={handleClick}
                my={[5, 5, 0, 0]}
                alignSelf="flex-start"
                //pl={{ base: 0, md: 3 }}
                px={4}
                py={2}
                style={{ border }}
                display="flex"
                alignItems="center"
                borderRadius="full"
                whileHover={{ scale: 1.015 }}
                whileTap={{ scale: 0.985 }}
              >
                <BsArrowDown fontSize="1.5rem" />
                <Text
                  fontFamily="Syne Tactile, cursive"
                  textTransform="lowercase"
                  fontSize="1.5rem"
                >
                  (see my work)
                </Text>
              </ChakraButton>
              <Box>
                <Text textStyle="subtitle2" color="text">
                  media engineering student |
                </Text>
                <Text textStyle="subtitle2" color="text">
                  front-end developer |
                </Text>
                <Text textStyle="subtitle2" color="text">
                  UX/UI designer
                </Text>
              </Box>
            </Flex>
          </GridItem>
        </Grid>
      </Flex>
    </ChakraBox>
  )
}

export default LandingPage
