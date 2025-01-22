"use client";
import "./product-service-cleaning.css";
import { FaArrowRightLong } from "react-icons/fa6";
import React, { useState } from "react";
import {
  ProductServiceCleaningData,
  ProductServiceCleaningType,
} from "@/constants";
import { RiSearch2Line } from "react-icons/ri";
import { FaRegStar, FaStar  } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import Link from "next/link";

const MobileView: React.FC = () => {
 const [selectedVendor, setSelectedVendor] = useState<
   ProductServiceCleaningType | undefined
 >(ProductServiceCleaningData[0]);

  return (
    <div className="Cleaningmobile-display">
      <div
        className="Cleaningmob"
        style={{
          backgroundImage: `url(${selectedVendor?.bigImg})`,
          backgroundSize: "140% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="Cleaningmob_overlay">
          <div className="Cleaningmob-cont">
            <div className="Cleaningtext-container">
              <div className="Cleaningdescription">
                Let us handle the dirty work while you enjoy life's fine moment
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
        {/* <div className="CleaningMobilesearch_filter_box">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search here"
          className="CleaningMobilesearch_filter_input"
        />
        <RiSearch2Line className="CleaningMobilesearch_filter_icon" />
      </div> */}
      </div>

      {/* Comment out the following section */}
      {/* <div className="Mobile_TopCleaning_container">
      <div className="MobileTopCleaning_Frame_Container">
        <p className="MobileTopCleaning_Text">Top Cleaning Near you.</p>
        <div className="Mobile_TopCleaning_Images">
          <img
            src="/images/Rectangle 291.png"
            alt="Top Cleaning Images"
            className="Mobile_TopCleaning_Image"
          />
          <img
            src="/images/Rectangle 293 (2).png"
            alt="Top Cleaning Images"
            className="Mobile_TopCleaning_Image"
          />
          <img
            src="/images/Rectangle 294.png"
            alt="Top Cleaning Images"
            className="Mobile_TopCleaning_Image"
          />
        </div>
      </div>
    </div> */}
    </div>
  );
};

export const ProductServicesCleaning: React.FC = () => {
  const [selectedVendor, setSelectedVendor] = useState<
    ProductServiceCleaningType | undefined
  >(ProductServiceCleaningData[0]);

  return (
    <>
      <div className="Cleaning_hero_cont">
        <div className="Cleaning_hero_prod">
          <div className="Cleaning_prod">
            <div className="Cleaning_prod-cont">
              <div className="Cleaning_tags-container">
                {ProductServiceCleaningData.map(
                  (item: ProductServiceCleaningType) => (
                    <button
                      type="button"
                      key={item._id}
                      className={`Cleaning_tag-text ${
                        item === selectedVendor ? "Cleaning_tag-text-active" : ""
                      }`}
                      onClick={() => setSelectedVendor(item)}
                    >
                      {item.tag}
                    </button>
                  )
                )}
              </div>
              <div className="Cleaning_text-container">
                <p className="Cleaning_highlight">
                  Experience the Ultimate in
                </p>
                <p className="Cleaning_highlight2">
                  cleanliness and convenience
                </p>
                <div className="Cleaning_description">
                  Let us handle the dirty work while you enjoy life's fine
                  moment
                </div>
                {/* <button type="button" className="Cleaning_get-started-btn">
                  Book Now
                  <FaArrowRightLong className="Cleaning_get-started-btn-icon" />
                </button> */}
                <Link
                  href="/cleaning/request"
                  className="Cleaning_get-started-btn"
                >
                  Book Now
                  <FaArrowRightLong className="Cleaning_get-started-btn-icon" />
                </Link>
              </div>
            </div>
            {selectedVendor && (
              <div className="Cleaning_Image">
                <img src={selectedVendor.bigImg} alt={selectedVendor.tag} />
                <div className="Cleaning_overlay">
                  <div className="Cleaning_footer-text">{selectedVendor.foodText}</div>
                </div>
              </div>
            )}
          </div>
        </div>

        {selectedVendor && (
          <div className="Cleaning_Hero_map">
            <img
              className="CleaningMap"
              src={selectedVendor.map}
              alt={selectedVendor.tag}
            />
            <div className="CleaningHero_Name">
              {/* <div className="CleaningPro-name">
                <img
                  className="CleaningPro-img"
                  src={selectedVendor.foodImg}
                  alt={selectedVendor.tag}
                />
                <div className="NameAndStarRating">
                  <p className="CleaningName">Christopher Laundry Room</p>
                  <div className="CleaningRating">
                    <div className="Cleaning_RatingStars">
                      <FaStar className="Cleaning_RatingStar" />
                      <FaStar className="Cleaning_RatingStar" />
                      <FaStar className="Cleaning_RatingStar" />
                      <FaStar className="Cleaning_RatingStar" />
                      <FaRegStar className="Cleaning_RatingStarReg" />
                    </div>
                    <p className="Cleaning_RatingNum">4.5</p>
                  </div>
                </div>
              </div> */}
              {/* <div className="CleaningLocationAndTime">
                <p className="CleaningTimeD">17 - Mon</p>
                <p className="CleaningTimeD">2pm - Wed</p>
                <div className="CleaningLocation">
                  <CiLocationOn className="CleaningLocationIcon" />
                  <p className="CleaningLocationText">Lagos</p>
                </div>
              </div> */}
              <div className="CleaningVisitLink">
                <Link
                  // href={`/cleaning/${selectedVendor._id}`}
                  href={`/cleaning/request`}
                  className="Cleaning_visit-link"
                >
                  <p className="Cleaning_visit-link_text">Get a Quote Today</p>
                  <FaArrowRightLong className="Cleaning_visit_link_icon" />
                </Link>
              </div>
            </div>
          </div>
        )}
        <MobileView />
      </div>
    </>
  );
};
