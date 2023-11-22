import { Box, Image, Container, FormControl, FormLabel, Input, Stack, Button, Textarea, Grid, GridItem } from '@chakra-ui/react'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Center } from "@chakra-ui/react";
import { IconButton, Icon } from '@chakra-ui/react';
import { FaTimes } from 'react-icons/fa';
import React from 'react'

export default function PostCard({ postTitle, postDescription, image }) {
    const [title, setTitle] = React.useState(postTitle);
    const [description, setDescription] = React.useState(postDescription);
    const [modal, setModal] = React.useState(false);
    const [selectedImage, setSelectedImage] = React.useState(image);

    console.log("Ispis");
    console.log(image);

    const toggleModal = () => {
        setModal(!modal);
    }

    const galleryImages = [
        'https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        
    ];

    const handleImageSelect = (selectedImageUrl) => {
        setSelectedImage(selectedImageUrl);
        console.log(selectedImageUrl);
        toggleModal();
    };

    const clearSelectedImage = () => {
        setSelectedImage(null);
    }

    const handleTitleChange = (e) => setTitle(e.target.value);
    const handleContentChange = (e) => setDescription(e.target.value);

    const handleDelete = () => {
        setTitle('');
        setDescription('');
        setSelectedImage(false);
    };

    const handleSave = () => {
        //connect with db(dodati url za sliku)
        console.log(title);
        console.log(description);
        addPost();
        setTitle('');
        setDescription('');
    }

    const addPost = async () => {
        let url = "http://localhost:8080/posts" 
        let active = true;
        let post = { title, description, active }
        console.log("JSON", JSON.stringify(post));

        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' }, // 'Authorization': `Bearer ${auth.res.token}`
            body: JSON.stringify(post),
        };

        const response = await fetch(url, requestOptions)
        if (!response.ok) {
            throw new Error('data could not be fetched')
        } else {
            window.alert('Post request sent successfully!'); 
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
            <Center>
                <Modal isOpen={modal} onClose={toggleModal} size="xl" isCentered>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Izaberite fotografiju</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Grid templateColumns="repeat(4, 1fr)" gap={4}>
                                {galleryImages.map((imageUrl, index) => (
                                    <GridItem key={index} spacing={10} >
                                        <Button
                                            width="100%"
                                            height="150px" // Set the desired height
                                            background={`url(${imageUrl}) center/cover`}
                                            onClick={() => handleImageSelect(imageUrl)}
                                            _hover={{
                                                filter: 'brightness(0.8)', // Adjust hover effect as needed
                                                background: `url(${imageUrl}) center/cover`, // Ensure background remains visible on hover
                                            }}
                                        >
                                        </Button>
                                    </GridItem>
                                ))}
                            </Grid>
                        </ModalBody>
                        <ModalFooter>

                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Center>
            {selectedImage && (<Box display="flex" justifyContent="flex-start" mb='5vh'>
                <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '150px' }}
                    src={selectedImage}
                    alt='Naslovna fotografija'
                />
                <IconButton
                    right='5'
                    top='-3'
                    icon={<Icon as={FaTimes} />} // Assuming you're using FontAwesome for the close icon
                    color='red.500'
                    borderRadius='full'
                    onClick={clearSelectedImage}
                />
            </Box>)
            }

          {!selectedImage && (<Stack spacing={10} direction='column' mt={'2vh'} mb={'4vh'} align={'center'} justify={'center'}>
                    <Button
                        w="100%"
                        style={{
                            background: 'red',
                            color: 'white',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'darkred';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'red';
                            e.currentTarget.style.color = 'white';
                        }}
                        onClick={toggleModal}
                    >
                        Dodaj fotografiju
                    </Button>
                </Stack>)}
            

            <Stack spacing={10} direction={['row']} mt={'2vh'} mb={'2vh'} align={'center'} justify={'center'}>
                <Button
                    className='cancel-btn'
                    w="30%"
                    style={{
                        background: 'white',
                        border: '1px solid var(--color-blue)',
                        color: 'var(--color-blue)',
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

                <Button
                    className='confirm-btn'
                    w="30%"
                    style={{
                        background: 'var(--color-blue)',
                        color: 'white',
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
