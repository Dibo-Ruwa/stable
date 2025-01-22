import React from 'react'
import './AboutUs.css'
import { AboutHeader } from './components/AboutHeader'
import { WSA } from './components/WSA'
import { OurTeam } from './components/OurTeam'
import { JoinUs } from './components/JoinUs'
import Newsletter from '../partnerWithUs/component/newsletter/Newsletter'
import { Sustainability } from './components/sustainability'
export const AboutUs = () => {
  return (
    <div className='AboutUs_Container'>
      <AboutHeader />
      <WSA />
      <Sustainability />
      {/* <OurTeam /> */}
      <JoinUs />
      {/* <Newsletter /> */}
    </div>
  )
}
