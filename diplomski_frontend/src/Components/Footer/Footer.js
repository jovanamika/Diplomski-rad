import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  Link,
  Icon,
  Image,
} from '@chakra-ui/react'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import logo from '../../Assets/Img/logo.png'

const Logo = () => {
  return (
    <Image height={10} viewBox="0 0 100 28" src={logo} alt="logo" />
  )
}


export default function Footer() {
  return (
    <Box
      as="footer"
      bg={'transparent'}
      color={useColorModeValue('gray.700', 'gray.200')}
      bottom={0}
      mt='auto'>
     {/*<Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        spacing={4}
        justify={'center'}
        align={'center'}>
        <Logo />
        <Stack direction={'row'} spacing={6}>
          <Box as="a" href={'#'}>
            Početna
          </Box>
          <Box as="a" href={'/news'}>
            Novosti
          </Box>
          <Box as="a" href={'/seminars'}>
            Seminari
          </Box>
          <Box as="a" href={'/login'}>
            Prijava
          </Box>
        </Stack>
      </Container>*/}

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Text>© 2023 Copyright Jovana Mika. All rights reserved</Text>
          <Stack direction={'row'} spacing={6}>
            <Link href='https://www.facebook.com/pmf.unibl.org/'>
              <Icon as={FaFacebook} boxSize={6} color="black" mr={3} />
            </Link>
            <Link href='https://www.instagram.com/pmfbl/'>
              <Icon as={FaInstagram} boxSize={6} color="black" mr={3} />
            </Link>
            <Link href='https://twitter.com/PMFBL'>
              <Icon as={FaTwitter} boxSize={6} color="black" mr={3} />
            </Link>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}