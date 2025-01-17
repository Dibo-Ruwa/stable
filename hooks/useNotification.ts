import { useEffect, useState } from 'react';
import axios from 'axios';

interface INotification {
  _id: string;
  user: string;
  message: string;
  read: boolean;
  createdAt: Date;
  referenceId: string;
  category: string; // Add category field
  type: string; // Add type field
}

const useNotification = () => {
  const [notifications, setNotifications] = useState<INotification[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const { data } = await axios.get('/api/notifications');
        setNotifications(data.notifications);
        console.log("Notifications retrieved successfully");
      } catch (error) {
        console.error('Error fetching notifications', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, []);

  const markAsRead = async (notificationId: string) => {
    try {
      await axios.put(`/api/notifications/${notificationId}`, { read: true });
      setNotifications((prevNotifications) =>
        prevNotifications.map((notification) =>
          notification._id === notificationId
            ? { ...notification, read: true }
            : notification
        )
      );
      console.log("Notification marked as read successfully");
    } catch (error) {
      console.error('Error marking notification as read', error);
    }
  };

  return {
    notifications,
    loading,
    markAsRead,
  };
};

export default useNotification;
