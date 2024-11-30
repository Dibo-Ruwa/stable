"use client";
import {
  Container,
  EmptyServices,
  TabContainer,
  TabItem,
} from "./client.tyles";
import useOrder from "@/hooks/useOrder";
import OrderList from "@/component/orderListing/OrderList";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import SubscriptionList from "@/component/subscriptionList/SubscriptionList";
import RequestList from "@/component/requestList/RequestList";

interface TabProps {
  tabs: { title: string; content: React.ReactNode }[];
  defaultTab?: string;
}

const Tab: React.FC<TabProps> = ({ tabs, defaultTab }) => {
  const [activeTab, setActiveTab] = useState<string>(defaultTab || "");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <TabContainer>
        {tabs.map((tab, index) => (
          <TabItem
            key={index}
            active={activeTab === tab.title}
            onClick={() => handleTabClick(tab.title)}
          >
            {tab.title}
          </TabItem>
        ))}
      </TabContainer>
      {/* Render the content based on the active tab */}
      {tabs.map((tab, index) => (
        <div
          key={index}
          style={{ display: activeTab === tab.title ? "block" : "none" }}
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
};

const Client = () => {
  const { data: session } = useSession();
  const { orders, getOrders } = useOrder();

  useEffect(() => {
    getOrders();
  }, []);

  const tabs = [
    {
      title: "Orders",
      content: (
        <>
          {session && orders.length >= 1 ? (
            <OrderList />
          ) : (
            <EmptyServices>
              <div className="image"></div>
              <h3>Oh No!!</h3>
              <p>You have no services yet.</p>
            </EmptyServices>
          )}
        </>
      ),
    },
    {
      title: "Subscriptions",
      content: <div><SubscriptionList /></div>,
    },
    { title: "Requests", content: <div><RequestList /></div> },
  ];

  return (
    <Container>
      <Tab tabs={tabs} defaultTab="Orders" />
    </Container>
  );
};

export default Client;
