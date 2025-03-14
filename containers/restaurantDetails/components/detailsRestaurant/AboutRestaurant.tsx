'use client'
import React, { useState, useEffect, useRef } from "react";
import styles from "./about-restaurant.module.css";
import { FaStar } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { LiaAngleRightSolid } from "react-icons/lia";
import { SlLocationPin } from "react-icons/sl";
import { CiCalendar, CiClock2 } from "react-icons/ci";
import { IoIosArrowRoundForward } from "react-icons/io";
import { SlideInSub } from "./SlideInSub/SlideInSub";
import BackButton from "@/component/ui/BackButton/BackButton";

const MobileAboutRestaurant = () => {
const [isSubOpen, setIsSubOpen] = useState<boolean>(false);
  

  // Toggle subscription visibility when button is clicked
  const handleSubClick = () => {
    setIsSubOpen((prev) => !prev);
  };

    const handleCloseSub = () => {
    setIsSubOpen(false);
  };


  return (
    <div className={styles.MobilerestaurantContainer}>
      <div className={styles.MobileCPImage}>
        <div className={styles.MobilecoverImage}>
          <img
            src="/images/Frame 2611041.png"
            alt=""
            className={styles.MobilecoverImg}
          />
        </div>
        <div className={styles.MobilerestProfileImage}>
          <img
            src="/images/Ellipse 92.png"
            alt=""
            className={styles.MobilerestProfileImg}
          />
        </div>
      </div>
      <div className={styles.MobileaboutRestaurantContainer}>
        <div className={styles.MobileNRSContent}>
          <div className={styles.MobileNRRestaurant}>
            <p className={styles.MobilerestaurantProfileName}>
              Food Subscription
            </p>
            {/* <div className={styles.MobilerestaurantRating}>
              <FaStar className={styles.MobilerestaurantRatingIcon} />
              <p className={styles.MobilerestaurantRatingNum}>4.5</p>
            </div> */}
          </div>
          <button
            className={styles.MobilerestaurantSubNav}
            onClick={handleSubClick}
          >
            <p className={styles.MobilerestaurantSubText}>Explore Our Monthly Subscriptions</p>
            <LiaAngleRightSolid className={styles.MobilerestaurantSubIcon} />
          </button>
 {isSubOpen && (
  <div className={`${styles.slideInSub} ${isSubOpen ? styles.activeSub : styles.hiddenSub}`}>
    <SlideInSub onClose={handleCloseSub} />
  </div>
)}
        </div>
        <div className={styles.MobilerestaurantOpeningTimePhoneNum}>
          <p className={styles.MobilerestaurantOpeningDay}> Operating Hours:</p>
          <div className={styles.MobilerestaurantDot}></div>
          <p className={styles.MobilerestaurantOpeningTime}>8am - 8pm</p>
          <div className={styles.MobilerestaurantDot}></div>
          <p className={styles.MobilerestaurantPhoneNum}>08059303261</p>
        </div>
        <div className={styles.restaurantDescription_DT} style={{ marginBottom: `-30px` }}>
              <p className={styles.restaurantDeliveryTime}>
                Explore the available food items for your subscription or selection before committing. 
              </p>
            </div>
      </div>
    </div>
  );
};

export const AboutRestaurant = () => {
  return (
    <>
      <div className={styles.AboutrestaurantContainer}>
        <div className={styles.restaurantFrame}>
          <div className={styles.CPImage}>
            <div className={styles.coverImage}>
              <img
                src="/images/Frame 2610163 (2).png"
                alt=""
                className={styles.coverImg}
              />
            </div>
            <div className={styles.restProfileImage}>
              <img
                src="/images/Ellipse 92.png"
                alt=""
                className={styles.restProfileImg}
              />
            </div>
          </div>
          <div className={styles.aboutRestaurantContainer}>
            <div className={styles.NRSContent}>
              <div className={styles.NRRestaurant}>
                <p className={styles.restaurantProfileName}>Food Subscription</p>
              </div>

              <div className={styles.restaurantOpeningTimePhoneNum}>
                <div className={styles.restaurantOpeningDay}>
                  <CiCalendar className={styles.restaurantOpeningDayIcon} />
                  <p className={styles.restaurantOpeningDayText}>
                    Operating Hours:
                  </p>
                </div>
                <div className={styles.restaurantOpeningTime}>
                  <CiClock2 className={styles.restaurantOpeningTimeIcon} />
                  <p className={styles.restaurantOpeningTimeText}>8am - 7pm</p>
                </div>

                <div className={styles.restaurantDot}></div>
                <div className={styles.restaurantPhoneNum}>
                  <FiPhone className={styles.restaurantPhoneNumIcon} />
                  <p className={styles.restaurantPhoneNumText}>08059303261</p>
                </div>
              </div>
            </div>
            <div className={styles.restaurantDescription_DT}>
              <p className={styles.restaurantDescription}>
                Enjoy our hassle-free monthly food plan, ensuring your meals are delivered with care. Spend less time on chores and more time savoring your food.
              </p>
              <p className={styles.restaurantDeliveryTime}>
                Explore the available food items for your subscription or selection before committing. 
              </p>
            </div>
            {/* <button className={styles.restaurantReview}>
              See Reviews
              <IoIosArrowRoundForward className={styles.restaurantReviewIcon} />
            </button> */}
          </div>
        </div>
        <MobileAboutRestaurant />
      </div>
    </>
  );
};
