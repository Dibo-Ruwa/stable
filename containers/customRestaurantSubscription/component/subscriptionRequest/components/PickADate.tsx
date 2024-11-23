'use client'
import React, { useState } from 'react'
import styles from "../subscriptionRequest.module.css"
import { Checkbox } from "@/component/Checkbox/Checkbox";

export const PickADate = () => {
 const [isWeeklyChecked, setIsWeeklyChecked] = useState<boolean>(false);
 const [isBiWeeklyChecked, setIsBiWeeklyChecked] = useState<boolean>(false);
 const [isMonthlyChecked, setIsMonthlyChecked] = useState<boolean>(false);
 const [is3MonthChecked, setIs3MonthChecked] = useState<boolean>(false);
 const [is6MonthChecked, setIs6MonthChecked] = useState<boolean>(false);
 const [isYearChecked, setIsYearChecked] = useState<boolean>(false);
  
    return (
      <div className={styles.SubscriptionRequest_ScheduleMeetingDate}>
        <Checkbox
          label="Weekly"
          checked={isWeeklyChecked}
          onChange={setIsWeeklyChecked}
          labelClassName="CheckBox_Label"
        />
        <Checkbox
          label="Bi-Weekly"
          checked={isBiWeeklyChecked}
          onChange={setIsBiWeeklyChecked}
          labelClassName="CheckBox_Label"
        />
        <Checkbox
          label="Monthly"
          checked={isMonthlyChecked}
          onChange={setIsMonthlyChecked}
          labelClassName="CheckBox_Label"
        />
        <Checkbox
          label="3 Months"
          checked={is3MonthChecked}
          onChange={setIs3MonthChecked}
          labelClassName="CheckBox_Label"
        />
        <Checkbox
          label="6 Months"
          checked={is6MonthChecked}
          onChange={setIs6MonthChecked}
          labelClassName="CheckBox_Label"
        />
        <Checkbox
          label="1 Year"
          checked={isYearChecked}
          onChange={setIsYearChecked}
          labelClassName="CheckBox_Label"
        />
      </div>
    );
}
