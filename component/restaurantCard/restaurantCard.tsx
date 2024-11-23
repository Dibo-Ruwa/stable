// RestaurantCard.tsx
import { Restaurant } from "@/constants";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import styled from "styled-components";

interface Props {
  restaurant: Restaurant;
}

const CardContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const BannerImageContainer = styled.div`
  width: 100%;
  max-height: 200px;
  position: relative;
`;
const BannerImage = styled(Image)`
  width: 100%;
  max-height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 20px;
  display: grid;
  gap: 7px;

  p {
    color: #808080;
    font-size: 14px;
    font-weight: 200px;
  }
`;

const RestaurantCard: React.FC<Props> = ({ restaurant }) => {
  const { name, location, chef, openingTime, menu, bannerURL } = restaurant;

  const router = useRouter()
  return (
    <CardContainer onClick={() => router.push(`/food/${restaurant.id}`)}>
      <BannerImageContainer>
        <BannerImage src={bannerURL} alt={`${name} Banner`} fill={true} />
      </BannerImageContainer>

      <CardContent>
        <h3>{name}</h3>
        <p>Location: {location}</p>
        {/* <p>Chef: {chef}</p> */}
        <p>Opening Time: {openingTime}</p>
        {/* {menu.length > 0 && (
          <p>
            Discount: {menu[0]?.discount ? `${(menu[0]?.discount * 100).toFixed(0)}%` : '0%'}
          </p>
        )} */}
        {/* You can add more details as needed */}
      </CardContent>
    </CardContainer>
  );
};

export default RestaurantCard;
