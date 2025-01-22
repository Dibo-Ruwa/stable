import Image from "next/image";
import React, { useState, useEffect } from "react";
import "./GreenHJRDiscountSales.css";



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

export interface GreenHJRDiscountSalesDataType {
  discountDetails: DiscountDetails;
  images: {
    topImage?: ImageData;
    bottomImage: ImageData;
  };
}


export const GreenHJRDiscountSalesData: GreenHJRDiscountSalesDataType[] = [
  {
    discountDetails: {
      tickText: "Discount Sale",
      lightTexts: ["50%", "Hot Jollof Rice"],
    },
    images: {
      // topImage: {
      //   src: "/images/image 214 (2).png",
      //   alt: "Special Offer",
      //   width: 176,
      //   height: 176,
      //   className: "HJRDiscountSales_BlackTopSpecialOfferImage",
      // },
      bottomImage: {
        src: "/images/image 206 (2).png",
        alt: "Food Image",
        width: 281,
        height: 281,
        className: "GreenHJRDiscountSales_BottomFoodImage",
      },
    },
  },
  {
    discountDetails: {
      tickText: "Discount Sale",
      lightTexts: ["50%", "Hot Jollof Rice"],
    },
    images: {
      // topImage: {
      //   src: "/images/image 214 (2).png",
      //   alt: "Limited Offer",
      //   width: 176,
      //   height: 176,
      //   className: "HJRDiscountSales_BlackTopSpecialOfferImage",
      // },
      bottomImage: {
        src: "/images/image 206 (2).png",
        alt: "Delicious Dish",
        width: 281,
        height: 281,
        className: "GreenHJRDiscountSales_BottomFoodImage",
      },
    },
  },
  {
    discountDetails: {
      tickText: "Discount Sales",
      lightTexts: ["50%", "Hot Jollof Rice"],
    },
    images: {
      // topImage: {
      //   src: "/images/image 214 (2).png",
      //   alt: "Special Offer",
      //   width: 176,
      //   height: 176,
      //   className: "HJRDiscountSales_BlackTopSpecialOfferImage",
      // },
      bottomImage: {
        src: "/images/image 206 (2).png",
        alt: "Tasty Meal",
        width: 281,
        height: 281,
        className: "GreenHJRDiscountSales_BottomFoodImage",
      },
    },
  },
];

interface GreenHJRDiscountSalesProps {
  data: GreenHJRDiscountSalesDataType[];
}

export const GreenHJRDiscountSales: React.FC<GreenHJRDiscountSalesProps> = ({
  data,
}) => {
    // const [visibleData, setVisibleData] =
    //   useState<GreenHJRDiscountSalesDataType[]>(data);

    // useEffect(() => {
    //   const handleResize = () => {
    //     const screenWidth = window.innerWidth;

    //     if (screenWidth <= 768) {
    //       setVisibleData(data.slice(0, 1)); // Show only 1 item
    //     } else if (screenWidth <= 1024) {
    //       setVisibleData(data.slice(0, 2)); // Show only 2 items
    //     } else {
    //       setVisibleData(data); // Show all items
    //     }
    //   };

    //   // Set initial visible data
    //   handleResize();

    //   // Add event listener for screen resize
    //   window.addEventListener("resize", handleResize);

    //   // Cleanup the event listener on component unmount
    //   return () => window.removeEventListener("resize", handleResize);
    // }, [data]);
  return (
    <section className="GreenHJRDiscountSales_ContainerCards">
      {data.map((item, index) => (
        <div key={index} className="GreenHJRDiscountSales_Card">
          <div className="GreenHJRDiscountSales_LeftContainer">
            <div className="GreenHJRDiscountSales_DiscountTitle">
              <p className="GreenHJRDiscountSales_DiscountTickText">
                {item.discountDetails.tickText}
              </p>
              {item.discountDetails.lightTexts.map((text, textIndex) => (
                <p
                  key={textIndex}
                  className="GreenHJRDiscountSales_DiscountLightText"
                >
                  {text}
                </p>
              ))}
            </div>
          </div>

          <div className="GreenHJRDiscountSales_RightContainer">
            {/* <div className="HJRDiscountSales_BlackImageTop">
             <Image
               src={item.images.topImage.src}
               alt={item.images.topImage.alt}
               className={item.images.topImage.className}
               width={item.images.topImage.width}
               height={item.images.topImage.height}
             />
           </div> */}
            <div className="GreenHJRDiscountSales_ImageBottom">
              <Image
                src={item.images.bottomImage.src}
                alt={item.images.bottomImage.alt}
                className={item.images.bottomImage.className}
                width={item.images.bottomImage.width}
                height={item.images.bottomImage.height}
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};