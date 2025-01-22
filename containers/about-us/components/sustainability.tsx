import React from "react";
import { GoArrowDownRight } from "react-icons/go";
import Image from "next/image";
import Link from "next/link";
import "./Sustainability.css";

export const Sustainability = () => {
  return (
    <section className="Sustainability_Container">
      <div className="Sustainability_title_icon" style={{ width: "300px" }}>
        <p className="Sustainability_Title" >Sustainability at Heart</p>
        <div className="Sustainability_Icon-Line">
          <GoArrowDownRight className="Sustainability_Icon" />
          <span className="Sustainability_Line"></span>
        </div>
      </div>
      <div className="Sustainability_content">
        <div className="Sustainability_image">
          <Image
            src="/images/enviromental.png"
            alt=""
            width={571}
            height={377}
            className="Sustainability_img"
            style={{
                borderRadius: "20px",
            }}
          />
        </div>
        <div className="Sustainability_description_CTA">
          <p className="Sustainability_des">
            At Dibo Ruwa, sustainability is at the heart of everything we do. We are committed to making a positive impact on the environment and our community. 
            Our delivery services utilize e-bikes, reducing our carbon footprint and promoting cleaner air. We have also invested in solar-powered charge stations 
            to ensure our operations are powered by renewable energy.
          </p>
          <p className="Sustainability_des">
            Our laundry and cleaning services use environmentally friendly products, ensuring that we contribute to a healthier planet. We believe in creating a 
            sustainable future for everyone, and we are dedicated to making the environment a better place for all.
          </p>
          <p className="Sustainability_des">
            If you share our passion for sustainability and want to be part of a team that is making a real difference, we would love to hear from you. Join us in 
            our mission to create a cleaner, greener, and more sustainable world.
          </p>
          <Link
            href="mailto:info@diboruwa.com"
            className="Sustainability_CTA"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </section>
  );
};
