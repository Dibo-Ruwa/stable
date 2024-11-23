import React from "react";
import { MdAdd } from "react-icons/md";
import { HiMinus } from "react-icons/hi2";
import styles from "./cta-delivery.module.css";

export const CTADelivery = () => {
  return (
    <div className={styles.cta_delivery_container}>
      <div className={styles.inc_dec}>
        <HiMinus className={styles.cta_delivery_icon} />

        <div className={styles.cta_delivery_num}>0</div>
        <div className={styles.cta_delivery_icon}>
          <MdAdd className={styles.cta_delivery_icon} />
        </div>
      </div>
      <div className={styles.cta_delivery_btns}>
        <button className={styles.cta_delivery_pick_up}>Pick up</button>
        <button className={styles.cta_delivery_delivery}>Delivery</button>
      </div>
    </div>
  );
};
