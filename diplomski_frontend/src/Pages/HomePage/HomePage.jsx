import React from 'react'
import './HomePageStyle.css'
import HeaderImage from './HeaderImage'
import SplitScreenImg from './SplitScreenImg'
import SliderContent from './SliderContainer/SliderContent'

export default function HomePage() {
  return (
   <div>
    <SplitScreenImg/>
    <SliderContent/>
    <HeaderImage/>
   </div>
  )
}
