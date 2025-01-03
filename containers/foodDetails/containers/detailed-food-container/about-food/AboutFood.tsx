import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./about-food.module.css";
import { IoIosStar } from "react-icons/io";
import { MdOutlineTimer } from "react-icons/md";
import { AdditionBtn } from "./AdditionBtn";
import { FoodData } from "@/utils/types/types";

interface CartDropdownProps {
  selectedItem: FoodData | null; // Allow null
}

const url = process.env.NEXT_PUBLIC_ADMIN_URL;

export const AboutFood: React.FC<CartDropdownProps> = ({ selectedItem }) => {
  const [foodDetails, setFoodDetails] = useState<FoodData | null>(null);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchFoodData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${url}/api/products/${selectedItem?._id}`);
        const data = response.data?.data;
        setFoodDetails(data); // Set the fetched data
      } catch (error) {
        console.error("Error fetching food data:", error);
        setError("Failed to fetch food data");
      } finally {
        setLoading(false);
      }
    };

    if (selectedItem?._id) {
      fetchFoodData();
    }
  }, [selectedItem?._id, url]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!foodDetails) {
    return <div>No food details available.</div>;
  }

  return (
    <>
      <div className={styles.about_container}>
        <div className={styles.about_content}>
          <div className={styles.frsr_time}>
            <div className={styles.food_rating}>
              <p className={styles.ptext}>{foodDetails?.title}</p>
              <div className={styles.dot}></div>
              <IoIosStar className={styles.rating_star} />
              <div className={styles.rating_num}>4.5</div>
            </div>
            <div className={styles.food_timer}>
              <MdOutlineTimer className={styles.food_time_icon} />
              <div className={styles.time_num}>
                {foodDetails?.prep_time} {(foodDetails?.prep_time == "1"|| foodDetails?.prep_time == "0" ) ? "min" : "mins"}
              </div>
            </div>
          </div>
          <p className={styles.food_des}>
            Explore our mouthwatering menu featuring dishes from top
            restaurants. Each item lists preparation time, so you'll know when
            to expect your meal.
          </p>
          <div className={styles.ofd_lr}>
            {/* <div className={styles.ofd}>Offers Free Delivery</div> */}
            {/* <div className={styles.lr}>10 Liters remaining</div> */}
          </div>
          <AdditionBtn  foodDetails={foodDetails}/>
        </div>
      </div>
    </>
  );
};