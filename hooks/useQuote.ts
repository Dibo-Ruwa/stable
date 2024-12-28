"use client";
import { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { toast } from "react-hot-toast";
import { interceptor } from "@/axios.config";
import { useRouter } from "next/navigation";

// Define the updated Quote type
export interface Quote {
  _id: string;
  type: string;
  categories: string[];
  items: { name: string; quantity: number; image: string | null }[];
  currentLocation?: string;
  deliveryLocation?: string;
  pickUpDate?: string;
  pickUpTime?: string;
  description?: string;
  total?: number;
  from?: string;
  to?: string;
  date: string;
  user: string;
  createdAt: Date;
  updatedAt: Date;
  status: string;
  paymentId?: string;
  isPaid: boolean;
}

interface QuoteHook {
  session: any;
  loading: boolean;
  status: any;
  error: string | null;
  quote: Quote | null;
  quotes: Quote[];
  handleQuote: (data: any) => Promise<void>;
  getQuotes: () => Promise<void>;
  getQuoteById: (quoteId: string) => Promise<void>;
  payQuote: (referenceId: string, amount: number) => Promise<void>;
  showModal: boolean;
  modalMessage: string;
  modalErrorType: "success" | "error" | "info";
  openModal: (
    errorType: "success" | "error" | "info",
    errorMessage: string
  ) => void;
  closeModal: () => void;
}

const useQuote = (): QuoteHook => {
  const { data: session, status } = useSession();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [quote, setQuote] = useState<Quote | null>(null);
  const [modalMessage, setModalMessage] = useState("");
  const [modalErrorType, setModalErrorType] = useState<"success" | "error" | "info">("success");
  const [showModal, setShowModal] = useState(false);

  const router = useRouter();

  const openModal = (errorType: "success" | "error" | "info", errorMessage: string) => {
    setModalMessage(errorMessage);
    setModalErrorType(errorType);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  const getQuotes = async () => {
    setLoading(true);
    try {
      const response = await interceptor.get(`/quotes`);
      setQuotes(response.data.quotes);
    } catch {
      setError("Error fetching quotes");
    } finally {
      setLoading(false);
    }
  };

  const getQuoteById = async (quoteId: string) => {
    setLoading(true);
    try {
      const response = await interceptor.get(`/quotes/${quoteId}`);
      setQuote(response.data.quote);
    } catch {
      setError("Error fetching quotes");
    } finally {
      setLoading(false);
    }
  };

  const payQuote = async (referenceId: string, amount: number) => {
    setLoading(true);
    try {
      await interceptor.post(`/quotes/pay`, { referenceId, amount });
      openModal("success", "Payment successful");
    } catch {
      setError("Error processing payment");
    } finally {
      setLoading(false);
    }
  };

  const handleQuote = async (data: any): Promise<void> => {
    console.log("Handle QUote"); // Debugging log
    setLoading(true);
    try {
      console.log("Sending data to API:", data);
      if (
        session?.user.phone &&
        session?.user.address &&
        session?.user.state &&
        session?.user.lga
      ) {
        if (data.type === "moving") {
          const res = await interceptor.post(`/quotes/moving`, {
            data: {
              type: data.type,
              categories: data.categories,
              items: data.items,
              currentLocation: data.currentLocation,
              deliveryLocation: data.deliveryLocation,
              pickUpDate: data.pickUpDate,
              pickUpTime: data.pickUpTime,
              description: data.description,
            },
          });
          openModal("success", "Submitted successfully!");
          router.push(`/dashboard/requests/${res.data.quote._id}`);
        } else {
          const res = await interceptor.post(`/quotes`, { data });
          openModal("success", "Submitted successfully!");
          router.push(`/dashboard/requests/${res.data.quote._id}`);
        }
      } else {
        openModal("info", "Please complete your profile.");
      }
    } catch (error: any) {
      setError(error.message);
      openModal("error", error.response?.data || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return {
    showModal,
    modalMessage,
    modalErrorType,
    openModal,
    closeModal,
    session,
    loading,
    status,
    error,
    quotes,
    quote,
    getQuotes,
    getQuoteById,
    payQuote,
    handleQuote,
  };
};

export default useQuote;
