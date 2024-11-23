import React from "react";
import styles from "../LaundryBooking.module.css";
import { CiLocationOn } from "react-icons/ci";

export const LaundryBookingAddress = () => {
  return (
    <div className={styles.LaundryBookingAddressContainer}>
      <p className={styles.LaundryBookingAddressContainerText}>
        Were are you moving to?
      </p>
      <div className={styles.LaundryBookingAddressCards}>
        <div className={styles.LaundryBookingAddressCard}>
          <div className={styles.LaundryBookingAddress_LocationDiv}>
            <p className={styles.LaundryBookingAddressLocationText}>
              Current Location
            </p>
            <div className={styles.LaundryBookingAddressLocation}>
              <p className={styles.LaundryBookingAddressLocationText}>
                Aba, Abia State
              </p>
              <CiLocationOn
                className={styles.LaundryBookingAddressLocationIcon}
              />
            </div>
          </div>
          <textarea
            name="Address"
            className={styles.LaundryBookingAddressTextarea}
            placeholder="No 24 Eberechi street, Umuahia Eberechi street Umuahia Abia state"
            cols={30}
            rows={5}
          ></textarea>
        </div>

        <div className={styles.LaundryBookingAddressCard}>
          <div className={styles.LaundryBookingAddress_LocationDiv}>
            <p className={styles.LaundryBookingAddressLocationText}>
              Delivery Location
            </p>
            <div className={styles.LaundryBookingAddressLocation}>
              <p className={styles.LaundryBookingAddressLocationText}>
                Aba, Abia State
              </p>
              <CiLocationOn
                className={styles.LaundryBookingAddressLocationIcon}
              />
            </div>
          </div>
          <textarea
            name="Address"
            className={styles.LaundryBookingAddressTextarea}
            placeholder="No 24 Eberechi street, Umuahia Eberechi street Umuahia Abia state"
            cols={30}
            rows={5}
          ></textarea>
        </div>
      </div>
    </div>
  );
};
