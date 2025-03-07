import React from "react";
import "./foodImage.css";
import { RiArrowRightSLine } from "react-icons/ri";
import Link from 'next/link'
const food = [
  {
    link: "/",
    img: "/images/paper_delivery.png",
  },
  {
    link: "/",
    img: "/images/fd2.png",
  },
  {
    link: "/",
    img: "/images/delivery_bus.png",
  },
  {
    link: "/",
    img: "/images/fd4.png",
  },
];
export default function FoodImage() {
  return (
    <div>
      <div className=" meal">
        <div className="hero_frame">
          <div className="duration">
            <p
              style={{
                fontSize: "1.3rem",
                color: 'black',
              }}
            >
              Moving and Percel Delivery
            </p>
            
          </div>
          <div className="meal_card">
            {food.map((item, index) => (
              <div key={index} className="card">
                <div className="card-img">
                  <img
                    className=""
                    src={item.img}
                    alt="Chef preparing food"
                  />
                </div>      
              </div>
            ))}
          </div>

          <Link href="/moving"
            style={{
              display: "flex",
              gap: 6,
              color: "#4BB149",
              marginTop: 20,
              alignItems: "center",
              width: "fit-content",
              marginLeft: "auto",
            }}
          >
            See More
            <RiArrowRightSLine
              style={{
                fontSize: "1.6rem",
                marginTop: 2,
              }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
