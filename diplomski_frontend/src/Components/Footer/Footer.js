import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  Icon,
} from '@chakra-ui/react'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {

  return (
    <Box
      bg={'var(--footer-bg-color)'}
      bottom={0}
      mt='auto'
      height={'100px'}

    >
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
        alignContent={'center'}
        alignItems='center'     // Vertically center align items
        display='flex'
        height={'100%'}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Text color={'white'}>© 2023 Copyright Jovana Mika. All rights reserved</Text>
          <Stack direction={'row'} spacing={6}>
            <Link href='https://www.facebook.com/pmf.unibl.org/'>
              <Icon as={FaFacebook} boxSize={6} color="white" mr={3} />
            </Link>
            <Link href='https://www.instagram.com/pmfbl/'>
              <Icon as={FaInstagram} boxSize={6} color="white" mr={3} />
            </Link>
            <Link href='https://twitter.com/PMFBL'>
              <Icon as={FaTwitter} boxSize={6} color="white" mr={3} />
            </Link>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}