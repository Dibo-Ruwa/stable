import React, { ReactNode } from "react";
import styles from "./user-orders.module.css";
import Link from "next/link";


interface UserOrdersCardProps {
  className?: string;
  children: ReactNode;
  id?: number;
  type?: string; // Added the type parameter
}

export const UserOrdersCard: React.FC<UserOrdersCardProps> = ({
  className = "",
  children,
  id,
  type,
}) => {
  return (
    <Link
      href={id ? `/profile/orders/${id}?type=${type}` : '#'}
      className={`${styles.card} ${className}`}
      style={{
        padding: "5px 10px",
      }}
    >
      {children}
    </Link>
  );
};
