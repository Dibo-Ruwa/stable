"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "./about-laundry.module.css";
import { FaStar } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { LiaAngleRightSolid } from "react-icons/lia";
import { SlLocationPin } from "react-icons/sl";
import { CiCalendar, CiClock2 } from "react-icons/ci";
import { IoIosArrowRoundForward } from "react-icons/io";
import { SlideInSub } from "./SlideInSub/SlideInSub";
import { BackButton } from "@/component/ui/BackButton/BackButton";

const MobileAboutLaundry = () => {
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
            src="/images/image 200.png"
            alt=""
            className={styles.MobilecoverImg}
          />
        </div>
        <div className={styles.MobilerestProfileImage}>
          <img
            src="/images/Ellipse 86.png"
            alt=""
            className={styles.MobilerestProfileImg}
          />
        </div>
      </div>
      <div className={styles.MobileaboutRestaurantContainer}>
        <div className={styles.MobileNRSContent}>
          <div className={styles.MobileNRRestaurant}>
            <p className={styles.MobilerestaurantProfileName}>
              Flora Restaurant
            </p>
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
          <p className={styles.MobilerestaurantOpeningDay}>Mon - Friday</p>
          <div className={styles.MobilerestaurantDot}></div>
          <p className={styles.MobilerestaurantOpeningTime}>8am - 5pm</p>
          <div className={styles.MobilerestaurantDot}></div>
          <p className={styles.MobilerestaurantPhoneNum}>0903 414 5971</p>
        </div>
        <div className={styles.MobilerestaurantLocation}>
          <SlLocationPin className={styles.MobilerestaurantLocationIcon} />
          <p className={styles.MobilerestaurantLocationText}>Ikeja, Lagos</p>
        </div>
        <button className={styles.MobilerestaurantReview}>Reviews</button>
      </div>
    </div>
  );
};

export const AboutLaundry = () => {
  return (
    <>
      <div className={styles.AboutrestaurantContainer}>
        <div className={styles.restaurantFrame}>
          <div className={styles.CPImage}>
            <div className={styles.coverImage}>
              <img
                src="/images/image 200.png"
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
                <p className={styles.restaurantProfileName}>Flora Restaurant</p>
                <div className={styles.restaurantRating}>
                  <FaStar className={styles.restaurantRatingIcon} />
                  <p className={styles.restaurantRatingNum}>4.5</p>
                </div>
              </div>

              <div className={styles.restaurantOpeningTimePhoneNum}>
                <div className={styles.restaurantOpeningDay}>
                  <CiCalendar className={styles.restaurantOpeningDayIcon} />
                  <p className={styles.restaurantOpeningDayText}>
                    Mon - Friday
                  </p>
                </div>

                <div className={styles.restaurantDot}></div>
                <div className={styles.restaurantOpeningTime}>
                  <CiClock2 className={styles.restaurantOpeningTimeIcon} />
                  <p className={styles.restaurantOpeningTimeText}>8am - 5pm</p>
                </div>

                <div className={styles.restaurantDot}></div>
                <div className={styles.restaurantPhoneNum}>
                  <FiPhone className={styles.restaurantPhoneNumIcon} />
                  <p className={styles.restaurantPhoneNumText}>0903 414 5971</p>
                </div>
              </div>
            </div>

            <div className={styles.restaurantLocation}>
              <SlLocationPin className={styles.restaurantLocationIcon} />
              <p className={styles.restaurantLocationText}>Ikeja, Lagos</p>
            </div>
            <div className={styles.restaurantDescription_DT}>
              <p className={styles.restaurantDescription}>
                Our hassie-free Laundry service ensures that your clothes are
                cleaned, folded, and delivered with care, so you can spend less
                time on chores and more time doing what you love.
              </p>
            </div>
            <div className={styles.OurLaundryServiceContainer}>
              <p>Our Services</p>

              <div className={styles.OurLaundryServiceCards}>
                <div className={styles.OurLaundryServiceCard}>
                  <div className={styles.OurLaundryServiceImage}>
                    <img
                      src="/images/image 207.png"
                      alt=""
                      className={styles.OurLaundryServiceCardImage}
                    />
                  </div>
                  <p className={styles.OurLaundryServiceCardText}>
                    Wash and Fold
                  </p>
                </div>
                <div className={styles.OurLaundryServiceCard}>
                  <div className={styles.OurLaundryServiceImage}>
                    <img
                      src="/images/image 208.png"
                      alt=""
                      className={styles.OurLaundryServiceCardImage}
                    />
                  </div>
                  <p className={styles.OurLaundryServiceCardText}>
                    Iron and Fold
                  </p>
                </div>
                <div className={styles.OurLaundryServiceCard}>
                  <div className={styles.OurLaundryServiceImage}>
                    <img
                      src="/images/image 153.png"
                      alt=""
                      className={styles.OurLaundryServiceCardImage}
                    />
                  </div>
                  <p className={styles.OurLaundryServiceCardText}>Dry clean</p>
                </div>
                <div className={styles.OurLaundryServiceCard}>
                  <div className={styles.OurLaundryServiceImage}>
                    <img
                      src="/images/image 155.png"
                      alt=""
                      className={styles.OurLaundryServiceCardImage}
                    />
                  </div>
                  <p className={styles.OurLaundryServiceCardText}>
                    Household clean
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <MobileAboutLaundry />
      </div>
    </>
  );
};
