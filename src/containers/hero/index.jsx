import React from 'react'
import { BtnGrp, Container, Text } from './styles'
import Img from '../../components/hero_img'
import Button from '../../components/button'

const Index = () => {
  return (
    <Container id="home">
      <Text>
        <h1>Let us take care of your laundry today!</h1>
        {/* <h3>Dibo Ruwa is the Nigeria's #1 enviromentally friendly laundary pickup and delivery service.</h3> */}
        <p>Say goodbye to laundry day hassle and hello to fresh, clean clothes delivered right to your doorstep.</p>

        {/* <p className='order'>Order now and get 30% discount for the next 6 weeks.</p> */}
        {/* <p className='order'>Order now and get 30% discount for the next 6 weeks.</p> */}
        <p className='order'> Enjoy our best price ever starting from <span>N180</span>, including free pickup and delivery 👉 <span className="order-now" onClick={() => {window.open("https://wa.link/fjurh5")}}>order now!</span></p>

        <BtnGrp>
        <Button size="lg" color={`var(--primary)`}  text="Get Started" />
        <Button size="lg" color={"#000"} bordered={true} text="Order now"  />
        </BtnGrp>
      </Text>
      <Img/>
    </Container>
  )
}

export default Index
