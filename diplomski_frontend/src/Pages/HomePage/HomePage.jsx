import React from 'react'
import './HomePageStyle.css'
import HeaderImage from './HeaderImage'
import SplitScreenImg from './SplitScreenImg'
import SliderContent from './SliderContainer/SliderContent'
import useAuth from "../../Hooks/useAuth"

export default function HomePage() {
  const {auth, setAuth} = useAuth();
  console.log("Auth",auth);
  console.log("hoME");
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
