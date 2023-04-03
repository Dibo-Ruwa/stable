import React from 'react'
import { Container, Header1, Header2, Sec1, Sec2 } from './styles'
import { FaTruck, FaPercentage, FaThumbsUp } from 'react-icons/fa'
import logo from '../../assets/logo.svg';
import {  TbIroning3 } from 'react-icons/tb';
import {  MdOutlineLocalLaundryService, MdDryCleaning } from 'react-icons/md';
import iron from "../../assets/steam iron 1.png";
import laundry from "../../assets/washer.png";
import dryer from "../../assets/dryer.png";

const Services = [
  {
    imageSrc: iron,
    imageAlt: "Image 1",
    icon: <TbIroning3 />,
    title: "Steam iron",
    sub: "Pellentesque luctus auctor odio, purus convallis eleifend. Donec volutpat arcu et nulla condimentum.",
  },
  {
    imageSrc: laundry,
    imageAlt: "Image 2",
    icon: <MdOutlineLocalLaundryService />,
    title: "Laundry Service",
    sub: "Pellentesque luctus auctor odio, purus convallis eleifend. Donec volutpat arcu et nulla condimentum.",
  },
  {
    imageSrc: dryer,
    imageAlt: "Image 3",
    icon: <MdDryCleaning/>,
    title: "Dry Cleaning",
    sub: "Pellentesque luctus auctor odio, purus convallis eleifend. Donec volutpat arcu et nulla condimentum.",
  },
];


const trustServices = [
  {
    icon: <FaTruck />,
    title: "Free pickup & delivery",
    sub: "We know you are busy, we will pick and deliver your laundry for free",
  },
  {
    icon: <FaPercentage />,
    title: "Affordable package",
    sub: "Enjoy hassle-free laundry with freshly laundered clothes every day, at a budget-friendly price.",
  },
  {
    icon: <FaThumbsUp />,
    title: "100% satisfaction",
    sub: "Experience impeccable cleaning and laundry care with our 100% satisfaction guarantee",
  },
];

const Index = () => {
  return (
    <Container id="about">
      <Sec1>
        <Header1>Expert cleaning service you can trust.</Header1>
        <div className="cards">
          {trustServices.map((service, index) => (
            <div className="card" key={index}>
              <div className="icon">{service.icon}</div>
              <div className="title">{service.title}</div>
              <div className="sub">{service.sub}</div>
            </div>
          ))}
        </div>
      </Sec1>
      <Sec2>
        <Header2>
          <img src={logo} alt="" />
          <h5>Our Services</h5>
          <p>Flexible, fast and reliable laundry services for your needs.</p>
        </Header2>
        <div className="cards">
        {Services.map((service, index) => (
            <div className="card" key={index}>
             <div className="image">
              <img src={service.imageSrc} alt={service.imageAlt} />
              <div className="icon">{service.icon}</div>
            </div>
            <div className="info">
              <div className="title">{service.title}</div>
              <div className="sub">{service.sub}</div>
            </div>
          </div>
           
          ))}
          
           
        </div>
      </Sec2>
    </Container>
  )
}

export default Index
