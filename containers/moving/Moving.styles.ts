import { HiBars3 } from 'react-icons/hi2';
"use client";
import Link from "next/link";
import { RiArrowRightSLine } from "react-icons/ri";

import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  .ctaBtn {
    width: 200px;
    @media screen and (max-width: 768px) {
      width: 100%;
      button {
        width: 100%;
      }
    }
  }
`;

export const HeroList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 20px 0;
`;
export const HeroListItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 18px;

  .dot {
    width: 20px;
    min-width: 20px;
    height: 20px;
    border-radius: 50%;
    background: var(--primary);

     @media screen and (max-width: 768px) {
      width: 10px;
      height: 10px;
      min-width: 10px;
    }
  }

  .text {
    display: grid;
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
    align-items: baseline;
  }
`;

export const HeroImageContainer = styled.div`
   width: 500px;
  height: 600px;
  position: relative;

  @media screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;
export const HeroImage = styled(Image)`
  width: 100%;
  height: 100%;
  margin: auto;
  object-fit: contain;
`;

export const WYGSection = styled.div`
  
 .heading {
  display: flex;
  justify-content: center;
  margin-top: 30px;
    .title {
      font-size: 28px;
      font-weight: bold;
      margin-bottom: 0px;
    }
    @media screen and (max-width: 768px) {
      .title {
        font-size: 28px;
        font-weight: bold;
        margin-bottom: 20px;
      }
    }
  }

  .content{
    padding-left: 6%;
    padding-right: 6%;
    padding-top: 20px;
    padding-bottom: 4%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 30px;

  .text_container {
    /* flex: 1; */
    display: flex;
    justify-content: center;
    
    @media screen and (max-width: 768px) {
      /* align-items: center; */
      text-align: center;
  }
  }

  .save_time{
    margin-top: 15px;
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    h3{
      font-size: 24px;
    }
    @media screen and (max-width: 768px) {
      .sub_button{
        display: flex;
        justify-content: center;

    }
  }
   
    
  }


  p {
    font-size: 18px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
}
`;
export const CTAIcon = styled(RiArrowRightSLine)`
  margin-left: 0.5rem;
  font-size: 15px;
  display: none;
  transition: display 0.3s;
`;

export const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  font-size: 18px;

  /* background-color: var(--primary-20); */
  color: var(--color4);
  /* padding: 10px 10px; */
  width: 160px;
  text-decoration: none;
  border-radius: 20px;
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
  transition: background-color 0.3s;

  &:hover {
    ${CTAIcon} {
      display: block;
      margin-top: 3px;
    }
  }

   @media screen and (max-width: 768px) {
      justify-content: center;
  }
`;

export const CTAButtonWrapper = styled.div``;


export const BenefitList = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 4%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const SubscriptionSection = styled.section`
  padding: 5% 8%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  background: var(--primary-20);

  .mover_top{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
    font-size: 26px;
    font-weight: 600;
  }
  p{
    margin-top: 10px;
  }
  }

  

  @media screen and (max-width: 768px) {
    flex-direction: column;

    h2 {
      width: 100%;
      font-size: 18px;
    }

     .mover_top{
       text-align: center;

    h2 {
    font-size: 20px;
    font-weight: 600;
  }
  p{
    margin-top: 10px;
    font-size: 14px;
  }
  }
  }
`;

export const ContactForm = styled.form`
display: flex;
gap: 10px;
flex-direction: column;

margin-bottom: 20px;
`;
export const LocationInput = styled.input`
  padding: 10px 15px;
  background: var(--primary-20);
  outline: none;
  border: none;
  border-radius: 8px;

`;

export const SubscriptionList = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 100%;
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const SubscriptionCard = styled.div`
  border-radius: 15px;
  padding: 20px;
  background: #fff;
  /* min-height: 30vh; */
  height: 100%;
  display: flex;
  flex-direction: column;

  .image {
    width: 60px;
    height: 60px;
    border-radius: 15px;
    padding: 10px;
    background: var(--primary-20);
    margin-bottom: 20px;
  }

  .title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    margin: 10px 0 20px;
    color: var(--content);
  }

  .features {
    list-style: none;
    display: grid;
    grid-gap: 10px;
    margin: 20px 0;

    li {
      display: flex;
      align-items: center;
      gap: 10px;
      color: var(--content);

      .dot {
        width: 10px;
        height: 10px;
        background: var(--primary);
        border-radius: 50%;
      }
    }
  }

  .cta {
    display: flex;
    background: var(--primary);
    color: white;
    text-decoration: none;
    align-items: center;
    gap: 10px;

    .icon {
      display: none;
    }

    &:hover {
      .icon {
        display: block;
      }
    }
  }

  button {
    margin-top: auto;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
