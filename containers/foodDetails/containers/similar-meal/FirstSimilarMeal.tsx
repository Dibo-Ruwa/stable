import React from "react";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { useRouter } from "next/navigation";

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

export const FirstSimilarMeal: React.FC<FirstSimilarMealProps> = ({ id }) => {
  const router = useRouter();
  
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
              <div
                style={{
                  scrollSnapAlign: 'center', // Corrected property name
                  boxSizing: 'border-box',
                  backgroundColor: '#fff',
                  overflowX: 'hidden',
                  borderRadius: '16px',
                  textDecoration: 'none',
                  cursor: 'pointer', // Added cursor pointer
                }}
                onClick={() => router.push(`/food/${item.id}`)}
                key={item.id}
              >
                <div style={{position: 'relative'}}>
                  <MostSoldCardLinkDiv  key={item.id}>
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
                        cursor: 'pointer', // Added cursor pointer
                      }}
                      size={40}
                    />
                  </div>
                </div>
                <MostSoldCardContent>
                  <MostSoldCardContext>
                    <div className="title_dot_starIconText">
                      <MostSoldCardTitle>{item.smallTitle}</MostSoldCardTitle>
                      <MostSoldCardDot />
                      <StarIcon className="star_Icon" />
                      <small>{item.rating}</small>
                    </div>
                    <div className="Time_IconText">
                      <TimeIcon />
                      <div>{item.timeText}</div>
                    </div>
                  </MostSoldCardContext>
                  <MostSoldCardPrize>
                    <MostSoldCardPrizeText>{item.prizeText}</MostSoldCardPrizeText>
                    <MostSoldCardReminder>{item.remenderText}</MostSoldCardReminder>
                    <MostSoldCardPrizeLink >
                      <PrizeIcon />
                    </MostSoldCardPrizeLink>
                  </MostSoldCardPrize>
                </MostSoldCardContent>
              </div>
            );
          })}
        </MostSoldCards>
        {/* <SaleImgsContainer>
          {FoodDiscountSale.map((item, index) => (
            <div key={index}>
              <MostSoldSaleImg src={item.img} alt={item.alt} />
            </div>
          ))}
        </SaleImgsContainer> */}
      </MostSoldFrame>
    </MostSoldContainer>
  );
};
