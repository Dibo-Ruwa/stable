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
import { FoodDatas } from "@/utils/types/types";
import { useRouter } from "next/navigation";
import { useCartItems } from "@/context/CartItems";
import { Toast } from "@/lib/Toast"; // Import the Toast component

interface CartDropdownProps {
  cartItems: FoodDatas | null; // Allow null
  setIsCartDropdownOpen: (isOpen: boolean) => void; // Correct function type
}

export const CartDropdown: React.FC<CartDropdownProps> = ({ cartItems, setIsCartDropdownOpen }) => {
  const router = useRouter();
  const { removeFromCart, setIsCart } = useCartItems(); // Use the removeFromCart function

  const [isAllChecked, setIsAllChecked] = useState<boolean>(false);
  const [isCardChecked, setIsCardChecked] = useState<boolean>(false);
  const [isCourierStep, setIsCourierStep] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(true); // Track dropdown visibility
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set()); // Track checked items
  const [showToast, setShowToast] = useState(false); // State for toast visibility

  const handleModalClose = () => {
    setIsCourierStep(false); // Reset to CartDropdown
  };

  const handleCheckoutClick = () => {
    setIsCartDropdownOpen(false);
    setIsCart(false)
    router.push(`/food/checkout`); // Navigate to the item's page
  };

  const handleCloseAll = () => {
    setIsCourierStep(false); // Close the modal
    setIsDropdownOpen(false); // Close the dropdown
  };

  // Handle checkbox changes
  const handleCheckboxChange = (itemId: string, isChecked: boolean) => {
    setCheckedItems((prev) => {
      const newCheckedItems = new Set(prev);
      if (isChecked) {
        newCheckedItems.add(itemId);
      } else {
        newCheckedItems.delete(itemId);
      }
      return newCheckedItems;
    });
  };

  // Remove checked items
  const handleRemoveItems = () => {
    checkedItems.forEach((itemId) => {
      removeFromCart(itemId); // Remove each checked item from the cart
    });
    setCheckedItems(new Set()); // Clear the checked items
    setShowToast(true); // Show toast when items are removed
  };

  // if (!isDropdownOpen) return null; // Hide dropdown when closed
  if (cartItems?.length === 0) {
    return (
      <div>
        <p
          style={{
            textAlign: "center",
            fontSize: "2rem",
            height: "70px",
            // background: '#565656'
          }}
        >
          No item selected
        </p>
      </div>
    );
  }

  return (
    <div className="CartDropdown_Container">
      {!isCourierStep ? (
        <>
          <div className="CartDropdown_checkAndClear">
            {/* Show "Remove" button only if at least one item is checked */}
            {checkedItems.size > 0 && (
              <button
                type="button"
                onClick={handleRemoveItems}
                className="CartDropdown_Clear"
              >
                Remove
              </button>
            )}
          </div>

          <div className="CartDropdown_Cards">
            {cartItems?.map((item) => (
              <div key={item._id} className="CartDropdown_Card">
                <div className="CartDropdown_CardTop">
                  <div className="CartDropdown_Details">
                    <div
                      style={{
                        position: "relative",
                      }}
                    >
                      <div className="CartDropdown_DetailsImage">
                        <Image
                          className="TheCartImage"
                          src={item?.imageUrl}
                          alt={item?.title}
                          width={70}
                          height={60}
                        />
                      </div>
                    </div>
                    <div className="CartTitleRatingANDTime">
                      <div className="CartTitleRating">
                        <p className="CartTitle">{item?.title}</p>
                        <div className="CartRating_Content">
                          <FaStar className="CartRating_Star" />
                          <p className="CartRating_number">4.5</p>
                        </div>
                      </div>
                      <div className="CartTime_Content">
                        <CiClock2 className="CartTime_Clock" />
                        <p className="CartTime_ClockText">{item?.prep_time}</p>
                      </div>
                    </div>
                  </div>
                  <div className="Cart_ODAmount">
                    <small className="Cart_OD">Offers Delivery</small>
                    <p className="Cart_Amount">₦{item?.price}</p>
                  </div>
                </div>
                <div className="CartDropdown_CardDown">
                  <div className="Cart_CheckboxStock">
                    <Checkbox
                      checked={checkedItems.has(item._id)}
                      onChange={(isChecked) =>
                        handleCheckboxChange(item._id, isChecked)
                      }
                    />
                  </div>
                  <PropertyCounter
                    buttonClass="counterButton"
                    className="counterContainer"
                  />
                </div>
              </div>
            ))}
          </div>
          <Button
            text="Continue"
            className="BtnCheckout"
            onClick={handleCheckoutClick}
          />
        </>
      ) : (
        <SelectCourier onClose={handleCloseAll} onBack={handleModalClose} />
      )}

      {/* Toast for removing items from cart */}
      <Toast
        message="Item(s) removed from cart!"
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </div>
  );
};