import { Button } from "@/component/shared/Button";
import React from "react";

export const SMSMap = () => {
  return (
    <div className="smsMap_Container">
      <form className="smsMessage_Container">
        <p className="smsMessage_title">Send Message</p>
        <div className="Input_smsMessage_box">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="smsMessage_Input"
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="smsMessage_Input"
          />
        </div>

        <textarea
          className="smsMessage_Textarea"
          cols={30}
          rows={4}
          placeholder="Write..."
        ></textarea>
        <Button text="Send" className="smsMessage_Btn" />
      </form>
      <div className="mapLocation_image">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.710123456789!2d8.516667!3d12.000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x0!2zMTLCsDAwJzAwLjAiTiA4wrAzMCcwMC4wIkU!5e0!3m2!1sen!2sng!4v1634567890123!5m2!1sen!2sng"
          width="100%"
          height="600"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Bayero University Kano Location"
          className="mapLocation_iframe"
        ></iframe>
      </div>
    </div>
  );
};
