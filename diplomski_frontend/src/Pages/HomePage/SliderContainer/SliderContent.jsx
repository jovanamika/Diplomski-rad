import React from 'react'
import Slider from './Slider'
import "./Slider.scss"

export default function SliderContent() {
  return (
    <div className="slider-container">
      <h1>Novosti</h1>
      <div className = "content">
        <Slider/>
      </div>
    </div>
  )
}
