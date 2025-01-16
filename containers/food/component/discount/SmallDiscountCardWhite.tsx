import Image from "next/image";
import React from "react";
import "./discount.css";

export interface SmallDiscountCardWhiteDataType {
  discountDetails: {
    tickText: string;
    lightTexts: string[];
  };
  images: {
    topImage: {
      src: string;
      alt: string;
      width: number;
      height: number;
      className: string;
    };
    bottomImage: {
      src: string;
      alt: string;
      width: number;
      height: number;
      className: string;
    };
  };
}

export const SmallDiscountCardWhiteData: SmallDiscountCardWhiteDataType = {
  discountDetails: {
    tickText: "Discount Sale",
    lightTexts: ["50%", "Hot Jollof Rice"],
  },
  images: {
    topImage: {
      src: "/images/image 216.png",
      alt: "Special Offer",
      width: 176,
      height: 176,
      className: "TopSpecialOfferImage",
    },
    bottomImage: {
      src: "/images/image 206 (1).png",
      alt: "Food Image",
      width: 281,
      height: 281,
      className: "BottomFoodImage",
    },
  },
};


interface SmallDiscountCardWhiteProps {
  data: SmallDiscountCardWhiteDataType;
}

export const SmallDiscountCardWhite: React.FC<SmallDiscountCardWhiteProps> = ({ data }) => {
  return (
    <section className="SmallDiscountCard_Container">
      <div className="SmallDiscountCard_LeftContainer">
        <div className="SmallDiscountCard_DiscountTitle">
          <p className="SmallDiscountCard_DiscountTickText">
            {data.discountDetails.tickText}
          </p>
          {data.discountDetails.lightTexts.map((text, index) => (
            <p key={index} className="SmallDiscountCard_DiscountLightText">
              {text}
            </p>
          ))}
        </div>
      </div>

      <div className="SmallDiscountCard_RightContainer">
        <div className="ImageTop">
          <Image
            src={data.images.topImage.src}
            alt={data.images.topImage.alt}
            className={data.images.topImage.className}
            width={data.images.topImage.width}
            height={data.images.topImage.height}
          />
        </div>
        <div className="ImageBottom">
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
