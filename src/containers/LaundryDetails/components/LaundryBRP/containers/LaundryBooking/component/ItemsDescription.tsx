import React from 'react'
import styles from "../LaundryBooking.module.css";

export const ItemsDescription = () => {
  return (
    <div className={styles.ItemsDescriptionContainer}>
        <label htmlFor='description' className={styles.ItemsDescriptionText}>Description</label>
         <textarea
            name="Address"
            className={styles.ItemsDescriptionTextarea}
            placeholder="Write..."
            cols={30}
            rows={5}
          ></textarea>
    </div>
  )
}
