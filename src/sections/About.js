import { Box, Text, Stack, Tag, SimpleGrid } from '@chakra-ui/react'
import { useNav } from '../hooks/useNav'
import Section from '../components/Section'
import data from '../data/AboutMe'

const About = () => {
  const aboutRef = useNav('about')

  const text = data.description
    .split('/')
    .map((paragraph, index) => (
      <Text key={index} textStyle='paragraph'>
        {paragraph} <br></br>
      </Text>
    ))

  return (
    <Box id="about-container" ref={aboutRef}>
      <Section heading='About me' minHeight='90vh'>
        <Stack my={3} w={{ base: '100%', lg: '60%' }}>
          {text}
          <Text textStyle='description' pt={5} pb={1}>
            {'Some technologies I\'ve worked with:'}
          </Text>
        </Stack>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 5, lg: 10 }} w={{ base: '100%', lg: '60%' }}>
          {data.skills.map((skill, index) =>
            <Box key={index}>
              <Text textStyle='secondaryDescription' mb={2}>{skill.title}</Text>
              {skill.technologies.map((technology, index) =>
                <Tag key={index} borderRadius='full' size='lg' m={1}>{technology}</Tag>
              )}
            </Box>
          )}
        </SimpleGrid>
      </Section>
    </Box>
  )
}

export default About
