import React from 'react'
import {
    Button,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Container,
    Radio,
    RadioGroup
} from '@chakra-ui/react'

export default function AddTeacher() {
    const [selectedRole, setSelectedRole] = React.useState('user');
    return (
        <Container
            align={'center'}
            justify={'center'}
            spacing={4}
            w={'full'}
            maxW={'md'}
            my={12}>
            <FormControl id="userName" isRequired mb={'2vh'}>
                <FormLabel>Ime</FormLabel>
                <Input
                    placeholder="ime"
                    _placeholder={{ color: 'gray.500' }}
                    type="text"
                />
            </FormControl>
            <FormControl id="lastName" isRequired mb={'2vh'}>
                <FormLabel>Prezime</FormLabel>
                <Input
                    placeholder="prezime"
                    _placeholder={{ color: 'gray.500' }}
                    type="text"
                />
            </FormControl>
            <FormControl id="email" isRequired mb={'2vh'}>
                <FormLabel>Email</FormLabel>
                <Input
                    placeholder="email"
                    _placeholder={{ color: 'gray.500' }}
                    type="email"
                />
            </FormControl>
            <FormControl id="password" isRequired mb={'2vh'}>
                <FormLabel>Lozinka</FormLabel>
                <Input
                    placeholder="lozinka"
                    _placeholder={{ color: 'gray.500' }}
                    type="password"
                />
            </FormControl>
            <FormControl id="userRole" isRequired mb={'2vh'}>
                <RadioGroup
                    row
                    name="role"
                    value={selectedRole}
                    onChange={(event) => setSelectedRole(event.target.value)}
                >
                    <Radio value="user" mr={'20px'}>Korisnik</Radio>
                    <Radio value="teacher" ml={'20px'}>Predavač</Radio>
                </RadioGroup>
            </FormControl>
            <Stack spacing={6} direction={['column', 'row']} mt={'5vh'}>
                <Button className='cancel-btn'
                    w="full"
                    style={{
                        background: 'white',
                        border: '1px solid var(--color-blue)',
                        color: 'var(--color-blue)'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'var(--color-dark-blue)';
                        e.currentTarget.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'white';
                        e.currentTarget.style.color = 'var(--color-blue)';
                    }}
                >
                    Odustani
                </Button>
                <Button className='confirm-btn'
                    w="full"
                    style={{
                        background: 'var(--color-blue)',
                        color: 'white'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'var(--color-dark-blue)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'var(--color-blue)';
                        e.currentTarget.style.color = 'white';
                    }}
                >
                    Sačuvaj
                </Button>
            </Stack>
        </Container>

    )
}