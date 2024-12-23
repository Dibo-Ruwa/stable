"use client";
import React from "react";
import "./cleaning.css";
import CleaningSection from "./components/CleaningSection";
import Newsletter from "../partnerWithUs/component/newsletter/Newsletter";
import { ProductServicesCleaning } from "../cleaning/components/product-service-cleaning/ProductServicesCleaning";
import HomeCleaning from "./components/homeCleaning";
import OfficeCleaning from "./components/officeCleaning";
import IndustrialCleaning  from "./components/industrialCleaning";

const Partner: React.FC = () => {

  return (
    <div className="partner-container">
      {/* Hero Section */}
      <div className="Cleaning_hero_frame">
        <ProductServicesCleaning />
      </div>
        <HomeCleaning />
        <OfficeCleaning />
        <IndustrialCleaning />

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
};

export default Partner;

