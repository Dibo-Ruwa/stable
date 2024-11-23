import React from "react";
import "./partner.css";
import Link from "next/link";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import { FaBagShopping } from "react-icons/fa6";
import { MdOutlineTimer } from "react-icons/md";
import { RiArrowRightSLine } from "react-icons/ri";
import { HiArrowRightCircle } from "react-icons/hi2";

const rest = [
  {
    link: "/",
    img: "/images/pt1.png",
    con: "Register as food vendor",
  },
  {
    link: "/",
    img: "/images/pt2.png",
    con: "Register as Courier",
  },
  {
    link: "/",
    img: "/images/pt3.png",
    con: "Register as Laundry Service",
  },
  {
    link: "/",
    img: "/images/pt4.png",
    con: "Register as Groceries",
  },
  {
    link: "/",
    img: "/images/pt4.png",
    con: "Register as Cleaning",
  },
];
export default function Partner() {
  return (
    <div>
      <div className=" meal">
        <div className="hero_frame meal-des">
          <div className="meal-title_sub">
            <p
              style={{
                fontSize: "1.3rem",
                color: "black",
                marginBottom: '20px',
              }}
            >
              Want To Partner With Us?
            </p>
          <p
            style={{
              fontSize: "1rem",
              // color: 'black',
            }}
          >
            One platform, endless convenience. Simplify your life with our
            intuitive solution for all your needs.
          </p>

          </div>
          <div className="rest_card">
            {rest.map((item, index) => (
              <div key={index} className="card">
                <img src={item.img} alt="Chef preparing food" />
                <Link href={item.link}>
                  <p
                    style={{
                      fontSize: ".85rem",
                    }}
                  >
                    {item.con}
                  </p>
                  <HiArrowRightCircle
                    style={{
                      color: "#4BB149",
                      width: "30px",
                      height: "30px",
                    }}
                  />
                </Link>
              </div>
            ))}
          </div>

          <div
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
          </div>
        </div>
      </div>
    </div>
  );
}
