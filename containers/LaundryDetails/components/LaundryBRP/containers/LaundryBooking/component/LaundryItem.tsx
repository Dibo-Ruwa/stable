import React, { useState, useEffect } from "react";
import styles from "../LaundryBooking.module.css";
import { LaundryItemsGroup } from "./LaundryItemsGroup";
import { AddProperty } from "./AddProperty";
import { ItemsDescription } from "./ItemsDescription";
import { LaundrySchedule } from "./LaundrySchedule";
import { Button } from "@/component/shared/Button";
import { AiOutlinePlus } from "react-icons/ai";

interface PredefinedItems {
  [key: string]: number;
}

interface CustomProperty {
  name: string;
  quantity: number;
}

interface BookingData {
  predefinedItems: PredefinedItems;
  customProperties: CustomProperty[];
  schedule: {
    pickupDate: string;
    pickupTime: string;
    deliveryDate: string;
    deliveryTime: string;
  };
}

export const LaundryItem = () => {
  const [isAddPropertyVisible, setAddPropertyVisible] = useState(false);
  const [bookingData, setBookingData] = useState<BookingData>({
    predefinedItems: {},
    customProperties: [],
    schedule: {
      pickupDate: "",
      pickupTime: "8:00 AM",
      deliveryDate: "",
      deliveryTime: "1:00 PM",
    },
  });

  useEffect(() => {
    const storedData = localStorage.getItem("laundryBookingData");
    if (storedData) {
      setBookingData(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("laundryBookingData", JSON.stringify(bookingData));
    console.log("Current booking data:", bookingData); // Log booking data whenever it changes
  }, [bookingData]);

  const handleToggleAddProperty = () => {
    setAddPropertyVisible((prev) => !prev);
  };

  const handleScheduleChange = (newSchedule: {
    pickupDate: string;
    pickupTime: string;
    deliveryDate: string;
    deliveryTime: string;
  }) => {
    setBookingData((prevData) => ({
      ...prevData,
      schedule: newSchedule,
    }));
  };

  const validateBookingData = () => {
    const { predefinedItems, customProperties, schedule } = bookingData;
    const hasItems =
      Object.values(predefinedItems).some((qty) => qty > 0) ||
      customProperties.some((prop) => prop.quantity > 0);
    return (
      hasItems &&
      schedule.pickupDate &&
      schedule.pickupTime &&
      schedule.deliveryDate &&
      schedule.deliveryTime
    );
  };

  const handleSend = () => {
    if (!validateBookingData()) {
      alert("Please complete all required fields.");
      return;
    }
    console.log("Booking data sent successfully:", bookingData); // Log booking data on send
    alert("Booking request processed successfully!");
    localStorage.removeItem("laundryBookingData");
    setBookingData({
      predefinedItems: {},
      customProperties: [],
      schedule: {
        pickupDate: "",
        pickupTime: "8:00 AM",
        deliveryDate: "",
        deliveryTime: "1:00 PM",
      },
    });
  };

  return (
    <form className={styles.LaundryBookingContainer}>
      <div className={styles.LaundryItemContainer}>
        <div className={styles.LaundryItemChoices}>
          <LaundryItemsGroup />
        </div>

        <div className={styles.LaundryAddCustomContainer}>
          <p className={styles.LaundryAddCustomContainerText}>
            Can’t find your clothing type?
          </p>
          <button
            type="button"
            className={styles.AddCustom}
            onClick={handleToggleAddProperty}
          >
            <AiOutlinePlus className={styles.AddCustom_AddMoreIcon} />
            <p className={styles.AddCustom_Text}>Add Custom</p>
          </button>
        </div>

        {isAddPropertyVisible && (
          <div className={styles.LaundryPropertyContainer}>
            <AddProperty />
          </div>
        )}

        <LaundrySchedule
          schedule={bookingData.schedule}
          setSchedule={handleScheduleChange}
        />
        <div className={styles.Laundry_ItemsDescription}>
          <ItemsDescription />
        </div>
        <Button
          text="Send"
          onClick={handleSend}
          className={styles.LaundryDoneButton}
        />
      </div>
    </form>
  );
};
