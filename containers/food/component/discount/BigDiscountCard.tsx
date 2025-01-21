import React from "react";
import "./discount.css";
import Image from "next/image";
import { BigDiscountCardDataType } from "@/utils/types/types";

interface BigDiscountCardProps {
  data: BigDiscountCardDataType;
}

export const BigDiscountCard: React.FC<BigDiscountCardProps> = ({ data }) => {
  return (
    <section className="BigDiscountCard_Container">
      <div className="BigDiscountCard_LeftContainer">
        <div className="BigDiscountCard_DiscountTitle">
          <p className="BigDiscountCard_DiscountTickText">
            {data.discountDetails.tickText}
          </p>
          {data.discountDetails.lightTexts.map((text, index) => (
            <p key={index} className="BigDiscountCard_DiscountLightText">
              {text}
            </p>
          ))}
        </div>
        <div className="BigDiscountCard_DiscountRightImage">
          <div className="ImagePolygonSeven">
            <Image
              src={data.images.leftContainer[0].src}
              alt={data.images.leftContainer[0].alt}
              width={data.images.leftContainer[0].width}
              height={data.images.leftContainer[0].height}
              className={data.images.leftContainer[0].className}
            />
          </div>
          <div className="ImagePolygonSix">
            <Image
              src={data.images.leftContainer[1].src}
              alt={data.images.leftContainer[1].alt}
              width={data.images.leftContainer[1].width}
              height={data.images.leftContainer[1].height}
              className={data.images.leftContainer[1].className}
            />
          </div>
          <div className="ImageSpecialOFFER">
            <Image
              src={data.images.leftContainer[2].src}
              alt={data.images.leftContainer[2].alt}
              width={data.images.leftContainer[2].width}
              height={data.images.leftContainer[2].height}
              className={data.images.leftContainer[2].className}
            />
          </div>
        </div>
      </div>
      <div className="BigDiscountCard_CenterContainer">
        <Image
          src={data.images.centerContainer.src}
          alt={data.images.centerContainer.alt}
          width={data.images.centerContainer.width}
          height={data.images.centerContainer.height}
          className={data.images.centerContainer.className}
        />
      </div>

      <div className="BigDiscountCard_RightContainer">
        <Image
          src={data.images.rightContainer.src}
          alt={data.images.rightContainer.alt}
          width={data.images.rightContainer.width}
          height={data.images.rightContainer.height}
          className={data.images.rightContainer.className}
        />
      </div>
    </section>
  );
};