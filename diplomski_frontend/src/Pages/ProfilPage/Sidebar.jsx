import React from 'react'
import { Container, InputGroup, IconButton, Heading, HStack, Text } from '@chakra-ui/react';
import { SearchIcon, CalendarIcon } from '@chakra-ui/icons';

export default function Sidebar() {
    return (
        <div>
            <Container marginTop={'5vh'}>
                <HStack spacing={2}>
                    <CalendarIcon />
                    <Text py='2' marginRight={'8vh'}>Informacije</Text>
                </HStack>
                <HStack spacing={2}>
                    <CalendarIcon />
                    <Text py='2' marginRight={'8vh'}>Seminari</Text>
                </HStack>
                <HStack spacing={2}>
                    <CalendarIcon />
                    <Text py='2' marginRight={'8vh'}>Napiši post</Text>
                </HStack>
                <HStack spacing={2}>
                    <CalendarIcon />
                    <Text py='2' marginRight={'8vh'}>Uredi profil</Text>
                </HStack>
                <HStack spacing={2}>
                    <CalendarIcon />
                    <Text py='2' marginRight={'8vh'}>Odjavi se</Text>
                </HStack>
            </Container>
        </div>
    )
}
