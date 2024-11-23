import React from "react";
import styled from "styled-components";
import { AboutGroceries } from "../about-groceries/AboutGroceries";
import { CTADelivery } from "../cta-delivery/CTADelivery";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
import { FaAngleRight } from "react-icons/fa";

// Styled components
const Container = styled.section`
  width: 100%;
`;

const DisplayImg = styled.div`
  /* additional styles can be added here if needed */
`;

const OnDisplayImg = styled.img`
  height: 329px;
  border-radius: 20px;
  width: 100%;
  flex-shrink: 0;
  object-fit: cover;
`;

const SelectedImg = styled.div`
  display: flex;
  gap: 16px;
  justify-content: start;
  margin-top: 1rem;
  overflow-x: auto;
`;

const OnSelectedImg = styled.img`
  width: 27%;
  height: 120px;
  flex-shrink: 0;

   @media (max-width: 768px) {
    height: 100px;
  }

`;

const PrevBtn = styled(TfiAngleLeft)`
  display: flex;
  width: 2rem;
  height: 2rem;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 100px;
  background: #eaebee;
`;

const NextBtn = styled(TfiAngleRight)`
  display: flex;
  width: 2rem;
  height: 2rem;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 100px;
  background: #eaebee;
`;

export const DisplayGroceries = () => {
  return (
    <Container>
      <DisplayImg>
        <OnDisplayImg src="/images/Frame 2610163.png" alt="on display" />
      </DisplayImg>
      <SelectedImg>
        <PrevBtn />
        <OnSelectedImg
          src="/images/151e2d46640e246f42f769231cc76bab.png"
          alt="on selected"
        />
        <OnSelectedImg
          src="/images/d8cc774cbb454c39b0c0a291406db198.png"
          alt="on selected"
        />
        <OnSelectedImg
          src="/images/d8cc774cbb454c39b0c0a291406db198.png"
          alt="on selected"
        />
        <OnSelectedImg
          src="/images/d8cc774cbb454c39b0c0a291406db198.png"
          alt="on selected"
        />
        <OnSelectedImg
          src="/images/7440670515731ae400623ae77f2ecbd7.png"
          alt="on selected"
        />
        <NextBtn />
      </SelectedImg>
      <AboutGroceries />
      <CTADelivery />
    </Container>
  );
};
