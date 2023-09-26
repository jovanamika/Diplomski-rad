import React from 'react'
import AdminLogIn from './AdminLogIn'
import { Container, HStack, Text, Icon, Divider } from '@chakra-ui/react';
import { TfiWrite, TfiSettings, TfiAgenda, TfiShiftRight, TfiUser, TfiLayers, TfiViewList } from "react-icons/tfi";
import { VscNewFile, VscPersonAdd, VscOrganization } from "react-icons/vsc";
import { HiOutlineAcademicCap, HiPlusSmall } from "react-icons/hi2";
import { IoNotificationsOutline } from "react-icons/io5";

import { useState } from 'react'
import '../ProfilPage/Profil.scss'
import { useNavigate } from 'react-router-dom';

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
    setNews(false);
    setSeminars(false);
    setTeachers(false);

    setNotification(true);
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
    setTeachers(false);
    setNews(false);

    setSeminars(true);
  }

  const GetAddSeminar = () => {
    setNotification(false);
    setTeachers(false);
    setNews(false);

    setSeminars(true);
  }

  const GetSettingsCard = () => {
    setNotification(false);
    setSeminars(false);
    setNews(false);

    setTeachers(true);
  }

  const LogOut = () => {
    setIsLogged(false);
  }

  return (
    <div className="profil-container">
      {!isLogged && (<AdminLogIn />)}
      {isLogged && (<div className="profil-container__left" style={{ width: '25%' }}>
        <Container marginTop={'5vh'}>
          <Text fontSize='xl' py='2' align='start' >Obavještenja</Text>
          <HStack spacing={4} className={`text-component ${notification ? 'activeText' : ''}`}>
            <Icon as={IoNotificationsOutline} boxSize={5} />
            <Text py='2' marginRight={'8vh'} onClick={GetNotification} cursor="pointer" >
              Pregled zahtjeva
            </Text>
          </HStack>



          <Text fontSize='xl' py='2' align='start' mt='3' >Objave</Text>
          <HStack spacing={4} className={`text-component ${news ? 'activeText' : ''}`}>
            <Icon as={TfiLayers} boxSize={5} />
            <Text py='2' marginRight={'8vh'} onClick={GetNews} cursor="pointer">Pregled svih objava</Text>
          </HStack>
          <HStack spacing={4} className={`text-component ${addNews ? 'activeText' : ''}`}>
            <Icon as={VscNewFile} boxSize={5} />
            <Text py='2' marginRight={'8vh'} onClick={GetAddNews} cursor="pointer">Dodaj objavu</Text>
          </HStack>


          <Text fontSize='xl' py='2' align='start' mt='3' >Seminari</Text>
          <HStack spacing={4} className={`text-component ${seminars ? 'activeText' : ''}`}>
            <Icon as={HiOutlineAcademicCap} boxSize={5} />
            <Text py='2' marginRight={'8vh'} onClick={GetSeminars} cursor="pointer">Pregled svih seminara</Text>
          </HStack>
          <HStack spacing={4} className={`text-component ${addSeminar? 'activeText' : ''}`}>
            <Icon as={HiPlusSmall} boxSize={5} />
            <Text py='2' marginRight={'8vh'} onClick={GetAddSeminar} cursor="pointer">Dodaj seminar</Text>
          </HStack>

          <Text fontSize='xl' py='2' align='start' mt='3' >Predavači</Text>
          <HStack spacing={4} className={`text-component ${teachers ? 'activeText' : ''}`}>
            <Icon as={VscOrganization} boxSize={5} />
            <Text py='2' marginRight={'8vh'} onClick={GetSettingsCard} cursor="pointer">Pregled svih predavača</Text>
          </HStack>
          <HStack spacing={4} className={`text-component ${teachers ? 'activeText' : ''}`}>
            <Icon as={VscPersonAdd} boxSize={5} />
            <Text py='2' marginRight={'8vh'} onClick={GetSettingsCard} cursor="pointer">Dodaj predavača</Text>
          </HStack>

          <Divider background={'black'} height={'1px'} mt='5' mb='3' />

          <HStack spacing={4} className="text-component">
            <Icon as={TfiShiftRight} boxSize={5} />
            <Text py='2' marginRight={'8vh'} onClick={LogOut} cursor="pointer">Odjavi se</Text>
          </HStack>

        </Container>
      </div>)}
      {isLogged && (<div className="profil-container__right">
        {notification && (<div className="admin-content">
          <p>Zahtjevi</p>
        </div>)}

        {news && (<div className="admin-content">
          <p>Seminari</p>
        </div>)}

        {seminars && (<div className="admin-content">
          <p>Post</p>
        </div>)}

        {teachers && (<div className="admin-content">
          <p>Settings</p>
        </div>)}
      </div>)}
    </div>
  )
}

