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
      question: "How to order for a meal?",
      answer: "Click the order Now button.",
    },
    {
      id: 2,
      question: "How to order for a meal?",
      answer: "Click the order Now button.",
    },
    {
      id: 3,
      question: "How to order for a meal?",
      answer: "Click the order Now button.",
    },
    {
      id: 4,
      question: "How to order for a meal?",
      answer: "Click the order Now button.",
    },
    {
      id: 5,
      question: "How to order for a meal?",
      answer: "Click the order Now button.",
    },
    {
      id: 6,
      question: "How to order for a meal?",
      answer: "Click the order Now button.",
    },
    {
      id: 7,
      question: "How to order for a meal?",
      answer: "Click the order Now button.",
    },
    {
      id: 8,
      question: "How to order for a meal?",
      answer: "Click the order Now button.",
    },
    {
      id: 9,
      question: "How to order for a meal?",
      answer: "Click the order Now button.",
    },
    {
      id: 10,
      question: "How to order for a meal?",
      answer: "Click the order Now button.",
    },
    {
      id: 11,
      question: "How to order for a meal?",
      answer: "Click the order Now button.",
    },
    {
      id: 12,
      question: "How to order for a meal?",
      answer: "Click the order Now button.",
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
                {activeId === item.id ? (
                  <MdKeyboardArrowDown />
                ) : (
                  <MdKeyboardArrowDown />
                )}
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
