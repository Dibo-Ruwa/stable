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

  const handleCartOrderSubmit = async (referenceId: string, amount: number, deliveryFee: number) => {
    setIsSubmitting(true);
    setIsError(false);
    setIsSuccess(false);

    try {
      const { data } = await axios.post("/api/order/cart", {
        referenceId,
        deliveryFee,
        amount
      });
      console.log(data)
      toast.loading("Cart order is being proccessed", {
        duration: 2000,
      });

      setTimeout(() => {
        useCartStore.getState().getCart();

        setIsSuccess(true);
        toast.success("Cart order submitted successfully!");
      }, 500);
      router.push(`/dashboard/orders/${data.order?._id}`);
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

        toast.loading("Subcription order is being proccessed", {
          duration: 2000,
        });

        setTimeout(() => {
          useCartStore.getState().getSubscriptions();

          setIsSuccess(true);
          toast.success("Subscription order submitted successfully!");
        }, 500);
        router.push(`/dashboard/orders/${data.order?._id}`);
      } else {
        const { subscription } = subscriptionOrderData;

        const { data } = await axios.post(`/api/subscriptions`, {
          referenceId,
          subscription,
        });

        toast.loading("Subcription order is being proccessed", {
          duration: 2000,
        });

        setTimeout(() => {
          useCartStore.getState().getSubscriptions();

          setIsSuccess(true);
          openModal("success", "Subscription order submitted successfully!");
          toast.success("Subscription order submitted successfully!");
        }, 500);
        router.push(`/dashboard/subscriptions/${data.subscription?._id}`);
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
    requestId: any,

  ) => {
    setIsSubmitting(true);
    setIsError(false);
    setIsSuccess(false);

    try {
      const { data } = await axios.put(`/api/quotes/${requestId}`, {
        referenceId,
      });

      toast.loading("Payment is being proccessed", {
        duration: 2000,
      });

      setTimeout(() => {
        useCartStore.getState().getSubscriptions();
        setIsSuccess(true);
        toast.success("Payment submitted successfully!");
      }, 500);
    } catch (error) {
      setIsError(true);
      toast.error("Error submitting Payment."); // Show error toast
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
