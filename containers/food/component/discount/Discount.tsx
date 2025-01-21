// src/components/Discount/Discount.tsx
import { BigDiscountCard } from "./BigDiscountCard";
import { BigDiscountCardData, SmallDiscountCardWhiteData, SmallDiscountCardBlackData } from "@/constants/data";
import "./discount.css";
import { SmallDiscountCardBlack } from "./SmallDiscountCardBlack";
import { SmallDiscountCardWhite } from "./SmallDiscountCardWhite";

const Discount = () => {
  return (
    <section className="discount_container">
      <div className="discount-food_frame">
        <div className="big_discount-card">
          <BigDiscountCard data={BigDiscountCardData} /> {/* Pass data as props */}
        </div>
        <div className="small_discount-card">
          <SmallDiscountCardWhite data={SmallDiscountCardWhiteData} />
          <SmallDiscountCardBlack data={SmallDiscountCardBlackData} />
        </div>
      </div>
    </section>
  );
};

export default Discount;