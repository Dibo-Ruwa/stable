"use client";
import React from "react";
import "./cleaning.css";
import CleaningSection from "./components/CleaningSection";
import Newsletter from "../partnerWithUs/component/newsletter/Newsletter";
import { ProductServicesCleaning } from "../cleaning/components/product-service-cleaning/ProductServicesCleaning";
import HomeCleaning from "./components/homeCleaning";
import OfficeCleaning from "./components/officeCleaning";
import IndustrialCleaning from "./components/industrialCleaning";
import TestimonialCarousel from "@/component/testimonials/testimonial";

const cleaningTestimonials = [
  {
    text: "My house never looked cleaner. Thorough and friendly staff!",
    name: "Musa",
    location: "Kano",
  },
  {
    text: "Loved how they used safe products for my kids.",
    name: "Joy",
    location: "Kano",
  },
  {
    text: "Punctual, professional, and affordable—I recommend them to everyone!",
    name: "Chinwe",
    location: "Kano",
  },
];

const CleaningPage: React.FC = () => {
  return (
    <div className="partner-container">
      {/* Hero Section */}
      <div className="Cleaning_hero_frame">
        <ProductServicesCleaning />
      </div>
      <HomeCleaning />
      <OfficeCleaning />
      <IndustrialCleaning />
      <TestimonialCarousel
        title="What Our Customers Say"
        items={cleaningTestimonials }
      />
    </div>
  );
};

export default CleaningPage;

