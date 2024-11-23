import React from "react";
import Link from "next/link";
import { MdOutlineFavoriteBorder } from "react-icons/md";

import { FoodDiscountSale, FirstSimilarMealData } from "@/constants/index";
import {
  MostSoldContainer,
  MostSoldFrame,
  MostSoldTitle,
  MostSoldCards,
  MostSoldCard,
  MostSoldCardLinkDiv,
  MostSoldCardImg,
  MostSoldCardContent,
  MostSoldCardContext,
  MostSoldCardTitle,
  MostSoldCardDot,
  MostSoldCardPrize,
  MostSoldCardPrizeText,
  MostSoldCardReminder,
  MostSoldCardPrizeLink,
  SaleImgsContainer,
  MostSoldSaleImg
} from "./similar-meal.module.styles";

interface FirstSimilarMealProps {
  id: string;
}

export const SecondSimilarMeal: React.FC<FirstSimilarMealProps> = ({ id }) => {
  return (
    <MostSoldContainer>
      <MostSoldFrame>
        <MostSoldTitle>{FirstSimilarMealData[0].title}</MostSoldTitle>
        <MostSoldCards>
          {FirstSimilarMealData[0].items.map((item) => {
            // Destructure the Icon components from the item
            const FavoriteIcon = item.favoriteIcon;
            const StarIcon = item.starIcon;
            const TimeIcon = item.timeIcon;
            const PrizeIcon = item.prizeIcon;
            return (
              <MostSoldCard key={item.id}>
                <div style={{position: 'relative'}}>
                  <MostSoldCardLinkDiv href={`/food/${item.id}`} key={item.id}>
                    <MostSoldCardImg
                      src={item.img}
                      alt={item.smallTitle}
                    />
                  </MostSoldCardLinkDiv>
                  <div>
                    <FavoriteIcon 
                      style={{
                        color: '#27A124',
                        background: 'white',
                        padding: '6px',
                        borderRadius: '100%',
                        position: 'absolute',
                        top: 4,
                        left: 3,
                      }}

                      size={40}
                    />
                  </div>
                </div>
                <MostSoldCardContent>
                  <MostSoldCardContext>
                    <div>
                      <MostSoldCardTitle>{item.smallTitle}</MostSoldCardTitle>
                      <MostSoldCardDot />
                      <StarIcon />
                      <small>{item.rating}</small>
                    </div>
                    <div>
                      <TimeIcon />
                      <div>{item.timeText}</div>
                    </div>
                  </MostSoldCardContext>
                  <MostSoldCardPrize>
                    <MostSoldCardPrizeText>{item.prizeText}</MostSoldCardPrizeText>
                    <MostSoldCardReminder>{item.remenderText}</MostSoldCardReminder>
                    <MostSoldCardPrizeLink href={item.prizeLink}>
                      <PrizeIcon />
                    </MostSoldCardPrizeLink>
                  </MostSoldCardPrize>
                </MostSoldCardContent>
              </MostSoldCard>
            );
          })}
        </MostSoldCards>
        <SaleImgsContainer>
          {FoodDiscountSale.map((item, index) => (
            <div key={index}>
              <MostSoldSaleImg src={item.img} alt={item.alt} />
            </div>
          ))}
        </SaleImgsContainer>
      </MostSoldFrame>
    </MostSoldContainer>
  );
};
