"use client";
import React, { useEffect, useState } from "react";
import { DaysPicked } from "./DaysPicked";
import { SelectCourier } from "./SelectCourier";
import { Button } from "@/component/shared/Button";
import { LiaAngleRightSolid } from "react-icons/lia";
import { BsExclamationCircle } from "react-icons/bs";
import { Checkbox } from "@/component/Checkbox/Checkbox";
import { BackButton2 } from "@/component/ui/BackButton/BackButton";
import { DeliveryAddress } from "@/component/deliveryAddress/DeliveryAddress";
import { CustomDescription } from "@/component/CustomDescription/CustomDescription";

import Link from "next/link";
import "../LeftRestaurantContainer.css";

interface SubscriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
  subscriptionData: {
    subType: string;
    subAmount: string;
    subItem: { subItemText: string }[];
    subFeeText: string;
  } | null;
}

export const ViewSubscription: React.FC<SubscriptionModalProps> = ({
  isOpen,
  onClose,
  subscriptionData,
}) => {
  const [isWeekChecked, setIsWeekChecked] = useState<boolean>(false);
  const [description, setDescription] = useState<string>("");
  const [isCourierStep, setIsCourierStep] = useState<boolean>(false);

  // Reset the step to the initial view whenever the modal closes
  useEffect(() => {
    if (!isOpen) {
      setIsCourierStep(false); // Reset to the initial view when modal is closed
    }
  }, [isOpen]);

  // We should call hooks unconditionally
  if (!isOpen || !subscriptionData) {
    return null; // Don't render the modal content if it's closed or no data is passed
  }

  const handleContinue = () => {
    setIsCourierStep(true); // Move to the next step
  };

  const handleBack = () => {
    if (isCourierStep) {
      setIsCourierStep(false); // Go back to the subscription view if on courier step
    } else {
      onClose(); // Close modal if on the subscription view
    }
  };

  const handleModalClose = () => {
    onClose(); // Close modal when "Pay" is clicked in SelectCourier
  };

  return (
    <div className="modalOverlay">
      <div className="modalContent">
        <div className="modal_BCS2">
          <BackButton2 onClick={handleBack} />
          {!isCourierStep && (
            // Only show the custom subscription link if not in the courier step
            <Link
              href="/custom-restaurant-subscriptions"
              className="modal_customSub_link"
            >
              <p className="customSub_linkText">Custom subscription</p>
              <LiaAngleRightSolid className="customSub_linkIcon" />
            </Link>
          )}
        </div>

        {!isCourierStep ? (
          // First step: subscription details and options
          <>
            <div className="customSub_DaysPickedAndTotalAMT">
              <Checkbox
                label="1 Week"
                checked={isWeekChecked}
                onChange={setIsWeekChecked}
                labelClassName="CheckBox_Label"
              />
              <p className="customSub_TotalAMT">$40,000</p>
            </div>

            <div className="customSub_PickedDaysAndDL">
              <div className="customSub_PickedDaysCards">
                <DaysPicked />
              </div>
              <div className="customSub_DL">
                <DeliveryAddress
                  address="123 Main St, Springfield"
                  onAddressChange={(newAddress) => console.log(newAddress)}
                  label="Delivery Location"
                  editButtonText="Change"
                  saveButtonText="Update"
                  customIcon={<LiaAngleRightSolid />}
                  className="CustomSub_DeliveryLocationContainer"
                  editButtonClassName="Change_AddressEdit"
                  displayTextClassName="Display_Address"
                />
                <CustomDescription
                  label="Want to pass an info?"
                  placeholder="Write..."
                  value={description}
                  onChange={(newDescription) => setDescription(newDescription)} // Change handler
                  textareaClassName="ViewModal_Textarea"
                />
                <Button
                  text="Continue"
                  onClick={handleContinue} // Trigger step change
                  className="RestaurantDoneButton"
                />

                <div className="ViewModalSub_Weaning">
                  <BsExclamationCircle className="ViewModalSub_WeaningIcon" />
                  <p className="ViewModalSub_WeaningText">
                    Please note that the service will begin at the start of the
                    week once your request is approved.
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : (
          // Second step: select courier
          <SelectCourier onClose={handleModalClose} />
        )}
      </div>
    </div>
  );
};
