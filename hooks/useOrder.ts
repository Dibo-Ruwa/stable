// useOrder.ts
import { useEffect, useState } from "react";

import axios from "axios";
import { CartItem, Order, Subscription } from "@/utils/types/types";
import { useSession } from "next-auth/react";
import useCartStore from "@/store/useCart.store";
import { toast } from "react-hot-toast";
import { User } from "next-auth";
import { useRouter } from "next/navigation";
import Notification from "@/utils/models/Notifications";

interface CartOrderData {
  cartItems: CartItem[];
  user: User;
}

interface SubscriptionOrderData {
  subscription: any;
}

interface OrderData {
  referenceId: string;
  amount: number;
  deliveryFee: number;
  selectedRegion: string;
  orderType: 'instant' | 'pre-order';
  scheduledDelivery?: {
    date: string;
    time: string;
  };
}

interface OrderSubmitData {
  orderType: 'instant' | 'pre-order';
  scheduledDelivery?: {
    date: string;
    time: string;
  } | null;
  deliveryMethod: 'delivery' | 'pickup';
  infoPass: string;
  couponInfo?: {
    code: string;
    discount: number;
    couponId: string;
    mode: string;
  } | null;
}

const useOrder = () => {
  const [orders, setOrders] = useState([]);
  const [order, setOrder] = useState<Order | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false); // New state for redirection
  const [loading, setLoading] = useState(true); // Add loading state

  const { data: session } = useSession();

  const [modalMessage, setModalMessage] = useState("");
  const [modalErrorType, setModalErrorType] = useState<
    "success" | "error" | "info"
  >("success");
  const [showModal, setShowModal] = useState(false);

  const openModal = (
    errorType: "success" | "error" | "info",
    errorMessage: string
  ) => {
    setModalMessage(errorMessage);
    setModalErrorType(errorType);
    setShowModal(true);

    console.log(showModal);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const router = useRouter();

    // Function to check if a user has an active subscription of the same type
    const checkActiveSubscription = async (subscriptionType: string) => {
      try {
        const { data } = await axios.get(`/api/subscriptions/check?type=${subscriptionType}`);
        if (data?.hasActiveSubscription) {
          return true;
        }
        return false;
      } catch (error) {
        console.error("Error checking active subscription", error);
        return false; // Assume no subscription on error
      }
    };
    

  const getOrders = () => {
    setIsSubmitting(true);
    setLoading(true); // Set loading to true when fetching orders
    // Fetch orders
    axios.get("/api/order").then((response) => {
      setOrders(response.data.orders);
      setIsSubmitting(false);
      setLoading(false); // Set loading to false after fetching orders
    }).catch(() => {
      setLoading(false); // Set loading to false in case of error
    });
  };

  const handleCartOrderSubmit = async (
    referenceId: string, 
    amount: number, 
    deliveryFee: number, 
    selectedRegion: string,
    orderData: {
      orderType: 'instant' | 'pre-order';
      scheduledDelivery?: { date: string; time: string } | null;
      deliveryMethod: 'delivery' | 'pickup';
      infoPass: string;
      couponInfo?: {
        code: string;
        discount: number;
        couponId: string;
        mode: string;
      } | null;
    }
  ) => {
    setIsSubmitting(true);
    setIsError(false);
    setIsSuccess(false);

    try {
      console.log('Order submission data:', {
        referenceId,
        amount,
        deliveryFee,
        selectedRegion,
        ...orderData
      });

      const { data } = await axios.post("/api/order/cart", {
        referenceId,
        amount,
        deliveryFee,
        selectedRegion,
        ...orderData // Pass all order data including coupon
      });

      toast.loading("Cart order is being processed", {
        duration: 2000,
      });

      // Create notification with order type info
      await axios.post("/api/notifications", {
        message: `Your ${orderData.orderType} order with reference ID ${referenceId} has been placed successfully.${
          orderData.orderType === 'pre-order' 
            ? ` Scheduled for ${orderData.scheduledDelivery?.date} at ${orderData.scheduledDelivery?.time}.` 
            : ''
        }`,
        referenceId: data.order?._id,
        category: "order",
        type: data.order.type
      });

      if (data.success) {
        // Clear cart immediately after successful order
        await useCartStore.getState().clearCart();
        toast.success("Order placed successfully!");
        
        // Then proceed with other success actions
        setIsSuccess(true);
        setIsRedirecting(true);
        
        setTimeout(() => {
          router.push(`/profile/orders/${data.order?._id}?type=${data.order?.type}`);
        }, 500);
      }

    } catch (error) {
      setIsError(true);
      toast.error("Error submitting cart order.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubscriptionOrderSubmit = async (
    referenceId: string,
    subscriptionOrderData: any,
    type?: string
  ) => {
    setIsSubmitting(true);
    setIsError(false);
    setIsSuccess(false);

    try {
      console.log(subscriptionOrderData);
      if (type === "one_off") {
        const { subscription } = subscriptionOrderData;

        const { data } = await axios.put(
          `/api/order/subscription/${subscription?._id}`,
          {
            referenceId,
            subscription,
          }
        );

        toast.loading("Subscription order is being processed", {
          duration: 2000,
        });

        // Call the notification API to create a notification
        await axios.post("/api/notifications", {
          message: `Your subscription order with reference ID ${referenceId} has been placed successfully.`,
          referenceId: data.order?._id,
          category: "subscription",
          type: data.order?.type
        });

        setTimeout(() => {
          useCartStore.getState().getSubscriptions();

          setIsSuccess(true);
          toast.success("Subscription received successfully");
          setIsRedirecting(true); // Set redirecting state to true
          router.push(`/profile/orders/${data.order?._id}?type=${data.order?.type}`);
        }, 500);
      } else {
        const { subscription } = subscriptionOrderData;

        const { data } = await axios.post(`/api/subscriptions`, {
          referenceId,
          subscription,
        });

        toast.loading("Subscription is being processed", {
          duration: 2000,
        });

        // Call the notification API to create a notification
        await axios.post("/api/notifications", {
          message: `Your subscription order with reference ID ${referenceId} has been placed successfully.`,
          referenceId: data.subscription?._id,
          category: "subscription",
          type: data.subscription?.type
        });

        setTimeout(() => {
          useCartStore.getState().getSubscriptions();

          setIsSuccess(true);
          openModal("success", "Subscription received successfully");
          toast.success("Subscription received successfully");
          setIsRedirecting(true); // Set redirecting state to true
          router.push(`/profile/subscriptions/${data.subscription?._id}?type=${data.subscription?.type}`);
        }, 500);
      }
    } catch (error) {
      setIsError(true);
      toast.error("Error submitting subscription order."); // Show error toast
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRequestPayment = async (referenceId: string, requestId: string) => {
    setIsSubmitting(true);
    try {
      const { data } = await axios.put(`/api/quotes/${requestId}`, {
        referenceId,
      });

      if (data.success) {
        toast.success("Payment successful!");
        // Force reload to show updated status
        window.location.reload();
      }
    } catch (error) {
      toast.error("Payment processing failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  const getOrderById = (orderId: string) => {
    setIsSubmitting(true);
    // Fetch order details by orderId
    axios.get(`/api/order/${orderId}`).then((response) => {
      setOrder(response.data.order);
      setIsSubmitting(false);
    });
  };

  return {
    showModal,
    modalMessage,
    modalErrorType,
    openModal,
    closeModal,
    isSubmitting,
    isError,
    isSuccess,
    isRedirecting, // Return redirecting state
    orders,
    order,
    getOrders,
    getOrderById,
    handleCartOrderSubmit,
    handleSubscriptionOrderSubmit,
    handleRequestPayment,
    checkActiveSubscription,
    loading, // Return loading state
  };
};

export default useOrder;
