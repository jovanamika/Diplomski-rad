import { Wrap, WrapItem, Avatar, Container, Text, HStack, Divider } from '@chakra-ui/react'
import React from 'react'

export default function InformationCard({ firstname, lastname, email, image }) {
    return (
        <Container paddingTop={'5vh'}
            paddingBottom={'5vh'}
            justify='center'
            align='center'
            width={'100%'}
        >
            <Wrap justify='center' align='center'>
                <WrapItem>
                    <Avatar size='2xl' name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />{' '}
                </WrapItem>
            </Wrap>
            <Container mt='4vh'>
                <HStack spacing={4} mt={'2vh'}>
                    <Text py='2' marginRight={'8vh'}>Ime: </Text>
                </HStack>
                <Divider />
                <HStack spacing={4} mt={'2vh'}>
                    <Text py='2' marginRight={'8vh'}>Prezime: </Text>
                </HStack>
                <Divider />
                <HStack spacing={4} mt={'2vh'}>
                    <Text py='2' marginRight={'8vh'}>Email: </Text>
                </HStack>
                <Divider />
            </Container>
        </Container>
    )
}
