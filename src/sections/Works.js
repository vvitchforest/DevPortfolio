import { Box, SimpleGrid, Divider, Text } from '@chakra-ui/react'
import { useNav } from '../hooks/useNav'
import Projects from '../data/Projects'
import Section from '../components/Section'
import ProjectCard from '../components/ProjectCard'

const recentProjects = Projects.filter(p => p.category === 'recent')
const courseworkProjects = Projects.filter(p => p.category === 'coursework')

const Works = () => {
  const worksRef = useNav('projects')
  return (
    <Box id='works-container' ref={worksRef}>
      <Section heading='Recent Projects' minHeight='100vh'>
        <SimpleGrid columns={1} spacing={5}>
          {recentProjects.map((project, index) => (
            <Box key={project.name}>
              <ProjectCard project={project} index={index} />
              <Divider width='100%' mx='auto' />
            </Box>
          ))}
        </SimpleGrid>

        <Text textStyle='h1' mt={[10, 14]} mb={5} px={1}>
          Older Projects
        </Text>
        <Divider mb={5} />

        <SimpleGrid columns={1} spacing={5}>
          {courseworkProjects.map((project, index) => (
            <Box key={project.name}>
              <ProjectCard project={project} index={index} />
              {index !== courseworkProjects.length - 1 && (
                <Divider width='100%' mx='auto' />
              )}
            </Box>
          ))}
        </SimpleGrid>
      </Section>
    </Box>
  )
}

export default Works
