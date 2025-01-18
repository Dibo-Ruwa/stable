"use client";
import "./product-service-moving.css";
import { FaArrowRightLong } from "react-icons/fa6";
import React, { useState } from "react";
import {
  ProductServiceDeliveryAndMovingData,
  ProductServiceDeliveryAndMovingType,
} from "@/constants";
import { RiSearch2Line } from "react-icons/ri";
import Link from "next/link";

// ====== MobileView Component ====== //
const MobileView: React.FC = () => {
  const [selectedVendor, setSelectedVendor] = useState<
    ProductServiceDeliveryAndMovingType | undefined
  >(ProductServiceDeliveryAndMovingData[0]);

  return (
    <div className="Moving_mobile-display">
      <div
        className="Moving_mob"
        style={{
          backgroundImage: `url(${selectedVendor?.bigImg})`,
          backgroundSize: "140% 100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right center",
        }}
      >
        <div className="Moving_mob_overlay">
          <div className="Moving_mob-cont">
            <div className="Moving_text-container">
              <div className="Moving_description">
                Get Your Order Delivered On time, With No Stress.
              </div>
            </div>
          </div>
        </div>
        {/* <div className="Moving_Mobilesearch_filter_box">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search here"
            className="Moving_Mobilesearch_filter_input"
          />
          <RiSearch2Line className="Moving_Mobilesearch_filter_icon" />
        </div> */}
      </div>
      {/* <div className="Mobile_TopMoving_container">
        <div className="MobileTopMoving_Frame_Container">
          <p className="MobileTopMoving_Text">Top Courier Near you.</p>
          <div className="Mobile_TopMoving_Images">
            <img
              src="/images/Rectangle 291.png"
              alt="Top Moving Images"
              className="Mobile_TopMoving_Image"
            />
            <img
              src="/images/Rectangle 293 (2).png"
              alt="Top Moving Images"
              className="Mobile_TopMoving_Image"
            />
            <img
              src="/images/Rectangle 294.png"
              alt="Top Moving Images"
              className="Mobile_TopMoving_Image"
            />
          </div>
        </div>
      </div> */}
    </div>
  );
};

// ====== ProductServicesFoodVendor Component ====== //
export const ProductServicesMoving: React.FC = () => {
  const [selectedVendor, setSelectedVendor] = useState<
    ProductServiceDeliveryAndMovingType | undefined
  >(ProductServiceDeliveryAndMovingData[0]);

  return (
    <>
      <div className="Moving_hero_cont">
        <div className="Moving_hero_prod">
          <div className="Moving_prod">
            <div className="Moving_prod-cont">
              <div className="Moving_tags-container">
                {ProductServiceDeliveryAndMovingData.map((item) => (
                  <React.Fragment key={item._id}>
                    <button
                      className={`Moving_tag-text ${
                        item === selectedVendor ? "tag-text-active" : ""
                      }`}
                      onClick={() => setSelectedVendor(item)}
                    >
                      {item.tag1}
                    </button>

                    <button
                      className={`Moving_tag-text ${
                        item === selectedVendor ? "tag-text-active" : ""
                      }`}
                      onClick={() => setSelectedVendor(item)}
                    >
                      {item.tag2}
                    </button>
                  </React.Fragment>
                ))}
              </div>
              <div className="Moving_text-container">
                <p className="Moving_highlight">Get Your Order Delivered</p>
                <p className="Moving_highlight2">On time, With No Stress</p>
                <div className="Moving_description">
                  Experience the Convenience of Food Delivery & Moving Services
                  Combined.
                </div>

                <Link href="/moving/request" className="Moving_get-started-btn">
                  Book Now
                  <FaArrowRightLong className="Moving_get-started-btn-icon" />
                </Link>
              </div>
            </div>
            {selectedVendor && (
              <div className="Moving_Image">
                <img src={selectedVendor.bigImg} alt={selectedVendor.tag1} />
                <div className="Moving_overlay">
                  <div className="Moving_footer-text">
                    {selectedVendor.foodText}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {selectedVendor && (
          <div className="Moving_hero_map">
            <img
              className="Moving_map"
              src={"/images/map1.jpg"}
              alt={selectedVendor.tag1}
            />
            <div className="Moving_pro-logo">
              <div className="Moving_b-l">
                <img
                  className="Moving_bike"
                  src={selectedVendor.bike}
                  alt={selectedVendor.tag1}
                />
              </div>
            </div>
          </div>
        )}
        <MobileView />
      </div>
    </>
  );
};
