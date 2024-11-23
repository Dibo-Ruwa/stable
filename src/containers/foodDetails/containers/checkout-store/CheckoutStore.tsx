import React from "react";
import { RequestInfo } from "./component/RequestInfo";
import { InfoPass } from "./component/InfoPass";
import { DeliveryLocation } from "./component/DeliveryLocation";
import { SchDeliveryOpl } from "./component/SchDeliveryOpl";
import { CheckoutButton } from "./component/CheckoutBtn";
import styles from './checkout-store.module.css'
export const CheckoutStore = () => {
  return (
    <div className={styles.StoresContainer}>
      <RequestInfo />
      <InfoPass />
      <DeliveryLocation />
      <SchDeliveryOpl />
      <CheckoutButton />
    </div>
  );
};
