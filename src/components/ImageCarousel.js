import { useState, useCallback, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Box, Image, IconButton, HStack } from '@chakra-ui/react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

const INTERVAL = 5000

const ImageCarousel = ({ images, alt }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [resetKey, setResetKey] = useState(0)
  const resetTimer = useCallback(() => setResetKey(k => k + 1), [])

  const next = useCallback(() => {
    setCurrentIndex(i => (i === images.length - 1 ? 0 : i + 1))
  }, [images.length])

  const prev = useCallback(() => {
    setCurrentIndex(i => (i === 0 ? images.length - 1 : i - 1))
    resetTimer()
  }, [images.length, resetTimer])

  const manualNext = useCallback(() => {
    next()
    resetTimer()
  }, [next, resetTimer])

  const goToIndex = useCallback(i => {
    setCurrentIndex(i)
    resetTimer()
  }, [resetTimer])

  useEffect(() => {
    if (paused) return
    const timer = setInterval(next, INTERVAL)
    return () => clearInterval(timer)
  }, [paused, next, resetKey])

  const arrowStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    bg: 'blackAlpha.600',
    color: 'white',
    _hover: { bg: 'blackAlpha.800' },
    variant: 'unstyled',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    w: 9,
    h: 9,
    minW: 9,
    borderRadius: 'full',
    zIndex: 2,
    fontSize: 'lg'
  }

  return (
    <Box
      position="relative"
      w="100%"
      h="100%"
      overflow="hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {images.map((src, i) => (
        <Image
          key={i}
          src={src}
          alt={`${alt} - ${i + 1} of ${images.length}`}
          position="absolute"
          top={0}
          left={0}
          w="100%"
          h="100%"
          objectFit="contain"
          opacity={i === currentIndex ? 1 : 0}
          transition="opacity 0.4s ease-in-out"
          pointerEvents={i === currentIndex ? 'auto' : 'none'}
        />
      ))}

      <IconButton
        aria-label="Previous image"
        icon={<BsChevronLeft />}
        onClick={prev}
        left={2}
        {...arrowStyles}
      />

      <IconButton
        aria-label="Next image"
        icon={<BsChevronRight />}
        onClick={manualNext}
        right={2}
        {...arrowStyles}
      />

      <HStack
        position="absolute"
        bottom={3}
        left="50%"
        transform="translateX(-50%)"
        spacing={2}
        zIndex={2}
      >
        {images.map((_, i) => (
          <Box
            key={i}
            as="button"
            w="8px"
            h="8px"
            borderRadius="full"
            bg={i === currentIndex ? 'purple.300' : 'whiteAlpha.500'}
            onClick={() => goToIndex(i)}
            transition="background 0.3s ease"
            aria-label={`Go to image ${i + 1}`}
            _hover={{ bg: i === currentIndex ? 'purple.300' : 'whiteAlpha.700' }}
          />
        ))}
      </HStack>
    </Box>
  )
}

ImageCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  alt: PropTypes.string.isRequired
}

export default ImageCarousel
