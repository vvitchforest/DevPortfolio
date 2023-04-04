import { useContext } from 'react'
import PropTypes from 'prop-types'
import { Box, Button, Link, useMediaQuery, useTheme, useColorModeValue } from '@chakra-ui/react'
import { NavContext } from '../context/NavContext'

const NavLink = ({ navLinkId, scrollToId, closeDrawer }) => {
  const { activeNavLinkId, setActiveNavLinkId } = useContext(NavContext)
  const [isSmallerThanMedium] = useMediaQuery('(max-width: 48em)')
  const theme = useTheme()

  const handleClick = () => {
    if (window !== undefined) {
      setActiveNavLinkId(navLinkId)
    }
    const section = document.getElementById(scrollToId)
    const offset = 80
    const sectionPosition = section.getBoundingClientRect().top
    const offsetPosition = sectionPosition + window.pageYOffset - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })

    isSmallerThanMedium &&
      setTimeout(() => {
        closeDrawer()
      }, '700')
  }

  const linkStyle = activeNavLinkId === navLinkId
    ? {
      color: theme.colors.purple[400],
      fontStyle: 'italic',
      fontWeight:'600'
    } : {
      color: ''
    }

  const linkHoverStyle = isSmallerThanMedium
    ? {
      bg: 'transparent',
      textDecoration: 'none'
    } : {
      bg: useColorModeValue(theme.colors.gray[100], theme.colors.whiteAlpha[200]),
      textDecoration: 'none'
    }

  return (
    <Box>
      <Button
        as={Link}
        id={navLinkId}
        variant='ghost'
        my={5}
        w='100%'
        fontSize={['3rem', '3rem', '1.25rem', '1.25rem']}
        style={linkStyle}
        onClick={handleClick}
        _hover={linkHoverStyle}
        _active={{ bg: 'transparent' }}
      >
        {navLinkId}
      </Button>
    </Box>
  )
}

NavLink.propTypes = {
  navLinkId: PropTypes.string.isRequired,
  scrollToId: PropTypes.string.isRequired,
  closeDrawer: PropTypes.func
}

export default NavLink
