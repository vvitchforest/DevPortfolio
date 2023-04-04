import { useRef } from 'react'
import { Box, Flex, Text, Grid, GridItem, Button } from '@chakra-ui/react'
import { useNav } from '../hooks/useNav'
import Parallax from '../components/Parallax'
import { useInView } from 'framer-motion'

const LandingPage = () => {
  const homeRef = useNav('home')
  const parallaxContainerRef = useRef(null)
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

  return (
    <Box
      id="landing-page-container"
      ref={homeRef}
      w="100%"
      h="95vh"
    >
      <Flex w="100%" height='90%' justifyContent='center' alignItems='center' >
        <Grid gap={50} textAlign={['center', 'center', 'start', 'start']} ref={parallaxContainerRef}>
          <Parallax intensity={1} target={parallaxContainerRef} >
            <GridItem colSpan={2}>
              <Box
                style={{
                  opacity: isInView ? 1 : 0,
                  transition: 'all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s'
                }}
              >
                <Text textStyle='mainHeader'>Welcome to</Text>
              </Box>
              <Box ml={[0, 0, '4rem', '5rem']}
                style={{
                  transform: isInView ? 'none' : 'translateX(-200px)',
                  opacity: isInView ? 1 : 0,
                  transition: 'all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s'
                }}>
                <Text textStyle='mainHeader' fontStyle='italic' color='primary'>{'Irina\'s'}</Text>
              </Box>
              <Box
                style={{
                  opacity: isInView ? 1 : 0,
                  transition: 'all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s'
                }}>
                <Text textStyle='mainHeader'>portfolio</Text>
              </Box>
            </GridItem>
          </Parallax>
          <Parallax intensity={1} target={parallaxContainerRef}>
            <GridItem colSpan={2}
              style={{
                opacity: isInView ? 1 : 0,
                transition: 'all 1.3s cubic-bezier(0.17, 0.55, 0.55, 1) 1s'
              }}
            >
              <Flex direction={['column-reverse', 'column-reverse', 'row', 'row']} justify='space-between'>
                <Box>
                  <Button variant='accent' onClick={handleClick} m={[5, 5, 0, 0]}>See my work</Button>
                </Box>
                <Box>
                  <Text textStyle='secondaryDescription' color='text' fontSize='1.25rem'>ICT engineering student & </Text>
                  <Text textStyle='secondaryDescription' color='text' fontSize='1.25rem'>front-end developer </Text>
                </Box>
              </Flex>
            </GridItem>
          </Parallax>
        </Grid>
      </Flex>
    </Box>
  )
}

export default LandingPage
