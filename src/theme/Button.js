import { defineStyleConfig } from '@chakra-ui/react'

export const Button = defineStyleConfig({
  // The styles all button have in common
  baseStyle: {
    fontFamily: 'Syne, sans-serif',
    fontWeight: '500',
    textTransform: 'uppercase',
    borderRadius: 'full'
  },

  // Button variants
  variants: {
    outline: {
      border: '1px solid',
      borderColor: 'primary',
      color: 'primary',
      fontSize: '1.25rem',
      _hover: {
        backgroundColor: 'primary',
        color: 'contrastText',
        textDecor: 'none'
      }
    },
    solid: {
      bg: 'primary'
    },
    ghost: {
      color: 'text'
    },
    link: {
      color: 'primary',
      fontFamily: 'Inter, sans-serif',
      fontSize: '1rem',
      textDecoration: 'underline'
    },
    accent: {
      border: '1px solid',
      borderColor: 'secondary',
      color: 'text',
      fontFamily: 'Syne, sans-serif',
      size: 'lg',
      _hover: {
        backgroundColor: 'primary',
        borderColor: 'primary',
        color: 'white'
      }
    }
  },
  // The default size and variant values
  defaultProps: {
    size: 'md',
    variant: 'solid'
  }
})
