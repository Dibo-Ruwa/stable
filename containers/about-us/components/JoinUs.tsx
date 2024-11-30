import React from "react";
import { GoArrowDownRight } from "react-icons/go";
import Image from "next/image";
import { Button } from "@/component/shared/Button";
export const JoinUs = () => {
  return (
    <section className="JoinUs_Container">
      <div className="JoinUs_title_icon">
        <p className="JoinUs_Title">Join Us</p>
        <div className="JoinUs_Icon-Line">
          <GoArrowDownRight className="JoinUs_Icon" />
          <span className="JoinUs_Line"></span>
        </div>
      </div>
      <div className="JoinUs_content">
        <div className="JoinUs_image">
          <Image
            src="/images/Join.png"
            alt=""
            width={571}
            height={377}
            className="Join_img"
          />
        </div>
        <div className="JoinUs_description_CTA">
          <p className="JoinUs_des">
            Are you passionate about making a difference? We're looking for
            people who share our values of compassion, responsibility, and
            growth. At Dibo Ruwa, we strive to make a positive impact on the
            world through our commitment to sustainability and our dedication to
            our employees' development. If you're ready to join a team that's
            passionate about making life easier, simpler, and more fulfilling,
            we'd love to hear from you.
          </p>
          <Button text="Apply Now" className="JoinUs_CTA" />
        </div>
      </div>
    </section>
  );
};
