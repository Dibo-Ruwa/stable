"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "./about-cleaning.module.css";
import { FaStar } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { LiaAngleRightSolid } from "react-icons/lia";
import { SlLocationPin } from "react-icons/sl";
import { CiCalendar, CiClock2 } from "react-icons/ci";
import { IoIosArrowRoundForward } from "react-icons/io";
import { SlideInSub } from "./SlideInSub/SlideInSub";
import BackButton from "@/component/ui/BackButton/BackButton";

const MobileAboutCleaning = () => {
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
              Professional Cleaning Service
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
          <p className={styles.MobilerestaurantOpeningDay}>Mon - Saturday</p>
          <div className={styles.MobilerestaurantDot}></div>
          <p className={styles.MobilerestaurantOpeningTime}>7am - 6pm</p>
          <div className={styles.MobilerestaurantDot}></div>
          <p className={styles.MobilerestaurantPhoneNum}>Contact Support</p>
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

export const AboutCleaning = () => {
  return (
    <>
      <div className={styles.AboutrestaurantContainer}>
        <div className={styles.restaurantFrame}>
        <div className={styles.CPImage}>
            <div className={styles.coverImage}>
              <img
                src="/images/cleaning_quote.jpg"
                alt=""
                className={styles.coverImg}
                style={{
                  borderRadius: "10px",
                }}
              />
            </div>
            <div className={styles.restProfileImage} style={{
              border: "1px solid rgb(25, 221, 84)",
              borderRadius: "50%",
              width: "4rem",
              height: "4rem",
            }}>
              <img
                src="/images/image_icon.jpg"
                alt=""
                className={styles.restProfileImg}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
          <div className={styles.aboutRestaurantContainer}>
            <div className={styles.NRSContent}>
              <div className={styles.NRRestaurant}>
                <p className={styles.restaurantProfileName}>
                  Professional Cleaning Services
                </p>
                <div className={styles.restaurantRating}>
                  <FaStar className={styles.restaurantRatingIcon} />
                  <p className={styles.restaurantRatingNum}>4.5</p>
                </div>
              </div>

              <div className={styles.restaurantOpeningTimePhoneNum}>
                <div className={styles.restaurantOpeningDay}>
                  <CiCalendar className={styles.restaurantOpeningDayIcon} />
                  <p className={styles.restaurantOpeningDayText}>
                    Mon - Sun
                  </p>
                </div>

                <div className={styles.restaurantDot}></div>
                <div className={styles.restaurantOpeningTime}>
                  <CiClock2 className={styles.restaurantOpeningTimeIcon} />
                  <p className={styles.restaurantOpeningTimeText}>8am - 6pm</p>
                </div>

                <div className={styles.restaurantDot}></div>
                <div className={styles.restaurantPhoneNum}>
                  <FiPhone className={styles.restaurantPhoneNumIcon} />
                  <p className={styles.restaurantPhoneNumText}>08059303261</p>
                </div>
              </div>
            </div>

            {/* <div className={styles.restaurantLocation}>
              <SlLocationPin className={styles.restaurantLocationIcon} />
              <p className={styles.restaurantLocationText}>Ikeja, Lagos</p>
            </div> */}
            <div className={styles.restaurantDescription_DT}>
              <p className={styles.restaurantDescription}>
                Experience professional cleaning services that transform your space. 
                Our expert cleaners deliver thorough and reliable cleaning solutions, 
                letting you enjoy a spotless environment without the hassle.
              </p>
            </div>
            <div className={styles.OurLaundryServiceContainer}>
              <p>Our Services</p>

              <div className={styles.OurLaundryServiceCards}>
                <div className={styles.OurLaundryServiceCard}>
                  <div className={styles.OurLaundryServiceImage}>
                    <img
                      src="/images/minh-pham-OtXADkUh3-I-unsplash.jpg"
                      alt="Regular Cleaning"
                      className={styles.OurLaundryServiceCardImage}
                      style={{
                        height: "50px",
                        width: "100%",
                        objectFit: "cover",
                        borderRadius: "10px",
                      }}
                    />
                  </div>
                  <p className={styles.OurLaundryServiceCardText}>
                    Regular Home Cleaning
                  </p>
                </div>
                <div className={styles.OurLaundryServiceCard}>
                  <div className={styles.OurLaundryServiceImage}>
                    <img
                      src="/images/industrial_clean.jpg"
                      alt="Deep Cleaning"
                      className={styles.OurLaundryServiceCardImage}
                      style={{
                        height: "50px",
                        width: "100%",
                        objectFit: "cover",
                        borderRadius: "10px",
                      }}
                    />
                  </div>
                  <p className={styles.OurLaundryServiceCardText}>
                    Deep Cleaning
                  </p>
                </div>
                <div className={styles.OurLaundryServiceCard}>
                  <div className={styles.OurLaundryServiceImage}>
                    <img
                      src="/images/office_cleaning.jpg"
                      alt="Commercial Cleaning"
                      className={styles.OurLaundryServiceCardImage}
                      style={{
                        height: "50px",
                        width: "100%",
                        objectFit: "cover",
                        borderRadius: "10px",
                      }}
                      
                    />
                  </div>
                  <p className={styles.OurLaundryServiceCardText}>
                    Commercial Cleaning
                  </p>
                </div>
                <div className={styles.OurLaundryServiceCard}>
                  <div className={styles.OurLaundryServiceImage}>
                    <img
                      src="/images/WhatsApp Image 2024-12-06 at 15.56.10_2231738e.jpg"
                      alt="Specialized Cleaning"
                      className={styles.OurLaundryServiceCardImage}
                      style={{
                        height: "50px",
                        width: "100%",
                        objectFit: "cover",
                        borderRadius: "10px",
                      }}
                    />
                  </div>
                  <p className={styles.OurLaundryServiceCardText}>
                    Specialized Cleaning
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <MobileAboutCleaning />
      </div>
    </>
  );
};
