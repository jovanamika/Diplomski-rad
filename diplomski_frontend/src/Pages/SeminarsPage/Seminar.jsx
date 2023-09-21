import React from 'react'
import Seminars from './Seminars'
import './Seminar.scss'
import { SearchIcon } from '@chakra-ui/icons'
import { IconButton, Container, InputGroup, Input, Heading} from '@chakra-ui/react'

import news from '../../Assets/Img/news.jpg'
import SingleCard from './SingleCard'

export default function Seminar() {

  const cardData = [
    {
      image: news,
      title: 'Title for card 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
    {
      image: news,
      title: 'Title for card 2',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      image: news,
      title: 'Title for card 3',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      image: news,
      title: 'Title for card 4',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      image: news,
      title: 'Title for card 5',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit...",
    }
  ]; const image = { news };
  const title = 'Title for card 1';
  const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...';
  return (
    <div className="seminar-container">
      <div className="seminar-container__left">
        {cardData.map((card, index) => (
          <div className="seminar-content">
            <Seminars key={index}
              image={card.image}
              title={card.title}
              description={card.description}
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
