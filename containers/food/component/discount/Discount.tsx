import { BigDiscountCard } from "./BigDiscountCard";
import { SmallDiscountCardBlack } from "./SmallDiscountCardBlack";
import { SmallDiscountCardWhite } from "./SmallDiscountCardWhite";
import "./discount.css";

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
            centerContainer="/images/image 220.png"
            rightContainer="/images/image 214.png"
            discountDetails={{
              tickText: "Discount Sale",
              lightTexts: ["50%", "Shop Now"],
            }}
          />
        </div>
        <div className="small_discount-card">
          <SmallDiscountCardWhite
            data={{
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
            }}
          />
          <SmallDiscountCardBlack
            data={{
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
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Discount;