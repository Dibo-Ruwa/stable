import React from "react";
import styles from "../MovingReviews.module.css";
import { FaStar } from "react-icons/fa6";
export const CustomersRating = () => {
  return (
    <div className={styles.CustomersRatingCard}>
      <p className={styles.CustomersRatingText}>Customers Ratings</p>
      <div className={styles.CustomersRatingNumStarAndReviews}>
        <div className={styles.CustomersRatingNumStar}>
          <p className={styles.CustomersRatingNum}>4.0</p>
          <div className={styles.CustomersRatingStars}>
            <FaStar className={styles.CustomersRatingStar} />
            <FaStar className={styles.CustomersRatingStar} />
            <FaStar className={styles.CustomersRatingStar} />
            <FaStar className={styles.CustomersRatingStar} />
            <FaStar className={styles.CustomersRatingStarAsh} />
          </div>
        </div>
        <p className={styles.CustomersRatingReviews}>500 Reviews</p>
      </div>
    </div>
  );
};
