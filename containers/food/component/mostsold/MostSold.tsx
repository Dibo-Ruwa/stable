import React, { useState, useEffect } from "react";
import "./mostsold.css";
import Link from "next/link";
import { FoodData } from "@/utils/types/types";

interface MostSoldProps {
  id: string;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  activeButton: string;
  foodData: FoodData[];
}

const MostSold: React.FC<MostSoldProps> = ({
  id,
  foodData,
  searchQuery,
  setSearchQuery,
  activeButton,
}) => {
  const [visibleItems, setVisibleItems] = useState<FoodData[]>(foodData); // Initialize with foodData

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleItems(foodData.slice(0, 4)); // Show first 4 items on large screens
      } else {
        setVisibleItems(foodData); // Show all items on smaller screens
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [foodData]); // Add foodData as a dependency

  // Filter items based on searchQuery and activeButton
  const filteredItems = visibleItems?.filter((item) => {
    const matchesSearch = item.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesTime =
      activeButton === "All" || item.categories.includes(activeButton);
    return matchesSearch && matchesTime;
  });

  return (
    <section className="mostsold_container">
      <div className="mostsold-frame">
        <p className="mostsold_title">Most Sold Items</p>
        <div className="custombooking-search_box">
          <input
            type="text"
            placeholder="Search here"
            required
            className="custombooking-search_input"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <img
            src="/images/search-normal.svg"
            alt="search-normal"
            className="custombooking-search_img"
          />
        </div>
        <div className="mostsold-cards">
          {filteredItems.map((item) => (
            <Link
              href={`./food/${item.slug}`}
              key={item._id}
              className="mostsold-card"
            >
              <div className="mostsold-card_food-img">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="mostsold-card_img"
                />
              </div>
              <div className="mostsold-card_content">
                <div className="mostsold-card_context">
                  <div className="mostsold-card_context-top">
                    <small className="mostsold-card_title">{item.title}</small>
                    <div className="mostsold-card_dot"></div>
                    <small className="mostsold-card_rating">
                      {item.price} {/* Display price instead of rating */}
                    </small>
                  </div>
                  <div className="mostsold-card_timer">
                    <span>{item.prep_time}</span>{" "}
                    {/* Display preparation time */}
                  </div>
                </div>
                <div className="mostsold-card_prize">
                  <p className="mostsold-card_prize-text">{item.price} NGN</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MostSold;
