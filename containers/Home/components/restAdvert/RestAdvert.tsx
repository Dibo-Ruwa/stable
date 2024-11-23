import React from "react";
import "./restAdvert.css";
import Link from "next/link";
import { TopResturant } from "@/constants/index";
import { FaAngleRight } from "react-icons/fa6";

interface RestAdvertProps {
  selectedTag: string;
}

interface Item {
  title?: string;
  tag?: string;
  link?: string;
  image?: string;
  _id?: string;
}

const RestAdvert: React.FC<RestAdvertProps> = ({ selectedTag }) => {
  return (
    <div className="rest-ad">
      {TopResturant.map((category, index) => {
        const categoryName = Object.keys(category)[0];
        const items = category[categoryName] as Item[];

        const selectedItem = items.filter((item) => item.tag === selectedTag);

        if (selectedItem.length === 0) return null;

        return (
          <div key={index} className="hero_frame">
            <p className="title">{items[0].title}</p>
            <div className="rest-ad-card">
              {selectedItem.map((item, itemIndex) => (
                <div key={item._id} className="card">
                  <img
                    className="top-restaurants"
                    src={item.image}
                    alt={item.tag}
                  />
                  <Link href={item.link || "#"} className="vist">
                    <p>visit</p>
                    <img
                      className="arrow-right"
                      src="/images/arrow-right.svg"
                      alt="Arrow right"
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        );
      })}
      <Link href="/restaurant" className="restaurants_link">
        <p className="restaurants_link_text">See more</p>
        <FaAngleRight className="restaurants_link_icon" />
      </Link>
    </div>
  );
};

export default RestAdvert;
