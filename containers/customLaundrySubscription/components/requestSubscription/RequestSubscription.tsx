"use client";
import styles from "./RequestSubscription.module.css";
import { RequestSubSetDuration } from "./components/RequestSubSetDuration";
import { RequestSubSetDay } from "./components/RequestSubSetDay";
import { RequestSubSetLaundryItem } from "./components/RequestSubSetLaundryItem";
import { RequestSubAddExtraItem } from "./components/RequestSubAddExtraItem";
import { RequestSubDescriptions } from "./components/RequestSubDescriptions";
import { Button } from "@/component/shared/Button";
import { BsExclamationCircle } from "react-icons/bs";

export const RequestSubscription = () => {
  return (
    <div className={styles.RequestSubscription_Container}>
      <p className={styles.RequestSubscription_Text}>My Subscription Request</p>
      <hr className={styles.RequestSubscription_Line} />
      <div className={styles.RequestSubscription_DayDurationAndLaundry}>
        <div className={styles.RequestSubscription_DayDuration}>
          <RequestSubSetDuration />
          <RequestSubSetDay />
        </div>
        <div className={styles.RequestSubscription_LaundryContainer}>
          <RequestSubSetLaundryItem />
        </div>
      </div>
      <div className={styles.RequestSubscription_RequestSubAddExtraItem}>
        <RequestSubAddExtraItem />
      </div>
      <div className={styles.RequestSubscription_RequestSubDescriptions}>
        <RequestSubDescriptions />
      </div>
      <Button
        text="Send"
        onClick={() => {}}
        className={styles.LaundryDoneButton}
      />

      <div className={styles.RequestSub_Weaning}>
        <BsExclamationCircle className={styles.RequestSub_WeaningIcon} />
       <p className={styles.RequestSub_WeaningText}>
         Please note that the service will begin at the start of the week
        once your request is approved.
        
        </p>
      </div>
    </div>
  );
};
