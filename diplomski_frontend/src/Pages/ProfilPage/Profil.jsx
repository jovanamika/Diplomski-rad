import React from 'react'
import './Profil.scss'
import Sidebar from './Sidebar'

export default function Profil() {
  return (
    <div className="profil-container">
      <div className="profil-container__left">
        <Sidebar/>
      </div>
      <div className="profil-container__right">
        <p>Desno</p>
      </div>
    </div>
  )
}
