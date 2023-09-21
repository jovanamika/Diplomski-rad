import React from 'react'
import './Profil.scss'
import Sidebar from './Sidebar'
import InformationCard from './InformationCard'

export default function Profil() {
  return (
    <div className="profil-container">
      <div className="profil-container__left">
        <Sidebar />
      </div>
      <div className="profil-container__right">
        <div className="profil-content">
          <InformationCard />
        </div>
      </div>
    </div>
  )
}
