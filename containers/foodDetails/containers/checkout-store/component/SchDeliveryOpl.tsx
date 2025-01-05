import React, { useState } from "react";
import styled from "styled-components";
import { ScheduleTime } from "@/component/ScheduleTime/ScheduleTime";
import { ScheduleDate } from "@/component/ScheduleDate/ScheduleDate";

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

// Styled version of ScheduleTime
const StyledScheduleTime = styled(ScheduleTime)`
  gap: 18.912px;
  border-radius: 10.315px;
  padding: 0.7rem;
  background: #f7f7f7 !important;
  box-shadow: 0px 6.802px 15.547px 0px rgba(158, 158, 158, 0.05);

  .SchdeliveryIcAn {
    display: flex;
    cursor: pointer;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 100px;
    background: rgba(234, 235, 238, 0.49);
  }
`;

const StyledScheduleDate = styled(ScheduleDate)`
  gap: 18.912px;
  border-radius: 10.315px;
  padding: 0.7rem;
  background: #f7f7f7 !important;
  box-shadow: 0px 6.802px 15.547px 0px rgba(158, 158, 158, 0.05);
`;

interface SchDeliveryOplProps {
  onScheduleChange: (schedule: { date: string; time: string }) => void;
}

export const SchDeliveryOpl: React.FC<SchDeliveryOplProps> = ({ onScheduleChange }) => {
  const [pickupTime, setPickupTime] = useState<string>("8:00 AM");
  const [pickupDate, setPickupDate] = useState<string>("dd/mm/yyyy");

  const handleTimeChange = (time: string) => {
    setPickupTime(time);
    onScheduleChange({ date: pickupDate, time });
  };

  const handleDateChange = (date: string) => {
    setPickupDate(date);
    onScheduleChange({ date, time: pickupTime });
  };

  return (
    <SchdeliveryContainer>
      <SchdeliveryTitle>Schedule Delivery (optional)</SchdeliveryTitle>
      <StyledScheduleDate
        className="SelectedDays_ScheduleTimeSetOpt"
        date={pickupDate}
        label="Date"
        onDateChange={handleDateChange}
      />
      <StyledScheduleTime
        time={pickupTime}
        label="Time"
        className="SelectedDays_ScheduleTimeSetOpt"
        iconClass="SchdeliveryIcAn"
        onTimeChange={handleTimeChange}
      />
    </SchdeliveryContainer>
  );
};