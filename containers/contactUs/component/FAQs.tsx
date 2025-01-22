"use client";
import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
type FAQItem = {
  id: number;
  question: string;
  answer: string;
};

export const FAQs: React.FC = () => {
  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: "How do I order food?",
      answer: "Simply click the 'Order Now' button and select your desired meal from our menu.",
    },
    {
      id: 2,
      question: "How can I request a laundry service?",
      answer: "Visit the 'Laundry' section on our website and schedule a pickup at your convenience.",
    },
    {
      id: 3,
      question: "How do I order groceries?",
      answer: "Go to the 'Groceries' section, add the items you need to your cart, and proceed to checkout.",
    },
    {
      id: 4,
      question: "How can I book a cleaning service?",
      answer: "Navigate to the 'Cleaning' section, choose a suitable time, and book your cleaning service.",
    },
    {
      id: 5,
      question: "How do I arrange for moving or delivery services?",
      answer: "Go to the 'Moving/Delivery' section, provide the necessary details, and schedule your service.",
    },
    {
      id: 6,
      question: "Where are your services currently available?",
      answer: "Our services are currently available in Kano. We are working hard to expand to more cities soon.",
    },
    {
      id: 7,
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including credit/debit cards and mobile payments.",
    },
    {
      id: 8,
      question: "Can I track my order?",
      answer: "Yes, you can track your order status in real-time through our website. We are working on a more robust tracking system.",
    },
    {
      id: 9,
      question: "How do I contact customer support?",
      answer: "You can reach our customer support team via the 'Contact Us' section on our website.",
    },
    {
      id: 10,
      question: "Do you offer any discounts or promotions?",
      answer: "Yes, we offer various discounts and promotions from time to time. Please check our website for the latest offers.",
    },
  ];

  const [activeId, setActiveId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="faq-container">
      <h1 className="faq-title">Frequently Asked Questions</h1>
      <ul className="faq-list">
        {faqItems.map((item) => (
          <li key={item.id} className="faq-item">
            <button
              className={`faq-question ${activeId === item.id ? "active" : ""}`}
              onClick={() => toggleFAQ(item.id)}
            >
              {item.question}
              <span className="faq-icon">
                <MdKeyboardArrowDown />
              </span>
            </button>
            {activeId === item.id && (
              <p className="faq-answer">{item.answer}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
