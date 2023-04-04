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
        default: 'purple.500',
        _dark: 'purple.400'
      },
      secondary: {
        default: 'gray.600',
        _dark: 'gray.400'
      },
      background: {
        default: 'gray.50',
        _dark: '#1A1A1A'
      },
      error: 'red.500',
      success: 'green.500',
      text: {
        default: 'gray.900',
        _dark: 'gray.100'
      }
    }
  }
}

const typography = {
  textStyles: {
    mainHeader: {
      fontFamily: 'Playfair Display, serif',
      fontSize: ['3rem', '4.5rem', '6rem', '6rem', '8rem'],
      fontWeight: '500',
      lineHeight: '100%',
      textTransform: 'uppercase'
    },
    h1: {
      fontFamily: 'Fira Sans, sans-serif',
      fontSize: [ '2rem', '2rem', '3rem', '3rem' ],
      fontWeight: '600',
      textTransform: 'uppercase'
    },
    h2: {
      fontFamily: 'Playfair Display, serif',
      fontSize: [ '1.75rem', '1.75rem', '2.5rem', '2rem' ],
      fontWeight: '600',
      textTransform: 'uppercase'
    },
    description: {
      fontFamily: 'Fira Sans, sans-serif',
      fontSize: [ '1.25rem', '1.25rem', '1.5rem', '1.5rem'],
      fontWeight: '400',
      color: 'secondary'
    },
    secondaryDescription: {
      fontFamily: 'Fira Sans, sans-serif',
      fontSize:['1rem', '1rem', '1.125rem', '1.125rem'],
      fontWeight: '400',
      textTransform: 'uppercase',
      color:'secondary'
    },
    paragraph: {
      fontFamily: 'Fira Sans, sans-serif',
      fontSize: { base: '1rem', '3xl': '1.25rem' },
      fontWeight: '400'
    }
  }
}

const breakpoints = {
  sm: '30em', // 480px
  md: '48em', // 768px
  lg: '62em', // 992px
  xl: '80em', // 1280px
  '2xl': '96em', // 1536px,
  '3xl': '110em'
}

const styles = {
  styles: {
    global: {
      body: {
        color: 'text',
        bg: 'background',
        fontFamily: 'Fira sans, sans-serif'
      }
    }
  }
}

const components = {
  components: {
    Button
  }
}

const theme = extendTheme(designTokens, typography,{ breakpoints }, styles, components, config)
console.log(theme)

export default theme
