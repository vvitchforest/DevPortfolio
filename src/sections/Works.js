import { Box, SimpleGrid, Divider } from '@chakra-ui/react'
import { useNav } from '../hooks/useNav'
import Projects from '../data/Projects'
import Section from '../components/Section'
import ProjectCard from '../components/ProjectCard'

const Works = () => {
  const worksRef = useNav('projects')
  return (
    <Box id='works-container' ref={worksRef}>
      <Section heading='Selected Projects' minHeight='100vh'>
        <SimpleGrid columns={1} spacing={5}>
          {Projects.map((project, index) => (
            <Box key={project.name}>
              <ProjectCard
                project={project}
                index={index}
              />
              {index !== Projects.length -1 &&
              <Divider width='100%' mx='auto'/>
              }
            </Box>
          ))}
        </SimpleGrid>
      </Section>
    </Box>
  )
}

export default Works
