"use client";
import "./component/food.css";
// import ProductList from "@/component/ProductList/ProductList";
import Discount from "./component/discount/Discount";
import CustomBooking from "./component/custombooking/CustomBooking";
import MostSold from "./component/mostsold/MostSold";
import MinsMeals from "./component/30MinsMeals/MinsMeals";
import FreeDelivery from "./component/freedelivery/FreeDelivery";


const Food: React.FC = () => {

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

export default Food;


