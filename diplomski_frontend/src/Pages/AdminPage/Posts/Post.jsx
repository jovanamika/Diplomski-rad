import React from 'react'
import { CardFooter, Text, Button, Card, Divider, Stack, CardBody, HStack, Heading, Container, Center, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from '@chakra-ui/react'
import PostCard from '../../ProfilPage/PostCard';

export default function Post({ id, title, description, active, setPosts, posts, image }) {
    let isAtAdminPanel = false;
    console.log("Image: ",image)
    const [modal, setModal] = React.useState(false);

    const toggleModal = () => {
        setModal(!modal);
    }

    const handleDelete = () => {
        const confirmDelete = window.confirm('Are you sure you want to delete this post?');
        fetch(`http://localhost:8080/posts/${id}`, {
            method: 'DELETE',
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                else {
                    const updatedPosts = posts.filter((post) => post.id !== id);
                    setPosts(updatedPosts);
                    console.log("Success");
                    window.location.reload();
                }
                // Optional: you can handle the response here if necessary

            })
            .then((data) => {
                // Optional: handle the data if needed
                const updatedPosts = posts.filter((post) => post.id !== id);
                setPosts(updatedPosts);
                console.log('Post deleted successfully:', data);
            })
            .catch((error) => {
                console.log('Error deleting data:', error);
            });
    }


    return (
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            justify='center'
            align='center'
            width={'100%'}
        >
            <Stack justify='center' align='center' width={'90%'}>
                <CardBody justify='center' align='center' width={'100%'} style={{ position: 'relative' }}>
                    <Container style={{ width: '100%', height: '30vh', display: 'flex', justifyContent: 'center' }}>
                        <div style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '100%' }} />
                    </Container>
                    <Heading size='md' marginBottom={'2vh'} marginTop={'2vh'}>{title}</Heading>
                    <Text py='2' align='left' marginBottom={'2vh'} paddingLeft={'2vh'}>
                        {description}
                    </Text>
                    <Divider />
                </CardBody>

                {true && (<CardFooter align='center' justify='flex-end' width={'100%'}>
                    <HStack spacing={4}>
                        <Button
                            variant="solid"
                            style={{ background: 'var(--footer-bg-color)', color: 'white' }}
                            onClick={toggleModal}>
                            Uredi
                        </Button>
                        <Button
                            variant="solid"
                            style={{ background: 'red', color: 'white' }}
                            onClick={handleDelete}
                        >
                            Obriši
                        </Button>
                    </HStack>
                </CardFooter>)}
            </Stack>
            <Center>
                <Modal isOpen={modal} onClose={toggleModal} size="xl" isCentered>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Uredi objavu</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <PostCard postTitle={title} postDescription={description} image={'../../../Assets/Img/'+image} />
                        </ModalBody>
                        <ModalFooter>

                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Center>
        </Card>
    )
}
