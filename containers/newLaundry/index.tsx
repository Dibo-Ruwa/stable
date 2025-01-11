"use client";
import React from "react";
import "./laundry.css";
import Newsletter from "../partnerWithUs/component/newsletter/Newsletter";
import RegularWashing from "./components/regularWashing";
// import GentleWashing from "./components/gentleWashing";
import SustainableDetergent from "./components/sustainableDetergent";
import LaundrySubscription from "./components/laundrySubscription";
import { ProductServicesLaundrying } from "./components/product-service-laundrying/ProductServicesLaundrying";
import TestimonialCarousel from "@/component/testimonials/testimonial";

const laundryTestimonials = [
  {
    text: "My clothes have never felt fresher. Quick and reliable service!",
    name: "Aisha",
    location: "Kano",
  },
  {
    text: "Their eco-friendly detergent really helps with my allergies.",
    name: "Peter",
    location: "Kano",
  },
  {
    text: "Pick-up and delivery was so smooth—saved me a ton of time!",
    name: "Fatima",
    location: "Kano",
  },
];

const LaundryPage: React.FC = () => {
  return (
    <div className="partner-container">
      {/* Hero Section */}
      <div className="Laundry_hero_frame">
        <ProductServicesLaundrying />
      </div>
      <RegularWashing />
      <SustainableDetergent />
      <LaundrySubscription />
      <TestimonialCarousel
        title="What Our Laundry Customers Say"
        items={laundryTestimonials}
      />
    </div>
  );
};

export default LaundryPage;



