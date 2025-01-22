"use client";
import React, { useState, useEffect } from "react";
import styles from "./CleaningBRP.module.css";
import { MovingReviews } from "./containers/MovingReviews/MovingReviews";
import { MovingPost } from "./containers/MovingPost/MovingPost";
import { CleaningBooking } from "./containers/CleaningBooking/CleaningBooking";
import { CleaningBook } from "./containers/NewCleanBooking/CleaningBook";

type TabType = "Booking" | "Reviews" | "Posts";

export const CleaningBRP = () => {
  const [activeTab, setActiveTab] = useState<TabType>("Booking");

  useEffect(() => {
    localStorage.setItem("activeTab", activeTab);
  }, [activeTab]);

  useEffect(() => {
    const storedActiveTab = localStorage.getItem("activeTab");
    if (storedActiveTab) {
      setActiveTab(storedActiveTab as TabType);
    }
  }, []);

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
  };
  return (
    <div className={styles.BookingReviewsPostsContainer}>
      <div className={styles.BookingReviewsPostsTabs}>
        <div
          onClick={() => handleTabChange("Booking")}
          className={`${styles.BookingReviewsPostsTab} ${
            activeTab === "Booking" ? styles.active : ""
          }`}
        >
          <p className={styles.BookingReviewsPostsTabText}>Booking</p>
          {activeTab === "Booking" && (
            <div className={styles.BookingReviewsPostsActiveTabLine}></div>
          )}
        </div>
        {/* <div
          className={`${styles.BookingReviewsPostsTab} ${
            activeTab === "Reviews" ? styles.active : ""
          }`}
          onClick={() => handleTabChange("Reviews")}
        >
          <p className={styles.BookingReviewsPostsTabText}>Reviews</p>
          {activeTab === "Reviews" && (
            <div className={styles.BookingReviewsPostsActiveTabLine}></div>
          )}
        </div> */}
        {/* <div
          className={`${styles.BookingReviewsPostsTab} ${
            activeTab === "Posts" ? styles.active : ""
          }`}
          onClick={() => handleTabChange("Posts")}
        >
          <p className={styles.BookingReviewsPostsTabText}>Posts</p>
          {activeTab === "Posts" && (
            <div className={styles.BookingReviewsPostsActiveTabLine}></div>
          )}
        </div> */}
      </div>
      <hr className="BookingReviewsPostsHRLine"/>
      {activeTab === "Booking" && <CleaningBook />}
      {/* {activeTab === "Reviews" && <MovingReviews />} */}
      {/* {activeTab === "Posts" && <MovingPost />} */}
    </div>
  );
};
