import React from 'react'
import { Container } from './styles'
import img from '../../assets/why_us_img.png'
import star from '../../assets/Star 1.svg'
import full from '../../assets/Last 24 Hours.svg'


const Index = () => {
  return (
    <Container>
      <img src={img} alt="dibo_wura" />
      <div className="full__service">
        <img src={full} alt="" />
        <div className="info">
        <p>24/7 Service</p>
        <small>Free access</small>
        </div>
        
      </div>
      <div className="star svg">
        <img src={star} alt="" />
      </div>
    </Container>
  )
}

export default Index
