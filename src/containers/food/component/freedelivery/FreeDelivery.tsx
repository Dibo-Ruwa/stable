import React from "react";
import "./freedelivery.css";
import { FreeDeliveryData } from "@/constants/index";

const FreeDelivery: React.FC = () => {
  return (
    <section className="freedelivery_container">
      <div className="freedelivery-frame">
        <p className="freedelivery_title">{FreeDeliveryData[0].title}</p>
        <div className="freedelivery-cards">
          {FreeDeliveryData[0].items.map((item, index) => {
            // Destructure the Icon components from the item
            const FavoriteIcon = item.favoriteIcon;
            const StarIcon = item.starIcon;
            const TimeIcon = item.timeIcon;
            const PrizeIcon = item.prizeIcon;
            return (
              <div key={index} className="freedelivery-card">
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
                    <a
                      href={item.prizeLink}
                      className="freedelivery-card_prize-link"
                    >
                      <PrizeIcon className="freedelivery-card_prize-icon" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FreeDelivery;
