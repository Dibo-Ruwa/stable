"use client";
import { FC, ReactNode } from "react";
import styled from "styled-components";

interface HeroProps {
  bg: string;
  children: ReactNode;
}

const Container = styled.div<{ background: string }>`
  width: 100%;
  background: ${({ background }) => `var(--${background})`};
  padding: 17vh 8% 8%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    gap: 30px;
 
  }

  .hero__text {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 30px;

    @media screen and (max-width: 900px) {
      width: 100%;
      margin-bottom: 30px;
      display: flex;
      flex-direction: column;
    }

    .title {
      font-size: 48px;
      font-weight: bold;
      @media screen and (max-width: 900px) {
        font-size: 28px;
      }
    }

    .sub_title{
     
      @media screen and (max-width: 900px) {
        font-size: 22px;
      }
    }

    .subtitle{
      font-size: 22px;
      span{
        color: var(--primary);
        font-weight: 700;
      }
    }

    p {
      font-size: 20px;
      margin: 20px 0;
      @media screen and (max-width: 900px) {
        font-size: 16px;
        line-height: 150%;
      }
    }

    .btn_grp {
      display: flex;
      gap: 30px;

     

      @media screen and (max-width: 900px) {
        flex-direction: column-reverse;
      }

      .contact {
        display: flex;
        gap: 5px;
        align-items: center;
        .withIcon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: var(--primary);
          color: white;
          font-size: 20px;
          border: none;
          outline: none;
        }

        .content {
          display: grid;
          grid-gap: 5px;

          .cell {
            font-weight: bold;
          }
        }
      }
    }
  }
`;

const HeroContainer: FC<HeroProps> = ({ children, bg }) => {
  return <Container background={bg}>{children}</Container>;
};

export default HeroContainer;
