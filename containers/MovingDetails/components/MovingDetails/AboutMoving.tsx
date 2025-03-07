"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "./about-moving.module.css";
import { FaStar } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { LiaAngleRightSolid } from "react-icons/lia";
import { SlLocationPin } from "react-icons/sl";
import { CiCalendar, CiClock2 } from "react-icons/ci";
import { IoIosArrowRoundForward } from "react-icons/io";
import { SlideInSub } from "./SlideInSub/SlideInSub";
import BackButton from "@/component/ui/BackButton/BackButton";

const MobileAboutMoving = () => {
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
            src="/images/bus_delivery.png"
            alt=""
            className={styles.MobilecoverImg}
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
        </div>
        <div
          className={styles.MobilerestProfileImage}
          style={{
            border: "1px solid rgb(25, 221, 84)",
            borderRadius: "50%",
          }}
        >
          <img
            src="/images/bike_delivery.png"
            alt=""
            className={styles.MobilerestProfileImg}
            style={{
              width: "4.5rem",
              height: "70px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
      <div className={styles.MobileaboutRestaurantContainer}>
        <div className={styles.MobileNRSContent}>
          <div className={styles.MobileNRRestaurant}>
            <p className={styles.MobilerestaurantProfileName}>Moving Service</p>
            <div className={styles.MobilerestaurantRating}>
              <FaStar className={styles.MobilerestaurantRatingIcon} />
              <p className={styles.MobilerestaurantRatingNum}>4.5</p>
            </div>
          </div>
          <button
            className={styles.MobilerestaurantSubNav}
            onClick={handleSubClick}
          >
            <p className={styles.MobilerestaurantSubText}>Subscription</p>
            <LiaAngleRightSolid className={styles.MobilerestaurantSubIcon} />
          </button>
          {isSubOpen && (
            <div
              className={`${styles.slideInSub} ${
                isSubOpen ? styles.activeSub : styles.hiddenSub
              }`}
            >
              <SlideInSub onClose={handleCloseSub} />
            </div>
          )}
        </div>
        <div className={styles.MobilerestaurantOpeningTimePhoneNum}>
          <p className={styles.MobilerestaurantOpeningDay}>Operating Hours</p>
          <div className={styles.MobilerestaurantDot}></div>
          <p className={styles.MobilerestaurantOpeningTime}>8am - 5pm</p>
          <div className={styles.MobilerestaurantDot}></div>
          <p className={styles.MobilerestaurantPhoneNum}>08059303261</p>
        </div>
        {/* <div className={styles.MobilerestaurantLocation}>
          <SlLocationPin className={styles.MobilerestaurantLocationIcon} />
          <p className={styles.MobilerestaurantLocationText}>Ikeja, Lagos</p>
        </div> */}
        <button className={styles.MobilerestaurantReview}>Reviews</button>
      </div>
    </div>
  );
};

export const AboutMoving = () => {
  return (
    <>
      <div className={styles.AboutrestaurantContainer}>
        <div className={styles.restaurantFrame}>
         
          <div className={styles.CPImage}>
            <div className={styles.coverImage}>
              <img
                src="/images/bus_delivery.png"
                alt=""
                className={styles.coverImg}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            </div>
            <div className={styles.restProfileImage}
              style={{
                border: "1px solid rgb(25, 221, 84)",
                borderRadius: "50%",
              }}
            >
              <img
                src="/images/bike_delivery.png"
                alt=""
                className={styles.restProfileImg}
                style={{
                  width: "100%",
                  height: "70px",
                  borderRadius: "50%",
                  objectFit: "cover",
               
                }}
              />
            </div>
          </div>
          <div className={styles.aboutRestaurantContainer}>
            <div className={styles.NRSContent}>
              <div className={styles.NRRestaurant}>
                <p className={styles.restaurantProfileName}>Moving and Delivery Services</p>
                <div className={styles.restaurantRating}>
                  <FaStar className={styles.restaurantRatingIcon} />
                  <p className={styles.restaurantRatingNum}>4.5</p>
                </div>
              </div>

              <div className={styles.restaurantOpeningTimePhoneNum}>
                <div className={styles.restaurantOpeningDay}>
                  <CiCalendar className={styles.restaurantOpeningDayIcon} />
                  <p className={styles.restaurantOpeningDayText}>
                    Operating Hours
                  </p>
                </div>

                <div className={styles.restaurantDot}></div>
                <div className={styles.restaurantOpeningTime}>
                  <CiClock2 className={styles.restaurantOpeningTimeIcon} />
                  <p className={styles.restaurantOpeningTimeText}>8am - 5pm</p>
                </div>

                {/* <div className={styles.restaurantDot}></div>
                <div className={styles.restaurantPhoneNum}>
                  <FiPhone className={styles.restaurantPhoneNumIcon} />
                  <p className={styles.restaurantPhoneNumText}>0903 414 5971</p>
                </div> */}
              </div>
            </div>

            {/* <div className={styles.restaurantLocation}>
              <SlLocationPin className={styles.restaurantLocationIcon} />
              <p className={styles.restaurantLocationText}>Ikeja, Lagos</p>
            </div> */}
            <div className={styles.restaurantDescription_DT}>
              <p className={styles.restaurantDescription}>
                Our hassle-free moving service ensures that your items are
                relocated with care, so you can spend less time worrying and more time enjoying your new space.
              </p>
            </div>
          </div>
        </div>
        <MobileAboutMoving />
      </div>
    </>
  );
};
