import React from 'react'
import { MdAdd } from "react-icons/md";
import styles from "../../../../../containers/foodDetails/containers/detailed-food-container/about-food/about-food.module.css"

// about-food.module.css
export const AdditionBtn = () => {
  return (
    <div className={styles.addmore_container}>
      {/* <div className={styles.addmore_things}>
        <p className={styles.addmore_text}>Add Protein</p>
        <div className={styles.addmore_icon_div}>
        <MdAdd className={styles.addmore_icon}/>
      </div>
      </div>
      <div className={styles.addmore_things}>
        <p className={styles.addmore_text}> Add Drink</p>
        <div className={styles.addmore_icon_div}>
        <MdAdd className={styles.addmore_icon}/>
      </div>
      </div> */}
      <div className={styles.addmore_things}>
        <p className={styles.addmore_text}>Extras</p>
        <div className={styles.addmore_icon_div}>
        <MdAdd className={styles.addmore_icon}/>
      </div>
      </div>
    </div>
  );
}
