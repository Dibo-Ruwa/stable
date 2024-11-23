import Link from "next/link";
import React from "react";
import "./favorite-card.css";

import { FavouriteFoodData, FavouriteFoodDataType } from "@/constants/index";

export const FavoriteCard: React.FC = () => {
  return (
    <div className="favorite_container">
      <p className="favourite_title">Favourite</p>
      <hr className="favourite_divider" />
      <div className="favourite_cards">
        {FavouriteFoodData.map((favFood: FavouriteFoodDataType, index) => (
          <div key={index} className="favourite_card">
            <div className="favourite_icon_and_img">
              <div className="favourite_icon">
                <favFood.favIcon className="fav_icon" />
              </div>
              <div className="favourite_img">
                <img
                  src={favFood.image}
                  className="fav_img"
                  alt={`${favFood.favFoodName} image`}
                />
              </div>
            </div>
            <div className="favourite_food_details">
              <div className="fav_foodName_and_rating">
                <p className="favourite_food_title">{favFood.favFoodName}</p>
                <div className="favourite_food_dot"></div>
                <favFood.favStar className="favourite_food_rating_star" />
                <p className="favourite_food_rating_num">
                  {favFood.favRateNum}
                </p>
              </div>

              <div className="favourite_food_time">
                <favFood.favTimeIcon className="favourite_food_time_icon" />
                <p className="favourite_food_time_text">{favFood.favTime}</p>
              </div>
            </div>
            <div className="favourite_food_CLC_btn">
              <p className="favourite_food_CLC_text">{favFood.favMoney}</p>
              <small className="favourite_food_CLC_small_text">
                {favFood.literAmount}
              </small>
              <Link href="/cart" className="favourite_food_CLC_cart">
                <favFood.favCartIcon />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
