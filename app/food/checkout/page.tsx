import FoodDetail from "@/containers/foodDetails/FoodDetail";
import React from "react";

export const metadata = {
  title: "Food Details",
};

const page: React.FC = () => {
  return (
    <div>
      <FoodDetail  />
    </div>
  );
};

export default page;
