"use client";

import React, { useState, useEffect, useRef } from "react";
import { Checkbox } from "@/component/Checkbox/Checkbox";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";
import { PropertyCounter } from "@/component/CustomCounter/PropertyCounter";
import Link from "next/link";
import { Button } from "@/component/shared/Button";
import { SelectCourier } from "../SelectCourier";
import { FoodDatas } from "@/utils/types/types";
import { useRouter } from "next/navigation";
import useCartStore from "@/store/useCart.store"; // Use the store instead of context
import { Toast } from "@/lib/Toast"; // Import the Toast component
import {
  CartDropdownContainer,
  CartDropdownCheckAndClear,
  CartDropdownClear,
  CartDropdownCards,
  CartDropdownCard,
  CartDropdownCardTop,
  CartDropdownDetails,
  CartDropdownDetailsImage,
  CartTitleRatingAndTime,
  CartTitleRating,
  CartTitle,
  CartRatingContent,
  CartRatingStar,
  CartRatingNumber,
  CartTimeContent,
  CartTimeClock,
  CartTimeClockText,
  CartODAmount,
  CartOD,
  CartAmount,
  CartDropdownCardDown,
  CartCheckboxStock,
  CounterContainer,
  CounterButton,
  BtnCheckout,
} from "./style";

interface CartDropdownProps {
  setIsCartDropdownOpen: (isOpen: boolean) => void; // Correct function type
}

export const CartDropdownMobile: React.FC<CartDropdownProps> = ({ setIsCartDropdownOpen }) => {
  const router = useRouter();
  const { cartItems, removeFromCart, updateQuantity, getCart } = useCartStore(); // Use the store's state and actions

  const [isAllChecked, setIsAllChecked] = useState<boolean>(false);
  const [isCardChecked, setIsCardChecked] = useState<boolean>(false);
  const [isCourierStep, setIsCourierStep] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(true); // Track dropdown visibility
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set()); // Track checked items
  const [showToast, setShowToast] = useState(false); // State for toast visibility
  const cartDropdownRef = useRef<HTMLDivElement>(null); // Ref for the dropdown container

  useEffect(() => {
    getCart(); // Fetch cart data on mount
  }, [getCart]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        cartDropdownRef.current &&
        !cartDropdownRef.current.contains(event.target as Node)
      ) {
        setIsCartDropdownOpen(false); // Close the dropdown if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [cartDropdownRef]);

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
            width: "100%",
          }}
        >
          No item selected
        </p>
      </div>
    );
  }

  return (
    <CartDropdownContainer ref={cartDropdownRef}>
      {!isCourierStep ? (
        <>
          <CartDropdownCheckAndClear>
            {/* Show "Remove" button only if at least one item is checked */}
            {checkedItems.size > 0 && (
              <CartDropdownClear onClick={handleRemoveItems}>
                Remove
              </CartDropdownClear>
            )}
          </CartDropdownCheckAndClear>

          <CartDropdownCards>
            {cartItems?.map((item) => (
              <CartDropdownCard key={item._id}>
                <CartDropdownCardTop>
                  <CartDropdownDetails>
                    <CartDropdownDetailsImage>
                      <Image
                        className="TheCartImage"
                        src={item?.imageUrl}
                        alt={item?.title}
                        width={70}
                        height={60}
                      />
                    </CartDropdownDetailsImage>
                    <CartTitleRatingAndTime>
                      <CartTitleRating>
                        <CartTitle>{item?.title}</CartTitle>
                        <CartRatingContent>
                          <CartRatingStar />
                          <CartRatingNumber>4.5</CartRatingNumber>
                        </CartRatingContent>
                      </CartTitleRating>
                      <CartTimeContent>
                        <CartTimeClock />
                        <CartTimeClockText>{item?.prep_time} {item.prep_time > '0' ? 'mins' : 'min'}</CartTimeClockText>
                      </CartTimeContent>
                    </CartTitleRatingAndTime>
                  </CartDropdownDetails>
                  <CartODAmount>
                    <CartOD>Offers Delivery</CartOD>
                    <CartAmount>₦{item.totalPrice || item.price * Number(item?.quantity)}</CartAmount>
                  </CartODAmount>
                </CartDropdownCardTop>
                <CartDropdownCardDown>
                  <CartCheckboxStock>
                    <Checkbox
                      checked={checkedItems.has(item._id)}
                      onChange={(isChecked) =>
                        handleCheckboxChange(item._id, isChecked)
                      }
                    />
                  </CartCheckboxStock>
                  <PropertyCounter
                    initialCount={item.quantity}
                    onCountChange={(newQuantity) =>
                      handleQuantityChange(item._id, newQuantity)
                    }
                    buttonClass={CounterButton}
                    className={CounterContainer}
                  />
                </CartDropdownCardDown>
              </CartDropdownCard>
            ))}
          </CartDropdownCards>
          <BtnCheckout onClick={handleCheckoutClick}>
            Continue
          </BtnCheckout>
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
    </CartDropdownContainer>
  );
};
