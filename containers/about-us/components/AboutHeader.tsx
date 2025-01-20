"use client"
import React from "react";
import Image from "next/image";
import '../AboutUs.css'
export const AboutHeader = () => {
  return (
    <section className="AboutHeader_Container">
      <div className="Header_LeftContainer">
        <div className="Header_logo">
          <Image
            src="/images/Frame 2608738.png"
            alt="Logo"
            width={218.48}
            height={59.91}
            className="Dibo_ellipse_Logo"
          />
        </div>
        <div className="AboutHeader_content">
          <p className="AboutHeader_Title">
            DIBORUWA is your go-to solution for{" "}
            <span className="AboutHeader_ChangingText">
              Your Daily Essential Services{" "}
              <Image
                src="/images/image 15.png"
                alt="moving"
                width={24}
                height={24}
                className="AboutHeader_ChangingImage"
              />
            </span>
          </p>
          <p className="AboutHeader_Description">
            we've been committed to simplifying your life by offering a range of
            high-quality, convenient services.
          </p>
        </div>
        <div className="AboutHeader_AbsoluteImage">
          <Image
            src="/images/image 20.png"
            alt="Atom"
            width={456}
            height={456}
            className="AboutHeader_AtomImg"
          />
        </div>
      </div>
      <div className="Header_RightContainer">
        <Image
          src="/images/Ellipse 7.png"
          alt="Ellipse"
          width={157.437}
          height={100.577}
          className="Ellipse_top"
        />
        <Image
          src="/images/about_us.png"
          alt=""
          width={783.371}
          height={633}
          className="People_Image"
        />
        <Image
          src="/images/Ellipse 6.png"
          alt="Ellipse"
          width={157.437}
          height={100.577}
          className="Ellipse_bottom"
        />
      </div>
    </section>
  );
};
