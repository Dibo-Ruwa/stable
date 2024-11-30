import FoodDetail from "@/containers/foodDetails/FoodDetail";
import React from "react";

export const metadata = {
  title: "Food Details",
};

export type IpageProps = {
  params: {
    id: string;

  };
};

const page: React.FC<IpageProps> = ({ params: { id } }) => {
  return (
    <div>
      <FoodDetail id={id} />
    </div>
  );
};

export default page;
