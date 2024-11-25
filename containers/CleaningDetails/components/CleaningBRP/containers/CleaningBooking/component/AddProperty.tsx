import React from "react";
import styles from "../LaundryBooking.module.css";
import { EditName } from "./EditName";
import { AddPropertyImage } from "./AddPropertyImage";
import { AiOutlinePlus } from "react-icons/ai";
import { PropertyCounter } from "@/component/CustomCounter/PropertyCounter";

export const AddProperty = () => {
  return (
    <div className={styles.AddPropertyContainer}>
      <div className={styles.AddPropertyCards}>
        <div className={styles.AddPropertyCard}>
          <p className={styles.AddPropertyCardText}>Add Extra</p>

          <div className={styles.AddPropertyEditNameAndCounter}>
            <EditName />
            <PropertyCounter />
          </div>
          <AddPropertyImage />
        </div>

        <div className={styles.AddPropertyCard}>
          <p className={styles.AddPropertyCardText}>Add Extra</p>

          <div className={styles.AddPropertyEditNameAndCounter}>
            <EditName />
            <PropertyCounter />
          </div>
          <AddPropertyImage />
        </div>
      </div>
      <div className={styles.AddProperty_AddMore}>
        <AiOutlinePlus className={styles.AddProperty_AddMoreIcon}/>
        <p className={styles.AddProperty_AddMoreText}>Add More</p>
      </div>
    </div>
  );
};
