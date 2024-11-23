"use client";
import { useState } from "react";

interface ModalData {
  type: "success" | "failure";
  message: string;
}

const useModal = () => {
  const [modalData, setModalData] = useState<ModalData | null>(null);

  const openModal = (type: "success" | "failure", message: string) => {
    setModalData({ type, message });
  };

  const closeModal = () => {
    setModalData(null);
  };

  return { openModal, closeModal, modalData };
};

export { useModal };
