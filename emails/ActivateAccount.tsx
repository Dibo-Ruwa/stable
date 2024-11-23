import React from "react";
import { EmailTemplate } from "./index";

const colors = {
  lightBlue: "#00afdb",
  darkBlue: "#00a6cf",
};

const wrapperStyle: React.CSSProperties = {
  fontFamily: "Poppins, sans-serif",
  padding: "20px",
  maxWidth: "600px", // Set a maximum width for the content
  margin: "0 auto", // Center the content horizontally
};

const messageStyle: React.CSSProperties = {
  color: "#121212",
  lineHeight: "1.5", // Increase line height for better mobile readability
};

const buttonStyle: React.CSSProperties = {
  backgroundColor: colors.lightBlue,
  color: "#fff",
  padding: "12px 25px",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  textDecoration: "none",
  margin: "20px 0",
  display: "block", // Make the button a block element for better mobile display
  width: "100%", // Make the button full-width on mobile
};

interface Props {
  customerName: string;
  activationLink: string;
}

const ActivateAccount: React.FC<Props> = ({ customerName, activationLink }) => {
  return (
    <EmailTemplate subject="Welcome to Dibo Ruwa!">
      <div style={wrapperStyle}>
        <p style={messageStyle}>
          Hello <strong style={{ textTransform: "capitalize" }}>{customerName}</strong>,
        </p>
        <p>
          We&#39;re excited to have you on board. To activate your account and start enjoying our services, simply click the button below:
        </p>
        <p style={messageStyle}>
          If the button doesn&#39;t work, you can also copy and paste the following link into your browser&#39;s address bar:
          <br />
        <a href={activationLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
          <button style={buttonStyle}>Activate Account</button>
        </a>
        </p>
        <p style={messageStyle}>Welcome to the Dibo Ruwa family!</p>
        <p style={messageStyle}>
          If you have any questions or need assistance, feel free to contact our support team.
        </p>
        <p style={messageStyle}>
          Best Regards, <br />
          The Dibo Ruwa Team
        </p>
      </div>
    </EmailTemplate>
  );
};

export default ActivateAccount;
