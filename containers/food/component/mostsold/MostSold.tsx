import React, { useState, useEffect } from "react";
import "./mostsold.css";
import Link from "next/link";
import { FoodData } from "@/utils/types/types";
import { FaStar } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";

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

  // Filter foodData based on activeButton and searchQuery
  useEffect(() => {
    let filteredData = foodData;
  
    // Filter by activeButton (category)
    if (activeButton !== "all") {
      filteredData = filteredData.filter((item) =>
        item.categories.includes(activeButton)
      );
    }
  
    // Filter by searchQuery (title)
    if (searchQuery) {
      filteredData = filteredData.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
  
    setVisibleItems(filteredData);
  }, [activeButton, searchQuery]); // Remove foodData from dependencies
  // Handle window resize for visible items
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        // setVisibleItems((prev) => prev.slice(0, 4)); // Show first 4 items on large screens
      } else {
        // setVisibleItems((prev) => prev); // Show all items on smaller screens
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [foodData]); // Add foodData as a dependency

  return (
    <div>
      <section className="mostsold_container">
      {visibleItems?.length === 0 ? (
            <p 
            style={{
              textAlign: 'center',
              fontSize: '30px',
              fontWeight: 600,
              marginTop: '20px',
            }}
            >No  meal found</p>
          ) : (
        <div className="mostsold-frame">
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "450px",
                padding: "1rem",
              }}
            >
              <input
                type="text"
                placeholder="Search here"
                style={{
                  height: "42px",
                  flexShrink: 0,
                  borderRadius: "4px",
                  paddingLeft: "1rem",
                  paddingRight: "2.5rem", // Tailwind's pr-10
                  border: "1px solid #ebebeb",
                  backgroundColor: "#fcfcfc",
                  outline: "none",
                  width: "100%",
                }}
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <img
                src="/images/search-normal.svg"
                alt="search-normal"
                style={{
                  position: "absolute",
                  right: "2rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "20px",
                  height: "20px",
                }}
              />
            </div>
          </div>
          {/* <p className="mostsold_title">Most Sold Items</p> */}
      
            <div className="mostsold-cards">
              {visibleItems.map((item) => (
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
                        <small className="mostsold-card_title">
                          {item.title}
                        </small>
                        <div className="mostsold-card_dot"></div>
                        <FaStar className="mostsold-card_star" />
                        <small className="mostsold-card_rating">4.5</small>
                      </div>
                      <div className="mostsold-card_timer">
                        <span>{item.prep_time}</span>{" "}
                        {/* Display preparation time */}
                      </div>
                    </div>
                    <p 
                    // className="small.mostsold-card_remender"
                    style={{
                      fontSize: '14px',
                      color: '#8F8F8F',
                    }}
                    >{item?.vendor?.name}</p>
                    <div className="mostsold-card_prize">
                      <p className="mostsold-card_prize-text">₦{item.price}</p>
                      <button
                        type="button"
                        className="mostsold-card_prize-link"
                      >
                        <FaBagShopping className="mostsold-card_prize-icon" />
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
        </div>
    )}
      </section>
    </div>
  );
};

export default MostSold;