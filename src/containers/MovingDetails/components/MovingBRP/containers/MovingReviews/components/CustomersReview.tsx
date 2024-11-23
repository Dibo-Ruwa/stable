import React from "react";
import styles from "../MovingReviews.module.css";
import { FaStar } from "react-icons/fa6";

// Array of reviews
const reviews = [
  {
    id: 1,
    name: "Kelly James",
    profileImg: "/images/Ellipse 3.png",
    rating: 4,
    date: new Date("2025-07-01T02:00:00"),
    text: "Your Meal is amazing, thank you for delivering on time, I really enjoyed your food.",
  },
  {
    id: 2,
    name: "John Doe",
    profileImg: "/images/Ellipse 3.png",
    rating: 5,
    date: new Date("2025-06-15T18:00:00"),
    text: "Exceptional service and delicious food! Highly recommended.",
  },
  // Add more reviews here as needed
];

export const CustomersReview = () => {
  return (
    <div className={styles.CustomersReviewCards}>
      {reviews.map((review) => {
        const { id, name, profileImg, rating, date, text } = review;

        // Format date to "hour - day - month - year"
        const formattedDate = `${date.getHours()}am - ${date.toLocaleDateString(
          "en-US",
          {
            weekday: "short",
          }
        )} - ${date.toLocaleDateString("en-US", {
          month: "long",
        })} - ${date.getFullYear()}`;

        return (
          <div key={id} className={styles.CustomersReviewCard}>
            <div className={styles.CustomersReviewProfileHead}>
              <div className={styles.CustomersReviewProfileAndRating}>
                <div className={styles.CustomersReviewProfileNameAndImg}>
                  <img
                    src={profileImg}
                    className={styles.CustomersReviewProfileImg}
                    alt={`${name}'s Profile`}
                  />
                  <p className={styles.CustomersReviewProfileName}>{name}</p>
                </div>
                <div className={styles.CustomersReviewProfileHeadDot}></div>
                <div className={styles.CustomersReviewNumStar}>
                  <div className={styles.CustomersReviewStars}>
                    {[...Array(5)].map((_, index) => (
                      <FaStar
                        key={index}
                        className={
                          index < rating
                            ? styles.CustomersReviewStar
                            : styles.CustomersReviewStarAsh
                        }
                      />
                    ))}
                  </div>
                  <p className={styles.CustomersReviewNum}>{rating}.0</p>
                </div>
              </div>
              <div className={styles.CustomersReviewProfileDateAndTime}>
                {formattedDate}
              </div>
            </div>
            <p className={styles.CustomersReviewText}>{text}</p>
          </div>
        );
      })}
    </div>
  );
};
