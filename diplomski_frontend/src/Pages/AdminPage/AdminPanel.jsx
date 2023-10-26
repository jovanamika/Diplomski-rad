import React from 'react'
import AdminLogIn from './AdminLogIn';
import { Container, HStack, Text, Icon, Divider } from '@chakra-ui/react';
import { TfiShiftRight, TfiLayers } from "react-icons/tfi";
import { VscNewFile, VscPersonAdd, VscOrganization } from "react-icons/vsc";
import { HiOutlineAcademicCap, HiPlusSmall } from "react-icons/hi2";
import { IoNotificationsOutline } from "react-icons/io5";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Teachers from './Teachers/Teachers';
import AddTeacher from './Teachers/AddTeacher';
import PostCard from '../ProfilPage/PostCard';
import AddSeminar from './Seminar/AddSeminar';
import '../AdminPage/Admin.scss';
import AllSeminars from './Seminar/AllSeminars';
import Pages from './Posts/Pages';

export default function AdminPanel() {
  const [notification, setNotification] = useState(true);
  const [news, setNews] = useState(false);
  const [addNews, setAddNews] = useState(false);
  const [seminars, setSeminars] = useState(false);
  const [addSeminar, setAddSeminar] = useState(false);
  const [teachers, setTeachers] = useState(false);
  const [addTeacher, setAddTeacher] = useState(false);
  const [isLogged, setIsLogged] = useState(true);
  const navigate = useNavigate();

  const GetNotification = () => {
    setNotification(true);
    setSeminars(false);
    setTeachers(false);
    setAddNews(false);
    setAddSeminar(false);
    setAddTeacher(false);
    setNews(false);
  };

  const GetNews = () => {
    setNotification(false);
    setSeminars(false);
    setTeachers(false);
    setAddNews(false);
    setAddSeminar(false);
    setAddTeacher(false);
    setNews(true);
  }

  const GetAddNews = () => {
    setNotification(false);
    setSeminars(false);
    setTeachers(false);
    setAddNews(true);
    setAddSeminar(false);
    setAddTeacher(false);
    setNews(false);
  }

  const GetSeminars = () => {
    setNotification(false);
    setSeminars(true);
    setTeachers(false);
    setAddNews(false);
    setAddSeminar(false);
    setAddTeacher(false);
    setNews(false);
  }

  const GetAddSeminar = () => {
    setNotification(false);
    setSeminars(false);
    setTeachers(false);
    setAddNews(false);
    setAddTeacher(false);
    setNews(false);
    setAddSeminar(true);
  }

  const GetTeachers = () => {
    setNotification(false);
    setSeminars(false);
    setAddNews(false);
    setAddTeacher(false);
    setNews(false);
    setAddSeminar(false);
    setTeachers(true);
  }

  const GetAddTeacher = () => {
    setNotification(false);
    setSeminars(false);
    setAddNews(false);
    setNews(false);
    setAddSeminar(false);
    setTeachers(false);
    setAddTeacher(true);
  }

  const LogOut = () => {
    setIsLogged(false);
  }

  return (
    <div className="admin-container">
      {!isLogged && (<AdminLogIn />)}
      {isLogged && (<div className="admin-container__left" style={{ width: '25%' }}>
        <Container marginTop={'5vh'}>
          <Text fontSize='xl' py='2' align='start' >Obavještenja</Text>
          <Container  className={`container-component ${notification ? 'activeContainer' : ''}`} width={'100%'} borderRadius="md">
            <HStack spacing={4} className={`text-component ${notification ? 'activeText' : ''}`}>
              <Icon as={IoNotificationsOutline} boxSize={5} />
              <Text py='2' marginRight={'8vh'} onClick={GetNotification} cursor="pointer" >
                Pregled zahtjeva
              </Text>
            </HStack>
          </Container>

          <Text fontSize='xl' py='2' align='start' mt='3' >Objave</Text>
          <Container className={`container-component ${news ? 'activeContainer' : ''}`}  width={'100%'} borderRadius="md">
          <HStack spacing={4} className={`text-component ${news ? 'activeText' : ''}`}>
            <Icon as={TfiLayers} boxSize={5} />
            <Text py='2' marginRight={'8vh'} onClick={GetNews} cursor="pointer">Pregled svih objava</Text>
          </HStack>
          </Container>
          <Container className={`container-component ${addNews ? 'activeContainer' : ''}`}  width={'100%'} borderRadius="md" mt='2px'>
          <HStack spacing={4} className={`text-component ${addNews ? 'activeText' : ''}`}>
            <Icon as={VscNewFile} boxSize={5} />
            <Text py='2' marginRight={'8vh'} onClick={GetAddNews} cursor="pointer">Dodaj objavu</Text>
          </HStack>
          </Container>


          <Text fontSize='xl' py='2' align='start' mt='3' >Seminari</Text>
          <Container  className={`container-component ${seminars ? 'activeContainer' : ''}`} width={'100%'} borderRadius="md">
          <HStack spacing={4} className={`text-component ${seminars ? 'activeText' : ''}`}>
            <Icon as={HiOutlineAcademicCap} boxSize={5} />
            <Text py='2' marginRight={'8vh'} onClick={GetSeminars} cursor="pointer">Pregled svih seminara</Text>
          </HStack>
          </Container>
          <Container className={`container-component ${addSeminar ? 'activeContainer' : ''}`} width={'100%'} borderRadius="md" mt='2px'>
          <HStack spacing={4} className={`text-component ${addSeminar ? 'activeText' : ''}`}>
            <Icon as={HiPlusSmall} boxSize={5} />
            <Text py='2' marginRight={'8vh'} onClick={GetAddSeminar} cursor="pointer">Dodaj seminar</Text>
          </HStack>
          </Container>

          <Text fontSize='xl' py='2' align='start' mt='3' >Predavači</Text>
          <Container className={`container-component ${teachers ? 'activeContainer' : ''}`} width={'100%'} borderRadius="md">
          <HStack spacing={4} className={`text-component ${teachers ? 'activeText' : ''}`}>
            <Icon as={VscOrganization} boxSize={5} />
            <Text py='2' marginRight={'8vh'} onClick={GetTeachers} cursor="pointer">Pregled svih predavača</Text>
          </HStack>
          </Container>
          <Container className={`container-component ${addTeacher ? 'activeContainer' : ''}`} width={'100%'} borderRadius="md" mt='2px'>
          <HStack spacing={4} className={`text-component ${addTeacher ? 'activeText' : ''}`}>
            <Icon as={VscPersonAdd} boxSize={5} />
            <Text py='2' marginRight={'8vh'} onClick={GetAddTeacher} cursor="pointer">Dodaj predavača</Text>
          </HStack>
          </Container>

          <Divider background={'white'} height={'1px'} mt='5' mb='3' />
          <Container  width={'100%'} borderRadius="md" className='container-component'>
          <HStack spacing={4} className="text-component">
            <Icon as={TfiShiftRight} boxSize={5} />
            <Text py='2' marginRight={'8vh'} onClick={LogOut} cursor="pointer">Odjavi se</Text>
          </HStack>
          </Container>

        </Container>
      </div >)
      }
      {
        isLogged && (<div className="admin-container__right">
          {notification && (<div className="admin-content">
            <p>Zahtjevi</p>
          </div>)}

          {news && (<div className="admin-content">
           <Pages/>
          </div>)}

          {addNews && (<div className="admin-content">
            <PostCard />
          </div>)}

          {seminars && (<div className="admin-content">
            <AllSeminars />
          </div>)}

          {addSeminar && (<div className="admin-content">
            <AddSeminar />
          </div>)}

          {teachers && (<div className="admin-content">
            <Teachers />
          </div>)}

          {addTeacher && (<div className="admin-content">
            <AddTeacher />
          </div>)}

        </div>)
      }
    </div >
  )
}

