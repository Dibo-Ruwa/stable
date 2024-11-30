"use client";

import NotificationModal from "@/component/NotificationModal";
import PaymentButton from "@/component/paymentButton/PayButton";
import { planDetails } from "@/constants";
import useAuth from "@/hooks/useAuth";
import useOrder from "@/hooks/useOrder";
import { CheckIcon } from "@radix-ui/react-icons";
import { nanoid } from "nanoid";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { CheckmarkIcon } from "react-hot-toast";
import { FaCheck } from "react-icons/fa";
import styled from "styled-components";

const Container = styled.div`
  padding: 15vh 8% 5%;
`;

const Heading = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 50%;
  margin: auto;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
const SubscriptionTab = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  background: var(--primary-20);
  width: 30%;
  padding: 10px;
  cursor: pointer;
  border-radius: 12px;
  margin: auto;
  margin-bottom: 30px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const SubTitle = styled.div`
  background: var(--primary-20);
  padding: 10px 15px;
  border-radius: 10px;
  /* width: 120px; */
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    background: white;
  }
`;

const Title = styled.h3`
  font-size: 34px;
  margin-bottom: 30px;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;
const Subtitle = styled.p`
  font-size: 20px;
  margin-bottom: 20px;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
const PlanContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  align-items: stretch;
  gap: 20px;
  width: 100%;
  margin: 10vh auto;

  @media screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    gap: 40px;
  }
`;
const PlanCard = styled.div`
 border: 3px solid var(--color2-20);
  background: var(--color2-20);
  padding: 20px;
  border-radius: 12px;
  width: 100%;
  max-width: 300px;
  position: relative;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;


.plan{
 

  &::before {
    content: "save 10% and 2hrs";
    position: absolute;
    top: -5%;
    left: -3px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    padding: 10px;
    width: 95.5%;
    background: var(--color2);
    color: #fff;
  }

  h3 {
    font-size: 34px;
    text-transform: capitalize;
    letter-spacing: 1px;
    margin-bottom: 10px;
  }

  p {
    font-size: 20px;
    text-align: center;
    color: var(--color2);
  }

  hr {
    border: 3px solid var(--color2-20);
    margin: 20px 0;
  }

  ul {
    list-style: none;
    display: grid;
    grid-gap: 30px;
    margin: 20px 0;
    font-size: 16px;

    li {
      display: flex;
      align-items: center;
      gap: 15px;

      .icon {
        font-size: 17px;
        color: var(--color2);
      }
    }
  }
}

  button {
    padding: 10px 25px;
    border-radius: 12px;
    width: 100%;
    border: none;
    outline: none;
    background: var(--color2);
    color: #fff;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
`;

const Custom = styled.div`
    border: 3px solid var(--primary-20);
    background: var(--primary-20);
    padding: 20px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 15px;

    .content{
      margin-top: 20px;
      font-size: 18px;
      line-height: 30px;
    }

`;

const subscriptions = ["Laundry", "Cleaning",  "Food", ];

const Subscriptions = () => {
  const {
    isSubmitting,
    isError,
    isSuccess,
    handleSubscriptionOrderSubmit,
    showModal,
    modalMessage,
    modalErrorType,
    openModal,
    closeModal,
  } = useOrder();

  const redirctedTab = useSearchParams();

  const tabName = redirctedTab.get("tabName");
  const [activeSubscription, setActiveSubscription] = useState(
    tabName ? tabName : subscriptions[0]
  );

  const handleSubscriptionChange = (subscription: string) => {
    setActiveSubscription(subscription);
  };

  const referenceId = nanoid(8);

  const onSuccess = (sub: any) => {
    const subscription = {
      plan: sub.title,
      type: activeSubscription,
      isPaid: true,
      total: sub.total,
    };

    console.log(subscription);
    handleSubscriptionOrderSubmit(referenceId, { subscription }, "recurring");
  };

  const onClose = () => {
    console.log("closed");
  };
  return (
    <Container>
      <Heading>
        <Title>Personalized Home service for Techies, Entrepreneurs, Professionals and Students.</Title>
        <Subtitle>
        Food delivery, Cleaning and Laundry subscriptions designed to fit 
        into your schedule and make your life easier.
        </Subtitle>
        <Subtitle>What service(s) are you interested in?</Subtitle>
      </Heading>

      <SubscriptionTab>
        {subscriptions.map((sub, index) => (
          <SubTitle
            key={sub}
            style={
              sub === activeSubscription
                ? { background: "#fff" }
                : { background: "var(--primary-20)" }
            }
            onClick={() => handleSubscriptionChange(sub)}
          >
            {sub}
          </SubTitle>
        ))}
      </SubscriptionTab>

      <PlanContainer>
        {planDetails[activeSubscription].map((plan: any) => (
          <PlanCard key={plan.title}>
            <div className="plan">
              <h3>{plan.title}</h3>
              <p>₦{plan.total}</p>
              <hr />
              <ul>
                {plan.features.map((feature: string[], index: string) => (
                  <li key={index}>
                    <div className="icon">
                      <FaCheck />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

            </div>
           

            <PaymentButton
              totalPrice={plan.total}
              openModal={openModal}
              buttonText="Choose Plan"
              color="color2"
              planCode={plan.planCode}
              onSuccess={() => onSuccess(plan)}
              onClose={onClose}
              referenceId={referenceId}
            />
          </PlanCard>
        ))}
      </PlanContainer>

      <Custom>
        <h2>Can&apos;t decide which plan is right for you?</h2>
        <div className="content">
          <p>Contact our team at</p>
          <p>info@diboruwa.com</p> <span>OR</span> <p>+2348059303261</p>
        </div>
      </Custom>

      {showModal && (
        <NotificationModal
          message={modalMessage}
          errorType={modalErrorType}
          onClose={closeModal}
        />
      )}
    </Container>
  );
};

export default Subscriptions;
