// RestaurantList.tsx
import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";
import RestaurantCard from "../restaurantCard/restaurantCard";
import { Restaurant } from "@/constants";
import { CiSearch } from "react-icons/ci";

interface Props {
  restaurants: Restaurant[];
}

const Container = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 20px;
`;
const Title = styled.h3`
  margin-bottom: 20px;
  text-align: center;
  font-size: 22px;
`;

const SearchContainer = styled.div`
  width: 50%;
  margin: auto;
  margin-bottom: 20px;
  position: relative;
`;

const SearchButton = styled.button`
  position: absolute;
  top: 0;
  right: 1px;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--primary);
  color: #fff;
  transition: all .3s ease-in-out;
`;

const SearchInput = styled.input`
  outline: none;
  border: 1px solid var(--primary-20);
  padding: 10px 15px;
  border-radius: 40px;
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
  transition: all 0.5s ease-in-out;

  &:focus {
    border: 1px solid var(--primary);
   
  }
`;

const RestaurantsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 20px;

`;

const RestaurantList: React.FC<Props> = ({ restaurants }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("");


  const filteredRestaurants =
    restaurants &&
    restaurants.filter((restaurant) => {
      return restaurant.name.toLowerCase().includes(searchTerm.toLowerCase());
      // &&
      // restaurant.location.toLowerCase().includes(locationFilter.toLowerCase())
    });

  return (
    <Container>
      <Title>All Restaurants</Title>
      <SearchContainer>
        <SearchInput
          type="text"
          placeholder="Search for a restaurant"
          value={searchTerm}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSearchTerm(e.target.value)
          }
        />
        <SearchButton>
          <CiSearch />
        </SearchButton>
      </SearchContainer>

      <RestaurantsContainer>
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </RestaurantsContainer>
    </Container>
  );
};

export default RestaurantList;
