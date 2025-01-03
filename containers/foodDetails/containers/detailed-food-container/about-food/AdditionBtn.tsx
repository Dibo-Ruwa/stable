import React from "react";
import { MdAdd } from "react-icons/md";
import styles from "./about-food.module.css";
import { FoodData } from "@/utils/types/types";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";
import { PropertyCounter } from "@/component/CustomCounter/PropertyCounter";

interface CartDropdownProps {
  foodDetails: FoodData | null; // Allow null
}
export const AdditionBtn: React.FC<CartDropdownProps> = ({ foodDetails }) => {
  return (
    <div className={styles.addmore_container}>
  
      <div className={styles.addmore_things}>
        <p className={styles.addmore_text}>Extras</p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: ".7rem",
          }}
        >
          {foodDetails?.extras.map((item) => (
            <div
              style={{
                width: "fit-content",
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
                    {/* <div
                      className="CartDropdown_DetailsImage_dup "
                    /> */}
                    <div className="CartDropdown_DetailsImage">
                      {/* Image */}
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
                <PropertyCounter
                  buttonClass="counterButton"
                  className="counterContainer"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
