import React from "react";
import styles from "./about-groceries.module.css";
import { IoIosStar } from "react-icons/io";
import { MdOutlineTimer } from "react-icons/md";
import { AdditionBtn } from "./AdditionBtn";
export const AboutGroceries = () => {
  return (
    <>
      <div className={styles.about_container}>
        <div className={styles.about_content}>
          <div className={styles.frsr_time}>
            <div className={styles.food_rating}>
              <p className={styles.ptext}>Fried Rice</p>
              <span className={styles.dot}></span>
              <IoIosStar className={styles.rating_star} />
              <span className={styles.rating_num}>4.5</span>
            </div>
            <div className={styles.food_timer}>
              <MdOutlineTimer className={styles.food_time_icon} />
              <span className={styles.time_num}>30mins</span>
            </div>
          </div>
          <p className={styles.food_des}>
            Explore our mouthwatering menu featuring dishes from top
            restaurants. Each item lists preparation time, so you'll know when
            to expect your meal.
          </p>
          <div className={styles.ofd_lr}>
            <span className={styles.ofd}>Offers Free Delivery</span>
            <span className={styles.lr}>10 Liters remaining</span>
          </div>
          <AdditionBtn />
        </div>
      </div>
    </>
  );
};
