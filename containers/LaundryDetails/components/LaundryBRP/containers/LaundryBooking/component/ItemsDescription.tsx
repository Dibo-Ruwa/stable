import React, { useState } from "react";
import styles from "../LaundryBooking.module.css";

export const ItemsDescription = () => {
  const [description, setDescription] = useState("");

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(event.target.value);
    console.log("Description updated:", event.target.value); // Log updated description
  };

  return (
    <div className={styles.ItemsDescriptionContainer}>
      <label htmlFor="description" className={styles.ItemsDescriptionText}>
        Description
      </label>
      <textarea
        name="Address"
        className={styles.ItemsDescriptionTextarea}
        placeholder="Write..."
        cols={30}
        rows={5}
        value={description}
        onChange={handleDescriptionChange} // Handle change event
      ></textarea>
    </div>
  );
};
