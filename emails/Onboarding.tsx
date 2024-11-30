import React from "react";
import { EmailTemplate } from ".";

const colors = {
  lightBlue: "#00afdb",
  darkBlue: "#00a6cf",
};

const wrapperStyle: React.CSSProperties = {
  fontFamily: "Poppins, sans-serif",

  padding: "20px",
};

const titleStyle: React.CSSProperties = {
  color: "#333",
};

const messageStyle: React.CSSProperties = {
  color: "#666",
  lineHeight: "2",
};

const signatureStyle: React.CSSProperties = {
  fontStyle: "italic",
  color: colors.lightBlue,
  lineHeight: "1.5",
  marginTop: "20px"
};

interface Props {
  customerName: string;
}

const OnboardingTemplate: React.FC<Props> = ({ customerName }) => {
  return (
    <EmailTemplate subject="Welcome to the Dibo Ruwa Family!">
      {" "}
      <div style={wrapperStyle}>
        <p style={messageStyle}>
          Hello{" "}
          <strong style={{ textTransform: "capitalize" }}>
            {customerName}
          </strong>
          ,
        </p>
        <p style={messageStyle}>
          You&apos;ve made a fantastic decision! Welcome to the Dibo Ruwa
          family, where convenience meets quality. Whether you&apos;re here for
          our mouth-watering meals, impeccable cleaning, or our premium laundry
          services, we promise to deliver the best.
        </p>
        <p style={messageStyle}>
          A big thank you for joining us! If you have any questions or need
          assistance, our team is here to help.
        </p>
        <p style={messageStyle}>Cheers to an easier life with Dibo Ruwa!</p>
        <p style={signatureStyle}>
          Warm Regards, <br />
          The Dibo Ruwa Team
        </p>
      </div>
    </EmailTemplate>
  );
};

export default OnboardingTemplate;
