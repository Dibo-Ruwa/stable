import React from "react";
import styled from "styled-components";
import { LuCalendarDays } from "react-icons/lu";
import { BsClock } from "react-icons/bs";
import { TfiAngleDown } from "react-icons/tfi";

const SchdeliveryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  margin-top: 2rem;
`;

const SchdeliveryTitle = styled.p`
  color: var(--Ash-100, #8f8f8f);
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const SchdeliverySetDateTimer = styled.div`
  width: 100%;
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 22px;
  margin-bottom: 1rem;
  padding: 13px 18px 18px 19px;
  flex-shrink: 0;
  border-radius: 11.304px;
  background: #f7f7f7;
  box-shadow: 0px 7.913px 18.086px 0px rgba(158, 158, 158, 0.05);
`;

const SchdeliveryIcDaAg = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const SchdeliveryIcAn = styled.div`
  display: flex;
  cursor: pointer;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 100px;
  background: rgba(234, 235, 238, 0.49);
`;

const SchdeliveryIcon = styled.div`
  display: flex;
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  color: #292d32;
`;

const SchdeliveryDaAug = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
`;

const SchdeliveryDaAugText = styled.p`
  color: var(--disabled-color, #767575);
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const SchdeliveryDaAugDate = styled.p`
  color: var(--Black-100, #2a2a2a);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const SchDeliveryOpl = () => {
  return (
    <SchdeliveryContainer>
      <SchdeliveryTitle>Schedule Delivery (optional)</SchdeliveryTitle>
      <SchdeliverySetDateTimer>
        <SchdeliveryIcDaAg>
          <SchdeliveryIcon as={LuCalendarDays} />
          <SchdeliveryDaAug>
            <SchdeliveryDaAugText>Date</SchdeliveryDaAugText>
            <SchdeliveryDaAugDate>17, August 2024</SchdeliveryDaAugDate>
          </SchdeliveryDaAug>
        </SchdeliveryIcDaAg>
        <SchdeliveryIcAn>
          <TfiAngleDown />
        </SchdeliveryIcAn>
      </SchdeliverySetDateTimer>
      <SchdeliverySetDateTimer>
        <SchdeliveryIcDaAg>
          <SchdeliveryIcon as={BsClock} />
          <SchdeliveryDaAug>
            <SchdeliveryDaAugText>Time</SchdeliveryDaAugText>
            <SchdeliveryDaAugDate>12:00 AM</SchdeliveryDaAugDate>
          </SchdeliveryDaAug>
        </SchdeliveryIcDaAg>
        <SchdeliveryIcAn>
          <TfiAngleDown />
        </SchdeliveryIcAn>
      </SchdeliverySetDateTimer>
    </SchdeliveryContainer>
  );
};
