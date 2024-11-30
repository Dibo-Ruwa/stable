"use client";
import { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { toast } from "react-hot-toast";
import { interceptor } from "@/axios.config";
import { useRouter } from "next/navigation";

// Define the Quote type
export interface Quote {
  _id: string;
  type: string;
  items: { name: string; amount: number }[];
  total: number | undefined;
  from: string;
  to: string | undefined;
  date: Date;
  user: string;
  createdAt: Date;
  updatedAt: Date;
  status: string; // Add the 'status' field
  paymentId: string | undefined; // Add the 'refId' field
  isPaid: boolean; // Add the 'isPaid' field
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
  const { data: session, status, update } = useSession();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const [quotes, setQuotes] = useState<Quote[] | []>([]);
  const [quote, setQuote] = useState<Quote | null>(null);
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
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const router = useRouter();

  const getQuotes = async () => {
    setLoading(true);

    try {
      // Fetch quotes using axios
      const response = await interceptor.get(`/quotes`);
      setQuotes(response.data.quotes);

      setLoading(false);
    } catch (error) {
      setError("Error fetching quotes");
      setLoading(false);
    }
  };

  const getQuoteById = async (quoteId: string) => {
    setLoading(true);

    try {
      // Fetch quotes using axios
      const response = await interceptor.get(`/quotes/${quoteId}`);
      setQuote(response.data.quote);
      setLoading(false);
    } catch (error) {
      setError("Error fetching quotes");
      setLoading(false);
    }
  };

  const payQuote = async (referenceId: string, amount: number) => {
    setLoading(true);

    try {
      // Send payment request using axios
      const response = await interceptor.post(`quotes/pay`, {
        referenceId,
        amount,
      });
      // Handle the payment response, e.g., show a success message
      openModal("success", "Payment successful");
      setLoading(false);
    } catch (error) {
      setError("Error processing payment");
      setLoading(false);
    }
  };

  const handleQuote = async (data: any): Promise<void> => {
    setLoading(true);

    try {
      // Perform signup logic using axios

      if (
        session?.user.phone &&
        session?.user.address &&
        session?.user.state &&
        session?.user.lga
      ) {
        if (data.type === "moving") {
          const res = await interceptor.post(`/quotes/moving`, { data });
          setLoading(false);
          setError(null);
          openModal("success", "Submitted successfully!!!");

          setTimeout(() => {
            router.push(`/dashboard/requests/${res.data.quote._id}`);
          }, 2000);
        } else {
         const res = await interceptor.post(`/quotes`, { data });
          setLoading(false);
          setError(null);
          openModal("success", "Submitted successfully!!!");
          setTimeout(() => {
            router.push(`/dashboard/requests/${res.data.quote._id}`);
          }, 2000);
        }
      } else {
        openModal && openModal("info", "Please complete your profile.");
      }
    } catch (error: any) {
      // console.log(error.response.data);
      setLoading(false);
      setError(error.message);
      openModal("error", error.response.data);
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
