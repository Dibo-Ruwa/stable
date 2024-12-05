"use client";
import { useRouter } from "next/navigation";
import React, { ReactNode } from "react";
import { BackBtn, CardWrapper, ModalWrapper } from "./authModal.styles";

interface ModalProps {
  isModal: boolean;
  children: ReactNode;
}

const AuthModal: React.FC<ModalProps> = ({ isModal, children }) => {
  const router = useRouter();
  return (
    <ModalWrapper isModal={isModal}>
      {isModal && <BackBtn onClick={() => router.back()}>X</BackBtn>}
      <CardWrapper>{children}</CardWrapper>
    </ModalWrapper>
  );
};

export default AuthModal;
