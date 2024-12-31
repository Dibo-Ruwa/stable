import React, { useState, useEffect } from "react";
import "./mostsold.css";
import { DiscountSale, FoodVendor } from "@/constants/index";
import Link from "next/link";

interface MostSoldProps {
  id: string;
  searchQuery: string;
  activeButton: string;
}

const MostSold: React.FC<MostSoldProps> = ({
  id,
  searchQuery,
  activeButton,
}) => {
  const [visibleItems, setVisibleItems] = useState(FoodVendor[0].items);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleItems(FoodVendor[0].items.slice(0, 4)); // Show first 4 items on large screens
      } else {
        setVisibleItems(FoodVendor[0].items); // Show all items on smaller screens
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Filter items based on searchQuery and activeButton
  const filteredItems = visibleItems.filter((item) => {
    const matchesSearch = item.smallTitle
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesTime =
      activeButton === "All" || item.timeText === activeButton;
    return matchesSearch && matchesTime;
  });

  return (
    <section className="mostsold_container">
      <div className="mostsold-frame">
        <p className="mostsold_title">{FoodVendor[0].title}</p>
        <div className="mostsold-cards">
          {filteredItems.map((item) => {
            const FavoriteIcon = item.favoriteIcon;
            const StarIcon = item.starIcon;
            const TimeIcon = item.timeIcon;
            const PrizeIcon = item.prizeIcon;
            return (
              <Link
                href={`./food/${item.id}`}
                key={item.id}
                className="mostsold-card"
              >
                <div className="mostsold-card_food-img">
                  <img
                    src={item.img}
                    alt={item.smallTitle}
                    className="mostsold-card_img"
                  />
                  <div className="mostsold-card_img-iconcontainer">
                    <FavoriteIcon className="mostsold-card_img-icon" />
                  </div>
                </div>
                <div className="mostsold-card_content">
                  <div className="mostsold-card_context">
                    <div className="mostsold-card_context-top">
                      <small className="mostsold-card_title">
                        {item.smallTitle}
                      </small>
                      <div className="mostsold-card_dot"></div>
                      <StarIcon className="mostsold-card_star" />
                      <small className="mostsold-card_rating">
                        {item.rating}
                      </small>
                    </div>
                    <div className="mostsold-card_timer">
                      <TimeIcon className="mostsold-card_timer-icon" />
                      <div className="mostsold-card_timer-text">
                        {item.timeText}
                      </div>
                    </div>
                  </div>
                  <small className="mostsold-card_remender">
                    {item.remenderText}
                  </small>
                  <div className="mostsold-card_prize">
                    <p className="mostsold-card_prize-text">{item.prizeText}</p>
                    <button
                    type="button"
                      className="mostsold-card_prize-link"
                    >
                      <PrizeIcon className="mostsold-card_prize-icon" />
                    </button>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        {/* <div className="sale-imgs-container">
          {DiscountSale.map((item, index) => (
            <div className="sale-imgs" key={index}>
              <img
                src={item.img}
                alt={item.alt}
                className="mostsold-sale_img"
              />
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default MostSold;
