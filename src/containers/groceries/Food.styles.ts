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

// export const HeroListItem = styled.div`
//   display: flex;
//   align-items: flex-start;
//   gap: 10px;
//   font-size: 18px;
//   .dot {
//     width: 20px;
//     min-width: 20px;
//     height: 20px;
//     border-radius: 50%;
//     background: var(--primary);
//   }
// `;
export const HeroImageContainer = styled.div`
  width: 500px;
  height: 600px;
  position: relative;

  @media screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  /* .image {
    width: 100%;
  } */
`;
export const HeroImage = styled(Image)`
  width: 100%;
  height: 100%;
  margin: auto;
  object-fit: contain;
`;

export const HWWSecetion = styled.div`
  padding: 5% 4%;

   @media screen and (max-width: 768px) {
    margin-top: 30px;
  }
  
  .title {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 30px;
    
  }
  .title_header{
    text-align: center;
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 30px;

  }

  .content{
    display: flex;
    width: 100%;
    gap: 30px;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }


     .save_time{
      display: flex;
      flex-direction: column;
      /* justify-content: center; */
      /* align-items: center; */
      margin-top: 20px;
      /* width: 100%; */
      gap: 10px;
      width: 30%;
      

      h3{
        font-size: 28px;
      }

      @media screen and (max-width: 768px) {
        width: 90%;
        align-items: center;
        margin-bottom: 20px;

        h3{
          text-align: center;
          font-size: 24px;
        }
      }
    }

  }
 
 
`;
export const HWWList = styled.div`
  display: flex;
/*   
  flex-wrap: wrap;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); */
  grid-gap: 50px;
  justify-content: space-between;
  width: 60%;

  @media screen and (max-width: 768px) {
    /* grid-template-columns: repeat(auto-fit, minmax(100%, 1fr)); */
    flex-direction: column;
    width: 90%;
    gap: 30px;
  }
`;
export const HWWCard = styled.div`
  width: 100%;
  /* max-width: 370px; */
  height: 100%;
  padding: 15px;
  border-radius: 10px;
  background: var(--primary-20);

  .image {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    background: var(--primary-20);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }

  .title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 12px;
  }

  p {
    font-size: 14px;
    line-height: 130%;
    color: #333;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    .image {
      width: 80px;
      height: 80px;
    }

    .title {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 12px;
    }

    p {
      font-size: 16px;
    }
  }
`;

export const MenuSection = styled.section`
  /* padding: 5% 8%; */
  height: auto;

  .tag {
    .dot {
      width: 6px;
      height: 6px;
      border-radius: 10px;
      background: var(--primary);
    }

    width: max-content;
    display: flex;
    gap: 5px;
    margin: 20px auto;
    font-size: 16px;
    align-items: center;
    padding: 7px 12px;
    background: var(--primary-20);
    border: 1px solid var(--primary);
    border-radius: 20px;
  }
`;

export const MenuTitle = styled.h3`
  text-align: center;
  font-size: 38px;
  font-weight: bold;
  margin-bottom: 10vh;
`;
export const MenuContainer = styled.div``;

export const CTAButtonWrapper = styled.div``;

export const CTAIcon = styled(RiArrowRightSLine)`
  margin-left: 0.5rem;
  font-size: 15px;
  display: none;
  transition: display 0.3s;
`;

export const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  font-size: 20px;

  /* background-color: var(--primary-20); */
  color: var(--color4);
  /* padding: 5px 10px; */
  text-decoration: none;
  border-radius: 20px;
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
  transition: background-color 0.3s;

  &:hover {
    /* background-color: #2563eb; */

    ${CTAIcon} {
      display: block;
      margin-top: 4px;
      
    }
  }
`;