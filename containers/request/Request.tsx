"use client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useQuote from "@/hooks/useQuote";
import moment from "moment";
import Loader from "@/component/ui/loader/Loader";
import PaymentButton from "@/component/paymentButton/PayButton";
import { nanoid } from "nanoid";
import useOrder from "@/hooks/useOrder";
import BackButton from "@/component/ui/BackButton/BackButton";

const QuoteContainer = styled.div`
  margin: 0 auto;
  padding: 2% 8%;
  border-radius: 8px;
`;

const QuoteHeader = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

const QuoteDetail = styled.p`
  font-size: 16px;
  margin-bottom: 8px;
`;

const ErrorMessage = styled.p`
  color: red;
`;

const PayButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
`;

const Modal = styled.div<{ show: boolean }>`
  display: ${(props) => (props.show ? "block" : "none")};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
`;

const QuotePage = ({ id }: { id: string }) => {
  const { quote, getQuoteById, payQuote, loading, error } = useQuote();
  const {
    showModal,
    modalMessage,
    modalErrorType,
    openModal,
    closeModal,
    handleRequestPayment,
  } = useOrder();

  useEffect(() => {
    if (id) {
      getQuoteById(id);
    }
  }, [id]);

  const referenceId = nanoid(8);

  const onSuccess = () => {
    handleRequestPayment(referenceId, id);

    setTimeout(() => {
      getQuoteById(id);
    }, 1500);
  };

  const onClose = () => {
    console.log("closed");
  };

  return (
    <QuoteContainer>
      {loading ? (
        <Loader />
      ) : (
        quote !== null && (
          <div>
              <BackButton />
              <br />
            <QuoteHeader>Quote Details</QuoteHeader>
            <QuoteDetail>
              <strong>Type: </strong> {quote.type}
            </QuoteDetail>
            <QuoteDetail>
              <strong>Items: </strong>
              <ul style={{ listStyle: "none", margin: "5px 20px 20px" }}>
                {quote.items.map((item: any, index: any) => (
                  <li key={index}>
                    {item.name} - {item.amount}
                  </li>
                ))}
              </ul>
            </QuoteDetail>
            <QuoteDetail>
              <strong>{quote.type !== "moving" ? "Address:" : "From:"} </strong>{" "}
              {quote.from}
            </QuoteDetail>

            {quote.to && (
              <QuoteDetail>
                <strong>To: </strong> {quote.to || "N/A"}
              </QuoteDetail>
            )}

            <QuoteDetail>
              <strong>Total: </strong> ₦ {quote.total || "N/A"}
            </QuoteDetail>
            <QuoteDetail>
              <strong>Date: </strong>
              {moment(quote.date).format("MMMM DD, YYYY")}
            </QuoteDetail>

            <QuoteDetail>
              <strong>Status: </strong> {quote.status}
            </QuoteDetail>
            {quote.isPaid && (
              <QuoteDetail>
                <strong>Payment Reference: </strong> {quote.paymentId || "N/A"}
              </QuoteDetail>
            )}
            {!quote.isPaid && quote.total && (
              <PaymentButton
                totalPrice={quote.total}
                openModal={openModal}
                buttonText="Pay Now"
                color="color2"
                onSuccess={onSuccess}
                onClose={onClose}
                referenceId={referenceId}
              />
            )}
          </div>
        )
      )}

      {/* <Modal show={showModal}>
        <ModalContent>
          <p>Payment Successful!</p>
          <button onClick={closeModal}>Close</button>
        </ModalContent>
      </Modal> */}
    </QuoteContainer>
  );
};

export default QuotePage;
