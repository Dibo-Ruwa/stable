import React from "react";
import styles from "../RequestSubscription.module.css";
import { RequestSubEditName } from "./RequestSubEditName";
import { RequestSubPropertyCounter } from "./RequestSubPropertyCounter";
import { AddExtraPropertyImage } from "./AddExtraPropertyImage";
import { AiOutlinePlus } from "react-icons/ai";

export const RequestSubAddExtraItem = () => {
  return (
    <div className={styles.AddPropertyContainer}>
      <div className={styles.AddPropertyCards}>
        <div className={styles.AddPropertyCard}>
          <p className={styles.AddPropertyCardText}>Add Extra</p>

          <div className={styles.AddPropertyEditNameAndCounter}>
            <RequestSubEditName />
            <RequestSubPropertyCounter />
          </div>
          <AddExtraPropertyImage />
        </div>

        <div className={styles.AddPropertyCard}>
          <p className={styles.AddPropertyCardText}>Add Extra</p>

          <div className={styles.AddPropertyEditNameAndCounter}>
            <RequestSubEditName />
            <RequestSubPropertyCounter />
          </div>
          <AddExtraPropertyImage />
        </div>
      </div>
      <div className={styles.AddProperty_AddMore}>
        <AiOutlinePlus className={styles.AddProperty_AddMoreIcon} />
        <p className={styles.AddProperty_AddMoreText}>Add More</p>
      </div>
    </div>
  );
};
