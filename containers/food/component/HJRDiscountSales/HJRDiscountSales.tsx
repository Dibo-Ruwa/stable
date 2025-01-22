import Image from "next/image";
import React from "react";
import "./HJRDiscountSales.css";



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

export interface HJRDiscountSalesDataType {
  discountDetails: DiscountDetails;
  images: {
    topImage: ImageData;
    bottomImage: ImageData;
  };
}


export const HJRDiscountSalesData: HJRDiscountSalesDataType[] = [
  {
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
        className: "HJRDiscountSales_BlackTopSpecialOfferImage",
      },
      bottomImage: {
        src: "/images/image 206 1.png",
        alt: "Food Image",
        width: 281,
        height: 281,
        className: "HJRDiscountSales_BlackBottomFoodImage",
      },
    },
  },
  {
    discountDetails: {
      tickText: "Discount Sale",
      lightTexts: ["50%", "Hot Jollof Rice"],
    },
    images: {
      topImage: {
        src: "/images/image 214 (2).png",
        alt: "Limited Offer",
        width: 176,
        height: 176,
        className: "HJRDiscountSales_BlackTopSpecialOfferImage",
      },
      bottomImage: {
        src: "/images/image 206 1.png",
        alt: "Delicious Dish",
        width: 281,
        height: 281,
        className: "HJRDiscountSales_BlackBottomFoodImage",
      },
    },
  },
  {
    discountDetails: {
      tickText: "Discount Sales",
      lightTexts: ["50%", "Hot Jollof Rice"],
    },
    images: {
      topImage: {
        src: "/images/image 214 (2).png",
        alt: "Special Offer",
        width: 176,
        height: 176,
        className: "HJRDiscountSales_BlackTopSpecialOfferImage",
      },
      bottomImage: {
        src: "/images/image 206 1.png",
        alt: "Tasty Meal",
        width: 281,
        height: 281,
        className: "HJRDiscountSales_BlackBottomFoodImage",
      },
    },
  },
];

interface HJRDiscountSalesDataProps {
  data: HJRDiscountSalesDataType[];
}

export const HJRDiscountSales: React.FC<HJRDiscountSalesDataProps> = ({ data }) => {
 return (
   <section className="HJRDiscountSales_ContainerCards">
     {data.map((item, index) => (
       <div key={index} className="HJRDiscountSales_Card">
         <div className="HJRDiscountSales_LeftContainer">
           <div className="HJRDiscountSales_DiscountTitle">
             <p className="HJRDiscountSales_DiscountTickText">
               {item.discountDetails.tickText}
             </p>
             {item.discountDetails.lightTexts.map((text, textIndex) => (
               <p
                 key={textIndex}
                 className="HJRDiscountSales_DiscountLightText"
               >
                 {text}
               </p>
             ))}
           </div>
         </div>

         <div className="HJRDiscountSales_RightContainer">
           <div className="HJRDiscountSales_BlackImageTop">
             <Image
               src={item.images.topImage.src}
               alt={item.images.topImage.alt}
               className={item.images.topImage.className}
               width={item.images.topImage.width}
               height={item.images.topImage.height}
             />
           </div>
           <div className="HJRDiscountSales_BlackImageBottom">
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