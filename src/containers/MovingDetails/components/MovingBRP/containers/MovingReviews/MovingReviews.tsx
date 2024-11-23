import React from 'react'
import styles from './MovingReviews.module.css'
import { CustomersRating } from  "./components/CustomersRating"
import { CustomersReview } from  "./components/CustomersReview"
export const MovingReviews = () => {
  return (
    <div className={styles.MovingReviewContainer}>
      <div className={styles.MovingReviewCards}>
        <CustomersRating />
        <CustomersReview />
    </div>
    </div>
  )
}
