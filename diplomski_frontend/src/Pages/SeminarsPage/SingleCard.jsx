import { Card, CardHeader, Heading, Box, Text, Link, CardBody } from '@chakra-ui/react'
import React from 'react'

export default function SingleCard() {
    return (
        <Card mb={'3vh'}>
            <CardBody>
                <Link href="/"><Heading size='xs' textTransform='uppercase' pb='1vh'>
                    Title
                </Heading>
                </Link>
                <Box>
                    <Text fontSize='sm'>
                        View a summary of all your clients over the last month.
                    </Text>
                </Box>

            </CardBody>
        </Card>
    )
}
