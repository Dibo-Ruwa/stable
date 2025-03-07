"use client";
import React, { useState } from "react";
import "./components/product-service-cleaning/product-service-cleaning.css";
import "./cleaning.css";
import { ProductServicesCleaning } from "./components/product-service-cleaning/ProductServicesCleaning";
import { TopClean } from "./components/top-cleaning/TopClean";
import Newsletter from "../partnerWithUs/component/newsletter/Newsletter";
import { SearchFilter } from "./components/search-filter/SearchFilter";
import { OtherCleaning1 } from "./components/other-cleaning/OtherCleaning1";
import { OtherCleaning2 } from "./components/other-cleaning/OtherCleaning2";
import { MobileOtherCleaningRoom } from "./components/other-cleaning/MobileOtherCleaningRoom";

export const Cleaning: React.FC = () => {
  const [selectedRating, setSelectedRating] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  return (
    <div className="Cleaning_home-container">
      <div className="Cleaning_hero_frame">
        <ProductServicesCleaning />
      </div>
      <TopClean />
      <SearchFilter
        setSelectedRating={setSelectedRating}
        setSearchQuery={setSearchQuery}
      />
      <MobileOtherCleaningRoom />
      <div className="OtherCleaning_container">
        <OtherCleaning1
          selectedRating={selectedRating}
          searchQuery={searchQuery}
        />
        <OtherCleaning2
          selectedRating={selectedRating}
          searchQuery={searchQuery}
        />
      </div>
      <Newsletter />
    </div>
  );
};
