import React from "react";
import styles from "./about-food.module.css";
import { IoIosStar } from "react-icons/io";
import { MdOutlineTimer } from "react-icons/md";
import { AdditionBtn } from "./AdditionBtn";
export const AboutFood = () => {
  return (
    <>
      <div className={styles.about_container}>
        <div className={styles.about_content}>
          <div className={styles.frsr_time}>
            <div className={styles.food_rating}>
              <p className={styles.ptext}>Fried Rice</p>
              <div className={styles.dot}></div>
              <IoIosStar className={styles.rating_star} />
              <div className={styles.rating_num}>4.5</div>
            </div>
            <div className={styles.food_timer}>
              <MdOutlineTimer className={styles.food_time_icon} />
              <div className={styles.time_num}>30mins</div>
            </div>
          </div>
          <p className={styles.food_des}>
            Explore our mouthwatering menu featuring dishes from top
            restaurants. Each item lists preparation time, so you'll know when
            to expect your meal.
          </p>
          <div className={styles.ofd_lr}>
            <div className={styles.ofd}>Offers Free Delivery</div>
            <div className={styles.lr}>10 Liters remaining</div>
          </div>
          <AdditionBtn />
        </div>
      </div>
    </>
  );
};
