import React from 'react'
import { Container } from './styles'
import img from '../../assets/one.png'
import star from '../../assets/Star 1.svg'
import scribble from '../../assets/scribble.svg'
import scribbleC from '../../assets/scribble_circles.svg'

const Index = () => {
  return (
    <Container>
      <img src={img} alt="dibo_wura" className="img"/>
      <div className="star svg">
        <img src={star} alt="" />
      </div>
      <div className="scribble svg">
        <img src={scribble} alt="" />
      </div>
      <div className="scribbleC svg">
        <img src={scribbleC} alt="" />
      </div>
    </Container>
  )
}

export default Index
