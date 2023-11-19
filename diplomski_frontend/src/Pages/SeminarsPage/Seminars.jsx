import React, { useState } from 'react'
import { CardFooter, Text, Button, Card, Divider, Stack, CardBody, Heading, Flex } from '@chakra-ui/react'
import { CalendarIcon, TimeIcon } from '@chakra-ui/icons'
import { HStack } from '@chakra-ui/react'
export default function Seminars({ title, description, date, time, active }) {
  const [isSigned, setIsSigned] = useState(false);
  let isAtAdminPanel = false;

  const SignOn = () => {
    //Pošalji prijavu za seminar
    setIsSigned(!isSigned);
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

        {active && !isAtAdminPanel && (<CardFooter align='center' justify='flex-end' width={'100%'}>
          {!isSigned && <Button variant='solid' colorScheme='blue' onClick={SignOn} >
            Prijavi se
          </Button>}
          {isSigned && <Button variant='solid' style={{ background: 'var(--color-dark-blue)', color: 'white' }} onClick={SignOn} >
            Poništi prijavu
          </Button>}
        </CardFooter>)}

        {isAtAdminPanel && (<CardFooter align='center' justify='flex-end' width={'100%'}>
          <HStack spacing={4}>
            <Button
              variant="solid"
              style={{ background: 'var(--footer-bg-color)', color: 'white' }}
              onClick={SignOn}>
              Uredi
            </Button>
            <Button
              variant="solid"
              style={{ background: 'red', color: 'white' }}
              onClick={SignOn}
            >
              Obriši
            </Button>
          </HStack>
        </CardFooter>)}
      </Stack>
    </Card>
  )
}
