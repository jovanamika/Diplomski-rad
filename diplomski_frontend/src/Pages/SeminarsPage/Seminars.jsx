import React from 'react'
import { CardFooter, Text, Button, Card, Divider, Stack, CardBody, Heading, Flex} from '@chakra-ui/react'
import { CalendarIcon, TimeIcon } from '@chakra-ui/icons'
import { HStack } from '@chakra-ui/react'
export default function Seminars({ image, title, description, date, time, active }) {
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
        <CardBody justify='center' align='center' width={'100%'}>
          <Heading size='md' marginBottom={'2vh'}>{title}</Heading>

          <Text py='2' align='left' marginBottom={'2vh'}>
            {description}
          </Text>
          <Divider />
          <Flex>
            <HStack spacing={2}>
              <CalendarIcon />
              <Text py='2' marginRight={'8vh'}>Datum {date}</Text>
            </HStack>
            <HStack spacing={2}>
              <TimeIcon />
              <Text py='2' marginRight={'8vh'}>Vrijeme {time}</Text>
            </HStack>
          </Flex>
        </CardBody>

        {active && (<CardFooter align='center' justify='flex-end' width={'100%'}>
          <Button variant='solid' colorScheme='blue' >
            Prijavi se
          </Button>
        </CardFooter>)}
      </Stack>
    </Card>
  )
}
