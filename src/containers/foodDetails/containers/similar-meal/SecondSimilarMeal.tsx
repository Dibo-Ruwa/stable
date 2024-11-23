import React from "react";
import Link from "next/link";
import { FoodDiscountSale, FirstSimilarMealData } from "@/constants/index";
import styles from "./similar-meal.module.css";


export const SecondSimilarMeal: React.FC = () => {
  return (
    <section className={styles.MostSoldContainer}>
      <div className={styles.MostSoldFrame}>
        <p className={styles.MostSoldTitle}>{FirstSimilarMealData[0].title}</p>
        <div className={styles.MostSoldCards}>
          {FirstSimilarMealData[0].items.map((item) => {
            const FavoriteIcon = item.favoriteIcon;
            const StarIcon = item.starIcon;
            const TimeIcon = item.timeIcon;
            const PrizeIcon = item.prizeIcon;
            return (
              <div key={item.id} className={styles.MostSoldCard}>
                <div className="relative">
                  <Link
                    href={`/food/${item.id}`}
                    key={item.id}
                    className={styles.MostSoldCardLinkDiv}
                  >
                    <img
                      src={item.img}
                      alt={item.smallTitle}
                      className={styles.MostSoldCardImg}
                    />
                  </Link>
                  <div>
                    <FavoriteIcon className={styles.FavoriteIcon} size={40} />
                  </div>
                </div>
                <div className={styles.MostSoldCardContent}>
                  <div className={styles.MostSoldCardContext}>
                    <div>
                      <small className={styles.MostSoldCardTitle}>
                        {item.smallTitle}
                      </small>
                      <div className={styles.MostSoldCardDot}></div>
                      <StarIcon />
                      <small>{item.rating}</small>
                    </div>
                    <div>
                      <TimeIcon />
                      <div>{item.timeText}</div>
                    </div>
                  </div>
                  <div className={styles.MostSoldCardPrize}>
                    <p className={styles.MostSoldCardPrizeText}>
                      {item.prizeText}
                    </p>
                    <small className={styles.MostSoldCardReminder}>
                      {item.remenderText}
                    </small>
                    <a
                      href={item.prizeLink}
                      className={styles.MostSoldCardPrizeLink}
                    >
                      <PrizeIcon />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.SaleImgsContainer}>
          {FoodDiscountSale.map((item, index) => (
            <div key={index}>
              <img
                src={item.img}
                alt={item.alt}
                className={styles.MostSoldSaleImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

;
