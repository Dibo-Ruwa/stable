'use client'
import React, { useState } from 'react'
import styles from "../subscriptionRequest.module.css"
import { Checkbox } from "@/component/Checkbox/Checkbox";

export const PickADay = () => {
 const [isWeeklyChecked, setIsWeeklyChecked] = useState<boolean>(false);
 const [isBiWeeklyChecked, setIsBiWeeklyChecked] = useState<boolean>(false);
 const [isMonthlyChecked, setIsMonthlyChecked] = useState<boolean>(false);
 const [is3MonthChecked, setIs3MonthChecked] = useState<boolean>(false);
 const [is6MonthChecked, setIs6MonthChecked] = useState<boolean>(false);
 const [isYearChecked, setIsYearChecked] = useState<boolean>(false);
  
    return (
      <div className={styles.SubscriptionRequest_ScheduleMeetingDate}>
        <Checkbox
          label="Mondays"
          checked={isWeeklyChecked}
          onChange={setIsWeeklyChecked}
          labelClassName="CheckBox_Label"
        />
        <Checkbox
          label="Tuesdays"
          checked={isBiWeeklyChecked}
          onChange={setIsBiWeeklyChecked}
          labelClassName="CheckBox_Label"
        />
        <Checkbox
          label="Wednesdays"
          checked={isMonthlyChecked}
          onChange={setIsMonthlyChecked}
          labelClassName="CheckBox_Label"
        />
        <Checkbox
          label="Thursdays"
          checked={is3MonthChecked}
          onChange={setIs3MonthChecked}
          labelClassName="CheckBox_Label"
        />
        <Checkbox
          label="Fridays"
          checked={is6MonthChecked}
          onChange={setIs6MonthChecked}
          labelClassName="CheckBox_Label"
        />
        <Checkbox
          label="Saturdays"
          checked={isYearChecked}
          onChange={setIsYearChecked}
          labelClassName="CheckBox_Label"
        />
      </div>
    );
}
