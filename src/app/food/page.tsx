import React from "react";
import Food from "@/containers/food/Food";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Food",
};

// Page component now receives `params` directly
const Page = () => {
  return (
    <div>
      <Food />
    </div>
  );
};

export default Page;
