import React from 'react'
import InformationCard from './InformationCard'
import { Container, HStack, Text, Icon, Divider } from '@chakra-ui/react';
import { TfiWrite, TfiSettings, TfiAgenda, TfiShiftRight, TfiIdBadge, TfiHome, TfiUser } from "react-icons/tfi";
import { useState } from 'react'
import './Profil.scss'
import SettingsPage from './SettingsPage';
import PostCard from './PostCard';
import { useNavigate } from 'react-router-dom';

export default function Profil() {
  const [informationCard, setInformationCardVisible] = useState(true);
  const [seminarsCard, setSeminarsCardVisible] = useState(false);
  const [postCard, setPostCardVisible] = useState(false);
  const [settingsCard, setSettingsCardVisible] = useState(false);
  const navigate = useNavigate();

  const GetInformationCard = () => {
    setSeminarsCardVisible(false);
    setPostCardVisible(false);
    setSettingsCardVisible(false);

    setInformationCardVisible(true);
  };

  const GetSeminarsCard = () => {
    setInformationCardVisible(false);
    setPostCardVisible(false);
    setSettingsCardVisible(false);

    setSeminarsCardVisible(true);
  }

  const GetPostCard = () => {
    setInformationCardVisible(false);
    setSettingsCardVisible(false);
    setSeminarsCardVisible(false);

    setPostCardVisible(true);
  }

  const GetSettingsCard = () => {
    setInformationCardVisible(false);
    setPostCardVisible(false);
    setSeminarsCardVisible(false);

    setSettingsCardVisible(true);
  }

  const LogOut = () => {
    console.log('Odjava');
    navigate("/");
  }

  return (
    <div className="profil-container">
      <div className="profil-container__left">
        <Container marginTop={'5vh'}>
          <HStack spacing={4} className={`text-component ${informationCard ? 'activeText' : ''}`}>
            <Icon as={TfiUser} boxSize={5} />
            <Text py='2' marginRight={'8vh'} onClick={GetInformationCard} cursor="pointer" >
              Profil
            </Text>
          </HStack>

          <Divider background={'black'} height={'1px'} />

          <HStack spacing={4} className={`text-component ${seminarsCard ? 'activeText' : ''}`}>
            <Icon as={TfiAgenda} boxSize={5} />
            <Text py='2' marginRight={'8vh'} onClick={GetSeminarsCard} cursor="pointer">Seminari</Text>
          </HStack>

          <Divider background={'black'} height={'1px'} />

          <HStack spacing={4} className={`text-component ${postCard ? 'activeText' : ''}`}>
            <Icon as={TfiWrite} boxSize={5} />
            <Text py='2' marginRight={'8vh'} onClick={GetPostCard} cursor="pointer">Napiši post</Text>
          </HStack>

          <Divider background={'black'} height={'1px'} />

          <HStack spacing={4} className={`text-component ${settingsCard ? 'activeText' : ''}`}>
            <Icon as={TfiSettings} boxSize={5} />
            <Text py='2' marginRight={'8vh'} onClick={GetSettingsCard} cursor="pointer">Uredi profil</Text>
          </HStack>

          <Divider background={'black'} height={'1px'} />

          <HStack spacing={4} className="text-component">
            <Icon as={TfiShiftRight} boxSize={5} />
            <Text py='2' marginRight={'8vh'} onClick={LogOut} cursor="pointer">Odjavi se</Text>
          </HStack>

        </Container>
      </div>
      <div className="profil-container__right">
        {informationCard && (<div className="profil-content">
          <InformationCard />
        </div>)}

        {seminarsCard && (<div className="profil-content">
          <p>Seminari</p>
        </div>)}

        {postCard && (<div className="profil-content">
          <PostCard/>
        </div>)}

        {settingsCard && (<div className="profil-content">
          <SettingsPage/>
        </div>)}
      </div>
    </div>
  )
}
