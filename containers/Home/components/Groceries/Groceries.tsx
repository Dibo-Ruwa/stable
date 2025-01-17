import React from "react";
import "./groceries.css";
import Link from "next/link";
import Image from "next/image";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaBagShopping } from "react-icons/fa6";
import { MdOutlineTimer } from "react-icons/md";
import { RiArrowRightSLine } from "react-icons/ri";

const food = [
  {
    id: 111,
    img: "/images/WhatsApp Image 2024-12-04 at 15.15.27_8744cdd7.jpg",
  },
  {
    id: 221,
    img: "/images/WhatsApp Image 2024-12-04 at 15.15.25_47c0ca4c.jpg",
  },
  {
    id: 331,
    img: "/images/WhatsApp Image 2024-12-04 at 15.15.23_c10fd95d.jpg",
  },
  {
    id: 441,
    img: "/images/WhatsApp Image 2024-12-04 at 15.15.23_f2bd62bd.jpg",
  },
];
export default function Groceries() {
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
              Groceries
            </p>
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
                  <Image
                    className=""
                    src={item.img}
                    alt="Chef preparing food"
                    width={250}
                    height={150}
                  />
                </div>
                <Link href={`/groceries/${item.id}`}>
                  <div className="meal-dis">
                    <div>
                      <div>
                        <p className="meal-disTitle">Fried Rice</p>
                        <div className="groceries_circle"></div>
                        <p className="meal-disNUm">4.5</p>
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
                        className="meal-disTime"
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
            href="/groceries"
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
