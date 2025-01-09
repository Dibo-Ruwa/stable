// useOrder.ts
import { useEffect, useState } from "react";

import axios from "axios";
import { CartItem, Order, Subscription } from "@/utils/types/types";
import { useSession } from "next-auth/react";
import useCartStore from "@/store/useCart.store";
import { toast } from "react-hot-toast";
import { User } from "next-auth";
import { useRouter } from "next/navigation";

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
  const [isRedirecting, setIsRedirecting] = useState(false); // New state for redirection

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

  const getOrders = () => {
    setIsSubmitting(true);
    // Fetch orders
    axios.get("/api/order").then((response) => {
      setOrders(response.data.orders);
      setIsSubmitting(false);
    });
  };

  const handleCartOrderSubmit = async (referenceId: string, amount: number, deliveryFee: number, selectedRegion: string) => {
    setIsSubmitting(true);
    setIsError(false);
    setIsSuccess(false);

    try {
      const { data } = await axios.post("/api/order/cart", {
        referenceId,
        deliveryFee,
        amount,
        selectedRegion
      });
      console.log(data)
      toast.loading("Cart order is being processed", {
        duration: 2000,
      });

      setIsSuccess(true);
      setIsRedirecting(true); // Set redirecting state to true immediately

      setTimeout(() => {
        useCartStore.getState().getCart();
        toast.success("Cart order submitted successfully!");
        router.push(`/profile/orders/${data.order?._id}?type=${data.order?.type}`);
      }, 500);

    } catch (error) {
      setIsError(true);
      toast.error("Error submitting cart order."); // Show error toast
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

        setTimeout(() => {
          useCartStore.getState().getSubscriptions();

          setIsSuccess(true);
          toast.success("Subscription order submitted successfully!");
          setIsRedirecting(true); // Set redirecting state to true
          router.push(`/profile/orders/${data.order?._id}?type=${data.order?.type}`);
        }, 500);
      } else {
        const { subscription } = subscriptionOrderData;

        const { data } = await axios.post(`/api/subscriptions`, {
          referenceId,
          subscription,
        });

        toast.loading("Subscription order is being processed", {
          duration: 2000,
        });

        setTimeout(() => {
          useCartStore.getState().getSubscriptions();

          setIsSuccess(true);
          openModal("success", "Subscription order submitted successfully!");
          toast.success("Subscription order submitted successfully!");
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
    handleRequestPayment
  };
};

export default useOrder;
