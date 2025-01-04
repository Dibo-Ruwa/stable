import React, { useState } from "react";
import { MdAdd } from "react-icons/md";
import { HiMinus } from "react-icons/hi2";
import styles from "./about-food.module.css";
import { FoodData } from "@/utils/types/types";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";

interface ExtraWithQuantity {
//   _id: string;
//   name: string;
//   price: number;
//   quantity: number;
//   imageUrl: string;
//   title: string;
//   prep_time: string;
// export interface Extra {
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
    // quantity?: number; 
//   }
}

interface CartDropdownProps {
  foodDetails: FoodData | null; // Allow null
  onExtraQuantityChange: (extraId: string, newQuantity: number) => void; // Callback for extra quantity changes
}

export const AdditionBtnCart: React.FC<CartDropdownProps> = ({
  foodDetails,
  onExtraQuantityChange,
}) => {
  const [extras, setExtras] = useState<ExtraWithQuantity[]>(
    foodDetails?.extras.map((extra) => ({ ...extra, quantity: 0 })) || []
  );

  // Handle increment for extras
  const incrementExtra = (extraId: string) => {
    setExtras((prevExtras) =>
      prevExtras.map((extra) =>
        extra._id === extraId
          ? { ...extra, quantity: extra.quantity + 1 }
          : extra
      )
    );
    onExtraQuantityChange(extraId, 1); // Notify parent component of the change
  };

  // Handle decrement for extras
  const decrementExtra = (extraId: string) => {
    setExtras((prevExtras) =>
      prevExtras.map((extra) =>
        extra._id === extraId && extra.quantity > 0
          ? { ...extra, quantity: extra.quantity - 1 }
          : extra
      )
    );
    onExtraQuantityChange(extraId, -1); // Notify parent component of the change
  };

  return (
    <div className={styles.addmore_container}>
      {foodDetails?.extras.length === 0 ? (
        <p>No extras available for this product</p>
      ) : (
        <div className={styles.addmore_things}>
          <p className={styles.addmore_text}>Extras</p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: ".7rem",
            }}
          >
            {extras.map((item) => (
              <div
                key={item._id}
                style={{
                  width: "fit-content",
                  borderBottom: "2px solid gray-500",
                }}
                className="CartDropdown_Card"
              >
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
                        <p className="CartTime_ClockText">{item.prep_time}</p>
                      </div>
                    </div>
                  </div>
                  <div className="Cart_ODAmount">
                    <small className="Cart_OD">Offers Delivery</small>
                    <p className="Cart_Amount">₦{item.price}</p>
                  </div>
                </div>
                <div className="CartDropdown_CardDown">
                  <div className={styles.counterContainer}>
                    <button
                      className={styles.counterButton}
                      onClick={() => decrementExtra(item._id)}
                      disabled={item.quantity === 0}
                    >
                      <HiMinus />
                    </button>
                    <div className={styles.countNum}>{item.quantity}</div>
                    <button
                      className={styles.counterButton}
                      onClick={() => incrementExtra(item._id)}
                    >
                      <MdAdd />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};