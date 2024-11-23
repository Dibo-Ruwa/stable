import React from "react";
import { CustomRestaurantSub } from "@/containers/customRestaurantSubscription/CustomRestaurantSub";

export const metadata = {
  title: "Custom Restaurant Subscription",
};

const page = () => {
  return (
    <>
      <CustomRestaurantSub />
    </>
  );
};

export default page;
