import React from 'react'
import InformationCard from './InformationCard'
import { Container, HStack, Text, Icon, Divider } from '@chakra-ui/react';
import { TfiWrite, TfiSettings, TfiAgenda, TfiShiftRight, TfiIdBadge, TfiHome, TfiUser } from "react-icons/tfi";
import './Profil.scss'
import SettingsPage from './SettingsPage';
import PostCard from './PostCard';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

export default function Profil() {
  const [informationCard, setInformationCardVisible] = React.useState(true);
  const [postCard, setPostCardVisible] = React.useState(false);
  const [settingsCard, setSettingsCardVisible] = React.useState(false);
  const [firstname, setFirstname] = React.useState(null);
  const [lastname, setLastname] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const [id, setId] = React.useState(null);
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();

  console.log(auth.data.role);

  React.useEffect(() => {
    if (auth.data) {
      fetch('http://localhost:8080/users/' + auth.data.id)
        .then(res => {
          return res.json();
        })
        .then((res) => {
          setId(res.id);
          setFirstname(res.firstname);
          setLastname(res.lastname);
          setEmail(res.email);
          setPassword(res.password);
        });
    }
  }, []);


  const GetInformationCard = () => {
    setPostCardVisible(false);
    setSettingsCardVisible(false);

    setInformationCardVisible(true);
  };

  const GetPostCard = () => {
    setInformationCardVisible(false);
    setSettingsCardVisible(false);
    setPostCardVisible(true);
  }

  const GetSettingsCard = () => {
    setInformationCardVisible(false);
    setPostCardVisible(false);
    setSettingsCardVisible(true);
  }

  const LogOut = () => {
    setAuth(null);
    navigate("/");
  }

  return (
    <div className="profil-container">
      <div className="profil-container__left">
        <Container marginTop={'5vh'}>
          <HStack spacing={4} className={`text-component${informationCard ? '__activeText' : ''}`}>
            <Icon as={TfiUser} boxSize={5} />
            <Text py='2' marginRight={'8vh'} onClick={GetInformationCard} cursor="pointer" >
              Profil
            </Text>
          </HStack>

          <Divider background={'black'} height={'1px'} />

          {auth.data.role.id == 2 && (<HStack spacing={4} className={`text-component${postCard ? '__activeText' : ''}`}>
            <Icon as={TfiWrite} boxSize={5} />
            <Text py='2' marginRight={'8vh'} onClick={GetPostCard} cursor="pointer">Napiši post</Text>
          </HStack>)}

          {auth.data.role.id == 2 && (<Divider background={'black'} height={'1px'} />)}


          <HStack spacing={4} className={`text-component${settingsCard ? '__activeText' : ''}`}>
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
          <InformationCard firstname={firstname}
            lastname={lastname}
            email={email}
            password={password} />
        </div>)}

        {postCard && (<div className="profil-content">
          <PostCard />
        </div>)}

        {settingsCard && (<div className="profil-content">
          <SettingsPage />
        </div>)}
      </div>
    </div>
  )
}
