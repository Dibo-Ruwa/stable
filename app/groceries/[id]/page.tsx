import GroceriesDetail from "@/containers/groceriesDetails/GroceriesDetail";
import React from "react";

export type IpageProps = {
  params: {
    id: string;
  };
};


export const metadata = {
  title: "Grocery Details",
};

const page: React.FC<IpageProps> = ({ params: { id } }) => {
  return (
    <div>
      <GroceriesDetail id={id} />
    </div>
  );
};

export default page;
