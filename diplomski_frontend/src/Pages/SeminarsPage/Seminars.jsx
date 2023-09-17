import React from 'react'
import { CardFooter, Text, Button, Card, Image, Stack, CardBody, Heading } from '@chakra-ui/react'

export default function Seminars({ image, title, description, date, active }) {
  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
      variant='outline'
    >
      <Stack>
        <CardBody>
          <Heading size='md'>Seminar title 1</Heading>

          <Text py='2'>
            Seminar description....Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor si.
          </Text>
        </CardBody>

        <CardFooter>
          <Button variant='solid' colorScheme='blue'>
            Prijavi se
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  )
}
