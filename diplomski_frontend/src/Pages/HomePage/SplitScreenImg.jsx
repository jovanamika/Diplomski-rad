import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
} from '@chakra-ui/react'

import { useNavigate } from 'react-router-dom';

export default function SplitScreenImg() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/registration");
    }
    return (
        <Stack minH={'50vh'} direction={{ base: 'column', md: 'row' }} mt={30}>
            <Flex p={8} flex={1} align={'center'} justify={'center'}>
                <Stack spacing={6} w={'full'} maxW={'lg'}>
                    <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                        <Text
                            as={'span'}
                            position={'relative'}
                            fontFamily={'moonspace'}
                        >
                            Aplikacija za rukovođenje
                        </Text>
                        <br />{' '}
                        <Text color={'#081f62'} as={'span'} fontFamily={'moonspace'}>
                            naučnim seminarom
                        </Text>{' '}
                    </Heading>
                    <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'} fontFamily={'moonspace'}>
                        The project board is an exclusive resource for contract work. It&apos;s
                        perfect for freelancers, agencies, and moonlighters.
                    </Text>
                    <Stack direction={{ base: 'column', md: 'row' }} spacing={4} align='center' justify='center'>
                        <Button
                            rounded={'full'}
                            bg={'#011526'}
                            color={'white'}
                            _hover={{
                                bg: 'blue.500',
                            }}
                            width={'200px'}
                            onClick={handleClick}
                            fontSize={18}
                            fontFamily={'moonspace'}
                            height={'50'}>
                            Registruj se
                        </Button>
                    </Stack>
                </Stack>
            </Flex>
            <Flex flex={1} align={'center'} justify={'center'} mr={20}>
                <div style={{
                    width: '80%', // Adjust the width as needed
                    height: '90%', // Adjust the height as needed
                    borderRadius: '100%', // This makes the shape a circle
                    overflow: 'hidden', // This will hide any content outside the circle
                    display: 'flex',
                    alignItems: 'center', // Center vertically
                    justifyContent: 'center', // Center horizontally
                }}>
                    <Image
                        alt={'Login Image'}
                        objectFit={'cover'}
                        src={
                            'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                        }
                    />
                </div>
            </Flex>
        </Stack>
    )
}