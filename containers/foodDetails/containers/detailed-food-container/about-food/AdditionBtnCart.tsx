import React, { useState, useEffect } from "react";
import { MdAdd } from "react-icons/md";
import { HiMinus } from "react-icons/hi2";
import styles from "./about-food.module.css";
import { FoodData } from "@/utils/types/types";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";
import useCartStore from "@/store/useCart.store";
import { toast } from "react-hot-toast";

interface ExtraWithQuantity {
  quantity: number;
  _id: string;
  title: string;
  prep_time: string;
  categories: string[];
  price: number;
  imageUrl: string;
  vendor: {
    _id: string;
    name: string;
  };
  discount?: number;
  slug: string;
  id: string;
}

interface CartDropdownProps {
  foodDetails: FoodData | null; // Allow null
  onExtraQuantityChange: (extraId: string, newQuantity: number) => void; // Callback for extra quantity changes
}

export const AdditionBtnCart: React.FC<CartDropdownProps> = ({
  foodDetails,
  onExtraQuantityChange,
}) => {
  const [extras, setExtras] = useState<ExtraWithQuantity[]>([]);
  const [isUpdating, setIsUpdating] = useState(false);
  const { updateQuantity, cartItems } = useCartStore();

  useEffect(() => {
    if (foodDetails?.extras) {
      const initializedExtras = foodDetails.extras.map((extra) => ({
        ...extra,
        quantity: 0, // Initialize quantity to 0
      }));
      setExtras(initializedExtras);
    }
  }, [foodDetails]);

  useEffect(() => {
    if (foodDetails) {
      const cartItem = cartItems.find(item => item._id === foodDetails._id);
      if (cartItem) {
        setExtras(prevExtras =>
          prevExtras.map(extra => {
            const cartExtra = cartItem.extras.find(e => e._id === extra._id);
            return cartExtra ? { ...extra, quantity: cartExtra.quantity } : extra;
          })
        );
      }
    }
  }, [cartItems, foodDetails]);

  // Handle increment for extras
  const incrementExtra = async (extraId: string) => {
    if (!foodDetails?._id) return;
    
    setIsUpdating(true);
    try {
      const extraDetails = extras.find(e => e._id === extraId);
      if (!extraDetails) {
        throw new Error('Extra not found');
      }

      // Only send necessary extra details
      const extraInfo = {
        _id: extraDetails._id,
        title: extraDetails.title,
        price: extraDetails.price,
        imageUrl: extraDetails.imageUrl,
        prep_time: extraDetails.prep_time,
        quantity: extraDetails.quantity + 1 // Increment quantity by 1
      };

      await updateQuantity(foodDetails._id, "increase", extraId, extraInfo);

      // Update local state
      setExtras(prevExtras =>
        prevExtras.map(e =>
          e._id === extraId
            ? { ...e, quantity: extraDetails.quantity + 1 } // Use extraDetails.quantity
            : e
        )
      );
      onExtraQuantityChange(extraId, 1);
    } catch (error) {
      console.error('Error incrementing extra:', error);
      toast.error('Failed to update extra quantity');
    } finally {
      setIsUpdating(false);
    }
  };

  // Handle decrement for extras
  const decrementExtra = async (extraId: string) => {
    if (!foodDetails?._id) return;
    
    const extra = extras.find(e => e._id === extraId);
    if (!extra || extra.quantity === 0) return;

    setIsUpdating(true);
    try {
      await updateQuantity(foodDetails._id, "decrease", extraId, extra);
      setExtras(prevExtras =>
        prevExtras.map(e =>
          e._id === extraId
            ? { ...e, quantity: extra.quantity - 1 } // Use extra.quantity
            : e
        )
      );
      onExtraQuantityChange(extraId, -1);
    } catch (error) {
      console.error('Error decrementing extra:', error);
      toast.error('Failed to update extra quantity');
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <div className={styles.addmore_container}>
      {foodDetails?.extras.length === 0 ? (
        <p>No extras available for this product</p>
      ) : (
        <div className={styles.addmore_things}>
          <p className={styles.addmore_text}>
            Extras {isUpdating && <span>(Updating...)</span>}
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: ".7rem" }}>
            {extras.map((item) => (
              <div key={item._id} className="CartDropdown_Card">
                <div className="CartDropdown_CardTop">
                  <div className="CartDropdown_Details">
                    <div style={{ position: "relative" }}>
                      <div className="CartDropdown_DetailsImage">
                        <Image
                          className="TheCartImage"
                          src={item.imageUrl}
                          alt={item.title}
                          width={70}
                          height={60}
                        />
                      </div>
                    </div>
                    <div className="CartTitleRatingANDTime">
                      <div className="CartTitleRating">
                        <p className="CartTitle">{item.title}</p>
                        <div className="CartRating_Content">
                          <FaStar className="CartRating_Star" />
                          <p className="CartRating_number">4.5</p>
                        </div>
                      </div>
                      <div className="CartTime_Content">
                        <CiClock2 className="CartTime_Clock" />
                        <p className="CartTime_ClockText">
                          {item.prep_time} {item.prep_time > "0" ? "mins" : "min"}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="Cart_ODAmount">
                    <small className="Cart_OD">Offers Delivery</small>
                    <p className="Cart_Amount">
                      ₦{item.price * (item.quantity >= 1 ? item.quantity : 1)}
                    </p>
                  </div>
                </div>
                <div className={styles.counterContainer}>
                  <button
                    className={styles.counterButton}
                    onClick={() => decrementExtra(item._id)}
                    disabled={item.quantity === 0 || isUpdating}
                  >
                    <HiMinus />
                  </button>
                  <div className={styles.countNum}>{item.quantity}</div>
                  <button
                    className={styles.counterButton}
                    onClick={() => incrementExtra(item._id)}
                    disabled={isUpdating}
                  >
                    <MdAdd
                      style={{
                        width: "20px",
                        height: "20px",
                      }}
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};