"use client";

import React, { useState, useEffect } from "react";
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
import useCartStore from "@/store/useCart.store"; // Use the store instead of context
import { Toast } from "@/lib/Toast"; // Import the Toast component

interface CartDropdownProps {
  setIsCartDropdownOpen: (isOpen: boolean) => void; // Correct function type
}

export const CartDropdown: React.FC<CartDropdownProps> = ({ setIsCartDropdownOpen }) => {
  const router = useRouter();
  const { cartItems, removeFromCart, updateQuantity, getCart } = useCartStore(); // Use the store's state and actions

  const [isAllChecked, setIsAllChecked] = useState<boolean>(false);
  const [isCardChecked, setIsCardChecked] = useState<boolean>(false);
  const [isCourierStep, setIsCourierStep] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(true); // Track dropdown visibility
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set()); // Track checked items
  const [showToast, setShowToast] = useState(false); // State for toast visibility

  useEffect(() => {
    getCart(); // Fetch cart data on mount
  }, [getCart]);

  const handleModalClose = () => {
    setIsCourierStep(false); // Reset to CartDropdown
  };

  const handleCheckoutClick = () => {
    setIsCartDropdownOpen(false);
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

  // Handle quantity change for an item
  const handleQuantityChange = (itemId: string, newQuantity: number) => {
    updateQuantity(itemId, newQuantity > 1 ? "increase" : "decrease");
  };

  if (cartItems?.length === 0) {
    return (
      <div>
        <p
          style={{
            textAlign: "center",
            fontSize: "1.3rem",
            height: "70px",
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
                        <p 
                          style={{
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                          }}
                        className="CartTitle ">{item?.title}</p>
                        <div className="CartRating_Content">
                          <FaStar className="CartRating_Star" />
                          <p className="CartRating_number">4.5</p>
                        </div>
                      </div>
                      <div className="CartTime_Content">
                        <CiClock2 className="CartTime_Clock" />
                        <p className="CartTime_ClockText">{item?.prep_time} {item.prep_time > '0' ? 'mins' : 'min'}</p>
                      </div>
                    </div>
                  </div>
                  <div className="Cart_ODAmount">
                    <small className="Cart_OD">Offers Delivery</small>
                    <p className="Cart_Amount">₦{item.totalPrice || item.price * Number(item?.quantity)}</p>
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
                    initialCount={item.quantity}
                    onCountChange={(newQuantity) =>
                      handleQuantityChange(item._id, newQuantity)
                    }
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