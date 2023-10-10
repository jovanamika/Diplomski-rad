import React, { useEffect, useState } from 'react'
import Seminars from './Seminars'
import './Seminar.scss'
import { SearchIcon } from '@chakra-ui/icons'
import { IconButton, Container, InputGroup, Input, Heading} from '@chakra-ui/react'
import news from '../../Assets/Img/news.jpg'
import SingleCard from './SingleCard'

export default function Seminar() {
  const [seminars, setSeminars] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Seminars",seminars);
    fetch("http://localhost:8080/seminars")
    .then(res => {
       return res.json();
    })
    .then((data) => {
       setSeminars(data);
    });
 },[]);

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
              icon={<SearchIcon />} />
            <Input type='search' placeholder='Search' marginLeft={'1vh'} border='1px solid gray' />
          </InputGroup>
        </Container>
        <Container marginTop={'5vh'}>
          <Heading size='mg' textTransform='uppercase' pb='5vh'>
            Izdvojeno
          </Heading>
          <SingleCard />
          <SingleCard />
          <SingleCard />
        </Container>
      </div>
    </div>
  )
}
