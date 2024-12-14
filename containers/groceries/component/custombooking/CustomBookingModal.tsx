import React, { useState } from "react";
import "./custombooking.css"; // Add custom styles for the modal
import { Checkbox } from "@/component/Checkbox/Checkbox";
import { PropertyCounter } from "@/component/CustomCounter/PropertyCounter";
import { CustomAddMore } from "@/component/CustomAddMore/CustomAddMore";
import { FaPlus } from "react-icons/fa";
import { ExtraItems } from "./ExtraItems";
import { DeliveryAddress } from "@/component/deliveryAddress/DeliveryAddress";
import { ScheduleDate } from "@/component/ScheduleDate/ScheduleDate";
import { ScheduleTime } from "@/component/ScheduleTime/ScheduleTime";
import { Button } from "@/component/shared/Button";

interface CustomBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CustomBookingModal: React.FC<CustomBookingModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  // Separate state for each checkbox
  const [isPickUpChecked, setIsPickUpChecked] = useState<boolean>(false);
  const [isDeliveryChecked, setIsDeliveryChecked] = useState<boolean>(false);
  const [isPlatesChecked, setIsPlatesChecked] = useState<boolean>(false);
  const [isLitersChecked, setIsLitersChecked] = useState<boolean>(false);
  const [showExtraItems1, setShowExtraItems1] = useState<boolean>(false);
  const [showExtraItems2, setShowExtraItems2] = useState<boolean>(false);
  const [showExtraItems3, setShowExtraItems3] = useState<boolean>(false);


  
  const [address, setAddress] = useState<string>(
    "456 Elm St, Another City, Country"
  );

  const handleAddressUpdate = (newAddress: string) => {
    setAddress(newAddress);
  };

  // Handler to toggle the visibility of ExtraItems
  const handleAddMoreClick1 = () => {
    setShowExtraItems1((prev) => !prev);
  };

  const handleAddMoreClick2 = () => {
    setShowExtraItems2((prev) => !prev);
  };

  const handleAddMoreClick3 = () => {
    setShowExtraItems3((prev) => !prev);
  };

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
              checked={isPickUpChecked}
              onChange={setIsPickUpChecked}
            />
            <Checkbox
              label="Delivery"
              checked={isDeliveryChecked}
              onChange={setIsDeliveryChecked}
            />
          </div>
        </div>

        <div className="delivery_type">
          <h2 className="modal-content_title">Food Type</h2>
          <div className="PickDelivery_Type">
            <Checkbox
              label="Plates"
              checked={isPlatesChecked}
              onChange={setIsPlatesChecked}
            />
            <Checkbox
              label="Liters"
              checked={isLitersChecked}
              onChange={setIsLitersChecked}
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
            <CustomAddMore onClick={handleAddMoreClick1} />
            {showExtraItems1 && <ExtraItems />}{" "}
            {/* Conditionally render ExtraItems */}
          </div>

          <div className="CustomAddMore_btn">
            <CustomAddMore
              label="Add More Items"
              onClick={handleAddMoreClick2}
              className="custom-add-more-style"
            />
            {showExtraItems2 && <ExtraItems />}{" "}
            {/* Conditionally render ExtraItems */}
          </div>

          <div className="CustomAddMore_btn">
            <CustomAddMore
              label="Add New Section"
              Icon={FaPlus}
              onClick={handleAddMoreClick3}
              className="custom-add-section"
            />
            {showExtraItems3 && <ExtraItems />}{" "}
            {/* Conditionally render ExtraItems */}
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
            address={address}
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
