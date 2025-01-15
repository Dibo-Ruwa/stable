import Image from "next/image";
import React from "react";
import "./discount.css";

export const SmallDiscountCardWhite = () => {
  return (
    <section className="SmallDiscountCard_Container">
      <div className="SmallDiscountCard_LeftContainer">
        <div className="SmallDiscountCard_DiscountTitle">
          <p className="SmallDiscountCard_DiscountTickText">Discount Sale</p>
          <p className="SmallDiscountCard_DiscountLightText">50%</p>
          <p className="SmallDiscountCard_DiscountLightText">Hot Jollof Rice</p>
        </div>
      </div>

      <div className="SmallDiscountCard_RightContainer">
        <div className="ImageTop">
          <Image
            src="/images/image 216.png"
            alt="Special Offer"
            className="TopSpecialOfferImage"
            width={176}
            height={176}
          />
        </div>
        <div className="ImageBottom">
          <Image
            src="/images/image 206 (1).png"
            alt="Food Image"
            className="BottomFoodImage"
            width={281}
            height={281}
          />
        </div>
      </div>
    </section>
  );
};
