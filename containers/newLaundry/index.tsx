"use client";
import React from "react";
import "./cleaning.css";
import CleaningSection from "./components/CleaningSection";
import Newsletter from "../partnerWithUs/component/newsletter/Newsletter";
import HomeLaundry from "./components/laundry";
import OfficeCleaning from "./components/officeCleaning";
import IndustrialCleaning  from "./components/industrialCleaning";
import { ProductServicesLaundrying } from "../Laundry/components/product-service-laundrying/ProductServicesLaundrying";

const Laundry: React.FC = () => {

  return (
    <div className="partner-container">
      {/* Hero Section */}
      <div className="Cleaning_hero_frame">
        <ProductServicesLaundrying />
      </div>
        <HomeLaundry />
        <OfficeCleaning />
        <IndustrialCleaning />

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
};

export default Laundry;

