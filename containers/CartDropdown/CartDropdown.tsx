"use client";

import React, { useState } from "react";
import { Checkbox } from "@/component/Checkbox/Checkbox";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";
import { PropertyCounter } from "@/component/CustomCounter/PropertyCounter";
import Link from "next/link";
import { Button } from "@/component/shared/Button";
import "./CartDropdown.css";
import { SelectCourier } from "./SelectCourier";
import { FoodData } from "@/utils/types/types";
import { useRouter } from "next/navigation";
import { useFoodItem } from "@/context/FooItemProvider";

interface CartDropdownProps {
  selectedItem: FoodData | null; // Allow null
}

export const CartDropdown: React.FC<CartDropdownProps> = ({ selectedItem }) => {
  const router = useRouter();
  const { clearSelectedItem } = useFoodItem();

  const [isAllChecked, setIsAllChecked] = useState<boolean>(false);
  const [isCardChecked, setIsCardChecked] = useState<boolean>(false);
  const [isCourierStep, setIsCourierStep] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(true); // Track dropdown visibility

  const handleModalClose = () => {
    setIsCourierStep(false); // Reset to CartDropdown
  };

  const handleCheckoutClick = () => {
    setIsCourierStep(false); // Open the courier step modal
    router.push(`/food/checkout`); // Navigate to the item's page
  };

  const handleCloseAll = () => {
    setIsCourierStep(false); // Close the modal
    setIsDropdownOpen(false); // Close the dropdown
  };

  // if (!isDropdownOpen) return null; // Hide dropdown when closed
  if (!selectedItem) {
    return(
    <div>
      <p
        style={{
          textAlign: "center",
          fontSize: "2rem",
          height: '70px',
          // background: '#565656'
        }}
      >
        No item selected
      </p>
    </div>);
  }
  return (
    <div className="CartDropdown_Container">
      {!isCourierStep ? (
        <>
          <div className="CartDropdown_checkAndClear">
            {/* <Checkbox
              label="Select All"
              checked={isAllChecked}
              onChange={setIsAllChecked}
              labelClassName="CartDropdown_label"
            /> */}
            <button
              type="button"
              onClick={clearSelectedItem}
              className="CartDropdown_Clear"
            >
              Clear
            </button>
          </div>

          <div className="CartDropdown_Cards">
            <div className="CartDropdown_Card">
              <Link href="/profile/or-ders" className="CartDropdown_CardTop">
                <div className="CartDropdown_Details">
                  <div
                    style={{
                      position: "relative",
                    }}
                  >
                    {/* Reflection (mimic ::before pseudo-element) */}
                    {/* <div
                      className="CartDropdown_DetailsImage_dup "
                    /> */}
                    <div className="CartDropdown_DetailsImage">
                      {/* Image */}
                      <Image
                        className="TheCartImage"
                        src={selectedItem.imageUrl}
                        alt={selectedItem.title}
                        width={70}
                        height={60}
                      />
                    </div>
                  </div>
                  <div className="CartTitleRatingANDTime">
                    <div className="CartTitleRating">
                      <p className="CartTitle">{selectedItem.title}</p>
                      <div className="CartRating_Content">
                        <FaStar className="CartRating_Star" />
                        <p className="CartRating_number">4.5</p>
                      </div>
                    </div>
                    <div className="CartTime_Content">
                      <CiClock2 className="CartTime_Clock" />
                      <p className="CartTime_ClockText">
                        {selectedItem.prep_time}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="Cart_ODAmount">
                  <small className="Cart_OD">Offers Delivery</small>
                  <p className="Cart_Amount">₦{selectedItem.price}</p>
                </div>
              </Link>
              <div className="CartDropdown_CardDown">
                <div className="Cart_CheckboxStock">
                  <Checkbox
                    checked={isCardChecked}
                    onChange={setIsCardChecked}
                  />
                  <span className="cartCard_OFS">Out Of Stock</span>
                </div>
                <PropertyCounter
                  buttonClass="counterButton"
                  className="counterContainer"
                />
              </div>
            </div>
          </div>
          <Button
            text="Checkout"
            className="BtnCheckout"
            onClick={handleCheckoutClick}
          />
        </>
      ) : (
        <SelectCourier onClose={handleCloseAll} onBack={handleModalClose} />
      )}
    </div>
  );
};
