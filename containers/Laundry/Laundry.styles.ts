"use client";
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
      min-width: 10px;
      height: 10px;
    }
  }

  .text {
    display: grid;
    /* @media screen and (max-width: 768px) {
    font-size: 16px;
  } */

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

  /* .image {
    width: 100%;
  } */
`;
export const HeroImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: contain;
  z-index: 5;
`;
// export const Rectangle = styled.div`
//   width: 400px;
//   height: 100px;
//   background: var(--color4-20);
//   border-top-left-radius: 20px;
//   border-bottom-left-radius: 20px;
//   position: absolute;
//   right: 0;
//   top: 45%;
//   z-index: 3;

//   @media screen and (max-width: 768px) {
//     /* display: none; */
//     top: 75%;
//     width: 200px;
//     height: 100px;
//   }
// `;

export const HIWSection = styled.div`
  padding: 8%;
`;
export const HIWTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 30px;
  text-align: center;
`;
export const HIWList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const PriceTagSection = styled.div`
  width: 100%;
  padding: 8%;
  background: var(--primary-20);
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;

  .price_sub_section {
    /* width: 30%; */
    display: flex;
    flex-direction: column;
    justify-content: center;

    .save_money{
      display: flex;
      flex-direction: column;
      width: 70%;

      .title {
        font-size: 28px;
        font-weight: bold;
        margin-bottom: 10px;
        width: 50%;

      span {
        color: var(--color4);
      }
    }

    }

    @media screen and (max-width: 768px) {
    align-items: center;
    width: 100%;

    .save_money{
      width: 100%;
      align-items: center;
      text-align: justify;

      .title{
        width: 100%;
        text-align: center;
        
      }
    }
  }
    
  }

  .box {
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius: 20px;
    background: var(--color3-20);
    z-ndex: -1;
    @media screen and (max-width: 768px) {
      width: 80px;
      height: 80px;
    }
  }

  .top {
    position: absolute;
    top: -15px;
    left: -20px;
    transform: rotate(45deg);
  }
  .bottom {
    position: absolute;
    bottom: -15px;
    right: -15px;
    transform: rotate(45deg);
  }

  .imageContainer {
    width: 250px;
    height: 250px;
    position: relative;

    @media screen and (max-width: 768px) {
      width: 200px;
      height: 200px;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 30px;

    .price__text {
      .title {
        font-size: 28px;
        text-align: center;
        font-weight: bold;
        margin-bottom: 10px;

        span {
          color: var(--color4);
        }
      }
    }
  }
`;

export const PlansSection = styled.section`
  padding: 8%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .text__container,
  .calc {
    flex: 1;

    @media screen and (max-width: 768px) {
      width: 100%;
      margin-bottom: 10vh;
    }
  }

  .heading {
    .title {
      font-size: 38px;
      font-weight: bold;
      margin-bottom: 10px;
    }

    p {
      font-size: 18px;
      width: 60%;
      margin-bottom: 10px;
    }
  }

  .benefits {
    width: 60%;
    display: flex;

    flex-direction: column;
    gap: 15px;
    margin-top: 20px;
    .benefit {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      height: auto;
      color: var(--content);

      .icon {
        width: 30px;
        height: auto;
        padding: 5px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        border-radius: 999px;
        background: var(--primary-20);
        color: var(--primary);
      }
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;

    .benefits {
      width: 100%;
      font-size: 16px;
    }

    .heading {
      .title {
        font-size: 24px;
      }

      p {
        font-size: 16px;
        width: 100%;
      }
    }
  }

  .benefit {
    .icon {
      width: 20px;
      height: auto;
      padding: 5px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      border-radius: 999px;
      background: var(--primary-20);
      color: var(--primary);
    }
  }
`;
