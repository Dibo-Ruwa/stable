"use client";
import React, { useState } from "react";
import "./components/product-service-laundrying/product-service-laundrying.css";
import "./laundry.css";
import { ProductServicesLaundrying } from "./components/product-service-laundrying/ProductServicesLaundrying";
import { TopLaundries } from "./components/top-laundries/TopLaundries";
import Newsletter from "../partnerWithUs/component/newsletter/Newsletter";
import { SearchFilter } from "./components/search-filter/SearchFilter";
import { OtherLaundry1 } from "./components/other-laundrys/OtherLaundry1";
import { OtherLaundry2 } from "./components/other-laundrys/OtherLaundry2";
import { MobileOtherLaundryRoom } from "./components/other-laundrys/MobileOtherLaundryRoom";

export const Laundry: React.FC = () => {
  const [selectedRating, setSelectedRating] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <div className="Laundry_home-container">
      <div className="Laundry_hero_frame">
        <ProductServicesLaundrying />
      </div>
      <TopLaundries />
      <SearchFilter
        setSelectedRating={setSelectedRating}
        setSearchQuery={setSearchQuery}
      />
      <MobileOtherLaundryRoom />
      <div className="OtherLaundries_container">
        <OtherLaundry1
          selectedRating={selectedRating}
          searchQuery={searchQuery}
        />
        <OtherLaundry2
          selectedRating={selectedRating}
          searchQuery={searchQuery}
        />
      </div>
      <Newsletter />
    </div>
  );
};
