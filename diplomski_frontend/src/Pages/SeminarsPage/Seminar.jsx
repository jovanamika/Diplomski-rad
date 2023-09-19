import React from 'react'
import Seminars from './Seminars'
import './Seminar.scss'
import { SearchIcon } from '@chakra-ui/icons'
import { IconButton, Container, InputGroup, Input, Heading } from '@chakra-ui/react'
import HeaderImage from '../HomePage/HeaderImage'
import SliderCards from '../HomePage/SliderContainer/SliderCards'
import news from '../../Assets/Img/news.jpg'

export default function Seminar() {
  const image = {news};
  const title =  'Title for card 1';
  const description ='Lorem ipsum dolor sit amet, consectetur adipiscing elit...';
  return (
    <div className="seminar-container">
      <div className="seminar-container__left">
        <div className="seminar-content">
          <Seminars />
        </div>
        <div className="seminar-content">
          <Seminars />
        </div>
        <div className="seminar-content">
          <Seminars />
        </div>
        <div className="seminar-content">
          <Seminars />
        </div>
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
          
        </Container>
      </div>
    </div>
  )
}
