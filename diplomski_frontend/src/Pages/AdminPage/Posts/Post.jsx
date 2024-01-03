import React from 'react'
import { CardFooter, Text, Button, Card, Divider, Stack, CardBody, HStack, Heading, Container, Center, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from '@chakra-ui/react'
import PostCard from '../../ProfilPage/PostCard';
import img1 from '../../../Assets/Img/image-1.jpg'
import img2 from '../../../Assets/Img/image-2.jpg'
import img3 from '../../../Assets/Img/image-3.jpg'
import img4 from '../../../Assets/Img/image-4.jpg'
import img5 from '../../../Assets/Img/image-5.jpg'
import img6 from '../../../Assets/Img/image-6.jpg'
import img7 from '../../../Assets/Img/image-7.jpg'
import img8 from '../../../Assets/Img/image-8.jpg'


export default function Post({ id, title, description, active, setPosts, posts, image }) {
    let isAtAdminPanel = false;
    const [modal, setModal] = React.useState(false);
    let imageUrl = img1;

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

    switch (image) {
        case 'image-1.jpg':
            imageUrl = img1;
            break;
        case 'image-2.jpg':
            imageUrl = img2;
            break;
        case 'image-3.jpg':
            imageUrl = img3;
            break;
        case 'image-4.jpg':
            imageUrl = img4;
            break;
        case 'image-5.jpg':
            imageUrl = img5;
            break;
        case 'image-6.jpg':
            imageUrl = img6;
            break;
        case 'image-7.jpg':
            imageUrl = img7;
            break;
        case 'image-8.jpg':
            imageUrl = img8;
            break;
        default:
            imageUrl = img8;
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
                        <img style={{ width: '100%', height: '200px', objectFit: 'cover' }} src={imageUrl} alt="slika" />
                    </Container>
                    <Heading size='md' marginBottom={'2vh'} marginTop={'2vh'}>{title}</Heading>
                    <Text py='2' align='left' marginBottom={'2vh'} paddingLeft={'2vh'}>
                        {description}
                    </Text>
                    <Divider />
                </CardBody>

                {active && (<CardFooter align='center' justify='flex-end' width={'100%'} marginBottom={'5vh'}>
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

                {!active && (<CardFooter align='center' justify='flex-end' width={'100%'} paddingBottom={'2vh'}>
                    <HStack spacing={4}>
                        <Button
                            variant="solid"
                            style={{ background: 'var(--footer-bg-color)', color: 'white' }}
                            onClick={toggleModal}>
                            Odobri
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
                            <PostCard postTitle={title} postDescription={description} image={'../../../Assets/Img/' + image} />
                        </ModalBody>
                        <ModalFooter>

                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Center>
        </Card>
    )
}
