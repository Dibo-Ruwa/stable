"use client";
import React from "react";
import styled from "styled-components";

interface TimePickerProps {
  onTimeChange: (time: string) => void;
}

const TimePickerContainer = styled.div`
  padding: 1rem;
  background: var(--White, #fefefe);
  border-radius: 8px;
  box-shadow: 0px 6.802px 15.547px 0px rgba(158, 158, 158, 0.05);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.8rem;
  position: absolute;
  z-index: 100;
  width: 100%;
  max-height: 300px;
  overflow-y: auto;

  .time-option {
    padding: 0.8rem;
    text-align: center;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s;
    background: #f7f7f7;
    color: #8f8f8f;
    font-family: Poppins;
    font-size: 14px;
    font-weight: 400;

    &:hover {
      background: rgba(75, 177, 73, 0.1);
      color: #4bb149;
    }

    &.selected {
      background: rgba(75, 177, 73, 0.2);
      color: #4bb149;
      font-weight: 500;
    }
  }
`;

const TimePicker: React.FC<TimePickerProps> = ({ onTimeChange }) => {
  const times = [
    "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM",
    "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM",
    "4:00 PM", "5:00 PM"
  ];

  return (
    <TimePickerContainer>
      {times.map((time) => (
        <button
          key={time}
          onClick={() => onTimeChange(time)}
          className="time-option"
        >
          {time}
        </button>
      ))}
    </TimePickerContainer>
  );
};

export default TimePicker;
