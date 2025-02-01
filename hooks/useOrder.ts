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

const useOrder = () => {
  const [orders, setOrders] = useState([]);
  const [order, setOrder] = useState<Order | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [orderId, setOrderId] = useState<string | null>(null);
  const [isRedirecting, setIsRedirecting] = useState(false); // New state for redirection
  const [loading, setLoading] = useState(true); // Add loading state

  // New state for success modal
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [orderProp, setOrderProp] = useState({
    id:"", 
    type: ''
  });

  const { data: session } = useSession();

  const [modalMessage, setModalMessage] = useState("");
  const [modalErrorType, setModalErrorType] = useState<
    "success" | "error" | "info"
  >("success");
  const [showModal, setShowModal] = useState(false);

  const openModal = (
    errorType: "success" | "error" | "info",
    errorMessage: string,
    id: string
  ) => {
    setModalMessage(errorMessage);
    setModalErrorType(errorType);
    setOrderId(id);
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
      const { data } = await axios.get(
        `/api/subscriptions/check?type=${subscriptionType}`
      );
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
    axios
      .get("/api/order")
      .then((response) => {
        setOrders(response.data.orders);
        setIsSubmitting(false);
        setLoading(false); // Set loading to false after fetching orders
      })
      .catch(() => {
        setLoading(false); // Set loading to false in case of error
      });
  };

  const handleCartOrderSubmit = async (
    referenceId: string,
    amount: number,
    deliveryFee: number,
    selectedRegion: string
  ) => {
    setIsSubmitting(true);
    setIsError(false);
    setIsSuccess(false);

    try {
      const { data } = await axios.post("/api/order/cart", {
        referenceId,
        deliveryFee,
        amount,
        selectedRegion,
      });
      console.log(data);
      toast.loading("Cart order is being processed", {
        duration: 2000,
      });

      // Call the notification API to create a notification
      await axios.post("/api/notifications", {
        message: `Your cart order with reference ID ${referenceId} has been placed successfully.`,
        referenceId: data.order?._id,
        category: "order",
        type: data.order.type,
      });


      setOrderProp({
        id: data.order?._id,
        type: data.order?.type
      });

      setIsSuccess(true);
      setShowSuccessModal(true); // Show the success modal
      setOrderId(data.order?._id); // Set the order ID for the modal

      // Optionally, you can still refresh the cart
      useCartStore.getState().getCart();
      toast.success("Cart order submitted successfully!");

      // setTimeout(() => {
      //   useCartStore.getState().getCart();
      //   toast.success("Cart order submitted successfully!");
      //   router.push(
      //     `/profile/orders/${data.order?._id}?type=${çç`
      //   );
      // }, 500);
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
          type: data.order?.type,
        });

        setTimeout(() => {
          useCartStore.getState().getSubscriptions();

          setIsSuccess(true);
          toast.success("Subscription received successfully");
          setIsRedirecting(true); // Set redirecting state to true
          router.push(
            `/profile/orders/${data.order?._id}?type=${data.order?.type}`
          );
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
          type: data.subscription?.type,
        });

        setTimeout(() => {
          useCartStore.getState().getSubscriptions();

          setIsSuccess(true);
          openModal(
            "success",
            "Subscription received successfully",
            data.subscription?._id
          );
          toast.success("Subscription received successfully");
          setIsRedirecting(true); // Set redirecting state to true
          router.push(
            `/profile/subscriptions/${data.subscription?._id}?type=${data.subscription?.type}`
          );
        }, 500);
      }
    } catch (error) {
      setIsError(true);
      toast.error("Error submitting subscription order."); // Show error toast
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRequestPayment = async (
    referenceId: string,
    requestId: string
  ) => {
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
    orderProp,
    handleSubscriptionOrderSubmit,
    handleRequestPayment,
    checkActiveSubscription,
    loading, // Return loading state

    // Return the state and setter for the success modal
    showSuccessModal,
    setShowSuccessModal,
    orderId,
  };
};

export default useOrder;
