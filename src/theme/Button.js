import { defineStyleConfig } from '@chakra-ui/react'

export const Button = defineStyleConfig({
  // The styles all button have in common
  baseStyle: {
    fontFamily: 'Fira Sans, sans-serif',
    fontWeight: '400',
    letterSpacing: 'wide',
    textTransform: 'uppercase',
    borderRadius: 'full',
    _hover: { textDecoration: 'none' },
  },

  // Button variants
  variants: {
    outline: {
      border: '1px solid',
      borderColor: 'secondary',
      color: 'text',
      fontSize: '1.25rem',
      _hover: { backgroundColor: 'primary', borderColor: 'primary', color: 'white' }
    },
    solid: {
      bg: 'primary',
    },
    ghost: {
      color: 'text',
    },
    link: {
      color: 'primary',
      letterSpacing: 'wide'
    },
    accent: {
      border: '1px solid',
      borderColor: 'secondary',
      color: 'text',
      fontSize: ['1.75rem', '2rem'],
      fontFamily: 'Playfair Display, serif',
      size: 'lg',
      _hover: { backgroundColor: 'primary', borderColor: 'primary', color: 'white' }
    },
  },
  // The default size and variant values
  defaultProps: {
    size: 'md',
    variant: 'solid',
  },
})