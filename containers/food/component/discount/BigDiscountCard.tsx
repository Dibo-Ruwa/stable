import React from "react";
import "./discount.css";
import Image from "next/image";
import DynamicSaleSVG from "@/component/discountSvg"; // Adjust the path as necessary


interface BigDiscountCardProps {
  leftImg1: string;
  leftImg2: string;
  leftImg3: string;
  centerContainer: string;
  rightContainer: string;
  discountDetails: {
    tickText: string;
    lightTexts: string[];
  };
}

export const BigDiscountCard: React.FC<BigDiscountCardProps> = ({
  leftImg1,
  leftImg2,
  leftImg3,
  centerContainer,
  rightContainer,
  discountDetails,
}) => {
  return (
    <section className="BigDiscountCard_Container">
      <div className="BigDiscountCard_LeftContainer">
        <div className="BigDiscountCard_DiscountTitle">
          <p className="BigDiscountCard_DiscountTickText">
            {discountDetails.tickText}
          </p>
          {discountDetails.lightTexts.map((text, index) => (
            <p key={index} className="BigDiscountCard_DiscountLightText">
              {text}
            </p>
          ))}
        </div>
        <div className="BigDiscountCard_DiscountRightImage">
          <div className="ImagePolygonSeven">
            <Image
              src={leftImg1}
              alt="PolygonSeven"
              width={100}
              height={50}
              className="PolygonSeven"
            />
          </div>
          <div className="ImagePolygonSix">
            <Image
              src={leftImg2}
              alt="PolygonSix"
              width={100}
              height={50}
              className="PolygonSix"
            />
          </div>
          <div className="ImageSpecialOFFER">
            <Image
              src={leftImg3}
              alt="SpecialOFFER"
              width={100}
              height={50}
              className="SpecialOFFER"
            />
          </div>
        </div>
      </div>
      <div className="BigDiscountCard_CenterContainer">
        <Image
          src={centerContainer}
          alt="CenterImage"
          width={448}
          height={672}
          className="IMageFood"
        />
      </div>

      <div className="BigDiscountCard_RightContainer">
        <Image
          src={rightContainer}
          alt="RightImage"
          width={140}
          height={140}
          className="SalesOff"
        />
      </div>
    </section>
  );
};