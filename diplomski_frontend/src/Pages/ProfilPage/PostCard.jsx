import { Container, FormControl, FormLabel, Input, Stack, Button, Textarea } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'

export default function PostCard() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleTitleChange = (e) => setTitle(e.target.value);
    const handleContentChange = (e) => setDescription(e.target.value);

    const handleDelete = () => {
        setTitle('');
        setDescription('');
        //connect with db
    };

    const handleSave = () => {
        console.log(title);
        console.log(description);
        addPost();
        setTitle('');
        setDescription('');
    }

    const addPost = async () => {
        let url = "http://localhost:8080/posts" //https://img.taste.com.au/nyBI7B1_/taste/2017/08/steak-with-mushroom-sauce-129161-2.jpg
        let active = true;
        let post = { title, description, active }
        console.log("JSON", JSON.stringify(post));

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }, // 'Authorization': `Bearer ${auth.res.token}`
            body: JSON.stringify(post),
        };

        const response = await fetch(url, requestOptions)
        if (!response.ok) {
            throw new Error('data could not be fetched')
        } else {
            window.alert('Post request sent successfully!'); // Add the alert here
            return response;;
        }
    }

    return (
        <Container justifyContent={'center'}
            align='center'
            width={'100%'}
            pt={'5vh'} >
            <FormControl id="title" isRequired mb={'2vh'}>
                <FormLabel>Naslov</FormLabel>
                <Input
                    value={title}
                    placeholder="Title"
                    _placeholder={{ color: 'gray.500' }}
                    type="text"
                    border="1px solid black"
                    onChange={handleTitleChange}
                />
            </FormControl>
            <FormControl id="description" isRequired mb={'2vh'}>
                <FormLabel></FormLabel>
                <Textarea
                    value={description}
                    placeholder="Content"
                    _placeholder={{ color: 'gray.500' }}
                    type="text"
                    border="1px solid black"
                    height={"300px"}
                    style={{ verticalAlign: 'top' }}
                    onChange={handleContentChange}
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
                    onClick={handleDelete}
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
                    onClick={handleSave}
                >
                    Sačuvaj
                </Button>
            </Stack>
        </Container >
    )
}
