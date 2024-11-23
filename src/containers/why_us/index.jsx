import React from "react";
import Img from '../../components/why_us_img'
import logo from '../../assets/logo.svg';
import { Container, Header, Text } from "./styles/styles";
import { benefits } from "../../exports";



export default function WhyUs() {
  return (
    <Container id="why_us">
      <Img />
      <Text>
        <Header>
          <img src={logo} alt="" />
          <small>Why choose us</small>
          <h5>Our Laundry Services Benefits</h5>
          <p>Our laundry services save you time, properly care for your clothes, offer added convenience with pick-up and delivery options, and provide expert staff ensuring clothes are returned in pristine condition. </p>
        </Header>
        <div className="benefits">
          {benefits.map((benefit, index) => (
            <div className="benefit" key={index}>
              <img src={benefit.imgSrc} alt={benefit.imgAlt} />
              <h5 className="title">{benefit.title}</h5>
              <p className="sub">{benefit.subtitle}</p>
            </div>
          ))}
        </div>
      </Text>
    </Container>
  );
}
