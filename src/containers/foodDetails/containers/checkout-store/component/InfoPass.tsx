import React from "react";
import styles from "../checkout-store.module.css";
export const InfoPass = () => {
  return (
    <div className={styles.infopass_container}>
      <p className={styles.infopass_text}>
        Want to pass an info?
      </p>
      <textarea
        placeholder="Write..."
        name="message"
        rows={4}
        cols={50}
        className={styles.infopass_textarea}
      ></textarea>
    </div>
  );
};
