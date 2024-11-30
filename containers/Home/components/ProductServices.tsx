"use client";
import "./home.css";
import React, { useState } from "react";
import { Data, DataItem } from "@/constants/index";

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
          backgroundSize: "140% 100%",
          backgroundRepeat: "no-repeat",
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
              <button className="get-started-btn">Get Started</button>
            </div>
          </div>
        </div>
      </div>
      <div className="mob_loc">
        <div className="mob-loc-map">
          <div
            style={{
              width: "90%",
              height: "100px",
              paddingTop: "10px",
              paddingBottom: "10px",
              borderRadius: 50,
              margin: "8px auto",
              overflow: "hidden",
              background:
                "linear-gradient(0deg, #E6E6E6 0%, #E6E6E6 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.10) 100%)",
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
                style={{ width: "100%", height: 30 }}
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
                style={{ width: "100%", height: "30%" }}
                src={selectedData?.map}
                alt="Map"
              />
            </div>
          </div>
        </div>
      </div>
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
                  <button
                    key={tagItem._id}
                    className={`tag-text ${
                      tagItem.tag === selectedTag ? "tag-text-active" : ""
                    }`}
                    onClick={() => setSelectedTag(tagItem.tag)}
                  >
                    {tagItem.tag}
                  </button>
                ))}
              </div>
              <div className="text-container">
                <p className="highlight">Your Ultimate Solution for</p>
                <p className="highlight2">Modern Lifestyle Needs</p>
                <div className="description">
                  One platform, endless convenience. Simplify your life with our
                  intuitive solution for all your needs.
                </div>
                <button className="get-started-btn">Get Started</button>
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
          <div className="hero_map">
            <img
              className="map"
              src={selectedItem.map}
              alt={selectedItem.tag}
            />
            <div className="pro-logo">
              <div className="pro-name">
                <img
                  className="pro-img"
                  src={selectedItem.foodImg}
                  alt={selectedItem.tag}
                />
              </div>
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
// {
//  <div className="container">
// <div>

// </div>
// <div className="tags-container">
//   <div className="tag tag-food">
//   <div className="tag-text">Food</div>
//   </div>
//   <div className="tag tag-courier">
//     <div className="tag-text">Courier</div>
//   </div>
//   <div className="tag tag-laundry">
//     <div className="tag-text">Laundry</div>
//   </div>
//   <div className="tag tag-grooming">
//     <div className="tag-text">Grooming</div>
//   </div>
// </div>
// <img
//   className="image"
//   src="https://via.placeholder.com/449x276"
//   alt="Chef preparing food"
// />
// <div className="text-container">
//   <div className="highlight">
//     Your Ultimate Solution for Modern Lifestyle Needs
//   </div>
//   <div className="description">
//     One platform, endless convenience. Simplify your life with our
//     intuitive solution for all your needs.
//   </div>
// </div>
// <div className="get-started-btn">
//   <div className="get-started-text">Get Started</div>
//   <div className="arrow-container">
//     <div className="arrow">
//       <div className="arrow-part arrow-part-1"></div>
//       <div className="arrow-part arrow-part-2"></div>
//     </div>
//   </div>
// </div>
// <div className="overlay" />
// <div className="footer-text">
//   Order from your favorite restaurant and get your meal delivered in
//   minutes.
// </div>
// </div>
// }
