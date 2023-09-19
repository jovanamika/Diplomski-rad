import React from 'react'
import { CardFooter, Text, Button, Card, Image, Stack, CardBody, Heading } from '@chakra-ui/react'

export default function Seminars({ image, title, description, date, active }) {
  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
      variant='outline'
    >
      <Stack justify='center' align='center'>
        <CardBody justify='center' align='center'>
          <Heading size='md' marginBottom={'2vh'}>Seminar title 1</Heading>

          <Text py='2'>
            Seminar description....Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor si.
          </Text>
        </CardBody>

        <CardFooter align='center' justify='center' width={'50%'}>
          <Button variant='solid' colorScheme='blue' width={'50%'}>
            Prijavi se
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  )
}
