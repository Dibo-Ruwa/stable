import React from "react";
import { RequestInfo } from "./component/RequestInfo";
import { InfoPass } from "./component/InfoPass";
import { DeliveryLocation } from "./component/DeliveryLocation";
import { SchDeliveryOpl } from "./component/SchDeliveryOpl";
import { CheckoutButton } from "./component/CheckoutBtn";

export const CheckoutStore = () => {
  return (
    <div
      className="w-full h-auto p-4 z-10 flex-shrink-0 rounded-lg bg-[#fefefe] shadow-lg relative right-2 top-0
      md:max-h-[90vh] md:overflow-auto md:p-5 sm:p-4"
    >
      <RequestInfo />
      <InfoPass />
      <DeliveryLocation />
      <SchDeliveryOpl />
      <CheckoutButton />
    </div>
  );
};
