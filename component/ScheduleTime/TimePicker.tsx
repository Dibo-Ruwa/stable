"use client";
import React from "react";
import styled from "styled-components";

interface TimePickerProps {
  selectedTime: string;
  onTimeChange: (time: string) => void;
}

const TimePickerContainer = styled.div`
  // ...existing styles...
`;

const TimePicker: React.FC<TimePickerProps> = ({ selectedTime, onTimeChange }) => {
  const times = [
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
  ];

  return (
    <TimePickerContainer>
      {times.map((time) => (
        <button
          key={time}
          onClick={() => onTimeChange(time)}
          className={`time-option ${selectedTime === time ? "selected" : ""}`}
        >
          {time}
        </button>
      ))}
    </TimePickerContainer>
  );
};

export default TimePicker;
