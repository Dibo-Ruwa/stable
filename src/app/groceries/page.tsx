import React from "react";
import Groceries from "@/containers/groceries/Groceries";

export const metadata = {
  title: "Groceries",
};


// Page component now receives `params` directly
const Page = () => {


  return (
    <div>
      <Groceries />
    </div>
  );
};

export default Page;
