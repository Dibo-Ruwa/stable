import Image from "next/image";
import React from "react";
import "./RedHJRDiscountSales.css";



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

export interface RedHJRDiscountSalesDataType {
  discountDetails: DiscountDetails;
  images: {
    topImage: ImageData;
    bottomImage: ImageData;
    rightImage: ImageData;
  };
}


export const RedHJRDiscountSalesData: RedHJRDiscountSalesDataType[] = [
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
        className: "RedHJRDiscountSales_BlackTopSpecialOfferImage",
      },
      bottomImage: {
        src: "/images/image 206 1.png",
        alt: "Food Image",
        width: 281,
        height: 281,
        className: "RedHJRDiscountSales_BlackBottomFoodImage",
      },

      rightImage: {
        src: "/images/image 214 (2).png",
        alt: "Food Image",
        width: 281,
        height: 281,
        className: "RedHJRDiscountSales_BlackRightFoodImage",
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
        className: "RedHJRDiscountSales_BlackTopSpecialOfferImage",
      },
      bottomImage: {
        src: "/images/image 206 1.png",
        alt: "Delicious Dish",
        width: 281,
        height: 281,
        className: "RedHJRDiscountSales_BlackBottomFoodImage",
      },

      rightImage: {
        src: "/images/image 214 (2).png",
        alt: "Food Image",
        width: 281,
        height: 281,
        className: "RedHJRDiscountSales_BlackRightFoodImage",
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
        className: "RedHJRDiscountSales_BlackTopSpecialOfferImage",
      },

      bottomImage: {
        src: "/images/image 206 1.png",
        alt: "Tasty Meal",
        width: 281,
        height: 281,
        className: "RedHJRDiscountSales_BlackBottomFoodImage",
      },

      rightImage: {
        src: "/images/image 214 (2).png",
        alt: "Food Image",
        width: 281,
        height: 281,
        className: "RedHJRDiscountSales_BlackRightFoodImage",
      },
    },
  },
];

interface RedHJRDiscountSalesDataProps {
  data: RedHJRDiscountSalesDataType[];
}

export const RedHJRDiscountSales: React.FC<RedHJRDiscountSalesDataProps> = ({ data }) => {
 return (
   <section className="RedHJRDiscountSales_ContainerCards">
     {data.map((item, index) => (
       <div key={index} className="RedHJRDiscountSales_Card">
         <div className="RedHJRDiscountSales_LeftContainer">
           <div className="RedHJRDiscountSales_DiscountTitle">
             <p className="RedHJRDiscountSales_DiscountTickText">
               {item.discountDetails.tickText}
             </p>
             {item.discountDetails.lightTexts.map((text, textIndex) => (
               <p
                 key={textIndex}
                 className="RedHJRDiscountSales_DiscountLightText"
               >
                 {text}
               </p>
             ))}
           </div>
         </div>

         <div className="RedHJRDiscountSales_CenterContainer">
           <div className="RedHJRDiscountSales_BlackImageTop">
             <Image
               src={item.images.topImage.src}
               alt={item.images.topImage.alt}
               className={item.images.topImage.className}
               width={item.images.topImage.width}
               height={item.images.topImage.height}
             />
           </div>
           <div className="RedHJRDiscountSales_BlackImageBottom">
             <Image
               src={item.images.bottomImage.src}
               alt={item.images.bottomImage.alt}
               className={item.images.bottomImage.className}
               width={item.images.bottomImage.width}
               height={item.images.bottomImage.height}
             />
           </div>
         </div>

         <div className="RedHJRDiscountSales_RightBlackImageTop">
           <Image
             src={item.images.rightImage.src}
             alt={item.images.rightImage.alt}
             className={item.images.rightImage.className}
             width={item.images.rightImage.width}
             height={item.images.rightImage.height}
           />
         </div>
       </div>
     ))}
   </section>
 );
};