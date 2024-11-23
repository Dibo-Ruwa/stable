"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { BsCartCheckFill, BsCartXFill } from "react-icons/bs";
import styled from "styled-components";

type ModalProps = {
  isOpen: boolean;
  type: "success" | "error";
  message: string;
  onClose: () => void;
};

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 25%;

  @media screen and (max-width: 768px) {
    width: 80%;
  }

  .icon {
    font-size: 60px;
    margin-bottom: 20px;
  }

  p {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;

const ModalButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ModalCloseButton = styled.button`
  padding: 10px 20px;
  border: none;
  height: 45px;
  background: transparent;
  border: 1px solid #f2274c;
  color: #f2274c;
  border-radius: 8px;
  cursor: pointer;
  font-size: 17px;
`;
const ModalCartButton = styled.button`
  padding: 10px 20px;
  border: none;
  height: 45px;
  background-color: var(--primary);
  color: white;
  border-radius: 8px;
  cursor: pointer;
  font-size: 17px;
`;

const Modal: React.FC<ModalProps> = ({ isOpen, type, message, onClose }) => {
  const router = useRouter();
  if (!isOpen) {
    return null;
  }

  return (
    <ModalOverlay>
      <ModalContent
        style={
          type === "success"
            ? { border: "1px solid var(--primary)" }
            : { border: "1px solid #f2274c" }
        }
      >
        <div
          className="icon"
          style={
            type === "success"
              ? { color: "var(--primary)" }
              : { color: "#f2274c" }
          }
        >
          {type === "success" ? <BsCartCheckFill /> : <BsCartXFill />}
        </div>

        <p>{message}</p>

        <ModalButtons>
          <ModalCloseButton
            style={type === "error" ? { margin: "0 auto" } : {}}
            onClick={onClose}
          >
          
            {type === "error" ? "Close" : "Later"}
          </ModalCloseButton>
          {type === "success" && (
            <ModalCartButton
              onClick={() => {
                onClose();
                router.push("/cart");
              }}
            >
              Go to cart
            </ModalCartButton>
          )}
        </ModalButtons>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
