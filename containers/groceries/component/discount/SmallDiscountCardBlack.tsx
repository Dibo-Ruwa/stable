import Image from "next/image";
import React from "react";
import "./discount.css";

export const SmallDiscountCardBlack = () => {
  return (
    <section className="SmallDiscountCardBlack_Container">
      <div className="SmallDiscountCardBlack_LeftContainer">
        <div className="SmallDiscountCardBlack_DiscountTitle">
          <p className="SmallDiscountCardBlack_DiscountTickText">
            Discount Sale
          </p>
          <p className="SmallDiscountCardBlack_DiscountLightText">50%</p>
          <p className="SmallDiscountCardBlack_DiscountLightText">
            Hot Jollof Rice
          </p>
        </div>
      </div>

      <div className="SmallDiscountCardBlack_RightContainer">
        <div className="BlackImageTop">
          <Image
            src="/images/image 214 (2).png"
            alt="Special Offer"
            className="BlackTopSpecialOfferImage"
            width={176}
            height={176}
          />
        </div>
        <div className="BlackImageBottom">
          <Image
            src="/images/image 221.png"
            alt="Food Image"
            className="BlackBottomFoodImage"
            width={281}
            height={281}
          />
        </div>
      </div>
    </section>
  );
};
