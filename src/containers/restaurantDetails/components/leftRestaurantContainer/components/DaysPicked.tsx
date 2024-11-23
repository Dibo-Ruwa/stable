"use client";
import React from "react";
import "../LeftRestaurantContainer.css";

// Data for days, meals, plates, and delivery time
const daysData = [
  {
    day: "Monday",
    meal: "Jollof Rice",
    plates: 2,
    deliveryTime: "7pm",
  },
  {
    day: "Tuesday",
    meal: "Jollof Rice",
    plates: 2,
    deliveryTime: "7pm",
  },
  {
    day: "Wednesday",
    meal: "Jollof Rice",
    plates: 2,
    deliveryTime: "7pm",
  },
  // Add more days as needed
];

export const DaysPicked = () => {
  return (
    <>
      {daysData.map((dayData, index) => (
        <React.Fragment key={index}>
          <div className="DaysPicked_Card">
            <p className="DaysPicked_CardTitle">{dayData.day}</p>
            <div className="DaysPicked_CardItems">
              <div className="DaysPicked_CardItem">
                <p className="DaysPicked_CardItemText">Meal</p>
                <p className="DaysPicked_CardItemText2">{dayData.meal}</p>
              </div>
              <div className="DaysPicked_CardItem">
                <p className="DaysPicked_CardItemText">Plate(s)</p>
                <p className="DaysPicked_CardItemText2">{dayData.plates}</p>
              </div>
              <div className="DaysPicked_CardItem">
                <p className="DaysPicked_CardItemText">Delivery Time</p>
                <p className="DaysPicked_CardItemText2">
                  {dayData.deliveryTime}
                </p>
              </div>
            </div>
          </div>
          {index < daysData.length - 1 && (
            <hr className="DaysPicked_CardLine" />
          )}
        </React.Fragment>
      ))}
    </>
  );
};
