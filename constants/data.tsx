import { BigDiscountCardDataType, SmallDiscountCardBlackDataType, SmallDiscountCardWhiteDataType } from "@/utils/types/types"; // Adjust the import path as needed

export const BigDiscountCardData: BigDiscountCardDataType = {
  discountDetails: {
    tickText: "Discount Sale",
    lightTexts: ["50%", "Shop Now"],
  },
  images: {
    leftContainer: [
      {
        src: "/images/Polygon 7.png",
        alt: "Polygon 7",
        width: 100,
        height: 50,
        className: "PolygonSeven",
      },
      {
        src: "/images/Polygon 6.png",
        alt: "Polygon 6",
        width: 100,
        height: 50,
        className: "PolygonSix",
      },
      {
        src: "/images/specialOffer.png",
        alt: "Special Offer",
        width: 100,
        height: 50,
        className: "SpecialOFFER",
      },
    ],
    centerContainer: {
      src: "/images/image 220.png",
      alt: "Food",
      width: 448,
      height: 672,
      className: "IMageFood",
    },
    rightContainer: {
      src: "/images/image 214.png",
      alt: "Sales 50% off",
      width: 340,
      height: 340,
      className: "SalesOff",
    },
  },
};

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


  // groceries

  export const BigDiscountCardDataG: BigDiscountCardDataType = {
    discountDetails: {
      tickText: "Discount Sale",
      lightTexts: ["Enjoy 20% discount on all Fruits and Vegetables", "Shop Now"],
    },
    images: {
      leftContainer: [
        {
          src: "/images/groc1.jepg",
          alt: "Polygon 7",
          width: 100,
          height: 50,
          className: "PolygonSeven",
        },
        {
          src: "/images/Polygon 6.png",
          alt: "Polygon 6",
          width: 100,
          height: 50,
          className: "PolygonSix",
        },
        {
          src: "/images/specialOffer.png",
          alt: "Special Offer",
          width: 100,
          height: 50,
          className: "SpecialOFFER",
        },
      ],
      centerContainer: {
        src: "/images/image 220.png",
        alt: "Food",
        width: 448,
        height: 672,
        className: "IMageFood",
      },
      rightContainer: {
        src: "/images/image 214.png",
        alt: "Sales 50% off",
        width: 340,
        height: 340,
        className: "SalesOff",
      },
    },
  };
  
  export const SmallDiscountCardWhiteDataG: SmallDiscountCardWhiteDataType = {
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
    
  
    export const SmallDiscountCardBlackDataG: SmallDiscountCardBlackDataType = {
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