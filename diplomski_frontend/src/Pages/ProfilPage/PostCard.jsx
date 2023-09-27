import { Container, FormControl, FormLabel, Input, FormHelperText, FormErrorMessage, Stack, Button, Textarea } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'

export default function PostCard() {
    const [input, setInput] = useState('')

    const handleInputChange = (e) => setInput(e.target.value)

    const isError = input === ''
    return (
        <Container justifyContent={'center'}
            align='center'
            width={'100%'}
            pt={'5vh'} >
            <FormControl id="title" isRequired mb={'2vh'}>
                <FormLabel>Naslov</FormLabel>
                <Input
                    placeholder="Title"
                    _placeholder={{ color: 'gray.500' }}
                    type="text"
                    border="1px solid black"
                />
            </FormControl>
            <FormControl id="description" isRequired mb={'2vh'}>
                <FormLabel></FormLabel>
                <Textarea
                    placeholder="Content"
                    _placeholder={{ color: 'gray.500' }}
                    type="text"
                    border="1px solid black"
                    height={"300px"}
                    style={{ verticalAlign: 'top' }} 
                    
                />
            </FormControl>

            <Stack spacing={10} direction={['column', 'row']} mt={'5vh'} mb={'2vh'} align={'center'} justify={'center'} >
                <Button className='cancel-btn'
                    w="30%"
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
                    Izbriši
                </Button>
                <Button className='confirm-btn'
                    w="30%"
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
        </Container >
    )
}
