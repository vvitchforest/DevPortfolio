import { extendTheme } from '@chakra-ui/react'
import { Button } from './Button'
// import { mode } from '@chakra-ui/theme-tools'

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false
}

const designTokens = {
  semanticTokens: {
    colors: {
      primary: {
        default: 'purple.600',
        _dark: 'purple.300'
      },
      secondary: {
        default: 'gray.600',
        _dark: 'gray.500'
      },
      background: {
        default: 'purple.50',
        _dark: '#000005'
      },
      error: 'red.500',
      success: 'green.500',
      text: {
        default: 'gray.900',
        _dark: 'gray.100'
      },
      contrastText: {
        default: '#fff',
        _dark: '#000'
      }
    }
  }
}

const typography = {
  textStyles: {
    display: {
      fontFamily: 'Syne, sans-serif',
      fontSize: ['2.5rem', '3rem', '4rem', '5rem', '6rem'],
      fontWeight: '800',
      lineHeight: '100%'
    },
    h1: {
      fontFamily: 'Syne, sans-serif',
      fontSize: ['1.5rem', '1.5rem', '2rem', '2rem'],
      fontWeight: '600',
      textTransform: 'uppercase'
    },
    h2: {
      fontFamily: 'Syne, sans-serif',
      fontSize: ['2rem', '3rem', '4rem', '3rem', '4rem'],
      fontWeight: '500'
    },
    subtitle1: {
      fontFamily: 'Syne, sans-serif',
      fontSize: ['1.75rem', '2rem'],
      fontWeight: '500'
    },
    subtitle2: {
      fontFamily: 'Inter, sans-serif',
      fontSize: ['1rem', '1.25rem'],
      fontWeight: '400',
      textTransform: 'uppercase',
      color: 'secondary'
    },
    paragraph1: {
      fontFamily: 'Inter, sans-serif',
      fontWeight: '400',
      fontSize: ['1rem', '1.25rem']
    },
    paragraph2: {
      fontFamily: 'Syne, sans-serif',
      fontWeight: '400',
      fontSize: ['1.5rem', '1.75rem']
    },
    brand: {
      fontFamily: 'Syne Tactile, cursive'
      // fontSize: ['1rem', '2rem'],
    },
    buttonText: {
      fontFamily: 'Syne, sans-serif',
      fontWeight: '500',
      fontSize: '1.25rem'
    }
  }
}

const breakpoints = {
  sm: '30em', // 480px
  md: '48em', // 768px
  lg: '62em', // 992px
  xl: '85em', // 1280px
  '2xl': '96em', // 1536px,
  '3xl': '110em'
}

const styles = {
  styles: {
    global: {
      body: {
        color: 'text',
        bg: 'background',
        fontFamily: 'Inter, sans-serif'
      }
    }
  }
}

const components = {
  components: {
    Button
  }
}

const theme = extendTheme(
  designTokens,
  typography,
  { breakpoints },
  styles,
  components,
  config
)
console.log(theme)

export default theme
