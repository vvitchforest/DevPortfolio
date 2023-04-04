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
  Flex,
  Link,
  AspectRatio
} from '@chakra-ui/react'
import { BsArrowRight } from 'react-icons/bs'

const ProjectCard = ({
  media,
  title,
  shortDesc,
  source,
  link,
  description,
  technologies,
  index
}) => {

  let mediaContent

  const descriptionParagraphs = description
    .split('/')
    .map((paragraph, index) => (
      <Text key={index} textStyle='paragraph'>
        {paragraph} <br></br>
      </Text>
    ))

  const cardStyles = {
    overflow: 'hidden',
    maxWidth: '100%',
    mx:'auto',
    my: { base: 0, lg: 3 },
    py: 3,
    boxShadow:'none',
    bg:'background',
    borderRadius: '0'
  }

  if (media.type === 'image') {
    mediaContent = (
      <Box
        w={{ base: '100%', lg: '40%' }}
        minH={['250px', '300px', '400px', 'auto']}
        h={title.includes('My Restaurant') ? ['600px', '450px'] : 'auto'}
        bgImage={{
          base: `url('${media.content.full}')`,
          lg: `url(${media.content.small})`,
          xl: `url('${media.content.wide}')` }}
        bgSize={title.includes('My Restaurant') ? 'contain' : 'cover'}
        bgPosition={!title.includes('Mediaday') && 'center'}
        bgRepeat='no-repeat'
        boxSizing='border-box'
      ></Box>
    )
  } else if (media.type === 'video') {
    mediaContent = (
      <Flex w={{ base: '100%', lg: '50%' }} justify="center">
        <AspectRatio
          w={{ base: '100%', lg: '560px' }}
          ratio={1}
          title="VR Nature Museum"
        >
          <iframe src={media.content} allowFullScreen />
        </AspectRatio>
      </Flex>
    )
  }

  return (
    <Card
      variant='filled'
      direction={{
        base: 'column',
        lg: index % 2 === 0 ? 'row' : 'row-reverse'
      }}
      sx={cardStyles}
    >
      <CardHeader display={['block', 'block', 'block', 'none']} pl={1} pt={0}>
        <Text textStyle='h2' pb={1}>
          {title}
        </Text>
        <Text textStyle='secondaryDescription'>
          {shortDesc}
        </Text>
      </CardHeader>
      {mediaContent}
      <Stack w={{ base: '100%', lg: '60%' }} >
        <CardHeader display={['none', 'none', 'none', 'block']} py={0} pl={{ base: 1, lg: index % 2 === 0 ? 5 : 0 }}>
          <Text textStyle='h2'>
            {title}
          </Text>
          <Text textStyle='secondaryDescription'>
            {shortDesc}
          </Text>
        </CardHeader>
        <CardBody pl={{ base: 1, lg: index % 2 === 0 ? 5 : 0 }} pt={3}>
          <Stack>
            {descriptionParagraphs}
            {!title.includes('VR Nature Museum') && (
              <Button
                as={Link}
                href={source}
                isExternal
                variant='link'
                alignSelf='flex-start'
                fontSize='1.125rem'
                pt={3}
              >
                Source code
              </Button>
            )}
          </Stack>
          {!title.includes('VR Nature Museum') && (
            <Button
              as={Link}
              href={link}
              isExternal
              variant='outline'
              my={5}
            >
              <Text mr={2}>Visit website</Text>
              <BsArrowRight size="25px" />
            </Button>
          )}
        </CardBody>
        <CardFooter pb={0} pl={{ base: 1, lg: index % 2 === 0 ? 5 : 0 }}>
          <Stack direction='row'>
            {technologies.map((item, index) => (
              <Tag key={index} size='lg' borderRadius='full' fontSize='1rem'>
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
  media: PropTypes.object,
  title: PropTypes.string,
  date: PropTypes.string,
  source: PropTypes.string,
  link: PropTypes.string,
  description: PropTypes.string,
  technologies: PropTypes.array,
  index: PropTypes.number
}

export default ProjectCard
