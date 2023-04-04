import { Box, Flex, Button, Link, useToast } from '@chakra-ui/react'
import { useNav } from '../hooks/useNav'
import Section from '../components/Section'
import Footer from '../components/Footer'
import data from '../data/AboutMe'

const Contact = () => {
  const contactRef = useNav('contact')
  const toast = useToast()
  const email = data.email

  const handleClick = () => {
    navigator.clipboard.writeText(email)
    toast({
      position: 'bottom',
      render: () => (
        <Box color='white' bg='primary' m={1} p={5} borderRadius='0.5rem' textAlign='center'>
          {email} saved to clipboard
        </Box>
      )
    })
  }
  return (
    <Box id='contact-container' ref={contactRef}>
      <Section heading='Contact' minHeight='90vh'>
        <Flex flexDirection='column' justifyContent='center' alignItems='center' px={4} h='50vh'>
          <Button
            variant="accent"
            mx={4}
            color='text'
            onClick={handleClick}
            height={['2.5rem', '4rem']}
            fontSize={['1.75rem', '3rem']}
          >
            Send me an email
          </Button>
          <Button
            as={Link}
            href={data.github}
            isExternal
            variant="link"
            size='lg'
            fontFamily='Playfair Display, serif'
            fontSize='1.5rem'
            mx={4}
            my={5}>
            or find me on Github
          </Button>
        </Flex>
        <Footer />
      </Section>
    </Box>
  )
}

export default Contact
