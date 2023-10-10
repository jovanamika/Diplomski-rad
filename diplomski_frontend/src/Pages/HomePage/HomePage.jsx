import React from 'react'
import './HomePageStyle.css'
import HeaderImage from './HeaderImage'
import SplitScreenImg from './SplitScreenImg'
import SliderContent from './SliderContainer/SliderContent'

export default function HomePage() {
  return (
    <div className='main-container'>
      <div className="container">
        <SplitScreenImg />
      </div>
      <HeaderImage />
      <div className="container">
        <SliderContent />
      </div>
    </div>
  )
}
