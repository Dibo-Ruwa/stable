import React from "react";
import { UserOrdersCard } from "../UserOrdersCard";
import { ViewMoreBtn } from "../ViewMoreBtn";
import "./user-food-orders.css";
import { FoodOrdered1, OrderedFoodDataType } from "@/constants/index";

interface UserOrdersCardProps {
  className?: string;
  children: React.ReactNode;
}

export const UserFoodOrders: React.FC = () => {
  return (
      <div className="user_card_overflow">
      <div className="user_cards_container">
        {FoodOrdered1.map((orderedFood: OrderedFoodDataType) => {
          if (orderedFood.foodTitle) {
            // Food card
            return (
              <div className={`user_cards food_card`} key={orderedFood._id}>
                <UserOrdersCard className="user_card">
                  <div className="card_image">
                    <img
                      src={orderedFood.foodImg}
                      alt="card image"
                      className="card_img"
                    />
                  </div>
                  <div className="card_content">
                    <div className="card_foodAndRating">
                      <div className="card_food_quatity">
                        <p className="card_food_name">
                          {orderedFood.foodTitle}
                        </p>
                        <p className="card_food_quatityNum">
                          {orderedFood.foodAmount}
                        </p>
                      </div>
                      <div className="card_rating">
                        <p className="card_rating_num">
                          {orderedFood.ratingIcon
                            ? React.createElement(orderedFood.ratingIcon, {})
                            : null}
                        </p>
                        <p className="card_rating_num">
                          {orderedFood.ratingNum}
                        </p>
                      </div>
                    </div>
                    <div className="card_time_content">
                      <p className="card_time">
                        {orderedFood.timmIcon
                          ? React.createElement(orderedFood.timmIcon, {})
                          : null}
                      </p>
                      <p className="card_time">{orderedFood.timeText}</p>
                    </div>
                    <div className="card_offer_money">
                      <small className="card_offer_text">
                        {orderedFood.deliveryText}
                      </small>
                      <div className="card_offer_dot"></div>
                      <p className="card_offer_amount">
                        {orderedFood.amountInUsd}
                      </p>
                    </div>
                  </div>
                </UserOrdersCard>
              </div>
            );
          } else {
            // Restaurant card
            return (
              <div
                className={`user_cards restaurant_card`}
                key={orderedFood._id}
              >
                <UserOrdersCard className="user_card">
                  <div className="card_image">
                    <img
                      src={orderedFood.restaurantImg}
                      alt="card image"
                      className="card_img"
                    />
                  </div>
                  <div className="card_restcontent">
                    <p className="restaurant_name">
                      {orderedFood.restaurantTitle}
                    </p>
                    <div className="rating_and_phone">
                      <div className="The_rating">
                        {orderedFood.restaurantRatingIcon
                          ? React.createElement(
                              orderedFood.restaurantRatingIcon,
                              { className: "ratingStar_icon" }
                            )
                          : null}
                        <div className="rating_num">
                          {orderedFood.restaurantRatingNum}
                        </div>
                      </div>
                      <div className="rest_dot"></div>
                      <div className="telephone_div">
                        {orderedFood.restPhoneIcon
                          ? React.createElement(orderedFood.restPhoneIcon, {
                              className: "card_phone_icon",
                            })
                          : null}
                        <div className="tel_text">
                          {orderedFood.restaurantPhoneNum}
                        </div>
                      </div>
                    </div>
                  </div>
                </UserOrdersCard>
              </div>
            );
          }
        })}
        <ViewMoreBtn />
      </div>
      <div className="user_cards_container">
        {FoodOrdered1.map((orderedFood: OrderedFoodDataType) => {
          if (orderedFood.foodTitle) {
            // Food card
            return (
              <div  className={`user_cards food_card`} key={orderedFood._id}>
                <UserOrdersCard className="user_card">
                  <div className="card_image">
                    <img
                      src={orderedFood.foodImg}
                      alt="card image"
                      className="card_img"
                    />
                  </div>
                  <div className="card_content">
                    <div className="card_foodAndRating">
                      <div className="card_food_quatity">
                        <p className="card_food_name">
                          {orderedFood.foodTitle}
                        </p>
                        <p className="card_food_quatityNum">
                          {orderedFood.foodAmount}
                        </p>
                      </div>
                      <div className="card_rating">
                        <p className="card_rating_num">
                          {orderedFood.ratingIcon
                            ? React.createElement(orderedFood.ratingIcon, {})
                            : null}
                        </p>
                        <p className="card_rating_num">
                          {orderedFood.ratingNum}
                        </p>
                      </div>
                    </div>
                    <div className="card_time_content">
                      <p className="card_time">
                        {orderedFood.timmIcon
                          ? React.createElement(orderedFood.timmIcon, {})
                          : null}
                      </p>
                      <p className="card_time">{orderedFood.timeText}</p>
                    </div>
                    <div className="card_offer_money">
                      <small className="card_offer_text">
                        {orderedFood.deliveryText}
                      </small>
                      <div className="card_offer_dot"></div>
                      <p className="card_offer_amount">
                        {orderedFood.amountInUsd}
                      </p>
                    </div>
                  </div>
                </UserOrdersCard>
              </div>
            );
          } else {
            // Restaurant card
            return (
              <div
                className={`user_cards restaurant_card`}
                key={orderedFood._id}
              >
                <UserOrdersCard className="user_card">
                  <div className="card_image">
                    <img
                      src={orderedFood.restaurantImg}
                      alt="card image"
                      className="card_img"
                    />
                  </div>
                  <div className="card_restcontent">
                    <p className="restaurant_name">
                      {orderedFood.restaurantTitle}
                    </p>
                    <div className="rating_and_phone">
                      <div className="The_rating">
                        {orderedFood.restaurantRatingIcon
                          ? React.createElement(
                              orderedFood.restaurantRatingIcon,
                              { className: "ratingStar_icon" }
                            )
                          : null}
                        <div className="rating_num">
                          {orderedFood.restaurantRatingNum}
                        </div>
                      </div>
                      <div className="rest_dot"></div>
                      <div className="telephone_div">
                        {orderedFood.restPhoneIcon
                          ? React.createElement(orderedFood.restPhoneIcon, {
                              className: "card_phone_icon",
                            })
                          : null}
                        <div className="tel_text">
                          {orderedFood.restaurantPhoneNum}
                        </div>
                      </div>
                    </div>
                  </div>
                </UserOrdersCard>
              </div>
            );
          }
        })}
        <ViewMoreBtn />
      </div>
      <div className="user_cards_container">
        {FoodOrdered1.map((orderedFood: OrderedFoodDataType) => {
          if (orderedFood.foodTitle) {
            // Food card
            return (
              <div
                className={`user_cards food_card`}
                key={orderedFood._id}
              >
                <UserOrdersCard className="user_card">
                  <div className="card_image">
                    <img
                      src={orderedFood.foodImg}
                      alt="card image"
                      className="card_img"
                    />
                  </div>
                  <div className="card_content">
                    <div className="card_foodAndRating">
                      <div className="card_food_quatity">
                        <p className="card_food_name">
                          {orderedFood.foodTitle}
                        </p>
                        <p className="card_food_quatityNum">
                          {orderedFood.foodAmount}
                        </p>
                      </div>
                      <div className="card_rating">
                        <p className="card_rating_num">
                          {orderedFood.ratingIcon
                            ? React.createElement(orderedFood.ratingIcon, {})
                            : null}
                        </p>
                        <p className="card_rating_num">
                          {orderedFood.ratingNum}
                        </p>
                      </div>
                    </div>
                    <div className="card_time_content">
                      <p className="card_time">
                        {orderedFood.timmIcon
                          ? React.createElement(orderedFood.timmIcon, {})
                          : null}
                      </p>
                      <p className="card_time">{orderedFood.timeText}</p>
                    </div>
                    <div className="card_offer_money">
                      <small className="card_offer_text">
                        {orderedFood.deliveryText}
                      </small>
                      <div className="card_offer_dot"></div>
                      <p className="card_offer_amount">
                        {orderedFood.amountInUsd}
                      </p>
                    </div>
                  </div>
                </UserOrdersCard>
              </div>
            );
          } else {
            // Restaurant card
            return (
              <div
                className={`user_cards restaurant_card`}
                key={orderedFood._id}
              >
                <UserOrdersCard className="user_card">
                  <div className="card_image">
                    <img
                      src={orderedFood.restaurantImg}
                      alt="card image"
                      className="card_img"
                    />
                  </div>
                  <div className="card_restcontent">
                    <p className="restaurant_name">
                      {orderedFood.restaurantTitle}
                    </p>
                    <div className="rating_and_phone">
                      <div className="The_rating">
                        {orderedFood.restaurantRatingIcon
                          ? React.createElement(
                              orderedFood.restaurantRatingIcon,
                              { className: "ratingStar_icon" }
                            )
                          : null}
                        <div className="rating_num">
                          {orderedFood.restaurantRatingNum}
                        </div>
                      </div>
                      <div className="rest_dot"></div>
                      <div className="telephone_div">
                        {orderedFood.restPhoneIcon
                          ? React.createElement(orderedFood.restPhoneIcon, {
                              className: "card_phone_icon",
                            })
                          : null}
                        <div className="tel_text">
                          {orderedFood.restaurantPhoneNum}
                        </div>
                      </div>
                    </div>
                  </div>
                </UserOrdersCard>
              </div>
            );
          }
        })}
        <ViewMoreBtn />
      </div>
      <div className="user_cards_container">
        {FoodOrdered1.map((orderedFood: OrderedFoodDataType) => {
          if (orderedFood.foodTitle) {
            // Food card
            return (
              <div
                className={`user_cards food_card`}
                key={orderedFood._id}
              >
                <UserOrdersCard className="user_card">
                  <div className="card_image">
                    <img
                      src={orderedFood.foodImg}
                      alt="card image"
                      className="card_img"
                    />
                  </div>
                  <div className="card_content">
                    <div className="card_foodAndRating">
                      <div className="card_food_quatity">
                        <p className="card_food_name">
                          {orderedFood.foodTitle}
                        </p>
                        <p className="card_food_quatityNum">
                          {orderedFood.foodAmount}
                        </p>
                      </div>
                      <div className="card_rating">
                        <p className="card_rating_num">
                          {orderedFood.ratingIcon
                            ? React.createElement(orderedFood.ratingIcon, {})
                            : null}
                        </p>
                        <p className="card_rating_num">
                          {orderedFood.ratingNum}
                        </p>
                      </div>
                    </div>
                    <div className="card_time_content">
                      <p className="card_time">
                        {orderedFood.timmIcon
                          ? React.createElement(orderedFood.timmIcon, {})
                          : null}
                      </p>
                      <p className="card_time">{orderedFood.timeText}</p>
                    </div>
                    <div className="card_offer_money">
                      <small className="card_offer_text">
                        {orderedFood.deliveryText}
                      </small>
                      <div className="card_offer_dot"></div>
                      <p className="card_offer_amount">
                        {orderedFood.amountInUsd}
                      </p>
                    </div>
                  </div>
                </UserOrdersCard>
              </div>
            );
          } else {
            // Restaurant card
            return (
              <div
                className={`user_cards restaurant_card`}
                key={orderedFood._id}
              >
                <UserOrdersCard className="user_card">
                  <div className="card_image">
                    <img
                      src={orderedFood.restaurantImg}
                      alt="card image"
                      className="card_img"
                    />
                  </div>
                  <div className="card_restcontent">
                    <p className="restaurant_name">
                      {orderedFood.restaurantTitle}
                    </p>
                    <div className="rating_and_phone">
                      <div className="The_rating">
                        {orderedFood.restaurantRatingIcon
                          ? React.createElement(
                              orderedFood.restaurantRatingIcon,
                              { className: "ratingStar_icon" }
                            )
                          : null}
                        <div className="rating_num">
                          {orderedFood.restaurantRatingNum}
                        </div>
                      </div>
                      <div className="rest_dot"></div>
                      <div className="telephone_div">
                        {orderedFood.restPhoneIcon
                          ? React.createElement(orderedFood.restPhoneIcon, {
                              className: "card_phone_icon",
                            })
                          : null}
                        <div className="tel_text">
                          {orderedFood.restaurantPhoneNum}
                        </div>
                      </div>
                    </div>
                  </div>
                </UserOrdersCard>
              </div>
            );
          }
        })}
        <ViewMoreBtn />
      </div>
      <div className="user_cards_container">
        {FoodOrdered1.map((orderedFood: OrderedFoodDataType) => {
          if (orderedFood.foodTitle) {
            // Food card
            return (
              <div
                className={`user_cards food_card`}
                key={orderedFood._id}
              >
                <UserOrdersCard className="user_card">
                  <div className="card_image">
                    <img
                      src={orderedFood.foodImg}
                      alt="card image"
                      className="card_img"
                    />
                  </div>
                  <div className="card_content">
                    <div className="card_foodAndRating">
                      <div className="card_food_quatity">
                        <p className="card_food_name">
                          {orderedFood.foodTitle}
                        </p>
                        <p className="card_food_quatityNum">
                          {orderedFood.foodAmount}
                        </p>
                      </div>
                      <div className="card_rating">
                        <p className="card_rating_num">
                          {orderedFood.ratingIcon
                            ? React.createElement(orderedFood.ratingIcon, {})
                            : null}
                        </p>
                        <p className="card_rating_num">
                          {orderedFood.ratingNum}
                        </p>
                      </div>
                    </div>
                    <div className="card_time_content">
                      <p className="card_time">
                        {orderedFood.timmIcon
                          ? React.createElement(orderedFood.timmIcon, {})
                          : null}
                      </p>
                      <p className="card_time">{orderedFood.timeText}</p>
                    </div>
                    <div className="card_offer_money">
                      <small className="card_offer_text">
                        {orderedFood.deliveryText}
                      </small>
                      <div className="card_offer_dot"></div>
                      <p className="card_offer_amount">
                        {orderedFood.amountInUsd}
                      </p>
                    </div>
                  </div>
                </UserOrdersCard>
              </div>
            );
          } else {
            // Restaurant card
            return (
              <div
                className={`user_cards restaurant_card`}
                key={orderedFood._id}
              >
                <UserOrdersCard className="user_card">
                  <div className="card_image">
                    <img
                      src={orderedFood.restaurantImg}
                      alt="card image"
                      className="card_img"
                    />
                  </div>
                  <div className="card_restcontent">
                    <p className="restaurant_name">
                      {orderedFood.restaurantTitle}
                    </p>
                    <div className="rating_and_phone">
                      <div className="The_rating">
                        {orderedFood.restaurantRatingIcon
                          ? React.createElement(
                              orderedFood.restaurantRatingIcon,
                              { className: "ratingStar_icon" }
                            )
                          : null}
                        <div className="rating_num">
                          {orderedFood.restaurantRatingNum}
                        </div>
                      </div>
                      <div className="rest_dot"></div>
                      <div className="telephone_div">
                        {orderedFood.restPhoneIcon
                          ? React.createElement(orderedFood.restPhoneIcon, {
                              className: "card_phone_icon",
                            })
                          : null}
                        <div className="tel_text">
                          {orderedFood.restaurantPhoneNum}
                        </div>
                      </div>
                    </div>
                  </div>
                </UserOrdersCard>
              </div>
            );
          }
        })}
        <ViewMoreBtn />
      </div>
      <div className="user_cards_container">
        {FoodOrdered1.map((orderedFood: OrderedFoodDataType) => {
          if (orderedFood.foodTitle) {
            // Food card
            return (
              <div
                className={`user_cards food_card`}
                key={orderedFood._id}
              >
                <UserOrdersCard className="user_card">
                  <div className="card_image">
                    <img
                      src={orderedFood.foodImg}
                      alt="card image"
                      className="card_img"
                    />
                  </div>
                  <div className="card_content">
                    <div className="card_foodAndRating">
                      <div className="card_food_quatity">
                        <p className="card_food_name">
                          {orderedFood.foodTitle}
                        </p>
                        <p className="card_food_quatityNum">
                          {orderedFood.foodAmount}
                        </p>
                      </div>
                      <div className="card_rating">
                        <p className="card_rating_num">
                          {orderedFood.ratingIcon
                            ? React.createElement(orderedFood.ratingIcon, {})
                            : null}
                        </p>
                        <p className="card_rating_num">
                          {orderedFood.ratingNum}
                        </p>
                      </div>
                    </div>
                    <div className="card_time_content">
                      <p className="card_time">
                        {orderedFood.timmIcon
                          ? React.createElement(orderedFood.timmIcon, {})
                          : null}
                      </p>
                      <p className="card_time">{orderedFood.timeText}</p>
                    </div>
                    <div className="card_offer_money">
                      <small className="card_offer_text">
                        {orderedFood.deliveryText}
                      </small>
                      <div className="card_offer_dot"></div>
                      <p className="card_offer_amount">
                        {orderedFood.amountInUsd}
                      </p>
                    </div>
                  </div>
                </UserOrdersCard>
              </div>
            );
          } else {
            // Restaurant card
            return (
              <div
                className={`user_cards restaurant_card`}
                key={orderedFood._id}
              >
                <UserOrdersCard className="user_card">
                  <div className="card_image">
                    <img
                      src={orderedFood.restaurantImg}
                      alt="card image"
                      className="card_img"
                    />
                  </div>
                  <div className="card_restcontent">
                    <p className="restaurant_name">
                      {orderedFood.restaurantTitle}
                    </p>
                    <div className="rating_and_phone">
                      <div className="The_rating">
                        {orderedFood.restaurantRatingIcon
                          ? React.createElement(
                              orderedFood.restaurantRatingIcon,
                              { className: "ratingStar_icon" }
                            )
                          : null}
                        <div className="rating_num">
                          {orderedFood.restaurantRatingNum}
                        </div>
                      </div>
                      <div className="rest_dot"></div>
                      <div className="telephone_div">
                        {orderedFood.restPhoneIcon
                          ? React.createElement(orderedFood.restPhoneIcon, {
                              className: "card_phone_icon",
                            })
                          : null}
                        <div className="tel_text">
                          {orderedFood.restaurantPhoneNum}
                        </div>
                      </div>
                    </div>
                  </div>
                </UserOrdersCard>
              </div>
            );
          }
        })}
        <ViewMoreBtn />
      </div>
      </div>
  );
};
