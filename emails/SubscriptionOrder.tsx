import React from "react";

interface SubscriptionConfirmationProps {
  customerName: string;
  service: string;
  plan:
    | string
    | {
        bagCount: number;
        regularity: string;
      };
  startDate: string;
  endDate: string;
}

const SubscriptionConfirmation: React.FC<SubscriptionConfirmationProps> = ({
  customerName,
  service,
  plan,
  startDate,
  endDate,
}) => {
  const containerStyle: React.CSSProperties = {
    fontFamily: "Poppins, sans-serif",
    backgroundColor: "#4feca0",
    padding: "20px",
    borderRadius: "5px",
    textAlign: "center",
  };

  const headingStyle: React.CSSProperties = {
    fontSize: "24px",
    marginBottom: "15px",
  };

  const detailsStyle: React.CSSProperties = {
    fontSize: "16px",
    marginBottom: "10px",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>
        Your Subscription with Dibo Ruwa is Confirmed!
      </h1>
      <p>Hello {customerName},</p>
      <p>
        Great choice! We&#39;re thrilled to have you onboard. Your subscription
        for {service} is now confirmed. Get ready for a hassle-free and
        delightful experience.
      </p>
      <div style={detailsStyle}>
        <p>Details:</p>
        <p>- Service: {service}</p>
        <p>- Plan: {typeof plan === 'string' ? plan : `${plan.bagCount} bags - ${plan.regularity}`}</p>
        <p>
          - Subscription Period: {startDate} to {endDate}
        </p>
      </div>
      <p>Thank you for trusting Dibo Ruwa. We&#39;re excited to serve you!</p>
      <p>
        Warmly,
        <br />
        The Dibo Ruwa Team
      </p>
    </div>
  );
};

export default SubscriptionConfirmation;
