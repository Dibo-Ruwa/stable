"use client";

import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div``;

export const HeroList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 30px 0;
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
  object-fit: cover;

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
  object-fit: contain;
`;

export const ServicesSection = styled.div`
  padding: 8%;

  header {
    margin: auto;
    text-align: center;
    margin-bottom: 20px;
    .title {
      font-size: 38px;
      font-weight: bold;
      margin-bottom: 10px;
    }

    .subtitle {
      font-size: 20px;
      color: var(--content);
    }
  }
  @media (max-width: 900px) {
    header {
      width: 100%;
      .title {
        font-size: 28px;
        font-weight: bold;
        margin-bottom: 10px;
      }

      .subtitle {
        font-size: 16px;
      }
    }
  }
`;

export const ServiceList = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-around;
  flex-wrap: wrap;
  position: relative;
  height: auto;
  width: 100%;

  margin: 40px 0;

  .pattern {
    position: absolute;
    right: 0;
    bottom: -7%;
    z-index: 2;
  }

  @media (max-width: 900px) {
    flex-wrap: wrap;
  }
`;

export const WhyChooseUsSection = styled.div`
  padding: 5% 8%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 900px) {
    flex-direction: column;

    gap: 30px;
  }
`;
export const WhyChooseUsImageContainer = styled.div`
  flex: 1;
`;
export const WhyChooseUsImage = styled.div`
  width: 350px;
  height: 350px;
  margin: auto;
  border-radius: 50%;
  background: var(--primary-20);
  position: relative;
  margin-bottom: 30px;
 

  .image {
    width: 350px;
    height: 350px;
    position: relative;
    overflow: hidden;
    border-radius: 50%;
    img {
     
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .ball {
    position: absolute;
    z-index: 999;
  }

  .blueBall {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: var(--color4);
    top: 60px;
    left: 15px;
  }
  .yellowBall {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: var(--color2);
    top: 20px;
    right: 20%;
  }
  .purpleBall {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(--color3);
    bottom: 20px;
    right: 12%;
  }
`;
export const WhyChooseUsText = styled.div`
  flex: 1;
`;
export const WhyChooseUsColored = styled.h3`
  font-size: 40px;

  color: var(--primary);
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
`;
export const WhyChooseUsTitle = styled.h2`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
  @media screen and (max-width: 900px) {
    font-size: 24px;
  }
`;
export const WhyChooseUsContent = styled.ul`
  font-size: 20px;
  line-height: 130%;
  margin: 20px 0;

  list-style-type: none;

  li {
    display: flex;
    align-items: center;
    /* justify-content: center; */
    /* align-items: flex-start; */
    gap: 10px;
    font-size: 18px;
    .dot {
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background: var(--primary);

        @media screen and (max-width: 768px) {
          width: 22px;
          height: 12px;
        }
      
    }
  &.ready{
    // margin-top: 20px;
  }
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;
export const FeedBackSection = styled.div`
  padding: 5% 8%;
  .title {
    font-size: 48px;
    font-weight: bold;
    margin-bottom: 10vh;
    @media screen and (max-width: 900px) {
      margin-bottom: 6vh;
      font-size: 30px;
    }
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;

    .image {
      border-radius: 20px;
      overflow: hidden;
      width: 450px;
      height: 300px;
      position: relative;

      @media screen and (max-width: 768px) {
        width: 300px;
        height: 200px;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .carousel {
      flex: 1;

      @media screen and (max-width: 900px) {
        width: 100%;
      }
    }

    @media screen and (max-width: 900px) {
      flex-direction: column;
      gap: 30px;
    }
  }
`;

export const FaqSection = styled.div`
  padding: 5% 8%;

  .container {
    width: 100%;
    height: auto;
    background: var(--primary-20);
    border-radius: 40px;
    padding: 5%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    @media screen and (max-width: 900px) {
      border-radius: 12px;
      flex-direction: column;
      gap: 30px;
      padding: 20px;
    }
  }
`;
export const FaqAccordionList = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 900px) {
    width: 100%;
  }
  gap: 15px;
`;
