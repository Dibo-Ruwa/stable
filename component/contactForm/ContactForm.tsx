import useForm from "@/hooks/useForm";
import axios from "axios";
import React, { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { FaTimes } from "react-icons/fa";
import styled from "styled-components";

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 997;
`;
const ModalContent = styled.div`
  padding: 30px;
  width: 30%;
  height: 200px;
  background: #fff;
  border-radius: 22px;
  font-size: 18px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  cursor: pointer;
`;

const FormContainer = styled.div`
  display: grid;
  flex-direction: column;
  gap: 15px;
  width: 80%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const InputField = styled.input`
  background: var(--primary-20);
  border: none;
  outline: none;
  padding: 15px 20px;
  margin-bottom: 10px;
  border-radius: 12px;
`;

const SubmitButton = styled.button`
  background: var(--primary);
  color: white;
  border: none;
  outline: none;
  padding: 15px 20px;
  cursor: pointer;
  width: max-content;
  border-radius: 12px;
`;

const ContactForm: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const { formData, handleChange, resetForm, errors } = useForm(
    {
      name: "",
      email: "",
      message: "",
    },
    () => {}
  );
  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true)
    try {
      const res = await axios.post("/api/contact", formData);
      const { message } = res.data; // Assuming the API returns a 'message' field
      // Update the modal message with the API response
      setModalMessage(message);
      setLoading(false)
      resetForm();

      // Open the modal
      setShowModal(true);
    } catch (error) {
      setLoading(false)
      const errorMessage = "An error occurred ";

      // Update the modal message with the error message
      setModalMessage(errorMessage);

      // Open the modal
      setShowModal(true);
    }
  };
  return (
    <FormContainer onSubmit={onSubmit}>
      <InputField
        type="text"
        placeholder="Name"
        name="name"
        id="id"
        value={formData.name}
        onChange={(e: any) => handleChange(e, e.target.name)}
      />
      <InputField
        type="email"
        placeholder="Email"
        name="email"
        id="id"
        value={formData.email}
        onChange={(e: any) => handleChange(e, e.target.name)}
      />
      <InputField
        as="textarea"
        rows={6}
        placeholder="Message"
        name="message"
        id="id"
        value={formData.message}
        onChange={(e: any) => handleChange(e, e.target.name)}
      />
      <SubmitButton type="submit" onClick={onSubmit}>
        Submit
      </SubmitButton>

      {showModal && (
        <Modal>
          <ModalContent>
            <p>{modalMessage}</p>
            <CloseButton onClick={() => setShowModal(false)}>
              <FaTimes />
            </CloseButton>
          </ModalContent>
        </Modal>
      )}
    </FormContainer>
  );
};

export default ContactForm;
