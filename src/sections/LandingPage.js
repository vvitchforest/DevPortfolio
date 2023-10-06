import { Box, Flex, Text, Grid, GridItem, Button } from '@chakra-ui/react'
import { useNav } from '../hooks/useNav'
import { useInView } from 'framer-motion'
import { BsArrowDown } from 'react-icons/bs'

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

  return (
    <Box id="landing-page-container" ref={homeRef} w="100%" h="95vh">
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
              (2023)
            </Text>
          </GridItem>
          <GridItem
            colSpan={2}
            mt="6rem"
            style={{
              opacity: isInView ? 1 : 0,
              transition: 'all 1.3s cubic-bezier(0.17, 0.55, 0.55, 1) 1s'
            }}
          >
            <Flex
              flexDirection={{ base: 'column-reverse', md: 'row' }}
              justifyContent="space-between"
            >
              <Button
                variant="ghost"
                size="lg"
                onClick={handleClick}
                my={[5, 5, 0, 0]}
                alignSelf="flex-start"
                pl={{ base: 0, md: 3 }}
              >
                <BsArrowDown fontSize="2rem" />
                <Text
                  fontFamily="Syne Tactile, cursive"
                  textTransform="lowercase"
                  fontSize="2rem"
                >
                  (see my work)
                </Text>
              </Button>
              <Box>
                <Text textStyle="subtitle2" color="text">
                  media engineering student &
                </Text>
                <Text textStyle="subtitle2" color="text">
                  front-end developer
                </Text>
              </Box>
            </Flex>
          </GridItem>
        </Grid>
      </Flex>
    </Box>
  )
}

export default LandingPage
