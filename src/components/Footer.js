import { Flex, Text, Button, Stack, Link, useColorModeValue } from '@chakra-ui/react'
import { AiOutlineCopyright, AiOutlineGithub } from 'react-icons/ai'
import { SlArrowUp } from 'react-icons/sl'
import data from '../data/AboutMe'

const Footer = () => {
  const containerStyles = {
    width: '100%',
    height: '20vh',
    position: 'absolute',
    bottom: 0,
    left: 0,
    flexDirection: ['column-reverse', 'column-reverse', 'row', 'row'],
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5rem',
    paddingBottom: 5,
    borderTop: '1px solid',
    borderColor: useColorModeValue('blackAlpha.100', 'whiteAlpha.100')
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <Flex sx={containerStyles}>
      <Stack>
        <Flex align='center' color='secondary'>
          <AiOutlineCopyright fontSize='1.25rem'/>
          <Text textStyle='paragraph' fontSize='1rem' ml={2}> 2023. Created by yours truly.</Text>
        </Flex>
        <Flex align='center' color='secondary'>
          <AiOutlineGithub fontSize='1.25rem'/>
          <Button
            as={Link}
            href={data.sourcecode}
            isExternal
            variant='link'
            color='secondary'
            ml={2}
          >
            Source
          </Button>
        </Flex>
      </Stack>
      <Button
        variant='ghost'
        color='text'
        onClick={scrollToTop}
        position={['static', 'static', 'absolute', 'absolute']}
        top='40%'
        right='5%'
        my={[5, 5, 0, 0]}
      >
        <SlArrowUp />
        <Text ml={2}>Back to top</Text>
      </Button>
    </Flex>
  )
}

export default Footer