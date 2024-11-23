"use client";
import React from "react";
import "./components/product-service-foodvendor/product-service-food-vendor.css";
import "./restaurant.css";
// import { useRouter } from "next/navigation";
import Newsletter from "../partnerWithUs/component/newsletter/Newsletter";
import { ProductServicesFoodVendor } from "./components/product-service-foodvendor/ProductServicesFoodVendor";
import { TopRestaurants } from "./components/top-restaurant/TopRestaurants";
import { SearchFilter } from "./components/search-filter/SearchFilter";
import { OtherRestaurant1 } from "./components/other-restaurant/OtherRestaurant1";
import { OtherRestaurant2 } from "./components/other-restaurant/OtherRestaurant2";
import { OtherRestaurant3 } from "./components/other-restaurant/OtherRestaurant3";
import { OtherRestaurant4 } from "./components/other-restaurant/OtherRestaurant4";
import { MobileOtherRestaurant } from "./components/other-restaurant/MobileOtherRestaurnt";

export const Restaurant: React.FC = () => {
  // const router = useRouter();

  return (
    <div className="home-container">
      <div className="hero_frame">
        <ProductServicesFoodVendor />
      </div>
      <TopRestaurants />
      <SearchFilter />
      <MobileOtherRestaurant />
      <div className="OtherRestaurants_container">
      <OtherRestaurant1 />
      <OtherRestaurant2 />
      <OtherRestaurant3 />
      <OtherRestaurant4 />
    </div>
      <Newsletter />
    </div>
  );
};
