import { useRef } from 'react'
import PropTypes from 'prop-types'
import { Flex, Text, Divider } from '@chakra-ui/react'
import { useInView } from 'framer-motion'

const Section = ({ heading, minHeight, children }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <Flex
      ref={ref}
      w="100%"
      minH={minHeight}
      direction="column"
      align="center"
      justify="flex-start"
      mb={['2rem', '2rem', '6rem', '6rem']}
      px={{ base: 1, lg: 3 }}
    >
      <Flex
        w={{ base: '100%', xl: '90%' }}
        h="inherit"
        direction="column"
        px={[2, 2, 5, 5]}
      >
        <Divider mb={5} />
        <Text
          textStyle="h1"
          px={1}
          style={{
            transform: isInView ? 'none' : 'translateX(-200px)',
            opacity: isInView ? 1 : 0,
            transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s'
          }}
        >
          {heading}
        </Text>
        <Divider mt={5} mb={{ base: 1, lg: 5 }} />
        {children}
      </Flex>
    </Flex>
  )
}

Section.propTypes = {
  heading: PropTypes.string.isRequired,
  minHeight: PropTypes.string,
  children: PropTypes.any.isRequired
}

export default Section
