import React from 'react'
import { Container, HStack, Text, Icon, Divider } from '@chakra-ui/react';
import { TfiWrite, TfiSettings, TfiAgenda, TfiShiftRight, TfiIdBadge, TfiHome, TfiUser } from "react-icons/tfi";



export default function Sidebar() {
    return (
        <div>
            <Container marginTop={'5vh'}>

                <HStack spacing={4}>
                    <Icon as={TfiUser} boxSize={5} />
                    <Text py='2' marginRight={'8vh'}>Profil</Text>
                </HStack>

                <Divider background={'black'} height={'1px'} />

                <HStack spacing={4}>
                    <Icon as={TfiAgenda} boxSize={5} />
                    <Text py='2' marginRight={'8vh'}>Seminari</Text>
                </HStack>

                <Divider background={'black'} height={'1px'} />

                <HStack spacing={4}>
                    <Icon as={TfiWrite} boxSize={5} />
                    <Text py='2' marginRight={'8vh'}>Napiši post</Text>
                </HStack>

                <Divider background={'black'} height={'1px'} />

                <HStack spacing={4}>
                    <Icon as={TfiSettings} boxSize={5} />
                    <Text py='2' marginRight={'8vh'}>Uredi profil</Text>
                </HStack>

                <Divider background={'black'} height={'1px'} />

                <HStack spacing={4}>
                    <Icon as={TfiShiftRight} boxSize={5} />
                    <Text py='2' marginRight={'8vh'}>Odjavi se</Text>
                </HStack>

            </Container>
        </div>
    )
}
