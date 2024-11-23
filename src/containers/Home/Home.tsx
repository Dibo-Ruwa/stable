"use client";

import React, { useState, useEffect, useMemo } from "react";
import "./components/home.css";
import ProductServices from "./components/ProductServices";
import RestAdvert from "./components/restAdvert/RestAdvert";
import Meal from "./components/Meal/Meal";
import Resturant from "./components/restCont/RestContent";
import FoodImage from "./components/foodImage/FoodImage";
import Groceries from "./components/Groceries/Groceries";
import Delivery from "./components/foodDelivery/Delivery";
import Partner from "./components/Partner/Partner";
import LaundryService from "./components/laundryService/LaundryService";
import GroomingService from "./components/groomingService/GroomingService";
import Cleaning from "./components/laundryService/Cleaning";
import { Data } from "@/constants/index";
import Newsletter from "../partnerWithUs/component/newsletter/Newsletter";

const Home: React.FC = () => {
  // Extract tags from the Data array
  const tags = useMemo<string[]>(
    () =>
      Data.map((item: { tag: string }) => item.tag).filter(
        (tag): tag is string => typeof tag === "string"
      ),
    []
  );

  // State for the selected tag
  const [selectedTag, setSelectedTag] = useState<string>(tags[0] || "Food");

  // Update selected tag on interval
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedTag((prevTag) => {
        const currentIndex = tags.indexOf(prevTag);
        const nextIndex = (currentIndex + 1) % tags.length;
        return tags[nextIndex];
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [tags]);

  return (
    <div className="home-container">
      <div className="hero_frame">
        <ProductServices
          selectedTag={selectedTag}
          setSelectedTag={setSelectedTag}
          data={Data} // Pass the actual Data array
        />
      </div>
      <RestAdvert selectedTag={selectedTag} />
      <Resturant />
      <Meal />
      <Delivery />
      <FoodImage />
      <LaundryService />
      <Cleaning />
      <GroomingService />
      <Groceries />
      <Partner />
      <Newsletter />
    </div>
  );
};

export default Home;
