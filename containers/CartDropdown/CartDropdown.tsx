"use client";

import React, { useState } from "react";
import { Checkbox } from "@/component/Checkbox/Checkbox";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";
import { PropertyCounter } from "@/component/CustomCounter/PropertyCounter";
import Link from "next/link";
import { Button } from "@/component/shared/Button";;
import "./CartDropdown.css";
import { SelectCourier } from "./SelectCourier";

export const CartDropdown = () => {
  const [isAllChecked, setIsAllChecked] = useState<boolean>(false);
  const [isCardChecked, setIsCardChecked] = useState<boolean>(false);
  const [isCourierStep, setIsCourierStep] = useState<boolean>(false);

  const handleModalClose = () => {
    setIsCourierStep(false); // Reset the courier step when the modal is closed
  };

  const handleCheckoutClick = () => {
    setIsCourierStep(true); // Open the courier step when the checkout button is clicked
  };

  return (
    <div className="CartDropdown_Container">
      {!isCourierStep ? (
        <>
          <div className="CartDropdown_checkAndClear">
            <Checkbox
              label="Select All"
              checked={isAllChecked}
              onChange={setIsAllChecked}
              labelClassName="CartDropdown_label"
            />
            <button type="button" className="CartDropdown_Clear">Clear</button>
          </div>
          <div className="CartDropdown_Cards">
            <div className="CartDropdown_Card">
              <Link href="/profile/or-ders" className="CartDropdown_CardTop">
                <div className="CartDropdown_Details">
                  <div className="CartDropdown_DetailsImage">
                    <Image
                      className="TheCartImage"
                      src="/images/Frame 2610552.png"
                      alt="Cart image"
                      width={70}
                      height={60}
                    />
                  </div>
                  <div className="CartTitleRatingANDTime">
                    <div className="CartTitleRating">
                      <p className="CartTitle">Fried Rice</p>
                      <div className="CartRating_Content">
                        <FaStar className="CartRating_Star" />
                        <p className="CartRating_number">4.5</p>
                      </div>
                    </div>
                    <div className="CartTime_Content">
                      <CiClock2 className="CartTime_Clock" />
                      <p className="CartTime_ClockText">30mins</p>
                    </div>
                  </div>
                </div>
                <div className="Cart_ODAmount">
                  <small className="Cart_OD">Offers Delivery</small>
                  <p className="Cart_Amount">$40,000</p>
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
        <SelectCourier onClose={handleModalClose} />
      )}
    </div>
  );
};
