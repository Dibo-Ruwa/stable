
import React from "react";
import {
  RestDiscountSale,
  MobileRestaurantFood,
  MobileRestaurantFoodType,
  RestaurantFood,
} from "@/constants";
import "./restaurant-meal.css";
import Link from "next/link";

const MobileRestaurantMeal = () => {
  return (
    <div className="Mobile_RestaurantMeal_container">
      <p className="Mobile_RestaurantMeal_title">All Meals</p>

      <div className="Mobile_RestaurantMeal_cards">
        {MobileRestaurantFood.map((item: MobileRestaurantFoodType) => (
          <div key={item.id} className="Mobile_RestaurantMeal_card">
            <div className="Mobile_RestaurantMeal_FavANDImage">
              <img
                src={item.img}
                alt=""
                className="Mobile_RestaurantMeal_Image"
              />
              <div className="Mobile_RestaurantMeal_Fav">
                <item.favoriteIcon className="Mobile_RestaurantMeal_FavIcon" />
              </div>
            </div>
            <div className="Mobile_RestaurantMeal_details">
              <div className="Mobile_RestaurantMeal_NRT">
                <div className="Mobile_RestaurantMeal_Name_Rating">
                  <p className="Mobile_RestaurantMeal_N">{item.smallTitle}</p>
                  <div className="Mobile_RestaurantMeal_Dot"></div>
                  <div className="Mobile_RestaurantMeal_R">
                    <item.starIcon className="Mobile_RestaurantMeal_R_Icon" />
                    <p className="Mobile_RestaurantMeal_R_Num">{item.rating}</p>
                  </div>
                </div>
                <div className="Mobile_RestaurantMeal_T">
                  <item.timeIcon className="Mobile_RestaurantMeal_T_Icon" />
                  <p className="Mobile_RestaurantMeal_T_Time">
                    {item.timeText}
                  </p>
                </div>
              </div>
              <p className="Mobile_RestaurantMeal_Liters">
                {item.remenderText}
              </p>
              <div className="Mobile_RestaurantMeal_amount_and_cart">
                <div className="Mobile_RestaurantMeal_amount">
                  <p className="Mobile_RestaurantMeal_realAmount">
                    {item.prizeText}
                  </p>
                  <p className="Mobile_RestaurantMeal_discountAmount">
                    $30,000
                  </p>
                </div>
                <Link
                  href={item.prizeLink}
                  className="Mobile_RestaurantMeal_cart"
                >
                  <item.prizeIcon className="Mobile_RestaurantMeal_cart_Icon" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

interface RestaurantProteinProps {
  selectedTime: string;
  searchQuery: string;
}

export const RestaurantProtein: React.FC<RestaurantProteinProps> = ({
  selectedTime,
  searchQuery,
}) => {
  const filteredFood = RestaurantFood.filter((item) => {
    const matchesTime =
      selectedTime === "All" ||
      item.timeText.toLowerCase() === selectedTime.toLowerCase();
    const matchesSearch = item.smallTitle
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesTime && matchesSearch;
  });

  console.log("Selected Time:", selectedTime);
  console.log("Restaurant Food:", RestaurantFood);

  return (
    <div className="RestaurantMeal_container">
      <div className="RestaurantMeal_Frame">
        <div className="RestaurantMeal_cards">
          {filteredFood.map((item: MobileRestaurantFoodType) => (
            <Link
              href={`/food/${item.id}`}
              key={item.id}
              className="RestaurantMeal_card"
            >
              <div className="RestaurantMeal_FavANDImage">
                <img src={item.img} alt="" className="RestaurantMeal_Image" />
                <div className="RestaurantMeal_Fav">
                  <item.favoriteIcon className="RestaurantMeal_FavIcon" />
                </div>
              </div>
              <div className="RestaurantMeal_details">
                <div className="RestaurantMeal_NRT">
                  <div className="RestaurantMeal_Name_Rating">
                    <p className="RestaurantMeal_N">{item.smallTitle}</p>
                    <div className="RestaurantMeal_Dot"></div>
                    <div className="RestaurantMeal_R">
                      <item.starIcon className="RestaurantMeal_R_Icon" />
                      <p className="RestaurantMeal_R_Num">{item.rating}</p>
                    </div>
                  </div>
                  <div className="RestaurantMeal_T">
                    <item.timeIcon className="RestaurantMeal_T_Icon" />
                    <p className="RestaurantMeal_T_Time">{item.timeText}</p>
                  </div>
                </div>
                <p className="RestaurantMeal_Liters">{item.remenderText}</p>
                <div className="RestaurantMeal_amount_and_cart">
                  <div className="RestaurantMeal_amount">
                    <p className="RestaurantMeal_realAmount">
                      {item.prizeText}
                    </p>
                  </div>
                  <Link href={item.prizeLink} className="RestaurantMeal_cart">
                    <item.prizeIcon className="RestaurantMeal_cart_Icon" />
                  </Link>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="Restsale-imgs-container">
          {RestDiscountSale.map((item, index) => (
            <div className="Restsale-imgs" key={index}>
              <img
                src={item.img}
                alt={item.alt}
                className="Restmostsold-sale_img"
              />
            </div>
          ))}
        </div>

        <div className="RestaurantMeal_cards">
          {filteredFood.map((item: MobileRestaurantFoodType) => (
            <Link
              href={`/food/${item.id}`}
              key={item.id}
              className="RestaurantMeal_card"
            >
              <div className="RestaurantMeal_FavANDImage">
                <img src={item.img} alt="" className="RestaurantMeal_Image" />
                <div className="RestaurantMeal_Fav">
                  <item.favoriteIcon className="RestaurantMeal_FavIcon" />
                </div>
              </div>
              <div className="RestaurantMeal_details">
                <div className="RestaurantMeal_NRT">
                  <div className="RestaurantMeal_Name_Rating">
                    <p className="RestaurantMeal_N">{item.smallTitle}</p>
                    <div className="RestaurantMeal_Dot"></div>
                    <div className="RestaurantMeal_R">
                      <item.starIcon className="RestaurantMeal_R_Icon" />
                      <p className="RestaurantMeal_R_Num">{item.rating}</p>
                    </div>
                  </div>
                  <div className="RestaurantMeal_T">
                    <item.timeIcon className="RestaurantMeal_T_Icon" />
                    <p className="RestaurantMeal_T_Time">{item.timeText}</p>
                  </div>
                </div>
                <p className="RestaurantMeal_Liters">{item.remenderText}</p>
                <div className="RestaurantMeal_amount_and_cart">
                  <div className="RestaurantMeal_amount">
                    <p className="RestaurantMeal_realAmount">
                      {item.prizeText}
                    </p>
                  </div>
                  <Link href={item.prizeLink} className="RestaurantMeal_cart">
                    <item.prizeIcon className="RestaurantMeal_cart_Icon" />
                  </Link>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="RestaurantMeal_cards">
          {filteredFood.map((item: MobileRestaurantFoodType) => (
            <Link
              href={`/food/${item.id}`}
              key={item.id}
              className="RestaurantMeal_card"
            >
              <div className="RestaurantMeal_FavANDImage">
                <img src={item.img} alt="" className="RestaurantMeal_Image" />
                <div className="RestaurantMeal_Fav">
                  <item.favoriteIcon className="RestaurantMeal_FavIcon" />
                </div>
              </div>
              <div className="RestaurantMeal_details">
                <div className="RestaurantMeal_NRT">
                  <div className="RestaurantMeal_Name_Rating">
                    <p className="RestaurantMeal_N">{item.smallTitle}</p>
                    <div className="RestaurantMeal_Dot"></div>
                    <div className="RestaurantMeal_R">
                      <item.starIcon className="RestaurantMeal_R_Icon" />
                      <p className="RestaurantMeal_R_Num">{item.rating}</p>
                    </div>
                  </div>
                  <div className="RestaurantMeal_T">
                    <item.timeIcon className="RestaurantMeal_T_Icon" />
                    <p className="RestaurantMeal_T_Time">{item.timeText}</p>
                  </div>
                </div>
                <p className="RestaurantMeal_Liters">{item.remenderText}</p>
                <div className="RestaurantMeal_amount_and_cart">
                  <div className="RestaurantMeal_amount">
                    <p className="RestaurantMeal_realAmount">
                      {item.prizeText}
                    </p>
                  </div>
                  <Link href={item.prizeLink} className="RestaurantMeal_cart">
                    <item.prizeIcon className="RestaurantMeal_cart_Icon" />
                  </Link>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="Restsale-imgs-container">
          {RestDiscountSale.map((item, index) => (
            <div className="Restsale-imgs" key={index}>
              <img
                src={item.img}
                alt={item.alt}
                className="Restmostsold-sale_img"
              />
            </div>
          ))}
        </div>
      </div>

      <MobileRestaurantMeal />
    </div>
  );
};
