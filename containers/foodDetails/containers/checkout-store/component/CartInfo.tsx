import React, { useState } from "react";
import { Checkbox } from "@/component/Checkbox/Checkbox";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";
import { PropertyCounter } from "@/component/CustomCounter/PropertyCounter";
import { Toast } from "@/lib/Toast"; // Import the Toast component
import styles from "../../detailed-food-container/about-food/about-food.module.css";
import { HiMinus } from "react-icons/hi2";
import { MdAdd } from "react-icons/md"; // Import MdAdd for the increment button
import styled from "styled-components";
import useCartStore from "@/store/useCart.store";
import { toast } from "react-hot-toast"; // Import toast from react-hot-toast

const StoreOwnerName = styled.p`
  color: var(--Green1, #27a124);
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const AccountBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  margin: 2rem 0;
`;

const AccountContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const AccountSubTotalText = styled.p`
  color: var(--Ash-100, #8f8f8f);
  font-family: Poppins;
  margin-right: 4px;
  font-size: 15.825px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const AccountSubTotalAmount = styled.p`
  color: var(--Soft-black, #565656);
  font-family: Poppins;
  font-size: 15.825px;
  font-style: normal;
  font-weight: 500;
  line-height: 27.129px;
`;

const AccountTotalAmount = styled.p`
  color: var(--Green1, #27a124);
  font-family: Poppins;
  font-size: 15.825px;
  font-style: normal;
  font-weight: 600;
  line-height: 27.129px;
`;

interface CartDropdownProps {
  subtotal: number;
  deliveryFee: number;
  total: number;
}

export const CartInfo: React.FC<CartDropdownProps> = ({ subtotal, deliveryFee, total }) => {
  const { cartItems, removeFromCart, updateQuantity } = useCartStore();
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set()); // Track checked items
  const [showToast, setShowToast] = useState(false); // State for toast visibility

  // Handle increment for extras
  const incrementExtra = async (itemId: string, extraId: string) => {
    try {
      const extra = cartItems
        .find(item => item._id === itemId)
        ?.extras?.find(e => e._id === extraId);
        
      if (extra) {
        // Optimistically update the UI
        const updatedExtra = { ...extra, quantity: (extra.quantity || 0) + 1 };
        await updateQuantity(itemId, "increase", extraId, updatedExtra);
      }
    } catch (error) {
      console.error('Error incrementing extra:', error);
      toast.error('Failed to update extra quantity');
    }
  };

  // Handle decrement for extras
  const decrementExtra = async (itemId: string, extraId: string) => {
    try {
      const extra = cartItems
        .find(item => item._id === itemId)
        ?.extras?.find(e => e._id === extraId);
        
      if (extra && extra.quantity > 0) {
        // Optimistically update the UI
        const updatedExtra = { ...extra, quantity: Math.max(0, (extra.quantity || 0) - 1) };
        await updateQuantity(itemId, "decrease", extraId, updatedExtra);
      }
    } catch (error) {
      console.error('Error decrementing extra:', error);
      toast.error('Failed to update extra quantity');
    }
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
  const handleQuantityChange = async (itemId: string, action: "increase" | "decrease") => {
    try {
      await updateQuantity(itemId, action);
      // The store will automatically update the UI through state management
    } catch (error) {
      console.error('Failed to update quantity:', error);
    }
  };

  if (cartItems?.length === 0) {
    return (
      <div>
        <p
          style={{
            textAlign: "center",
            fontSize: "1.5rem",
            height: "70px",
          }}
        >
          Your cart is empty
        </p>
      </div>
    );
  }

  console.log(cartItems, "cartItems");

  return (
    <div className="CartDropdown_Container">
      <div className="CartDropdown_checkAndClear">
        <StoreOwnerName>Carts</StoreOwnerName>

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
        {cartItems?.map((item) => {
          const itemQuantity = item.quantity ?? 1;

          return (
            <React.Fragment key={item._id}>
              <div className="CartDropdown_Card">
                <div className="CartDropdown_CardTop">
                  <div className="CartDropdown_Details">
                    <div style={{ position: "relative" }}>
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
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                          className="CartTitle"
                        >
                          {item?.title}
                        </p>
                        {/* <div className="CartRating_Content">
                          <FaStar className="CartRating_Star" />
                          <p className="CartRating_number">4.5</p>
                        </div> */}
                      </div>
                      <div className="CartTime_Content">
                        <CiClock2 className="CartTime_Clock" />
                        <p className="CartTime_ClockText">
                          {item?.prep_time}{" "}
                          {item?.prep_time > "0" ? "mins" : "min"}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="Cart_ODAmount">
                    <small className="Cart_OD">Offers Delivery</small>
                    <p className="Cart_Amount">
                      ₦{item.totalPrice || item.price * itemQuantity}
                    </p>
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
                    initialCount={itemQuantity}
                    onCountChange={(newQuantity) =>
                      handleQuantityChange(
                        item._id,
                        newQuantity > itemQuantity ? "increase" : "decrease"
                      )
                    }
                    buttonClass="counterButton"
                    className="counterContainer"
                  />
                </div>

                {item.extras && item.extras.some((extra) => extra.quantity > 0) && (
                  <div style={{ marginLeft: "15%" }}>
                    <p className={styles.addmore_text}>Extras</p>
                    <br />
                    {item.extras.map((extra) => (
                      <React.Fragment key={extra._id}>
                        <div className="CartDropdown_CardTop">
                          <div className="CartDropdown_Details">
                            <div style={{ position: "relative" }}>
                              <div className="CartDropdown_DetailsImage">
                                <Image
                                  className="TheCartImage"
                                  src={extra.imageUrl}
                                  alt={extra.title}
                                  width={70}
                                  height={60}
                                />
                              </div>
                            </div>
                            <div className="CartTitleRatingANDTime">
                              <div className="CartTitleRating">
                                <p className="CartTitle">{extra.title}</p>
                              </div>
                              <div className="CartTime_Content">
                                <CiClock2 className="CartTime_Clock" />
                                <p className="CartTime_ClockText">
                                  {extra.prep_time}{" "}
                                  {extra.prep_time > "0" ? "mins" : "min"}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="Cart_ODAmount">
                            <p className="Cart_Amount">
                              ₦{extra.price * (extra.quantity || 1)}
                            </p>
                          </div>
                        </div>
                        <div
                          style={{
                            marginLeft: "auto",
                            width: "fit-content",
                          }}
                          className={styles.counterContainer}
                        >
                          <button
                            className={styles.counterButton}
                            onClick={() => decrementExtra(item._id, extra._id)}
                            disabled={extra.quantity === 0}
                          >
                            <HiMinus />
                          </button>
                          <div className={styles.countNum}>
                            {extra.quantity || 0}
                          </div>
                          <button
                            className={styles.counterButton}
                            onClick={() => incrementExtra(item._id, extra._id)}
                          >
                            <MdAdd
                              style={{
                                width: "20px",
                                height: "20px",
                              }}
                            />
                          </button>
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                )}
              </div>
            </React.Fragment>
          );
        })}
      </div>

      <AccountBox>
        <AccountContent>
          <AccountSubTotalText>Sub Total</AccountSubTotalText>
          <AccountSubTotalAmount>
            ₦{subtotal.toLocaleString()}
          </AccountSubTotalAmount>
        </AccountContent>
        <AccountContent>
          <AccountSubTotalText>Delivery</AccountSubTotalText>
          <AccountSubTotalAmount>
            ₦{deliveryFee.toLocaleString()}
          </AccountSubTotalAmount>
        </AccountContent>
        <AccountContent>
          <AccountSubTotalText>Total</AccountSubTotalText>
          <AccountTotalAmount>
            ₦{total.toLocaleString()}
          </AccountTotalAmount>
        </AccountContent>
      </AccountBox>

      {/* Toast for removing items from cart */}
      <Toast
        message="Item(s) removed from cart!"
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </div>
  );
};