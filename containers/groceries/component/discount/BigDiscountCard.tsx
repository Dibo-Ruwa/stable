import React from "react";
import "./discount.css";
import Image from "next/image";

export const BigDiscountCard = () => {
  return (
    <section className="BigDiscountCard_Container">
      <div className="BigDiscountCard_LeftContainer">
        <div className="BigDiscountCard_DiscountTitle">
          <p className="BigDiscountCard_DiscountTickText">Discount Sale</p>
          <p className="BigDiscountCard_DiscountLightText">50%</p>
          <p className="BigDiscountCard_DiscountLightText">Shop Now</p>
        </div>
        <div className="BigDiscountCard_DiscountRightImage">
          <div className="ImagePolygonSeven">
            <Image
              src="/images/Polygon 7.png"
              alt="Polygon"
              width={100}
              height={50}
              className="PolygonSeven"
            />
          </div>
          <div className="ImagePolygonSix">
            <Image
              src="/images/Polygon 6.png"
              alt="Polygon"
              width={100}
              height={50}
              className="PolygonSix"
            />
          </div>
          <div className="ImageSpecialOFFER">
            <Image
              src="/images/specialOffer.png"
              alt="special offer"
              width={100}
              height={50}
              className="SpecialOFFER"
            />
          </div>
        </div>
      </div>
      <div className="BigDiscountCard_CenterContainer">
        <Image
          src="/images/image 220.png"
          alt="Food"
          width={448}
          height={672}
          className="IMageFood"
        />
      </div>

      <div className="BigDiscountCard_RightContainer">
        <Image
          src="/images/image 214.png"
          alt="Sales 50% off"
          width={340}
          height={340}
          className="SalesOff"
        />
      </div>
    </section>
  );
};
