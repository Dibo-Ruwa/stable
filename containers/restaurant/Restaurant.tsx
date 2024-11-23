"use client";
import React, { useState, useEffect, useMemo } from "react";
import "./components/product-service-foodvendor/product-service-food-vendor.css";
import "./restaurant.css";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Newsletter from "../partnerWithUs/component/newsletter/Newsletter";
import RestAdvert from "../Home/components/restAdvert/RestAdvert";
import { ProductServicesFoodVendor } from "./components/product-service-foodvendor/ProductServicesFoodVendor";
import { TopRestaurants } from "./components/top-restaurant/TopRestaurants";
import { SearchFilter } from "./components/search-filter/SearchFilter";
import { OtherRestaurant1 } from "./components/other-restaurant/OtherRestaurant1";
import { OtherRestaurant2 } from "./components/other-restaurant/OtherRestaurant2";
import { OtherRestaurant3 } from "./components/other-restaurant/OtherRestaurant3";
import { OtherRestaurant4 } from "./components/other-restaurant/OtherRestaurant4";
import { MobileOtherRestaurant } from "./components/other-restaurant/MobileOtherRestaurnt";

type ServiceName =
  | "Laundry chores."
  | "Cleaning duties"
  | "Cooking responsibilities"
  | "Moving/Packing stress";

const serviceTextColorMapping: Record<ServiceName, string> = {
  "Laundry chores.": "#3277a8",
  "Cleaning duties": "#e67300",
  "Cooking responsibilities": "#a67c00",
  "Moving/Packing stress": "#800080",
};

export const Restaurant: React.FC = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const serviceOptions: string[] = useMemo(
    () => [
      "Laundry chores.",
      "Cleaning duties",
      "Cooking responsibilities",
      "Moving/Packing stress",
    ],
    []
  );

  const [currentService, setCurrentService] = useState<ServiceName>(
    serviceOptions[0] as ServiceName
  );
  const [serviceIndex, setServiceIndex] = useState(0);

  const currentServiceTextColor =
    serviceTextColorMapping[currentService] || "defaultTextColor";

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (serviceIndex + 1) % serviceOptions.length;
      setServiceIndex(nextIndex);
      setCurrentService(serviceOptions[nextIndex] as ServiceName);
    }, 3000);

    return () => clearInterval(interval);
  }, [serviceIndex, serviceOptions]);

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
