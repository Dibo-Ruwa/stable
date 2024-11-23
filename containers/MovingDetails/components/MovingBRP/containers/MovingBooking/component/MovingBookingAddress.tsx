import React from "react";
import styles from "../MovingBooking.module.css";
import { CiLocationOn } from "react-icons/ci";

export const MovingBookingAddress = () => {
  return (
    <div className={styles.MovingBookingAddressContainer}>
      <p className={styles.MovingBookingAddressContainerText}>
        Were are you moving to?
      </p>
      <div className={styles.MovingBookingAddressCards}>
        <div className={styles.MovingBookingAddressCard}>
          <div className={styles.MovingBookingAddress_LocationDiv}>
            <p className={styles.MovingBookingAddressLocationText}>
              Current Location
            </p>
            <div className={styles.MovingBookingAddressLocation}>
              <p className={styles.MovingBookingAddressLocationText}>
                Aba, Abia State
              </p>
              <CiLocationOn
                className={styles.MovingBookingAddressLocationIcon}
              />
            </div>
          </div>
          <textarea
            name="Address"
            className={styles.MovingBookingAddressTextarea}
            placeholder="No 24 Eberechi street, Umuahia Eberechi street Umuahia Abia state"
            cols={30}
            rows={5}
          ></textarea>
        </div>

        <div className={styles.MovingBookingAddressCard}>
          <div className={styles.MovingBookingAddress_LocationDiv}>
            <p className={styles.MovingBookingAddressLocationText}>
              Delivery Location
            </p>
            <div className={styles.MovingBookingAddressLocation}>
              <p className={styles.MovingBookingAddressLocationText}>
                Aba, Abia State
              </p>
              <CiLocationOn
                className={styles.MovingBookingAddressLocationIcon}
              />
            </div>
          </div>
          <textarea
            name="Address"
            className={styles.MovingBookingAddressTextarea}
            placeholder="No 24 Eberechi street, Umuahia Eberechi street Umuahia Abia state"
            cols={30}
            rows={5}
          ></textarea>
        </div>
      </div>
    </div>
  );
};
