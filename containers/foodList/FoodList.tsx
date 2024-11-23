"use client";

import ProductCard from "@/component/ProductCard/ProductCard";
import Modal from "@/component/modals/Modal";
// import BackButton from "@/component/ui/BackButton/BackButton";
import Dropdown from "@/component/ui/Dropdown";
import Button from "@/component/ui/button/Button";
import { Restaurant, products, restaurants } from "@/constants";
import useCartStore from "@/store/useCart.store";
import React, { ChangeEvent, useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import styled from "styled-components";

export type IFoodListProps = {};

export const Container = styled.div`
  padding-left: 10%;
  padding-right: 10%;
  padding-bottom: 5%;
  padding-top: 4%;


  h2 {
    text-align: center;
    margin-bottom: 15px;
  }

  p{
    text-align: center;
    margin-bottom: 30px;
  }

  .btn {
    margin-top: 30px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    button {
      margin: auto;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const SearchContainer = styled.div`
  width: 50%;
  /* margin: auto; */

  position: relative;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
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
  transition: all 0.3s ease-in-out;
`;

const SearchInput = styled.input`
  outline: none;
  border: 1px solid var(--primary-20);
  padding: 10px 15px;
  border-radius: 40px;
  width: 100%;
  height: 40px;

  transition: all 0.5s ease-in-out;

  &:focus {
    border: 1px solid var(--primary);
  }
`;

export const ProductListing = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  /* .card {
    width: max-content;
  } */

  /* @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  } */
`;

const FoodList: React.FC<IFoodListProps> = ({}) => {
  const { modal, closeModal } = useCartStore();

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [seeMore, setSeeMore] = useState<boolean>(false);
  const [filter, setFilter] = useState<string>("vendor");
  const options = ["Name", "Vendor", "Category"];

  const handleSelect = (selectedOption: string) => {
    console.log(`Selected option: ${selectedOption}`);
    setFilter(selectedOption.toLowerCase());
  };

  const getOpenedProducts = () => {
    const currentDay = new Date()
      .toLocaleString("en-us", { weekday: "short" })
      .toLowerCase();
    return products.filter((product) =>
      product.openingDays?.includes(currentDay)
    );
  };

  const openedProducts = getOpenedProducts();

  const filteredProducts = openedProducts.filter((product) => {
    if (filter === "name") {
      return product.title.toLowerCase().includes(searchTerm.toLowerCase());
    } else if (filter === "vendor") {
      return product.vendor.toLowerCase().includes(searchTerm.toLowerCase());
    } else if (filter === "category") {
      return product.categories.some((category: string) =>
        category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return true; // Return true if no filter matches
  });

  const renderMenuItems = () => {
    return seeMore
      ? filteredProducts.map((menuItem) => (
          <div key={menuItem.id} className="card">
            <ProductCard product={menuItem} active={true} />
          </div>
        ))
      : filteredProducts.slice(0, 12).map((menuItem) => (
          <div key={menuItem.id} className="card">
            <ProductCard product={menuItem} active={true} />
          </div>
        ));
  };
  return (
    <Container>
      <h2>Don&apos;t want to subscribe yet? We&apos;ve  got you covered </h2>
      <p>Try our food before you subscribe. Check the menu below.</p>
      <Header>
        <SearchContainer>
          <SearchInput
            type="text"
            placeholder={`Search by ${filter}`}
            value={searchTerm}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setSearchTerm(e.target.value)
            }
          />
          <SearchButton>
            <CiSearch />
          </SearchButton>
        </SearchContainer>

        <Dropdown options={options} onSelect={handleSelect} />
      </Header>

      <ProductListing>{renderMenuItems()}</ProductListing>



      <div className="btn">
        {!seeMore && <Button size="large" color="primary" onClick={() => setSeeMore(true)}>
          See more
        </Button>}
        
      </div>

      <Modal
        isOpen={modal.isOpen}
        type={modal.type}
        message={modal.message}
        onClose={closeModal}
      />
    </Container>
  );
};

export default FoodList;
