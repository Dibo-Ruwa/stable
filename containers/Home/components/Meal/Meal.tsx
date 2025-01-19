"use client";
import React, { useState, useEffect } from "react";
import "./meal.css";
import Link from "next/link";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaBagShopping } from "react-icons/fa6";
import { MdOutlineTimer } from "react-icons/md";
import { RiArrowRightSLine } from "react-icons/ri";
import { Button } from "@/component/shared/Button";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FoodData } from "@/utils/types/types";
import { useFoodItem } from "@/context/FooItemProvider";


// Define the type for a food item
interface FoodItem {
  _id: string;
  imageUrl: string;
  title: string;
  prep_time: number;
  price: number;
}

export default function Meal(): JSX.Element {
  const { setSelectedItem } = useFoodItem();
  const router = useRouter();

  const [activePrepTime, setActivePrepTime] = useState<string>("30mins");
  const [food, setFood] = useState<FoodItem[]>([]); // Set the type for the food state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_ADMIN_URL}/api/products?type=food`,
          {
            params: {
              page: 1,
              limit: 20,
            },
          }
        );

        const newData = response.data?.data;
        if (Array.isArray(newData)) {
          setFood(newData.slice(0, 4)); // Only take the first 4 items
        } else {
          console.error("Invalid data format:", newData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleItemClick = (item: FoodData) => {
    setSelectedItem(item);
    console.log(item);
    // Check if the item's _id is in the cartItems
    // const isItemInCart = cartItems.some(
    //   (cartItem) => cartItem._id === item._id
    // );

    // Navigate to the checkout page
    router.push(`/food/checkout`);
  };


  if (loading) {
    return <p>Loading meals...</p>;
  }

  return (
    <div>
      <div className="meal" >
        <div className="hero_frame">
          <div className="duration">
            <p
              style={{
                fontSize: "1.3rem",
                color: "black",
              }}
            >
              Meals
            </p>
          </div>
          <div className="FOODMeal_card">
            {food.map((item) => (
              <div key={item?._id} className="FOODCard">
              <div className="FOODCard-img">
           
                <img
                  className=""
                  src={item.imageUrl}
                  alt="Chef preparing food"
                />
              </div>
              <div style={{ 
                marginTop: "1rem",
                backgroundColor: "#fff",

              }} >
                <div className="meal-dis">
                  <div>
                    <div>
                      <p className="FoodMeal-dis">{item.title}</p>
                      <div className="meal-dot"></div>
                      <p className="FoodMeal-disNum">4.5</p>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: 3,
                    }}
                  >
                    <MdOutlineTimer />
                    <p
                      style={{
                        color: "#EF5A5A",
                        fontSize: ".9rem",
                      }}
                      className="FoodTime"
                    >
                      {item.prep_time} {item.prep_time === 1 ? "min" : "mins"}
                    </p>
                  </div>
                </div>
                <div className="price">
                  <p>₦{item.price}</p>
                  <p
                    style={{
                      backgroundColor: "#4BB149",
                      padding: "4px 20px",
                      borderRadius: "20px",
                    }}
                  >
                    <FaBagShopping
                      style={{
                        color: "white",
                      }}
                    />
                  </p>
                </div>
              </div>
            </div>
            ))}
          </div>

          <Link
            href="/food"
            style={{
              display: "flex",
              gap: 6,
              color: "#4BB149",
              marginTop: 20,
              alignItems: "center",
              width: "fit-content",
              marginLeft: "auto",
            }}
          >
            See More
            <RiArrowRightSLine
              style={{
                fontSize: "1.6rem",
                marginTop: 2,
              }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}