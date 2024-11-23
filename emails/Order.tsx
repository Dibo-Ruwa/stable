import React from "react";

const EmailTemplate = ({ orderDetails } : any) => {
 

  return (
    <div
      style={{
        fontFamily: "Poppins, sans-serif",
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
        backgroundColor: "#f5f5f5",
      }}
    >
      <div
        style={{
          backgroundColor: "#007bff",
          color: "#fff",
          padding: "10px",
          textAlign: "center",
        }}
      >
        <h1>Assigned Order</h1>
      </div>
      <div
        style={{
          backgroundColor: "#fff",
          padding: "20px",
        }}
      >
        <h2>Order Details:</h2>
        <p>Order Type: {orderDetails.type}</p>
        <p>Order Items: {JSON.stringify(orderDetails.orderItems)}</p>
        <p>Email: {orderDetails.email}</p>
        <p>Address: {orderDetails.address}</p>
        <p>Phone: {orderDetails.phone}</p>
        <p>Total: ₦{orderDetails.total}</p>
        <p>Status: {orderDetails.status}</p>
        <p>Partner ID: {orderDetails.partner}</p>
        <p>Payment ID: {orderDetails.paymentId}</p>
        <p>User ID: {orderDetails.user}</p>
      </div>
      <div
        style={{
          backgroundColor: "#007bff",
          color: "#fff",
          padding: "10px",
          textAlign: "center",
        }}
      >
        <p>Thank you for using our service!</p>
      </div>
    </div>
  );
};

export default EmailTemplate;
