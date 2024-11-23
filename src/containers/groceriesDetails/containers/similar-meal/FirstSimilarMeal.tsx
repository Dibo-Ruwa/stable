import React from "react";
import Link from "next/link";
import { FoodDiscountSale, FirstSimilarMealData } from "@/constants/index";


export const FirstSimilarMeal: React.FC = () => {
  return (
    <section className="pb-12">
      <div className="w-full max-w-[1440px] mx-auto">
        <p className="text-ash-100 font-poppins text-[19.548px] font-normal mb-12">
          {FirstSimilarMealData[0].title}
        </p>
        <div className="grid grid-cols-3 gap-[30px] w-full overflow-x-auto scroll-snap-x mx-auto md:grid-cols-2 md:gap-5 sm:grid-cols-1 sm:gap-4">
          {FirstSimilarMealData[0].items.map((item) => {
            const FavoriteIcon = item.favoriteIcon;
            const StarIcon = item.starIcon;
            const TimeIcon = item.timeIcon;
            const PrizeIcon = item.prizeIcon;
            return (
              <div
                key={item.id}
                className="snap-center box-border bg-white overflow-hidden rounded-lg"
              >
                <div className="relative">
                  <Link
                    href={`/food/${item.id}`}
                    key={item.id}
                    className="w-full box-border bg-white overflow-hidden rounded-lg"
                  >
                    <img
                      src={item.img}
                      alt={item.smallTitle}
                      className="w-full h-[120px] object-cover rounded-xl md:h-[150px]"
                    />
                  </Link>
                  <div>
                    <FavoriteIcon
                      className="text-green-600 bg-white p-1.5 rounded-full absolute top-1 left-1"
                      size={40}
                    />
                  </div>
                </div>
                <div className="p-4 sm:p-3">
                  <div className="flex justify-between items-center mb-2">
                    <div>
                      <small className="text-black-100 font-poppins text-base font-normal sm:text-sm">
                        {item.smallTitle}
                      </small>
                      <div className="bg-green-600 w-2 h-2 rounded-full"></div>
                      <StarIcon />
                      <small>{item.rating}</small>
                    </div>
                    <div>
                      <TimeIcon />
                      <div>{item.timeText}</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-4 bg-gray-100 p-2 rounded-full">
                    <p className="text-soft-black font-poppins text-lg font-normal sm:text-base">
                      {item.prizeText}
                    </p>
                    <small className="text-green-600 font-poppins text-xs font-normal">
                      {item.remenderText}
                    </small>
                    <a
                      href={item.prizeLink}
                      className="inline-flex p-2 justify-center items-center gap-2 rounded-full bg-green-600 text-white"
                    >
                      <PrizeIcon />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex my-12 md:my-8 sm:my-6">
          {FoodDiscountSale.map((item, index) => (
            <div key={index}>
              <img
                src={item.img}
                alt={item.alt}
                className="w-full flex items-center"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
