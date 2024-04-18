import PropTypes from 'prop-types'
import {
  Card,
  CardHeader,
  Text,
  Stack,
  CardBody,
  CardFooter,
  Tag,
  Button,
  Box,
  Link,
  AspectRatio,
  VisuallyHidden,
  Image
} from '@chakra-ui/react'
import { BsArrowRight } from 'react-icons/bs'

const ProjectCard = ({ project, index }) => {
  let mediaContent

  const descriptionParagraphs = project.description
    .split('/')
    .map((paragraph, index) => (
      <Text key={index} textStyle="paragraph1">
        {paragraph} <br></br>
      </Text>
    ))

  const cardStyles = {
    my: { base: 0, lg: 3 },
    py: 5,
    boxShadow: 'none',
    bg: 'background',
    borderRadius: '0'
  }

  if (project.media.type === 'image') {
    mediaContent = (
      <Box
        w={{ base: '100%', lg: '50%' }}
        minH={
          project.name.includes('My Restaurant')
            ? ['600px', '450px']
            : ['250px', '300px', '400px', 'auto']
        }
        mt={5}
        bgImage={{
          base: `url('${project.media.content.full}')`,
          lg: `url('${project.media.content.wide}')`
        }}
        bgSize={{
          base: project.name.includes('My Restaurant') ? 'contain' : 'cover',
          lg: 'contain'
        }}
        bgPosition={{ base: 'center', lg: 'top' }}
        bgRepeat="no-repeat"
        boxSizing="border-box"
      >
        <VisuallyHidden>
          {' '}
          <Image alt={project.media.alt} src={project.media.content.full} />
        </VisuallyHidden>
      </Box>
    )
  } else if (project.media.type === 'video') {
    mediaContent = (
      <AspectRatio
        w={{ base: '100%', lg: '50%' }}
        maxW="560px"
        ratio={1}
        title="VR Nature Museum"
        mx="auto"
      >
        <iframe src={project.media.content} allowFullScreen />
      </AspectRatio>
    )
  }

  return (
    <Card
      variant="filled"
      overflow="hidden"
      direction={{
        base: 'column-reverse',
        lg: index % 2 === 0 ? 'row' : 'row-reverse'
      }}
      sx={cardStyles}
    >
      {mediaContent}
      <Stack
        w={{ base: '100%', lg: '50%' }}
        pr={{ base: 1, lg: index % 2 === 0 ? 0 : 5 }}
        pl={{ base: 1, lg: index % 2 === 0 ? 5 : 0 }}
      >
        <CardHeader p={0} my={0}>
          <Text
            textStyle="h2"
            _before={{
              content: `'0${index + 1} '`,
              fontFamily: 'Syne Tactile, cursive',
              fontSize: ['1.5rem', '2rem', '2.5rem', '3rem']
            }}
          >
            {project.name}
          </Text>
          <Text textStyle="subtitle2" mt={[0, -2]} mb={3}>
            {project.shortDesc}
          </Text>
        </CardHeader>
        <CardBody p={0}>
          <Stack>{descriptionParagraphs}</Stack>
          {!project.name.includes('Nature Museum') && (
            <Stack>
              <Button
                as={Link}
                href={project.source}
                isExternal
                variant="link"
                alignSelf="flex-start"
                my={5}
                size="lg"
              >
                Source code
              </Button>
              <Button
                leftIcon={<BsArrowRight />}
                as={Link}
                href={project.link}
                isExternal
                variant="outline"
                alignSelf="flex-start"
                mt={5}
                size="lg"
              >
                Visit website
              </Button>
            </Stack>
          )}
        </CardBody>
        <CardFooter px={0} py={5} my={5} display="flex" flexDir="column">
          <Text textStyle="subtitle2" mb={3}>
            Technologies
          </Text>
          <Stack direction="row">
            {project.technologies.map((item, index) => (
              <Tag
                key={index}
                size="md"
                borderRadius="full"
                textStyle="paragraph1"
                fontSize="1rem"
              >
                {item}
              </Tag>
            ))}
          </Stack>
        </CardFooter>
      </Stack>
    </Card>
  )
}

ProjectCard.propTypes = {
  project: PropTypes.object,
  index: PropTypes.number
}

export default ProjectCard
