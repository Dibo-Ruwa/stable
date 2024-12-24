"use client";
import React from "react";
import "./movingStyle.css";
import Newsletter from "../partnerWithUs/component/newsletter/Newsletter";
import HomeMoving from "./components/moving";
import CityDelivery from "./components/cityDelivery";
import OfficeMoving from "./components/officeMoving";
import { ProductServicesMoving } from "../MovingPage/components/product-service-moving/ProductServicesMoving";

const Moving: React.FC = () => {
  return (
    <div className="partner-container">
      {/* Hero Section */}
      <div className="Cleaning_hero_frame">
        <ProductServicesMoving />
      </div>
      <HomeMoving />
      <CityDelivery />
      <OfficeMoving />
      {/* Newsletter */}
      <Newsletter />
    </div>
  );
};

export default Moving;

