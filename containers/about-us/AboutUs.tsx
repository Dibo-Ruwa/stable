import React from 'react'
import './AboutUs.css'
import { AboutHeader } from './components/AboutHeader'
import { WSA } from './components/WSA'
import { OurTeam } from './components/OurTeam'
import { JoinUs } from './components/JoinUs'
import Newsletter from '../partnerWithUs/component/newsletter/Newsletter'
export const AboutUs = () => {
  return (
    <div className='AboutUs_Container'>
      <AboutHeader />
      <WSA />
      <OurTeam />
      <JoinUs />
      <Newsletter />
    </div>
  )
}
