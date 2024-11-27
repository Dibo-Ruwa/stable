import React from "react";
import "./ContactUs.css";
import { LMEO } from "./component/LMEO";
import { SMSMap } from "./component/SMSMap";
import { FAQs } from "./component/FAQs";
export const ContactUs = () => {
  return (
    <div className="Contact_Us_frame">
      <section className="Contact_Us_Container">
        <div className="Contact_Us_header">
          <h3 className="Contact_Us_Title">Get in Touch!</h3>
          <p className="Contact_Us_SubTitle">
            Have a question or need assistance? We're here to help. Contact us
            using the details below:
          </p>
        </div>
        <LMEO />
        <SMSMap />
        <FAQs />
      </section>
    </div>
  );
};
