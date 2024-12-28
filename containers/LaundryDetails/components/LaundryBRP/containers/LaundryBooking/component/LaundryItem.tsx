import React, { useState, useEffect } from "react";
import styles from "../LaundryBooking.module.css";
import { LaundryItemsGroup } from "./LaundryItemsGroup";
import { AddProperty } from "./AddProperty";
import { ItemsDescription } from "./ItemsDescription";
import { LaundrySchedule } from "./LaundrySchedule";
import { Button } from "@/component/shared/Button";
import { AiOutlinePlus } from "react-icons/ai";

interface PredefinedItems {
  [key: string]: number; // Clothing types (e.g., Shirts, Pants) and their quantities
}

interface CustomProperty {
  name: string; // Name of the custom item
  quantity: number; // Quantity of the custom item
}

interface BookingData {
  predefinedItems: PredefinedItems; // Predefined laundry items
  customProperties: CustomProperty[]; // Array of custom properties
  schedule: string; // Laundry schedule
}

export const LaundryItem = () => {
  // State to manage the visibility of the LaundryPropertyContainer
  const [isAddPropertyVisible, setAddPropertyVisible] = useState(false);

  // State to manage booking data
  const [bookingData, setBookingData] = useState<BookingData>({
    predefinedItems: {}, // Example: { Shirts: 2, Pants: 3 }
    customProperties: [], // Example: [{ name: "Custom1", quantity: 2 }]
    schedule: "", // Example: "Morning"
  });
  // Retrieve booking data from local storage on mount
  useEffect(() => {
    const storedData = localStorage.getItem("laundryBookingData");
    if (storedData) {
      setBookingData(JSON.parse(storedData));
    }
  }, []);

  // Save booking data to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("laundryBookingData", JSON.stringify(bookingData));
  }, [bookingData]);

  // Toggle visibility when the button is clicked
  const handleToggleAddProperty = () => {
    setAddPropertyVisible((prev) => !prev);
  };

  // Validate booking data before "sending"
  const validateBookingData = () => {
    const { predefinedItems, customProperties, schedule } = bookingData;

    // Ensure at least one item has a quantity > 0
    const hasItems =
      Object.values(predefinedItems).some((qty) => qty > 0) ||
      customProperties.some((prop) => prop.quantity > 0);

    // Ensure schedule is selected
    return hasItems && schedule !== "";
  };

  // Handle "Send" button click
  const handleSend = () => {
    if (!validateBookingData()) {
      alert("Please complete all required fields.");
      return;
    }

    // Simulate a successful booking process
    console.log("Booking data sent successfully:", bookingData);
    alert("Booking request processed successfully!");

    // Clear local storage after sending
    localStorage.removeItem("laundryBookingData");

    // Reset booking data state
    setBookingData({
      predefinedItems: {},
      customProperties: [],
      schedule: "",
    });
  };

  return (
    <div className={styles.LaundryBookingContainer}>
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

        <LaundrySchedule />
        <div className={styles.Laundry_ItemsDescription}>
          <ItemsDescription />
        </div>
        <Button
          text="Send"
          onClick={handleSend}
          className={styles.LaundryDoneButton}
        />
      </div>
    </div>
  );
};
