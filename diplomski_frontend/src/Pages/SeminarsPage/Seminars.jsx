import React, { useState } from 'react'
import { FormControl, FormLabel, Textarea, Container, Input, CardFooter, Text, Button, Card, Divider, Stack, CardBody, Heading, Flex, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Center } from '@chakra-ui/react'
import { CalendarIcon, TimeIcon } from '@chakra-ui/icons'
import { HStack } from '@chakra-ui/react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

export default function Seminars({ title, description, date, time, teachers, users, active }) {
  const [isSigned, setIsSigned] = useState(false);
  const [modal, setModal] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [teacherList, setTeachers] = useState([]);
  let isAtAdminPanel = true;
  console.log("Seminar");
  console.log(users);

  const toggleModal = () => {
    setModal(!modal);
  }

  const addTeacher = (teacherName) => {
    setTeachers([...teachers, teacherName]);
  };

  const removeTeacher = (index) => {
    const updatedTeachers = [...teachers];
    updatedTeachers.splice(index, 1);
    setTeachers(updatedTeachers);
  };

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
          {teachers && teachers.length > 0 && (
            <>
              <Flex direction='column' alignItems='start' mb={'2vh'}>
                <Text>
                  <b>Predavači: </b>
                  {teachers.map((teacher, index) => (
                    `${teacher.firstname} ${teacher.lastname}${index < teachers.length - 1 ? ', ' : ''}`
                  ))}
                </Text>
              </Flex>
            </>
          )}
          {isAtAdminPanel && users.length > 0 && (
            <Flex direction='column' alignItems='start' mb={'2vh'}>
              <Text>
                <b>Broj prijavljenih slušalaca: </b>
                {users.length}
              </Text>
            </Flex>
          )}
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
              onClick={toggleModal}>
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
      <Center>
        <Modal isOpen={modal} onClose={toggleModal} size="xl" isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Uredi seminar</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Container justifyContent={'center'} align='center' width={'100%'} pt={'2vh'}>
                <FormControl id="title" isRequired mb={'2vh'}>
                  <FormLabel>Naslov</FormLabel>
                  <Input
                    placeholder="Naslov"
                    value={title}
                    _placeholder={{ color: 'gray.500' }}
                    type="text"
                    border="1px solid black"
                  />
                </FormControl>
                <FormControl id="description" isRequired mb={'2vh'}>
                  <FormLabel>Sadržaj</FormLabel>
                  <Textarea
                    placeholder="Sadržaj"
                    value={description}
                    _placeholder={{ color: 'gray.500' }}
                    type="text"
                    border="1px solid black"
                    height={"150px"}
                    style={{ verticalAlign: 'top' }}
                  />
                </FormControl>
                <FormControl id="teachers" mb={'2vh'}>
                  <FormLabel>Nastavnici</FormLabel>
                  <HStack spacing={2} flexWrap="wrap">
                    {teachers.map((teacher, index) => (
                      <Tag key={index} size="lg" borderRadius="full" variant="solid" colorScheme="teal">
                        <TagLabel>{teacher}</TagLabel>
                        <TagCloseButton onClick={() => removeTeacher(index)} />
                      </Tag>
                    ))}
                  </HStack>
                  <Input
                    placeholder="Dodaj nastavnika"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        addTeacher(e.target.value);
                        setTitle('');
                      }
                    }}
                  />
                </FormControl>
                <HStack mt='5'>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label={date}
                    //value={value}
                    //</LocalizationProvider> onChange={(newValue) => setValue(newValue)}>
                    >

                    </DatePicker>
                  </LocalizationProvider>

                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <TimePicker
                      label={time}
                    //value={time}
                    //onChange={(newValue) => setTime(newValue)}
                    />
                  </LocalizationProvider>

                </HStack>
              </Container>

            </ModalBody>
            <ModalFooter>

            </ModalFooter>
          </ModalContent>
        </Modal>
      </Center>
    </Card >
  )
}
