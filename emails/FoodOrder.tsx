import React from "react";
import { EmailTemplate } from ".";

const colors = {
  lightBlue: "#00afdb",
  darkBlue: "#00a6cf",
};

interface OrderConfirmationProps {
  customerName: string;
  type: string;
  deliveryFee: string;
  orderItem: {
    orderItems: any;
    total: number;
    estimatedDeliveryTime: string;
  };
}
interface SessionConfirmationProps {
  customerName: string;
  orderId: string;
  orderItem: {
    orderItems: any;
  
    estimatedDeliveryTime: string;
  };
  contactNumber: string
}

const OrderConfirmation: React.FC<OrderConfirmationProps> = ({
  customerName,
  type,
  deliveryFee,
  orderItem: { orderItems, total, estimatedDeliveryTime },
}) => {


  let amountPaid;

if (typeof deliveryFee === 'number' && !isNaN(deliveryFee)) {
  amountPaid = deliveryFee + total;
} else {
  amountPaid = total;
}


  const containerStyle: React.CSSProperties = {
    lineHeight: "2",
  };

  const headingStyle: React.CSSProperties = {
    fontSize: "24px",
    marginBottom: "15px",
  };

  const tableStyle: React.CSSProperties = {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "10px",
  };

  const tableCellStyle: React.CSSProperties = {
    border: `1px solid ${colors.darkBlue}`,
    padding: "8px",
  };

  return (
    <EmailTemplate subject="Your Order is Confirmed!">
      <div style={containerStyle}>
        <p>
          Hello{" "}
          <strong style={{ textTransform: "capitalize" }}>
            {customerName}
          </strong>
          ,{" "}
        </p>
        <p>
          Thank you for your order! We&#39;ve received your payment and your
          items are now being prepared.
        </p>

        {type === "session" && (
          <li>
            <strong>type:</strong> {orderItems.type}
            <br />
            <strong>Plan:</strong> {orderItems.plan}
          </li>
        )}

        {type === "cart" && (
          <div>
            {orderItems.map((item: any, index: any) => (
              <li key={index}>
                {item.title} - {item.quantity} - ₦{item.total}
              </li>
            ))}
          </div>
        )}

        <p> <strong> Delivery Fee: </strong> ₦{deliveryFee}</p>

        <p>
          {" "}
          <strong>Total Amount:</strong> ₦{amountPaid}
        </p>
        <p>
          {" "}
          <strong>Estimated Delivery Time:</strong> {estimatedDeliveryTime}
        </p>
        <p>Sit back and relax, your items are on their way!</p>
        <p>
          Cheers,
          <br />
          The Dibo Ruwa Team
        </p>
      </div>
    </EmailTemplate>
  );
};
export const SessionConfirmation: React.FC<SessionConfirmationProps> = ({
  customerName,
  orderId,
  orderItem: { orderItems, estimatedDeliveryTime },
  contactNumber
}) => {
  const containerStyle: React.CSSProperties = {
    lineHeight: "2",
  };

  const headingStyle: React.CSSProperties = {
    fontSize: "24px",
    marginBottom: "15px",
  };

  const tableStyle: React.CSSProperties = {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "10px",
  };

  const tableCellStyle: React.CSSProperties = {
    border: `1px solid ${colors.darkBlue}`,
    padding: "8px",
  };

  return (
    <EmailTemplate subject="Your Dibo Ruwa Cleaning Service Booking is Confirmed!">
      <div style={containerStyle}>
        <p>
          Dear{" "}
          <strong style={{ textTransform: "capitalize" }}>
            {customerName}
          </strong>
          ,{" "}
        </p>
        <p>
          Thank you for your payment and for choosing DiboRuwa for your home
          cleaning needs. your one-off cleaning service is confirmed, and we are
          getting everyting ready to make your space shine!
        </p>

        <div>
          <p>
            <strong>Service:</strong> {orderItems.plan}
          </p>
         
          <p>
            <strong>Date:</strong> {estimatedDeliveryTime}
          </p>
        </div>

        <p><strong><em>Next Steps:</em></strong></p>

        <p>Our team will reach out to you soon to finalize any specific instructions and confirm the timing</p>

        <p>Our proffessional cleaners will be dispatched to your location as scheduled</p>

        <p>We are excited to bring the sparkle back to your home!, if you have any questions or need to adjust details, just reply to this email or give us a call at {contactNumber} </p>
        <p>
          warm regards
          <br />
          The Dibo Ruwa Team
        </p>
      </div>
    </EmailTemplate>
  );
};

export default OrderConfirmation;
