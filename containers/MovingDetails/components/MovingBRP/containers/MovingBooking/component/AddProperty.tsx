import React from "react";
import styles from "../MovingBooking.module.css";
import { EditName } from "./EditName";
import { PropertyCounter } from "./PropertyCounter";
import { AddPropertyImage } from "./AddPropertyImage";
import { AiOutlinePlus } from "react-icons/ai";

export const AddProperty = () => {
  return (
    <div className={styles.AddPropertyContainer}>
      <div className={styles.AddPropertyCards}>
        <div className={styles.AddPropertyCard}>
          <p className={styles.AddPropertyCardText}>You can edit your name</p>

          <div className={styles.AddPropertyEditNameAndCounter}>
            <EditName />
            <PropertyCounter />
          </div>
          <AddPropertyImage />
        </div>

        <div className={styles.AddPropertyCard}>
          <p className={styles.AddPropertyCardText}>You can edit your name</p>

          <div className={styles.AddPropertyEditNameAndCounter}>
            <EditName />
            <PropertyCounter />
          </div>
          <AddPropertyImage />
        </div>
      </div>
      <div className={styles.AddPropertyAddMore}>
        <AiOutlinePlus className={styles.AddPropertyAddMoreIcon}/>
        <p className={styles.AddPropertyAddMoreText}>Add More</p>
      </div>
    </div>
  );
};
