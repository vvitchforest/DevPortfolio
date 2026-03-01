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
  useDisclosure
} from '@chakra-ui/react'
import { MoonIcon, SunIcon, HamburgerIcon } from '@chakra-ui/icons'
import NavLink from '../components/NavLink'

const Navigation = () => {
  const { toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const navLinks = [
    { navLinkId: 'projects', scrollToId: 'works-container' },
    { navLinkId: 'about', scrollToId: 'about-container' },
    { navLinkId: 'contact', scrollToId: 'contact-container' }
  ]

  const navBg = useColorModeValue('rgba(255,255,255,0.55)', 'rgba(0,0,5,0.55)')
  const navBorderColor = useColorModeValue('blackAlpha.200', 'whiteAlpha.200')

  const drawerStyles = {
    backgroundColor: useColorModeValue('rgba(255,255,255,0.85)', 'rgba(0,0,5,0.85)'),
    backdropFilter: 'saturate(180%) blur(30px)',
    WebkitBackdropFilter: 'saturate(180%) blur(30px)'
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      <Box
        as="nav"
        position="fixed"
        top={{ base: '8px', md: '12px' }}
        left={0}
        right={0}
        px={{ base: 3, md: 5 }}
        zIndex={100}
        bg="transparent"
        pointerEvents="none"
      >
        <Container
          maxWidth={{ base: '100%', xl: '85%' }}
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
          bg={navBg}
          sx={{
            backdropFilter: 'saturate(180%) blur(20px)',
            WebkitBackdropFilter: 'saturate(180%) blur(20px)',
          }}
          borderRadius="full"
          border="1px solid"
          borderColor={navBorderColor}
          px={5}
          pointerEvents="auto"
        >
          <Button
            onClick={scrollToTop}
            variant="ghost"
            color="text"
            textTransform="lowercase"
            fontFamily="Syne Tactile, cursive"
            fontWeight="500"
            fontSize="1.5rem"
            my={2}
            mr="auto"
            _hover={{ color: 'primary', bg: 'transparent' }}
            _active={{ bg: 'transparent' }}
          >
            I. (portfolio)
          </Button>
          <Stack
            direction="row"
            display={['none', 'none', 'flex', 'flex']}
            width="auto"
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
            icon={useColorModeValue(
              <MoonIcon fontSize="1.5rem" />,
              <SunIcon fontSize="1.5rem" />
            )}
            variant="ghost"
            color="text"
            my={2}
          />
          <IconButton
            aria-label="Open menu"
            variant="ghost"
            icon={<HamburgerIcon fontSize="1.5rem" />}
            display={['flex', 'flex', 'none', 'none']}
            onClick={onOpen}
            my={2}
            ml={3}
          />
        </Container>
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="top"
        onClose={onClose}
        isFullHeight={true}
        blockScrollOnMount={false}
      >
        <DrawerContent
          sx={drawerStyles}
          display={['flex', 'flex', 'none', 'none']}
        >
          <DrawerCloseButton fontSize="1.25rem" my={2} mx={3} />
          <DrawerBody
            display={['flex', 'flex', 'none', 'none']}
            justifyContent="center"
            alignItems="center"
          >
            <Stack
              direction="column"
              alignItems="center"
              justifyContent="center"
              width="auto"
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
