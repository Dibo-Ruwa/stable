import React from "react";
import "./freedelivery.css";
import { FreeDeliveryData } from "@/constants/index";
import Link from "next/link"

interface FreeDeliveryProps {
  searchQuery: string;
  activeButton: string;
}

const FreeDelivery: React.FC<FreeDeliveryProps> = ({
  searchQuery,
  activeButton,
}) => {

   const filteredItems = FreeDeliveryData[0].items.filter((item) => {
     const matchesSearch = item.smallTitle
       .toLowerCase()
       .includes(searchQuery.toLowerCase());
     const matchesTime =
       activeButton === "All" || item.timeText === activeButton;
     return matchesSearch && matchesTime;
   });
  
  return (
    <section className="freedelivery_container">
      <div className="freedelivery-frame">
        <p className="freedelivery_title">{FreeDeliveryData[0].title}</p>
        <div className="freedelivery-cards">
          {filteredItems.map((item) => {
            // Destructure the Icon components from the item
            const FavoriteIcon = item.favoriteIcon;
            const StarIcon = item.starIcon;
            const TimeIcon = item.timeIcon;
            const PrizeIcon = item.prizeIcon;
            return (
              <Link
                href={`/food/${item.id}`}
                key={item.id}
                className="freedelivery-card"
              >
                <div className="freedelivery-card_food-img">
                  <img
                    src={item.img}
                    alt={item.smallTitle}
                    className="freedelivery-card_img"
                  />
                  <div className="freedelivery-card_img-iconcontainer">
                    <FavoriteIcon className="freedelivery-card_img-icon" />
                  </div>
                </div>
                <div className="freedelivery-card_content">
                  <div className="freedelivery-card_context">
                    <div className="freedelivery-card_context-top">
                      <small className="freedelivery-card_title">
                        {item.smallTitle}
                      </small>
                      <div className="freedelivery-card_dot"></div>
                      <StarIcon className="freedelivery-card_star" />
                      <small className="freedelivery-card_rating">
                        {item.rating}
                      </small>
                    </div>
                    <div className="freedelivery-card_timer">
                      <TimeIcon className="freedelivery-card_timer-icon" />
                      <div className="freedelivery-card_timer-text">
                        {item.timeText}
                      </div>
                    </div>
                  </div>
                  <small className="freedelivery-card_remender">
                    {item.remenderText}
                  </small>
                  <div className="freedelivery-card_prize">
                    <p className="freedelivery-card_prize-text">
                      {item.prizeText}
                    </p>
                    <Link
                      href={item.prizeLink}
                      className="freedelivery-card_prize-link"
                    >
                      <PrizeIcon className="freedelivery-card_prize-icon" />
                    </Link>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FreeDelivery;
