import React, { useState } from "react";
import styles from "../LaundryBooking.module.css";

interface ItemsDescriptionProps {
  onChange: (description: string) => void;
}

export const ItemsDescription: React.FC<ItemsDescriptionProps> = ({ onChange }) => {
  const [description, setDescription] = useState("");

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const updatedDescription = event.target.value;
    setDescription(updatedDescription);
    onChange(updatedDescription); // Pass updated description to parent
  };

  return (
    <div className={styles.ItemsDescriptionContainer}>
      <label htmlFor="description" className={styles.ItemsDescriptionText}>
        Description
      </label>
      <textarea
        name="description"
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
