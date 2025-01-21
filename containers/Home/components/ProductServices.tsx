"use client";
import "./home.css";
import React, { useState } from "react";
import { Data, DataItem } from "@/constants/index";
import Link from "next/link";
import { Button } from "@/component/shared/Button";

const MobileView: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>("Food");

  const selectedData: DataItem | undefined = Data.find(
    (item) => item.tag === selectedTag
  );

  return (
    <div className="mobile-display">
      <div
        className="mob"
        style={{
          backgroundImage: `url(${selectedData?.bigImg})`,
          backgroundSize: "cover",
          // background: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center"
        }}
      >
        <div className="mob_overlay">
          <div className="mob-cont">
            <div className="tags-container">
              {Data.map((item) => (
                <div
                  key={item._id}
                  className={`tag-text ${
                    item.tag === selectedTag ? "tag-text-active" : ""
                  }`}
                  onClick={() => setSelectedTag(item.tag!)}
                >
                  {item.tag}
                </div>
              ))}
            </div>
            <div className="text-container">
              <div className="highlight">
                {selectedData?.foodText ||
                  "Your Ultimate Solution for Modern Lifestyle Needs"}
              </div>
              <div className="description">
                One platform, endless convenience. Simplify your life with our
                intuitive solution for all your needs.
              </div>
              <Link href={selectedData?.tagLink || "#"}>
                <button className="get-started-btn">Get Started</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="mob_loc">
        <div className="mob-loc-map">
          <div
            style={{
              width: "90%",
              height: "100%",
              paddingTop: "10px",
              paddingBottom: "10px",
              borderRadius: 50,
              // margin: "8px auto",
              // overflow: "hidden",
              // background:
              //   "linear-gradient(0deg, #E6E6E6 0%, #E6E6E6 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.10) 100%)",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              margin: "auto",
            }}
          >
            <div
              style={{
                justifyContent: "space-between",
                alignItems: "center",
                paddingLeft: 17,
                paddingRight: 17,
                display: "flex",
              }}
            >
              <img
                style={{ width: "100%" }}
                src={selectedData?.bike}
                alt="Bike"
              />
            </div>

            <div
              style={{
                justifyContent: "space-between",
                alignItems: "center",
                display: "flex",
              }}
            >
              <img
                style={{ width: "100%" }}
                src={selectedData?.map}
                alt="Map"
              />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

interface ProductServicesProps {
  selectedTag: string;
  setSelectedTag: (tag: string) => void;
  data: DataItem[];
}

const ProductServices: React.FC<ProductServicesProps> = ({
  selectedTag,
  setSelectedTag,
  data,
}) => {
  // Find the item based on the selected tag

  const selectedItem = Data.find(
    (item: { tag: string }) => item.tag === selectedTag
  );
  return (
    <>
      <div className="hero_cont">
      <div className="hero_prod">
        <div className="prod">
          <div className="prod-cont">
            <div className="tags-container">
              {Data.map((tagItem) => (
                <Link
                  href={tagItem.tagLink}
                  key={tagItem._id}
                  className={`tag-text ${
                    tagItem.tag === selectedTag ? "tag-text-active" : ""
                  }`}
                  onClick={() => setSelectedTag(tagItem.tag)}
                >
                  {tagItem.tag}
                </Link>
              ))}
            </div>
            <div className="text-container">
              <p className="highlight">Your Ultimate Solution for</p>
              <p className="highlight2">Modern Lifestyle Needs</p>
              <div className="description">
                One platform, endless convenience. Simplify your life with our
                intuitive solution for all your needs.
              </div>
              <Link href={selectedItem?.tagLink || "#"}>
                <button className="get-started-btn">Get Started</button>
              </Link>
            </div>
          </div>
          {selectedItem && (
            <div className="image">
              <img src={selectedItem.bigImg} alt={selectedItem.tag} />
              <div className="overlay">
                <div className="footer-text">{selectedItem.foodText}</div>
              </div>
            </div>
          )}
        </div>
        </div>
        
      {selectedItem && (
        <div className="hero_map ">
          <img className="map" src={selectedItem.map} alt={selectedItem.tag} />
          <div className="pro-logo">
            {/* <div className="pro-name">
              <img
                className="pro-img"
                src={selectedItem.foodImg}
                alt={selectedItem.tag}
              />
            </div> */}
            <div className="b-l">
              <img
                className="bike"
                src={selectedItem.bike}
                alt={selectedItem.tag}
              />
            </div>
          </div>
        </div>
      )}
      <MobileView />
      </div>
    </>
  );
};
export default ProductServices;
