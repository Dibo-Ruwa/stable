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
        <img
          src="./images/WhatsApp Image 2024-12-03 at 18.39.34_3276a10e.jpg"
          alt="map Location"
          className="mapLocation_img"
        />
      </div>
    </div>
  );
};
