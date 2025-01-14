"use client";
import React from "react";
import "./movingStyle.css";
import Newsletter from "../partnerWithUs/component/newsletter/Newsletter";
import HomeMoving from "./components/moving";
import CityDelivery from "./components/cityDelivery";
import OfficeMoving from "./components/officeMoving";
import PackingUnpacking from "./components/packing/packing";
import { ProductServicesMoving } from "./components/product-service-moving/ProductServicesMoving";
import Testimonials from "@/component/testimonials/testimonial";

// Example testimonial data for Moving
const movingTestimonials = [
  {
    text: "They handled my office relocation seamlessly with no downtime!",
    name: "Ahmed",
    location: "Kano",
  },
  {
    text: "Their city parcel delivery was so fast, I'll definitely use them again!",
    name: "Mary",
    location: "Kano",
  },
  {
    text: "Professional packing and all my items arrived safely in my new home!",
    name: "Sade",
    location: "Kano",
  },
  {
    text: "Best moving service in town. Saved me a ton of stress during relocation.",
    name: "Aliyu",
    location: "Kano",
  },
  {
    text: "Affordable, reliable, and super friendly staff. Highly recommend!",
    name: "Fatima",
    location: "Kano",
  },
];

const Moving: React.FC = () => {
  return (
    <div className="partner-container">
      {/* Hero Section */}
      <div className="Moving_hero_frame">
        <ProductServicesMoving />
      </div>
      <HomeMoving />
      <CityDelivery />
      <OfficeMoving />
      <PackingUnpacking />

      <Testimonials 
        title="What Our Customers Say" 
        items={movingTestimonials} 
      />
      {/* <Newsletter /> */}
    </div>
  );
};

export default Moving;

