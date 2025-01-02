import React, { useState, useEffect } from "react";
import axios from "axios";
import Discount from "./component/discount/Discount";
import CustomBooking from "./component/custombooking/CustomBooking";
import MostSold from "./component/mostsold/MostSold";
import { useLocation } from "@/context/LocationProvider";

interface FoodProps {
  params: {
    id: string;
  };
}

const url = process.env.NEXT_PUBLIC_ADMIN_URL;

const Food: React.FC<FoodProps> = () => {
 
  const { location } = useLocation();

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeButton, setActiveButton] = useState<string>("all");
  const [foodData, setFoodData] = useState([]);
  const [filteredFoodData, setFilteredFoodData] = useState([]); // New state for filtered data
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchFoodData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${url}/api/products`);
        const data = response.data?.data;

        // Filter foodData based on location.state
        if (location?.state) {
          const filteredData = data.filter((item: { vendor: { branch: any[]; }; }) =>
            item.vendor.branch.some(
              (branch) => branch.location.city.name === location.state
            )
          );
          setFilteredFoodData(filteredData); // Set filtered data
        } else {
          setFilteredFoodData(data); // If no location, use all data
        }

        setFoodData(data); // Set the original data (optional, if needed elsewhere)
        // console.log("Fetched food data:", data); // Log fetched data
      } catch (error) {
        console.error("Error fetching food data:", error);
        setError("Failed to fetch food data");
      } finally {
        setLoading(false);
      }
    };

    fetchFoodData();
  }, [url, location?.state]); // Add location.state as a dependency

  // if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="food-container">
      <Discount />
      <CustomBooking
        activeButton={activeButton}
        setActiveButton={setActiveButton}
      />
      {!loading && (
        <MostSold
          
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          activeButton={activeButton}
          foodData={filteredFoodData} // Pass the filtered food data
        />
      )}
      {/* <MinsMeals searchQuery={searchQuery} activeButton={activeButton} /> */}
      {/* <FreeDelivery searchQuery={searchQuery} activeButton={activeButton} /> */}
    </div>
  );
};

export default Food;