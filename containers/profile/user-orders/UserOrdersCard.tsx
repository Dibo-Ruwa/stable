import React, { ReactNode } from "react";
import styles from "./user-orders.module.css";
import Link from "next/link";


interface UserOrdersCardProps {
  className?: string;
  children: ReactNode;
  id?: number;
}

export const UserOrdersCard: React.FC<UserOrdersCardProps> = ({
  className = "",
  children,
  id,
}) => {
  return (
    <Link
      href={id ? `/profile/or-ders/${id}` : '#'}
      className={`${styles.card} ${className}`}
    >
      {children}
    </Link>
  );
};
