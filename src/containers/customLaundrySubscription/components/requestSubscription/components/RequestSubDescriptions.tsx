import React from "react";
import styles from "../RequestSubscription.module.css";

export const RequestSubDescriptions = () => {
  return (
    <div className={styles.ItemsDescriptionContainer}>
      <label htmlFor="description" className={styles.ItemsDescriptionText}>
        Description
      </label>
      <textarea
        name="Description"
        className={styles.ItemsDescriptionTextarea}
        placeholder="Write..."
        cols={30}
        rows={5}
      ></textarea>
    </div>
  );
};
