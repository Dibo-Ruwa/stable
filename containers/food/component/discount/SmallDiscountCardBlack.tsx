import Image from "next/image";
import React from "react";
import "./discount.css";

export interface DiscountDetails {
  tickText: string;
  lightTexts: string[];
}

export interface ImageData {
  src: string;
  alt: string;
  width: number;
  height: number;
  className: string;
}

export interface SmallDiscountCardBlackDataType {
  discountDetails: DiscountDetails;
  images: {
    topImage: ImageData;
    bottomImage: ImageData;
  };
}

export const SmallDiscountCardBlackData: SmallDiscountCardBlackDataType = {
  discountDetails: {
    tickText: "Discount Sale",
    lightTexts: ["50%", "Hot Jollof Rice"],
  },
  images: {
    topImage: {
      src: "/images/image 214 (2).png",
      alt: "Special Offer",
      width: 176,
      height: 176,
      className: "BlackTopSpecialOfferImage",
    },
    bottomImage: {
      src: "/images/image 221.png",
      alt: "Food Image",
      width: 281,
      height: 281,
      className: "BlackBottomFoodImage",
    },
  },
};

interface SmallDiscountCardBlackProps {
  data: SmallDiscountCardBlackDataType;
}

export const SmallDiscountCardBlack: React.FC<SmallDiscountCardBlackProps> = ({
  data,
}) => {
  return (
    <section className="SmallDiscountCardBlack_Container">
      <div className="SmallDiscountCardBlack_LeftContainer">
        <div className="SmallDiscountCardBlack_DiscountTitle">
          <p className="SmallDiscountCardBlack_DiscountTickText">
            {data.discountDetails.tickText}
          </p>
          {data.discountDetails.lightTexts.map((text, index) => (
            <p key={index} className="SmallDiscountCardBlack_DiscountLightText">
              {text}
            </p>
          ))}
        </div>
      </div>

      <div className="SmallDiscountCardBlack_RightContainer">
        <div className="BlackImageTop">
          <Image
            src={data.images.topImage.src}
            alt={data.images.topImage.alt}
            className={data.images.topImage.className}
            width={data.images.topImage.width}
            height={data.images.topImage.height}
          />
        </div>
        <div className="BlackImageBottom">
          <Image
            src={data.images.bottomImage.src}
            alt={data.images.bottomImage.alt}
            className={data.images.bottomImage.className}
            width={data.images.bottomImage.width}
            height={data.images.bottomImage.height}
          />
        </div>
      </div>
    </section>
  );
};