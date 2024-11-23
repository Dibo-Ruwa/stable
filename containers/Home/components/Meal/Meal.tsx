import React from "react";
import "./meal.css";
import Link from "next/link";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import { FaBagShopping } from "react-icons/fa6";
import { MdOutlineTimer } from "react-icons/md";
import { RiArrowRightSLine } from "react-icons/ri";

const food = [
  {
    link: "/",
    img: "/images/imagescomponent 113 (2)imagescomponent 113 (2).png",
  },
  {
    link: "/",
    img: "/images/imagescomponent 113 (2)imagescomponent 113 (2).png",
  },
  {
    link: "/",
    img: "/images/imagescomponent 113 (2)imagescomponent 113 (2).png",
  },
  {
    link: "/",
    img: "/images/imagescomponent 113 (2)imagescomponent 113 (2).png",
  },
  {
    link: "/",
    img: "/images/imagescomponent 113 (2)imagescomponent 113 (2).png",
  },
];
export default function Meal() {
  return (
    <div>
      <div className=" meal">
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
                <div className="prep-text-active ">30mins</div>
                <div className="prep-text">45mins</div>
                <div className="prep-text">1hr</div>
                <div className="prep-text">2hrs</div>
              </div>
            </div>
          </div>
          <div className="meal_card">
            {food.map((item, index) => (
              <div key={index} className="card">
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
                <Link href={item.link}>
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

          <Link href="/food"
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
