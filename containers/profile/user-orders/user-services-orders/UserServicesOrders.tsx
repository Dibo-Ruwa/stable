"use client";
import React, { useEffect, useState } from "react";
import { OrderedServices1 } from "./ordered-service-cards/OrderedServices1";
import { OrderedServices2 } from "./ordered-service-cards/OrderedServices2";
import { OrderedServices3 } from "./ordered-service-cards/OrderedServices3";
import { OrderedServices4 } from "./ordered-service-cards/OrderedServices4";
import { OrderedServices5 } from "./ordered-service-cards/OrderedServices5";
import { OrderedServices6 } from "./ordered-service-cards/OrderedServices6";
import { OrderedServices7 } from "./ordered-service-cards/OrderedServices7";
import { OrderedServices } from "./ordered-service-cards/OrderedServices";
import "./user-services-orders.css";
import useQuote from "@/hooks/useQuote";
import useOrder from "@/hooks/useOrder";
import { nanoid } from "nanoid";
import styled from "styled-components";
import Lottie from "lottie-react";
import MovingAnimation from "./MovingAnimation.json";
import Loader from "@/component/ui/loader/Loader";


type TabType = "Active" | "Rendered";

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
  min-height: 400px;

  .animation-container {
    width: 200px;
    margin-bottom: 1rem;
  }

  h3 {
    color: #333;
    margin-bottom: 0.5rem;
  }

  p {
    color: #666;
    font-size: 0.9rem;
  }
`;

const LoadingState = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;

  .animation-container {
    width: 150px;
  }
`;

export const UserServicesOrders = () => {
  const [activeTab, setActiveTab] = useState<TabType>("Active");
  const { quotes, getQuotes, loading } = useQuote();
  const { openModal, handleRequestPayment } = useOrder();
  const referenceId = nanoid(8);

  useEffect(() => {
    getQuotes();
  }, []);

  const onSuccess = (id: string) => {
    handleRequestPayment(referenceId, id);
    setTimeout(() => {
      getQuotes();
    }, 1500);
  };

  const onClose = () => {
    console.log("closed");
  };

  useEffect(() => {
    // Store active tab in local storage
    localStorage.setItem("activeTab", activeTab);
  }, [activeTab]);

  useEffect(() => {
    // Retrieve active tab from local storage on mount
    const storedActiveTab = localStorage.getItem("activeTab");
    if (storedActiveTab) {
      setActiveTab(storedActiveTab as TabType); // Type assertion
    }
  }, []);

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    if (loading) {
      return (
            <Loader />
      );
    }

    const filteredQuotes = activeTab === "Active" 
      ? quotes?.filter(quote => quote.status !== 'delivered')
      : quotes?.filter(quote => quote.status === 'delivered');

    if (!filteredQuotes || filteredQuotes.length === 0) {
      return (
        <EmptyState>
          <div className="animation-container">
            <Lottie animationData={MovingAnimation} loop={true} />
          </div>
          <h3>
            {activeTab === "Active" 
              ? "No Active Services" 
              : "No Completed Services"}
          </h3>
          <p>
            {activeTab === "Active"
              ? "You don't have any active service requests at the moment"
              : "You haven't completed any services yet"}
          </p>
        </EmptyState>
      );
    }

    return filteredQuotes.map(quote => (
      <OrderedServices key={quote._id} quote={quote} />
    ));
  };

  return (
    <>
      <div className="card_active_container">
        <button
          className={`services_btn ${
            activeTab === "Active" ? "active_services" : ""
          }`}
          onClick={() => handleTabChange("Active")}
        >
          Active
        </button>
        <button
          className={`services_btn ${
            activeTab === "Rendered" ? "active_services" : ""
          }`}
          onClick={() => handleTabChange("Rendered")}
        >
          Rendered
        </button>
      </div>
      <div className="user_card_overflow">
        {renderContent()}
      </div>
    </>
  );
};
