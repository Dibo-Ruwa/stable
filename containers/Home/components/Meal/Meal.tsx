"use client";
import React, { useState } from "react";
import "./meal.css";
import Link from "next/link";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import { FaBagShopping } from "react-icons/fa6";
import { MdOutlineTimer } from "react-icons/md";
import { RiArrowRightSLine } from "react-icons/ri";
import { Button } from "@/component/shared/Button";

const food = [
  {
    id: 21,
    img: "/images/image113.png",
  },
  {
    id: 45,
    img: "/images/image113.png",
  },
  {
    id: 56,
    img: "/images/image113.png",
  },
  {
    id: 34,
    img: "/images/image113.png",
  },
];

const prepTimes: string[] = ["30mins", "45mins", "1hr", "2hr"];

export default function Meal(): JSX.Element {
  const [activePrepTime, setActivePrepTime] = useState<string>("30mins");

  return (
    <div>
      <div className="meal" style={{ marginTop: 100 }}>
        <div className="hero_frame">
          <div className="duration">
            <p
              style={{
                fontSize: "1.3rem",
                color: "black",
              }}
            >
              Meals
            </p>
            <div className="prep-container">
              <p>Prep time:</p>
              <div className="prep-menu">
                {prepTimes.map((time) => (
                  <Button
                    key={time}
                    className={`prep-text ${
                      activePrepTime === time ? "prep-text-active" : ""
                    }`}
                    text={time}
                    onClick={() => setActivePrepTime(time)}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="meal_card">
            {food.map((item) => (
              <div key={item.id} className="card">
                <div className="card-img">
                  <div
                    style={{
                      backgroundColor: "white",
                      padding: "6px",
                      borderRadius: "20px",
                      position: "absolute",
                      left: 14,
                      top: 14,
                      display: "flex",
                    }}
                  >
                    <IoIosHeartEmpty
                      style={{
                        color: "#4BB149",
                        margin: "auto",
                      }}
                    />
                    {/* <IoIosHeart 
              style={{
                color: '#4BB149', 
                margin: 'auto',
              }}
            /> */}
                  </div>
                  <img
                    className=""
                    // width={300}
                    // height={100}
                    src={item.img}
                    alt="Chef preparing food"
                  />
                </div>
                <Link href={`/food/${item.id}`}>
                  <div className="meal-dis">
                    <div>
                      <div>
                        <p>Fried Rice</p>
                        <div className="meal-dot"></div>
                        <p>4.5</p>
                      </div>
                      <p
                        style={{
                          color: "#EF5A5A",
                          fontSize: ".75rem",
                          marginTop: 6,
                        }}
                      >
                        10 Liters remaining
                      </p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        gap: 3,
                      }}
                    >
                      <MdOutlineTimer />
                      <p
                        style={{
                          color: "#EF5A5A",
                          fontSize: ".9rem",
                        }}
                      >
                        Closed
                      </p>
                    </div>
                  </div>
                  <div className="price">
                    <p>$40</p>
                    <p
                      style={{
                        backgroundColor: "#4BB149",
                        padding: "4px 20px",
                        borderRadius: "20px",
                      }}
                    >
                      <FaBagShopping
                        style={{
                          color: "white",
                        }}
                      />
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <Link
            href="/food"
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
