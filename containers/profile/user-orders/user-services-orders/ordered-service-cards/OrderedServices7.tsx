"use client";
import React from "react";

import { UserOrdersCard } from "../../UserOrdersCard";
import { ViewMoreBtn } from "../../ViewMoreBtn";
import { OrderedServicesData7, OrderedServicesDataType } from "@/constants/index";

export const OrderedServices7 = () => {
  return (
    <div className="user_cards_container">
      {OrderedServicesData7.map((orderedService: OrderedServicesDataType) => {
        if (orderedService.foodTitle) {
          // Food card
          return (
            <div
              className={`user_cards Service_food_card`}
              key={orderedService._id}
            >
              <UserOrdersCard className="user_card">
                <div className="card_image">
                  <img
                    src={orderedService.foodImg}
                    alt="card image"
                    className="card_img"
                  />
                </div>
                <div className="card_content">
                  <div className="card_foodAndRating">
                    <div className="card_food_quatity">
                      <p className="card_food_name">
                        {orderedService.foodTitle}
                      </p>
                      <p className="card_food_quatityNum">
                        {orderedService.foodAmount}
                      </p>
                    </div>
                    <div className="card_rating">
                      <p className="card_rating_num">
                        {orderedService.ratingIcon
                          ? React.createElement(orderedService.ratingIcon, {
                              className: "rating_icon",
                            })
                          : null}
                      </p>
                      <p className="card_rating_num">
                        {orderedService.ratingNum}
                      </p>
                    </div>
                  </div>
                  <div className="card_time_content">
                    <p className="card_time">
                      {orderedService.timmIcon
                        ? React.createElement(orderedService.timmIcon, {
                            className: "rating_icon",
                          })
                        : null}
                    </p>
                    <p className="card_time">{orderedService.timeText}</p>
                  </div>
                  <div className="card_offer_money">
                    <small className="card_offer_text">
                      {orderedService.deliveryText}
                    </small>
                    <div className="card_offer_dot"></div>
                    <p className="card_offer_amount">
                      {orderedService.amountInUsd}
                    </p>
                  </div>
                </div>
              </UserOrdersCard>
            </div>
          );
        } else if (orderedService.restaurantTitle) {
          // Restaurant card
          return (
            <div
              className={`user_cards Service_restaurant_card`}
              key={orderedService._id}
            >
              <UserOrdersCard className="user_card">
                <div className="card_image">
                  <img
                    src={orderedService.restaurantImg}
                    alt="card image"
                    className="card_img"
                  />
                </div>
                <div className="card_restcontent">
                  <p className="restaurant_name">
                    {orderedService.restaurantTitle}
                  </p>
                  <div className="rating_and_phone">
                    <div className="The_rating">
                      {orderedService.restaurantRatingIcon
                        ? React.createElement(
                            orderedService.restaurantRatingIcon,
                            { className: "rating_icon" }
                          )
                        : null}
                      <div className="rating_num">
                        {orderedService.restaurantRatingNum}
                      </div>
                    </div>
                    <div className="rest_dot"></div>
                    <div className="telephone_div">
                      {orderedService.restPhoneIcon
                        ? React.createElement(orderedService.restPhoneIcon, {
                            className: "rating_icon",
                          })
                        : null}
                      <div className="tel_text">
                        {orderedService.restaurantPhoneNum}
                      </div>
                    </div>
                  </div>
                </div>
              </UserOrdersCard>
            </div>
          );
        } else {
          // Owner card
          return (
            <div
              className={`user_cards Service_owner_card`}
              key={orderedService._id}
            >
              <UserOrdersCard className="user_card">
                <div className="owner_card_image">
                  <img
                    src={orderedService.ownerImg}
                    alt="card image"
                    className="owner_card_img"
                  />
                </div>
                <div className="card_ownercontent">
                  <p className="owner_name">{orderedService.ownerName}</p>
                  <div className="owner_phone">
                    <div className="telephone_div">
                      {orderedService.ownerPhoneIcon
                        ? React.createElement(orderedService.ownerPhoneIcon, {
                            className: "rating_icon",
                          })
                        : null}
                      <div className="tel_text">
                        {orderedService.ownersPhoneNum}
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
  );
};
