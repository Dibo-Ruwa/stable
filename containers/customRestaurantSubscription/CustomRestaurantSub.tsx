import { BackButton } from "@/component/ui/BackButton/BackButton";
import styles from "./CustomRestaurantSub.module.css";
import React from "react";
import { SubscriptionRequestConfirmation } from "./component/SubscriptionRequestConfirmation/SubscriptionRequestConfirmation";
import { SubscriptionRequest } from "./component/subscriptionRequest/SubscriptionRequest";

export const CustomRestaurantSub = () => {
  return (
    <div className={styles.CustomRestaurantSub_container}>
      <BackButton className="Back_Button" />
      <p className={styles.CustomRestaurantSub_contentTitle}>
        My Subscription Request
      </p>
      <div className={styles.CustomRestaurantSub_content}>
        <SubscriptionRequest />
        <SubscriptionRequestConfirmation />
      </div>
    </div>
  );
};
