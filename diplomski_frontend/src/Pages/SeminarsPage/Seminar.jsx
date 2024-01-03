import React, { useEffect, useState } from 'react'
import Seminars from './Seminars'
import './Seminar.scss'
import { SearchIcon } from '@chakra-ui/icons'
import { IconButton, Container, InputGroup, Input, Heading } from '@chakra-ui/react'
import SingleCard from './SingleCard'

export default function Seminar() {
  const [seminars, setSeminars] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [searchTitle, setSearchTitle] = useState('');

  useEffect(() => {
    console.log("Seminars", seminars);
    fetch("http://localhost:8080/seminars")
      .then(res => {
        return res.json();
      })
      .then((data) => {
        setSeminars(data);
      });
  }, []);

  const handleSearch = () => {
    fetch(`http://localhost:8080/seminars/find/${searchTitle}`)
      .then(res => res.json())
      .then((data) => {
        setSeminars(data);
      });
  };

  return (
    <div className="seminar-container">
      <div className="seminar-container__left">
        {seminars.map((seminar) => (
          <div className="seminar-content">
            <Seminars key={seminar.id}
              title={seminar.title}
              description={seminar.description}
              date={seminar.eventDate}
              time={seminar.eventTime}
              teachers={seminar.teachers}
              users={seminar.users}
              active={true}
            />
          </div>
        ))}

      </div>
      <div className="seminar-container__right">
        <Container marginTop={'5vh'}>
          <InputGroup>
            <IconButton
              colorScheme='blue'
              aria-label='Search database'
              icon={<SearchIcon />}
              onClick={handleSearch} />
            <Input type='search' placeholder='Search' marginLeft={'1vh'} border='1px solid gray' onChange={(e) => setSearchTitle(e.target.value)}
              value={searchTitle} />
          </InputGroup>
        </Container>
        <Container marginTop={'5vh'}>
          <Heading size='mg' textTransform='uppercase' pb='5vh'>
            Izdvojeno
          </Heading>
          <SingleCard title="POSJETA TEHNIČKOM UNIVERZITETU U BEČU" />
          <SingleCard title="OTVOREN KONKURS ZA STIPENDIJA KOMPANIJE M:TEL"/>
          <SingleCard title="ROUTE2LAUNCH MENTORSKI PROGRAM"/>
        </Container>
      </div>
    </div>
  )
}
