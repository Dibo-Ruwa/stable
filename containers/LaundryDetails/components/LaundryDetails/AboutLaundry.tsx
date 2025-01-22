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
            src="/images/laundry_quote.jpg"
            alt=""
            className={styles.MobilecoverImg}
          />
        </div>
        <div className={styles.MobilerestProfileImage} 
        style={{
              border: "1px solid rgb(25, 221, 84)",
              borderRadius: "50%",
            }}>
              <img
                src="/the bag.png"
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
      <div className={styles.MobileaboutRestaurantContainer}>
        <div className={styles.MobileNRSContent}>
          <div className={styles.MobileNRRestaurant}>
            <p className={styles.MobilerestaurantProfileName}>
              Laundry Services
            </p>
            <div className={styles.MobilerestaurantRating}>
              <FaStar className={styles.MobilerestaurantRatingIcon} />
              <p className={styles.MobilerestaurantRatingNum}>4.5</p>
            </div>
          </div>
        </div>
        {/* <div className={styles.MobilerestaurantLocation}>
          <SlLocationPin className={styles.MobilerestaurantLocationIcon} />
          <p className={styles.MobilerestaurantLocationText}>Select Location</p>
        </div> */}
        <div className={styles.MobilerestaurantOpeningTimePhoneNum}>
          <p className={styles.MobilerestaurantOpeningDay}>Operating Hours</p>
          <div className={styles.MobilerestaurantDot}></div>
          <p className={styles.MobilerestaurantOpeningTime}>8am - 8pm</p>
          <div className={styles.MobilerestaurantDot}></div>
          <p className={styles.MobilerestaurantPhoneNum}>08059303261</p>
        </div>
      </div>
      <div className={styles.OurLaundryServiceContainer}>
        {/* <p>Pricing</p> */}
        <div className={styles.OurLaundryServiceCards}>
          <div className={styles.OurLaundryServiceCard}>
            <div className={styles.OurLaundryServiceImage}>
              <img
                src="/images/image 207.png"
                alt=""
                className={styles.OurLaundryServiceCardImage}
              />
            </div>
            <p className={styles.OurLaundryServiceCardText}>Wash and Fold</p>
          </div>
          <div className={styles.OurLaundryServiceCard}>
            <div className={styles.OurLaundryServiceImage}>
              <img
                src="/images/image 208.png"
                alt=""
                className={styles.OurLaundryServiceCardImage}
              />
            </div>
            <p className={styles.OurLaundryServiceCardText}>Iron and Fold</p>
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
            <p className={styles.OurLaundryServiceCardText}>Household clean</p>
          </div>
        </div>
      </div>
      <div className={styles.MobSubPlan}>
        <p className={styles.MobSubPlanText}>Need Subscription Plan?</p>
        <button
          className={styles.MobilerestaurantSubNav}
          onClick={handleSubClick}
        >
          <p className={styles.MobilerestaurantSubText}>See Subscription List</p>
          <LiaAngleRightSolid className={styles.MobilerestaurantSubIcon} />
        </button>
      </div>

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
                src="/images/laundry_quote.jpg"
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
            }}>
              <img
                src="/the bag.png"
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
                <p className={styles.restaurantProfileName}>Laundry Services</p>
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
                  <p className={styles.restaurantOpeningTimeText}>8am - 8pm</p>
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
                Get your clothes professionally cleaned with our reliable laundry services. We offer everything from basic wash & fold to specialized dry cleaning, ensuring your garments are treated with the utmost care and attention to detail.
              </p>
            </div>
            <div className={styles.OurLaundryServiceContainer}>
              <p className={styles.OurLaundryServiceContainerTitle}>Available Services</p>

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
