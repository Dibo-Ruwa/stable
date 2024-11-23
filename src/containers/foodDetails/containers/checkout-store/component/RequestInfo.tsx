import React from "react";
import styles from "../checkout-store.module.css";
export const RequestInfo = () => {
  return (
    <div>
      <div className={styles.store_owner_box}>
        <p className={styles.store_owner_name}>Carolina Stores</p>
        <p className={styles.request_check}>Please confirm your Request</p>
      </div>
      <div className={styles.request_box}>
        <hr className={styles.request_line} />
        {[
          { name: "Fried Rice", quantity: "2 Plates" },
          { name: "Protein", quantity: "4" },
          { name: "Drink", quantity: "5" },
          { name: "Extras", quantity: "4" },
        ].map((food, index) => (
          <div key={index} className={styles.requested_food}>
            <p className={styles.requested_food_name}>{food.name}</p>
            <p className={styles.requested_food_quantity}>{food.quantity}</p>
          </div>
        ))}
        <hr className={styles.request_line} />
      </div>
      <div className={styles.account_box}>
        {[
          { label: "Sub Total", amount: "$10,000" },
          { label: "Delivery", amount: "$10,000" },
          { label: "Total", amount: "$100,000", isTotal: true },
        ].map((account, index) => (
          <div key={index} className={styles.account_content}>
            <p className={styles.account_sub_total_text}>{account.label}</p>
            <p
              className={`styles.account_total_amount ${
                account.isTotal
                  ? "text-[#27a124] font-semibold"
                  : "text-[#565656] font-medium"
              }`}
            >
              {account.amount}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
