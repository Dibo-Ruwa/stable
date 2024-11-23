"use client";

import NotificationModal from "@/component/NotificationModal";
import Input from "@/component/ui/input/Input";
import useAuth from "@/hooks/useAuth";
import useForm from "@/hooks/useForm";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  padding: 20vh 8%;
  min-height: 80vh;
`;
export const Header = styled.div`
  h3 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  p {
    font-size: 18px;
  }
`;
export const Form = styled.form`
  border: 1px solid var(--primary);
  padding: 20px;
  border-radius: 12px;
  display: grid;
  gap: 20px;
  max-width: 555px;
  margin: auto;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const InputField = styled.div``;
export const Button = styled.button`
  outline: none;
  padding: 15px;
  border-radius: 8px;
  background: var(--primary);
  color: white;
  border: none;
  cursor: pointer;
`;

const ForgotPassword = () => {
  const {
    forgotPassword,
    showModal,
    modalErrorType,
    modalMessage,
    closeModal,
  } = useAuth();

  const onSubmit = async (formData: { [key: string]: string }) => {
    try {
      forgotPassword(formData);
    } catch (error) {
      toast.error("An error occurred while updating the profile");
      // Handle the error or display an error message
    }
  };
  const { formData, handleChange, handleSubmit, resetForm, errors } = useForm(
    {
      email: "",
    },
    onSubmit
  );
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Header>
          <h3>Forgot your Password</h3>
          <p>please enter your registered email to reset yor password.</p>
        </Header>

        <InputField>
          <Input
            label="Email"
            name="email"
            type="email"
            id="id"
            value={formData.email}
            onChange={(e) => handleChange(e, e.target.name)}
          />
        </InputField>

        <Button type="submit" disabled={formData.email === ""}>
          Submit
        </Button>
      </Form>

      {showModal && (
        <NotificationModal
          message={modalMessage}
          errorType={modalErrorType}
          onClose={closeModal}
        />
      )}
    </Container>
  );
};

export default ForgotPassword;
