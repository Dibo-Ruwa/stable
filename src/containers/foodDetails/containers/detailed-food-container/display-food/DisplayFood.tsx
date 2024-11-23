"use client";
import React from "react";
import { AboutFood } from "../about-food/AboutFood";
import { CTADelivery } from "../cta-delivery/CTADelivery";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
import styles from "./display-food.module.css";
// Tailwind CSS classes replace styled-components
export const DisplayFood = () => {
  return (
    <section className={styles.container}>
      <div>
        <img
          src="/images/Frame 2610163.png"
          alt="on display"
          className={styles.ondisplay_img}
        />
      </div>
      <div className={styles.selected_img}>
        <button className={styles.prev_btn}>
          <TfiAngleLeft />
        </button>
        <img
          src="/images/151e2d46640e246f42f769231cc76bab.png"
          alt="on selected"
          className={styles.onselected_img}
        />
        <img
          src="/images/d8cc774cbb454c39b0c0a291406db198.png"
          alt="on selected"
          className={styles.onselected_img}
        />
        <img
          src="/images/d8cc774cbb454c39b0c0a291406db198.png"
          alt="on selected"
          className={styles.onselected_img}
        />
        <img
          src="/images/d8cc774cbb454c39b0c0a291406db198.png"
          alt="on selected"
          className={styles.onselected_img}
        />
        <img
          src="/images/7440670515731ae400623ae77f2ecbd7.png"
          alt="on selected"
          className={styles.onselected_img}
        />
        <button className={styles.prev_btn}>
          <TfiAngleRight />
        </button>
      </div>
      <AboutFood />
      <CTADelivery />
    </section>
  );
};
