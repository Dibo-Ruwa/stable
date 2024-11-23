"use client";
import "./component/groceries.css";
import Discount from "./component/discount/Discount";
import CustomBooking from "./component/custombooking/CustomBooking";
import MostSold from "./component/mostsold/MostSold";
import MinsMeals from "./component/30MinsMeals/MinsMeals";
import FreeDelivery from "./component/freedelivery/FreeDelivery";



const Groceries: React.FC = () => {

  return (
    <div className="food-container">
      <Discount />
      <CustomBooking />
      <MostSold />
      <MinsMeals />
      <FreeDelivery />
    </div>
  );
};

export default Groceries;


