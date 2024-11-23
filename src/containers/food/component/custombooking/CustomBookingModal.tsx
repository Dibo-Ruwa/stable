"use client";
import React, { useState } from "react";
import "./custombooking.css";
import { Checkbox } from "@/components/Checkbox/Checkbox";
import { PropertyCounter } from "@/components/CustomCounter/PropertyCounter";
import { CustomAddMore } from "@/components/CustomAddMore/CustomAddMore";
import { FaPlus } from "react-icons/fa";
import { ExtraItems } from "./ExtraItems";
import { DeliveryAddress } from "@/components/deliveryAddress/DeliveryAddress";
import { ScheduleDate } from "@/components/ScheduleDate/ScheduleDate";
import { ScheduleTime } from "@/components/ScheduleTime/ScheduleTime";
import { Button } from "@/components/shared/Button";

interface CustomBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CustomBookingModal: React.FC<CustomBookingModalProps> = ({
  isOpen,
  onClose,
}) => {
  // Single state for all variables
  const [state, setState] = useState({
    isPickUpChecked: false,
    isDeliveryChecked: false,
    isPlatesChecked: false,
    isLitersChecked: false,
    showExtraItems1: false,
    showExtraItems2: false,
    showExtraItems3: false,
    address: "456 Elm St, Another City, Country",
  });

  // Handlers to update specific parts of the state
  const toggleCheckbox = (key: keyof typeof state) => {
    setState((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const handleAddressUpdate = (newAddress: string) => {
    setState((prevState) => ({
      ...prevState,
      address: newAddress,
    }));
  };

  // Return null if modal is not open
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="delivery_type">
          <h2 className="modal-content_title">
            How do you want the order to be delivered to you?
          </h2>
          <div className="PickDelivery_Type">
            <Checkbox
              label="Pick Up"
              checked={state.isPickUpChecked}
              onChange={() => toggleCheckbox("isPickUpChecked")}
            />
            <Checkbox
              label="Delivery"
              checked={state.isDeliveryChecked}
              onChange={() => toggleCheckbox("isDeliveryChecked")}
            />
          </div>
        </div>

        <div className="delivery_type">
          <h2 className="modal-content_title">Food Type</h2>
          <div className="PickDelivery_Type">
            <Checkbox
              label="Plates"
              checked={state.isPlatesChecked}
              onChange={() => toggleCheckbox("isPlatesChecked")}
            />
            <Checkbox
              label="Liters"
              checked={state.isLitersChecked}
              onChange={() => toggleCheckbox("isLitersChecked")}
            />
          </div>
          <div className="input_And_Counter">
            <input
              type="text"
              name="name"
              className="Food_name"
              placeholder="Name"
            />
            <PropertyCounter className="custom_Counter" />
          </div>
        </div>
        <div className="CustomAddMore_container">
          <div className="CustomAddMore_btn">
            <CustomAddMore onClick={() => toggleCheckbox("showExtraItems1")} />
            {state.showExtraItems1 && <ExtraItems />}
          </div>

          <div className="CustomAddMore_btn">
            <CustomAddMore
              label="Add More Items"
              onClick={() => toggleCheckbox("showExtraItems2")}
              className="custom-add-more-style"
            />
            {state.showExtraItems2 && <ExtraItems />}
          </div>

          <div className="CustomAddMore_btn">
            <CustomAddMore
              label="Add New Section"
              Icon={FaPlus}
              onClick={() => toggleCheckbox("showExtraItems3")}
              className="custom-add-section"
            />
            {state.showExtraItems3 && <ExtraItems />}
          </div>
        </div>
        <div className="Custom_DescriptionContainer">
          <label htmlFor="description" className="Custom_DescriptionText">
            Description
          </label>
          <textarea
            name="Description"
            className="Custom_DescriptionTextarea"
            placeholder="Write..."
            cols={30}
            rows={5}
          ></textarea>
        </div>

        <div className="CustomAddMore_DLSDContainer">
          <DeliveryAddress
            address={state.address}
            onAddressChange={handleAddressUpdate}
            label="Delivery Location"
          />
          <div className="CustomAddMore_SD">
            <p>Schedule Delivery (optional)</p>
            <ScheduleDate
              date="17, August, 2024"
              label="Date"
              className="CustomAddMore_SDD"
            />
            <ScheduleTime
              time="12:00 AM"
              label="Time"
              className="CustomAddMore_SDD"
            />
          </div>
        </div>
        <Button text="Send" onClick={onClose} className="FoodDoneButton" />
      </div>
    </div>
  );
};
