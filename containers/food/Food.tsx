"use client";
import "./component/food.css";
// import ProductList from "@/component/ProductList/ProductList";
import Discount from "./component/discount/Discount";
import CustomBooking from "./component/custombooking/CustomBooking";
import MostSold from "./component/mostsold/MostSold";
import MinsMeals from "./component/30MinsMeals/MinsMeals";
import FreeDelivery from "./component/freedelivery/FreeDelivery";
import { useState } from "react";

const isBetween10amAnd6pm = () => {
  const now = new Date();
  const hours = now.getHours();
  return hours >= 10 && hours < 18;
};

interface FoodProps {
  params: {
    id: string;
  };
}

const Food: React.FC<FoodProps> = ({ params }) => {
  const { id } = params;
  const [searchQuery, setSearchQuery] = useState<string>("");
   const [activeButton, setActiveButton] = useState<string>("All");

  // const { modal, closeModal } = useCartStore();

  // const { data: session } = useSession();
  // const router = useRouter();

  return (
    <div className="food-container">
      <Discount />
      <CustomBooking
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        activeButton={activeButton}
        setActiveButton={setActiveButton}
      />
      <MostSold id={id} searchQuery={searchQuery} activeButton={activeButton} />
      {/* <MinsMeals searchQuery={searchQuery} activeButton={activeButton} /> */}
      {/* <FreeDelivery searchQuery={searchQuery} activeButton={activeButton} /> */}
    </div>
  );
};

export default Food;
