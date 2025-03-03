import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ScheduleTime } from "@/component/ScheduleTime/ScheduleTime";
import { ScheduleDate } from "@/component/ScheduleDate/ScheduleDate";
import { toast } from "react-hot-toast";
import { getOneHourFromNow, validateDeliveryTime } from "@/utils/helpers/dateTime";

// Define styled components outside of the component function
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  margin-top: 2rem;
`;

const Title = styled.p`
  color: var(--Ash-100, #8f8f8f);
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

// Styled version of ScheduleTime
const CustomScheduleTime = styled(ScheduleTime)`
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

const CustomScheduleDate = styled(ScheduleDate)`
  gap: 18.912px;
  border-radius: 10.315px;
  padding: 0.7rem;
  background: #f7f7f7 !important;
  box-shadow: 0px 6.802px 15.547px 0px rgba(158, 158, 158, 0.05);
`;

const validateScheduledTime = (selectedDateTime: Date): boolean => {
  const now = new Date();
  const hoursDiff = (selectedDateTime.getTime() - now.getTime()) / (1000 * 60 * 60);
  
  // Changed from 1 to 2 hours
  if (hoursDiff < 2) {
    toast.error("Please select a time at least 2 hours from now");
    return false;
  }
  
  // Must not be more than 30 days ahead
  const thirtyDaysFromNow = new Date();
  thirtyDaysFromNow.setDate(thirtyDaysFromNow.getDate() + 30);
  if (selectedDateTime > thirtyDaysFromNow) {
    toast.error("Cannot schedule more than 30 days in advance");
    return false;
  }

  return true;
};

const validateScheduledDate = (date: string): boolean => {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  
  const selectedDate = new Date(date);
  selectedDate.setHours(0, 0, 0, 0);
  
  // Must be today or future, but not more than 30 days ahead
  const daysDiff = (selectedDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24);
  return daysDiff >= 0 && daysDiff <= 30;
};

interface SchDeliveryOplProps {
  onScheduleChange: (schedule: { date: string; time: string }) => void;
}

export const SchDeliveryOpl: React.FC<SchDeliveryOplProps> = ({ onScheduleChange }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('8:00 AM');

  useEffect(() => {
    onScheduleChange({
      date: selectedDate,
      time: selectedTime
    });
  }, [selectedDate, selectedTime, onScheduleChange]);

  const handleTimeSelect = (time: string) => {
    const selectedDateTime = new Date(`${selectedDate} ${time}`);
    
    if (validateScheduledTime(selectedDateTime)) {
      setSelectedTime(time);
      onScheduleChange({ date: selectedDate, time });
    }
  };

  const handleDateChange = (date: string) => {
    const selectedDateTime = new Date(`${date} ${selectedTime}`);
    
    if (!validateScheduledTime(selectedDateTime)) {
      return;
    }
    
    setSelectedDate(date);
    onScheduleChange({ date, time: selectedTime });
  };

  return (
    <Container>
      <Title>Schedule Delivery</Title>
      <CustomScheduleDate
        className="SelectedDays_ScheduleTimeSetOpt"
        date={selectedDate}
        label="Date"
        onDateChange={handleDateChange}
        InputClassName="checkOutInputDate"
      />
      <ScheduleTime 
        time={selectedTime}
        label="Time"
        onTimeChange={handleTimeSelect}
        IconClassName="SchdeliveryIcAn"
      />
    </Container>
  );
};