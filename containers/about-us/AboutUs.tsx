import React from 'react'
import './AboutUs.css'
import { AboutHeader } from './components/AboutHeader'
import { WSA } from './components/WSA'
export const AboutUs = () => {
  return (
    <div className='AboutUs_Container'>
      <AboutHeader />
      <WSA />
    </div>
  )
}
