import { BackButton } from '@/component/ui/BackButton/BackButton';
import styles from './CustomLaundrySub.module.css';
import React from 'react'
import { RequestConfirmation } from './components/requestConfirmation/RequestConfirmation';
import { RequestSubscription } from './components/requestSubscription/RequestSubscription';

export const CustomLaundrySub = () => {
  return (
    <div className={styles.CustomLaundrySub_container}>
      <BackButton className="Back_Button" />
      <div className={styles.CustomLaundrySub_content}>
        <RequestSubscription />
        <RequestConfirmation />
      </div>
    </div>
  );
}
