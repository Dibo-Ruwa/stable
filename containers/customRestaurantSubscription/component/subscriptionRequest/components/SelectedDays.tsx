"use client";
import React, { useState } from "react";
import styles from "../subscriptionRequest.module.css";
import { EditName } from "./EditName";
import { Checkbox } from "@/component/Checkbox/Checkbox";
import { PropertyCounter } from "@/component/CustomCounter/PropertyCounter";
import { CustomAddMore } from "@/component/CustomAddMore/CustomAddMore";
import { ScheduleTime } from "@/component/ScheduleTime/ScheduleTime";

export const SelectedDays = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handlePickUpChange = () => {
    setSelectedOption(selectedOption === "pickup" ? null : "pickup");
  };

  const handleDeliveryChange = () => {
    setSelectedOption(selectedOption === "delivery" ? null : "delivery");
  };
  return (
    <div className={styles.SelectedDays_Cards}>
      <div className={styles.SelectedDays_Card}>
        <p className={styles.SelectedDays_CardTitle}>Monday</p>
        <EditName />
        <div className={styles.SelectedDays_DeliveryType}>
          <div className={styles.SelectedDays_DeliveryType_ChooseType}>
            <Checkbox
              label="Plate(s)"
              checked={selectedOption === "pickup"}
              onChange={handlePickUpChange}
              labelClassName={styles.CheckBox_Label}
            />
            <Checkbox
              label="Liters"
              checked={selectedOption === "delivery"}
              onChange={handleDeliveryChange}
              labelClassName={styles.CheckBox_Label}
            />
          </div>
          <PropertyCounter className={styles.DeliveryType_Counter} />
        </div>
        <div className={styles.SelectedDays_addMoreContainer}>
          <CustomAddMore
            label="Add Protein"
            className={styles.SelectedDays_addMoreBtn}
          />
          <CustomAddMore
            label="Add Drink"
            className={styles.SelectedDays_addMoreBtn}
          />
          <CustomAddMore
            label="Extra"
            className={styles.SelectedDays_addMoreBtn}
          />
        </div>
        <div className={styles.SelectedDays_ScheduleTime}>
          <p className={styles.SelectedDays_ScheduleTimeOpt}>
            Schedule Delivery (optional)
          </p>
          <ScheduleTime
            time="12:00pm"
            label="Time"
            className={styles.SelectedDays_ScheduleTimeSetOpt}
          />
        </div>
      </div>
      <div className={styles.SelectedDays_Card}>
        <p className={styles.SelectedDays_CardTitle}>Monday</p>
        <EditName />
        <div className={styles.SelectedDays_DeliveryType}>
          <div className={styles.SelectedDays_DeliveryType_ChooseType}>
            <Checkbox
              label="Plate(s)"
              checked={selectedOption === "pickup"}
              onChange={handlePickUpChange}
              labelClassName={styles.CheckBox_Label}
            />
            <Checkbox
              label="Liters"
              checked={selectedOption === "delivery"}
              onChange={handleDeliveryChange}
              labelClassName={styles.CheckBox_Label}
            />
          </div>
          <PropertyCounter className={styles.DeliveryType_Counter} />
        </div>
        <div className={styles.SelectedDays_addMoreContainer}>
          <CustomAddMore
            label="Add Protein"
            className={styles.SelectedDays_addMoreBtn}
          />
          <CustomAddMore
            label="Add Drink"
            className={styles.SelectedDays_addMoreBtn}
          />
          <CustomAddMore
            label="Extra"
            className={styles.SelectedDays_addMoreBtn}
          />
        </div>
        <div className={styles.SelectedDays_ScheduleTime}>
          <p className={styles.SelectedDays_ScheduleTimeOpt}>
            Schedule Delivery (optional)
          </p>
          <ScheduleTime
            time="12:00pm"
            label="Time"
            className={styles.SelectedDays_ScheduleTimeSetOpt}
          />
        </div>
      </div>
    </div>
  );
};
