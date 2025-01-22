"use client";
import React from "react";
import "./notifications.css";
import Link from "next/link";
import useNotification from "@/hooks/useNotification";

export const Notifications: React.FC = () => {
  const { notifications, loading, markAsRead } = useNotification();

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="message_container">
      <p className="message_title">Notifications</p>
      <hr className="message_divider" />
      <div className="message_cards">
        {notifications.length === 0 ? (
          <p>No new notifications.</p>
        ) : (
          notifications.map((notification) => (
            <div key={notification._id} className="message_card">
              <div className="message_details">
                <p className="message_details_title">{notification.message}</p>
                <Link
                  href={
                    notification.category === "order"
                      ? `/profile/orders/${notification.referenceId}?type=${notification.type}`
                      : `/profile/subscriptions/${notification.referenceId}?type=${notification.type}`
                  }
                  className="message_details_link"
                  onClick={() => markAsRead(notification._id)}
                >
                  View Details
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
