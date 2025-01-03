import React, { useState, useEffect } from "react";
import "./mostsold.css";
import Link from "next/link";
import { FoodData } from "@/utils/types/types";
import { FaStar } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { useFoodItem } from "@/context/FooItemProvider"; // For setSelectedItem
import { useCartItems } from "@/context/CartItems"; // For addToCart
import { useRouter } from "next/navigation";
import { Toast } from "@/lib/Toast";

interface MostSoldProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  activeButton: string;
  foodData: FoodData[];
}

const MostSold: React.FC<MostSoldProps> = ({
  foodData,
  searchQuery,
  setSearchQuery,
  activeButton,
}) => {
  const [visibleItems, setVisibleItems] = useState<FoodData[]>(foodData);
  const { setSelectedItem } = useFoodItem(); // Use the old context
  const { addToCart, cartItems, setIsCart } = useCartItems(); // Use the new context
  const router = useRouter();
  const [showToast, setShowToast] = useState(false); // State for toast visibility
  const [addedItems, setAddedItems] = useState<Set<string>>(new Set()); // Track added items

  // Load added items from local storage on component mount
  useEffect(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    if (savedCartItems) {
      const parsedCartItems: FoodData[] = JSON.parse(savedCartItems);
      const itemIds = new Set(parsedCartItems.map((item) => item._id));
      setAddedItems(itemIds);
    }
  }, []);

  // Update addedItems when cartItems change
  useEffect(() => {
    const itemIds = new Set(cartItems.map((item) => item._id));
    setAddedItems(itemIds);
  }, [cartItems]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  // Function to handle item click
  const handleItemClick = (item: FoodData) => {
    console.log(item);
    setSelectedItem(item); // Save the selected item using useFoodItem
    setIsCart(true) // To display the select item in the details page
    router.push(`/food/checkout`); // Navigate to the item's page
  };

  // Function to handle adding item to cart
  const handleItemAddToCart = (item: FoodData) => {
    console.log(item);
    addToCart(item); // Add the item to the cart using useCartItems
    setShowToast(true); // Show toast when item is added to cart
  };

  // Filter foodData based on activeButton and searchQuery
  useEffect(() => {
    let filteredData = foodData;

    if (activeButton !== "all") {
      filteredData = filteredData.filter((item) =>
        item.categories.includes(activeButton)
      );
    }

    if (searchQuery) {
      filteredData = filteredData.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setVisibleItems(filteredData);
  }, [activeButton, searchQuery]);

  // Handle window resize for visible items
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        // setVisibleItems((prev) => prev.slice(0, 4)); // Show first 4 items on large screens
      } else {
        // setVisibleItems((prev) => prev); // Show all items on smaller screens
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [foodData]);

  return (
    <div>
      <section className="mostsold_container">
        {visibleItems?.length === 0 ? (
          <p
            style={{  
              textAlign: "center",
              fontSize: "30px",
              fontWeight: 600,
              marginTop: "20px",
            }}
          >
            No meal found
          </p>
        ) : (
          <div className="mostsold-frame">
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  maxWidth: "450px",
                  padding: "1rem",
                }}
              >
                <input
                  type="text"
                  placeholder="Search here"
                  style={{
                    height: "42px",
                    flexShrink: 0,
                    borderRadius: "4px",
                    paddingLeft: "1rem",
                    paddingRight: "2.5rem", // Tailwind's pr-10
                    border: "1px solid #ebebeb",
                    backgroundColor: "#fcfcfc",
                    outline: "none",
                    width: "100%",
                  }}
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                <img
                  src="/images/search-normal.svg"
                  alt="search-normal"
                  style={{
                    position: "absolute",
                    right: "2rem",
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "20px",
                    height: "20px",
                  }}
                />
              </div>
            </div>
            <div className="mostsold-cards">
              {visibleItems.map((item) => (
                <div key={item._id} className="mostsold-card">
                  <div
                    onClick={() => handleItemClick(item)} // Save the selected item
                    className="mostsold-card_food-img"
                  >
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="mostsold-card_img"
                    />
                  </div>
                  <div className="mostsold-card_content">
                    <div
                      onClick={() => handleItemClick(item)} // Save the selected item
                      className="mostsold-card_context"
                    >
                      <div className="mostsold-card_context-top">
                        <small className="mostsold-card_title">
                          {item.title}
                        </small>
                        <div className="mostsold-card_dot"></div>
                        <FaStar className="mostsold-card_star" />
                        <small className="mostsold-card_rating">4.5</small>
                      </div>
                      <div className="mostsold-card_timer">
                        <span>{item.prep_time}</span>{" "}
                        {/* Display preparation time */}
                      </div>
                    </div>
                    <p
                      style={{
                        fontSize: "14px",
                        color: "#8F8F8F",
                      }}
                      onClick={() => handleItemClick(item)} // Save the selected item
                    >
                      {item?.vendor?.name}
                    </p>
                    <div className="mostsold-card_prize">
                      <p
                        onClick={() => handleItemClick(item)} // Save the selected item
                        className="mostsold-card_prize-text"
                      >
                        ₦{item.price}
                      </p>
                      <button
                        onClick={() => handleItemAddToCart(item)} // Add the item to the cart
                        type="button"
                        className={`mostsold-card_prize-link ${
                          addedItems.has(item._id) ? "added-to-cart" : ""
                        }`}
                        disabled={addedItems.has(item._id)} // Disable the button if the item is already in the cart
                      >
                        <FaBagShopping className="mostsold-card_prize-icon" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Toast for adding item to cart */}
      <Toast
        message="Item added to cart!"
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </div>
  );
};

export default MostSold;