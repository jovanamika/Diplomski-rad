import { Stack, Flex, Button, Text, VStack, useBreakpointValue } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import {
  Heading,
  Image
} from '@chakra-ui/react'

export default function HeaderImage() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/seminars");
  }

  return (
    <Stack minH={'50vh'} direction={{ base: 'column', md: 'row' }} mt={55}>
    <Flex
      w={'full'}
      h={'60vh'}
      backgroundImage={
        'url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack maxW={'2xl'} spacing={6} align='center' justify='center'>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}
            fontFamily={'moonspace'}>
            Prijavi se na seminar
          </Text>
          <Stack direction={'row'} align='center' justify='center'>
            <Button
              marginTop={'30px'}
              bg={'blue.400'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'blue.500' }}
              onClick={handleClick}
              fontFamily={'moonspace'}
              fontStyle={'bold'}
              fontSize={'18'}
              height={'50px'}>
              Pregled aktuelnih seminara
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
    </Stack>

    /* <Stack minH={'50vh'} direction={{ base: 'column', md: 'row' }} mt={55}>
      <Flex flex={1} align={'center'} justify={'center'}>
                    <Image
                        alt={'Login Image'}
                        objectFit={'cover'}
                        src={
                            'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                        }
                    />
            </Flex>
            <Flex p={8} flex={1} align={'center'} justify={'center'}>
                <Stack spacing={6} w={'full'} maxW={'lg'}>
                    <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                        <Text
                            as={'span'}
                            position={'relative'}
                        >
                           Prijavi se na
                        </Text>
                        <br />{' '}
                        <Text as={'span'}>
                            seminar
                        </Text>{' '}
                    </Heading>
                    <Stack direction={{ base: 'column', md: 'row' }} spacing={4} align='center' justify='center'>
                        <Button
                            rounded={'full'}
                            bg={'#011526'}
                            color={'white'}
                            _hover={{
                                bg: 'blue.500',
                            }}
                            width={'200px'}
                            onClick={handleClick}>
                            Vidi sve seminare
                        </Button>
                    </Stack>
                </Stack>
            </Flex>
        </Stack>*/
  )
}