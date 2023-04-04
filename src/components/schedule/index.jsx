import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const FormContainer = styled(motion.form)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.label`
  margin: 8px;
  font-size: 16px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin: 8px;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

const Button = styled(motion.button)`
  margin: 16px;
  padding: 8px 16px;
  border-radius: 8px;
  background-color: #007aff;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
`;

const initialValues = {
  startTime: "",
  endTime: "",
};

function SchedulePickupForm() {
  const [formData, setFormData] = useState(initialValues);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = "2348148918529"; // Replace with your WhatsApp account phone number
    const messageText = `Schedule Pickup\nStart Time: ${formData.startTime}\nEnd Time: ${formData.endTime}`;
    const encodedMessageText = encodeURIComponent(messageText);
    const waLink = `https://api.whatsapp.com/send?phone=${phoneNumber}?text=${encodedMessageText}`;
    window.open(waLink);
    setFormData(initialValues);
  };

  return (
    <FormContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <InputContainer>
        <Label htmlFor="startTime">Start Time</Label>
        <Input
          type="datetime-local"
          id="startTime"
          name="startTime"
          value={formData.startTime}
          onChange={handleChange}
        />
      </InputContainer>
      <InputContainer>
        <Label htmlFor="endTime">End Time</Label>
        <Input
          type="datetime-local"
          id="endTime"
          name="endTime"
          value={formData.endTime}
          onChange={handleChange}
        />
      </InputContainer>
      <Button
        type="submit"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleSubmit}
      >
        Schedule Pickup
      </Button>
    </FormContainer>
  );
}

export default SchedulePickupForm;
