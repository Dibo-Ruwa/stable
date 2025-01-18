"use client";
import "./product-service-laundrying.css";
import { FaArrowRightLong } from "react-icons/fa6";
import React, { useState } from "react";
import {
  ProductServiceLaundryData,
  ProductServiceLaundryType,
} from "@/constants";
import { RiSearch2Line } from "react-icons/ri";
import { FaRegStar, FaStar } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import Link from "next/link";

const MobileView: React.FC = () => {
  const [selectedVendor, setSelectedVendor] = useState<
    ProductServiceLaundryType | undefined
  >(ProductServiceLaundryData[0]);

  return (
    <div className="Laundrymobile-display">
      <div
        className="Laundrymob"
        style={{
          backgroundImage: `url(${selectedVendor?.bigImg})`,
          backgroundSize: "140% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="Laundrymob_overlay">
          <div className="Laundrymob-cont">
            <div className="Laundrytext-container">
              <div className="Laundrydescription">
                Order from your favorite restaurant and get your meal delivered
                to you in minutes.
              </div>
            </div>
          </div>
        </div>
        {/* <div className="LaundryMobilesearch_filter_box">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search here"
            className="LaundryMobilesearch_filter_input"
          />
          <RiSearch2Line className="LaundryMobilesearch_filter_icon" />
        </div> */}
      </div>
      <div className="Mobile_TopLaundry_container">
        <div className="MobileTopLaundry_Frame_Container">
          <p className="MobileTopLaundry_Text">Top Laundry Near you.</p>
          <div className="Mobile_TopLaundry_Images">
            <img
              src="/images/Rectangle 291.png"
              alt="Top Laundry Images"
              className="Mobile_TopLaundry_Image"
            />
            <img
              src="/images/Rectangle 293 (2).png"
              alt="Top Laundry Images"
              className="Mobile_TopLaundry_Image"
            />
            <img
              src="/images/Rectangle 294.png"
              alt="Top Laundry Images"
              className="Mobile_TopLaundry_Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProductServicesLaundrying: React.FC = () => {
  const [selectedVendor, setSelectedVendor] = useState<
    ProductServiceLaundryType | undefined
  >(ProductServiceLaundryData[0]);

  return (
    <>
      <div className="Laundry_hero_cont">
        <div className="Laundry_hero_prod">
          <div className="Laundry_prod">
            <div className="Laundry_prod-cont">
              <div className="Laundry_tags-container">
                {ProductServiceLaundryData.map(
                  (item: ProductServiceLaundryType) => (
                    <button
                      type="button"
                      key={item._id}
                      className={`Laundry_tag-text ${
                        item === selectedVendor ? "Laundry_tag-text-active" : ""
                      }`}
                      onClick={() => setSelectedVendor(item)}
                    >
                      {item.tag}
                    </button>
                  )
                )}
              </div>
              <div className="Laundry_text-container">
                <p className="Laundry_highlight">Discover Effortless Laundry</p>
                <p className="Laundry_highlight2">
                  Clean clothes, zero hassle
                </p>
                <div className="laundry_description">
                Let us take care of your laundry while you focus on what matters most.
                </div>
                <Link
                  href="/laundry/request"
                  className="Laundry_get-started-btn"
                >
                  Book Now
                  <FaArrowRightLong className="Laundry_get-started-btn-icon" />
                </Link>
              </div>
            </div>
            {selectedVendor && (
              <div className="Laundry_Image">
                <img src={selectedVendor.bigImg} alt={selectedVendor.tag} />
                <div className="Laundry_overlay">
                  <div className="Laundry_footer-text">
                    {selectedVendor.foodText}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {selectedVendor && (
          <div className="Laundry_Hero_map">
            <img
              className="LaundryMap"
              src={selectedVendor.map}
              alt={selectedVendor.tag}
            />
            <div className="LaundryHero_Name">
              <div className="LaundryVisitLink">
                <Link
                  href={`/laundry/request`}
                  className="Laundry_visit-link"
                >
                  <p className="Laundry_visit-link_text">Get a Quote Today</p>
                  <FaArrowRightLong className="Laundry_visit_link_icon" />
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
