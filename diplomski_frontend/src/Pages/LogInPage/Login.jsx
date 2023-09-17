import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
} from '@chakra-ui/react'
import { useState } from 'react';

export default function Login() {
    const [isUserChecked, setIsUserChecked] = useState(false);
    const [isInstructorChecked, setIsInstructorChecked] = useState(false);

    const handleUserCheckboxChange = () => {
        setIsUserChecked(!isUserChecked);
        setIsInstructorChecked(false); // Uncheck instructor checkbox when user checkbox is selected
    };

    const handleInstructorCheckboxChange = () => {
        setIsInstructorChecked(!isInstructorChecked);
        setIsUserChecked(false); // Uncheck user checkbox when instructor checkbox is selected
    };
    return (
        <Flex
            minH={'80vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={10} mx={'auto'} maxW={'xl'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Prijavi se</Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                    </Text>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <FormControl id="email">
                            <FormLabel>Email address</FormLabel>
                            <Input type="email" />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Password</FormLabel>
                            <Input type="password" />
                        </FormControl>
                        <Stack spacing={30}>
                            <Stack
                                direction={{ base: 'column', sm: 'row' }}
                                align={'start'}
                                justify={'space-between'}>
                                <Checkbox isChecked={isUserChecked} 
                                    onChange={handleUserCheckboxChange}>Korisnik</Checkbox>
                                <Checkbox isChecked={isInstructorChecked}
                                    onChange={handleInstructorCheckboxChange}>Predavač</Checkbox>
                            </Stack>
                            <Button
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }}>
                                Sign in
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    )
}