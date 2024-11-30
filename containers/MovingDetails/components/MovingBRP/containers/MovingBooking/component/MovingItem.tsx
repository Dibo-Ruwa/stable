'use client'
import React, { useEffect, useState } from "react";
import styles from "../MovingBooking.module.css";
import { CheckboxGroup } from "./CheckboxGroup";
import { AddProperty } from "./AddProperty";
import { MovingBookingAddress } from "./MovingBookingAddress";
import { ItemsDescription } from "./ItemsDescription";
import { MovingSchedule } from "./MovingSchedule";
import { Button } from "@/component/shared/Button";
import { ConfirmationModel } from "./ConfirmationModel";

interface Item {
  name: string;
  quantity: number;
}

export const MovingItem = () => {
 const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

const handleOpenModal = (): void =>{
  setIsModalOpen(true)
  }
  
const handleCloseModal = (): void =>{
  setIsModalOpen(false)
}


const initialItems = [
  { name: "Chair", quantity: 20 },
  { name: "Table", quantity: 10 },
  { name: "Sofa", quantity: 5 },
  { name: "Radio", quantity: 6 },
];

const deliveryDetails = {
  currentLocation: "24 Eberechi Street Umuahia",
  deliveryLocation: "34 Akara Road, Aba",
  pickUpDate: "27 : 10 : 2024",
  pickUpTime: "12 : 00PM",
};

const handleConfirm = (updatedItems: Item[]) => {
  console.log("Confirmed items:", updatedItems);
  // Add additional actions here, such as submitting to a backend.
};

  
useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    // Clean up overflow style on component unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);


  return (
    <div className={styles.MovingBookingContainer}>
      <div className={styles.MovingItemContainer}>
        <p className={styles.MovingItemTextQuest}>What do you want to move?</p>

        <div className={styles.MovingItemChoices}>
          <CheckboxGroup />
        </div>
        <div className={styles.MovingPropertyContainer}>
          <AddProperty />
        </div>
        <div className={styles.Moving_AddressContainer}>
          <MovingBookingAddress />
        </div>
        <div className={styles.Moving_ItemsDescription}>
          <ItemsDescription />
        </div>
        <MovingSchedule />
        {/* Pass the handleCloseModal function to the modal for closing */}
        <ConfirmationModel
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          items={initialItems}
          deliveryDetails={deliveryDetails}
          onConfirm={handleConfirm}
        />

        <Button
          text="Done"
          onClick={handleOpenModal}
          className={styles.MovingDoneButton}
        />
      </div>
    </div>
  );
};
