import { BigDiscountCard, BigDiscountCardData } from "./BigDiscountCard";
import "./discount.css";
import { SmallDiscountCardBlack, SmallDiscountCardBlackData } from "./SmallDiscountCardBlack";
import { SmallDiscountCardWhite, SmallDiscountCardWhiteData } from "./SmallDiscountCardWhite";

const Discount = () => {
  return (
    <section className="discount_container">
      <div className="discount-food_frame">
        <div className="big_discount-card">
          <BigDiscountCard data={BigDiscountCardData} />
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
