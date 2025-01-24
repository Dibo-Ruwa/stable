// import { BigDiscountCard } from "./BigDiscountCard";
import { BigDiscountCard } from "@/containers/food/component/discount/BigDiscountCard";
// import { SmallDiscountCardBlack } from "./SmallDiscountCardBlack";
// import { SmallDiscountCardWhite } from "./SmallDiscountCardWhite";
import "./discount.css";
import { SmallDiscountCardWhite } from "@/containers/food/component/discount/SmallDiscountCardWhite";
import { SmallDiscountCardBlack } from "@/containers/food/component/discount/SmallDiscountCardBlack";

const Discount = () => {
  return (
    <section className="discount_container">
      <div className="discount-food_frame">
        <div className="big_discount-card">
          <BigDiscountCard
            leftImg1="/images/Polygon 7.png"
            // leftImg1="/images/groc1.jpeg"
            leftImg2="/images/Polygon 6.png"
            leftImg3="/images/specialOffer.png"
            centerContainer="/images/groc1.jpeg"
            rightContainer="/images/image 216.png"
            discountDetails={{
              tickText: "Enjoy",
              lightTexts: ["20%", "Discount on all Fruits and Vegetables"],
            }}
          />
        </div>
        <div className="small_discount-card">
          <SmallDiscountCardWhite
            data={{
              discountDetails: {
                tickText: "Enjoy",
              lightTexts: ["20%", "Discount on all Fruits"],
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
                  src: "/images/grocery_discount.png",
                  alt: "Food Image",
                  width: 151,
                  height: 151,
                  className: "BottomFoodImage bottom_food_image",
                },
              },
            }}
          />
          <SmallDiscountCardBlack
            data={{
              discountDetails: {
                tickText: "Enjoy",
              lightTexts: ["20%", "Discount on all Vegetables"],
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
                  src: "/images/grocery_discount.png",
                  alt: "Food Image",
                  width: 150,
                  height: 150,
                  className: "BottomFoodImage",
                },
              },
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Discount;