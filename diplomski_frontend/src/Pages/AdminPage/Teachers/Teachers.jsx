import React from 'react';
import '../../AdminPage/Style.scss';
import { Icon } from '@chakra-ui/react';
import { RiDeleteBin6Line } from "react-icons/ri";
import { TfiPencilAlt } from "react-icons/tfi";
import { FormControl, FormLabel,Container, Input, Button, Stack,Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Center } from '@chakra-ui/react'
import {
  Radio,
  RadioGroup
} from '@chakra-ui/react'

const Teachers = () => {

  const [activeItem, setActiveItem] = React.useState('Svi studenti'); //u zavisnosti od activeItem prikazujemo 
  const [modal, setModal] = React.useState(false);
  const [selectedRole, setSelectedRole] = React.useState('user');

  const toggleModal = () => {
    setModal(!modal);
  }
  //podatke
  const handleUpdate = (item) => {

  };

  const handleDelete = () => {

  }

  //učitati korisnike iz baze!

  const students = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      description: 'Lorem ipsum dolor sit amet',
      createdDate: '2023-05-01',
      updatedDate: '2023-05-10',
      priority: 'High',
      status: 'Active',
      therapist: 'Dr. Smith',
    },
    {
      id: 2,
      name: 'John Doe',
      email: 'john.doe@example.com',
      description: 'Lorem ipsum dolor sit amet',
      createdDate: '2023-05-01',
      updatedDate: '2023-05-10',
      priority: 'High',
      status: 'Active',
      therapist: 'Dr. Smith',
    },
    {
      id: 3,
      name: 'John Doe',
      email: 'john.doe@example.com',
      description: 'Lorem ipsum dolor sit amet',
      createdDate: '2023-05-01',
      updatedDate: '2023-05-10',
      priority: 'High',
      status: 'Active',
      therapist: 'Dr. Smith',
    },
    {
      id: 4,
      name: 'John Doe',
      email: 'john.doe@example.com',
      description: 'Lorem ipsum dolor sit amet',
      createdDate: '2023-05-01',
      updatedDate: '2023-05-10',
      priority: 'High',
      status: 'Active',
      therapist: 'Dr. Smith',
    },
    {
      id: 5,
      name: 'John Doe',
      email: 'john.doe@example.com',
      description: 'Lorem ipsum dolor sit amet',
      createdDate: '2023-05-01',
      updatedDate: '2023-05-10',
      priority: 'High',
      status: 'Active',
      therapist: 'Dr. Smith',
    },
    {
      id: 6,
      name: 'John Doe',
      email: 'john.doe@example.com',
      description: 'Lorem ipsum dolor sit amet',
      createdDate: '2023-05-01',
      updatedDate: '2023-05-10',
      priority: 'High',
      status: 'Active',
      therapist: 'Dr. Smith',
    }
  ];

  return (
    <div>
      <div className="wrapper">
        <div className="right-content">
          <table className="user-table">
            <thead>
              <tr>
                <th>Ime</th>
                <th>Prezime</th>
                <th>Email</th>
                <th>Uloga</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.description}</td>
                  <td>{student.createdDate}</td>
                  <td><Icon className="icon__update" as={TfiPencilAlt} boxSize={5} onClick={toggleModal} /> <Icon className='icon__delete' as={RiDeleteBin6Line} boxSize={5} onClick={handleDelete} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Center>
        <Modal isOpen={modal} onClose={toggleModal} size="xl" isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Uredi informacije o korisniku</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Container
                align={'center'}
                justify={'center'}
                w={'full'}
                spacing={4}
                maxW={'md'}
                >
                <FormControl id="userName" isRequired mb={'2vh'}>
                  <FormLabel>Ime</FormLabel>
                  <Input
                    placeholder="ime"
                    _placeholder={{ color: 'gray.500' }}
                    type="text"
                  />
                </FormControl>
                <FormControl id="lastName" isRequired mb={'2vh'}>
                  <FormLabel>Prezime</FormLabel>
                  <Input
                    placeholder="prezime"
                    _placeholder={{ color: 'gray.500' }}
                    type="text"
                  />
                </FormControl>
                <FormControl id="email" isRequired mb={'2vh'}>
                  <FormLabel>Email</FormLabel>
                  <Input
                    placeholder="email"
                    _placeholder={{ color: 'gray.500' }}
                    type="email"
                  />
                </FormControl>
                <FormControl id="password" isRequired mb={'2vh'}>
                  <FormLabel>Lozinka</FormLabel>
                  <Input
                    placeholder="lozinka"
                    _placeholder={{ color: 'gray.500' }}
                    type="password"
                  />
                </FormControl>
                <FormControl id="userRole" isRequired mb={'2vh'}>
                  <RadioGroup
                    row
                    name="role"
                    value={selectedRole}
                    onChange={(event) => setSelectedRole(event.target.value)}
                  >
                    <Radio value="user" mr={'20px'}>Korisnik</Radio>
                    <Radio value="teacher" ml={'20px'}>Predavač</Radio>
                  </RadioGroup>
                </FormControl>
                <Stack spacing={6} direction={['column', 'row']} mt={'5vh'}>
                  <Button className='cancel-btn'
                    w="full"
                    style={{
                      background: 'white',
                      border: '1px solid var(--color-blue)',
                      color: 'var(--color-blue)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'var(--color-dark-blue)';
                      e.currentTarget.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'white';
                      e.currentTarget.style.color = 'var(--color-blue)';
                    }}
                  >
                    Odustani
                  </Button>
                  <Button className='confirm-btn'
                    w="full"
                    style={{
                      background: 'var(--color-blue)',
                      color: 'white'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'var(--color-dark-blue)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'var(--color-blue)';
                      e.currentTarget.style.color = 'white';
                    }}
                  >
                    Sačuvaj
                  </Button>
                </Stack>
              </Container>

            </ModalBody>
            <ModalFooter>

            </ModalFooter>
          </ModalContent>
        </Modal>
      </Center>
    </div>
  );
};

export default Teachers;