import React, { useEffect } from 'react'
import {
  useColorMode,
  Container,
  Box,
  IconButton,
  Button,
  Stack,
  useColorModeValue,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon, HamburgerIcon } from '@chakra-ui/icons'
import { useState } from 'react'
import NavLink from '../components/NavLink'

const Navigation = () => {
  const { toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [position, setPosition] = useState({ position: 'relative' })

  const navLinks = [
    { navLinkId: 'projects', scrollToId: 'works-container' },
    { navLinkId: 'about', scrollToId: 'about-container' },
    { navLinkId: 'contact', scrollToId: 'contact-container' }
  ]

  const navbarStyles = {
    width: '100%',
    backgroundColor: useColorModeValue('whiteAlpha.100', 'blackAlpha.100'),
    backdropFilter: 'saturate(180%) blur(20px)',
    zIndex: 10,
    borderBottom: '1px solid',
    borderColor: useColorModeValue('blackAlpha.200', 'whiteAlpha.200')
  }

  const navbarScrollStyle = {
    position: '-webkit-sticky',
    // eslint-disable-next-line no-dupe-keys
    position: 'sticky',
    top: '0',
    animation: 'slide-in 500ms',
  }

  const drawerStyles = {
    backgroundColor: useColorModeValue('whiteAlpha.700', 'blackAlpha.700'),
    backdropFilter: 'saturate(180%) blur(30px)',
  }

  useEffect(() => {
    window.addEventListener('scroll', navbarFixedTop)
    return () => {
      window.removeEventListener('scroll', navbarFixedTop)
    }
  }, [scroll])

  const navbarFixedTop = () => {
    const windowHeight = window.scrollY
    if (window !== undefined) {
      windowHeight > 50 ? setPosition(navbarScrollStyle) : setPosition({ position: 'relative' })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      <Box as='nav' sx={navbarStyles} style={position} >
        <Container
          maxWidth={{ base: '100%', xl: '90%' }}
          display='flex'
          justifyContent='flex-end'
          alignItems='center'
        >
          <Button
            onClick={scrollToTop}
            variant='ghost'
            color='text'
            fontFamily='Playfair Display, serif'
            fontWeight='bold'
            fontSize='2rem'
            my={2}
            mr='auto'
            zIndex={99}
            _hover={{ color: 'primary', bg: 'transparent' }}
            _active={{ bg: 'transparent' }}
          >
            I.
          </Button>
          <Stack
            direction='row'
            display={['none', 'none', 'flex', 'flex']}
            width='auto'
            mr={5}
          >
            {navLinks.map((navLinks) => (
              <NavLink
                key={navLinks.navLinkId}
                navLinkId={navLinks.navLinkId}
                scrollToId={navLinks.scrollToId}
              />
            ))}
          </Stack>
          <IconButton
            onClick={toggleColorMode}
            aria-label={useColorModeValue('set dark mode', 'set light mode')}
            icon={useColorModeValue(<MoonIcon fontSize='1.25rem'/>, <SunIcon fontSize='1.25rem'/>)}
            variant='ghost'
            color='text'
            my={2}
          />
          <IconButton
            aria-label="Open menu"
            variant='ghost'
            icon={<HamburgerIcon fontSize='1.5rem'/>}
            display={['flex', 'flex', 'none', 'none']}
            onClick={onOpen}
            my={2}
            ml={3}
          />
        </Container>
      </Box>
      <Drawer
        isOpen={isOpen}
        placement='top'
        onClose={onClose}
        isFullHeight={true}
        blockScrollOnMount={false}
      >
        <DrawerContent sx={drawerStyles} display={['flex', 'flex', 'none', 'none']}>
          <DrawerCloseButton fontSize='1.25rem' my={2} mx={3}/>
          <DrawerBody display={['flex', 'flex', 'none', 'none']} justifyContent='center' alignItems='center'>
            <Stack
              direction='column'
              alignItems='center'
              justifyContent="center"
              width='auto'
              mr={5}
            >
              {navLinks.map((navLinks) => (
                <NavLink
                  key={navLinks.navLinkId}
                  navLinkId={navLinks.navLinkId}
                  scrollToId={navLinks.scrollToId}
                  closeDrawer={onClose}
                />
              ))}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Navigation
