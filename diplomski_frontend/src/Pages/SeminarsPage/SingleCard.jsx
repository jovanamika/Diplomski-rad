import { Card, CardHeader, Heading, Box, Text, Link, CardBody } from '@chakra-ui/react'
import React from 'react'

export default function SingleCard({title}) {
    return (
        <Card mb={'3vh'}>
            <CardBody>
                <Link href="/news"><Heading size='xs' textTransform='uppercase' pb='1vh'>
                    {title}
                </Heading>
                </Link>
                <Box>
                    <Text fontSize='sm'>
                        Vidi više
                    </Text>
                </Box>

            </CardBody>
        </Card>
    )
}
