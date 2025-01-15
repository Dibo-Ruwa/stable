import { BigDiscountCard } from "./BigDiscountCard";
import "./discount.css";
import { SmallDiscountCardBlack } from "./SmallDiscountCardBlack";
import { SmallDiscountCardWhite } from "./SmallDiscountCardWhite";

const Discount = () => {
  return (
    <section className="discount_container">
      <div className="discount-food_frame">
        <div className="big_discount-card">
          <BigDiscountCard />
        </div>
        <div className="small_discount-card">
          <SmallDiscountCardWhite />
          <SmallDiscountCardBlack />
        </div>
      </div>
    </section>
  );
};
export default Discount;
