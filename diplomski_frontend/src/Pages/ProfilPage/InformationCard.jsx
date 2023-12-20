import { Wrap, WrapItem, Avatar, Container, Text, HStack, Divider } from '@chakra-ui/react'
import React from 'react'

export default function InformationCard({ firstname, lastname, email, password}) {
    return (
        <Container paddingTop={'5vh'}
            paddingBottom={'5vh'}
            justify='center'
            align='center'
            width='100%'
        >
            <Container mt='4vh'>
                <HStack spacing={4} mt={'2vh'}>
                    <Text py='2' marginRight={'8vh'}><b>Ime:</b> {firstname} </Text>
                </HStack>
                <Divider />
                <HStack spacing={4} mt={'2vh'}>
                    <Text py='2' marginRight={'8vh'}><b>Prezime:</b> {lastname} </Text>
                </HStack>
                <Divider />
                <HStack spacing={4} mt={'2vh'}>
                    <Text py='2' marginRight={'8vh'}><b>Email:</b> {email}</Text>
                </HStack>
                <Divider />
            </Container>
        </Container>
    )
}
