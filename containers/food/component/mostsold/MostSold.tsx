import React, { useState, useEffect, useCallback, useMemo } from "react";
import "./mostsold.css";
import { FoodData } from "@/utils/types/types";
import { FaStar } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { useFoodItem } from "@/context/FooItemProvider";
import { useRouter } from "next/navigation";
import { Toast } from "@/lib/Toast";
import axios from "axios";
import { useLocation } from "@/context/LocationProvider";
import { debounce } from "lodash";
import { MdOutlineTimer } from "react-icons/md";
import toast from "react-hot-toast";
import useCartStore from "@/store/useCart.store";
import VendorModal from '@/component/modals/VendorModal';

interface MostSoldProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  activeButton: string;
}

const MostSold: React.FC<MostSoldProps> = ({
  searchQuery,
  setSearchQuery,
  activeButton,
}) => {
  const [visibleItems, setVisibleItems] = useState<FoodData[]>([]);
  const { setSelectedItem } = useFoodItem();
  const { cartItems, addToCartWithExtras, getCurrentVendor } = useCartStore(); // Use the store's state and actions
  const router = useRouter();
  const [showToast, setShowToast] = useState(false);
  const [addedItems, setAddedItems] = useState<Set<string>>(new Set());
  const [page, setPage] = useState(1); // Track current page
  const [loadingMore, setLoadingMore] = useState(false); // Track loading state for infinite scroll
  const [hasMore, setHasMore] = useState(true); // Track if there's more data to load
  const { location } = useLocation(); // Get location from context
  const [loading, setLoading] = useState(true); 
  const [vendorModal, setVendorModal] = useState({
    isOpen: false,
    currentVendor: ''
  });

  console.log(searchQuery);
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

  // Fetch data from the API
  const fetchData = useCallback(async () => {
    if (loadingMore || !hasMore) return;

    setLoadingMore(true);

    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_ADMIN_URL}/api/products?type=food`,
        {
          params: {
            page,
            limit: 20,
            search: searchQuery,
          },
        }
      );

      const newData = response.data?.data;
      const pagination = response.data?.pagination;

      // Filter data based on location.state
      const filteredData = location?.state
        ? newData.filter((item: { vendor: { branch: any[] } }) =>
            item.vendor.branch.some(
              (branch) => branch.location.city.name === location.state
            )
          )
        : newData;

      // setLoading(false); // Set loading to false after the first fetch

      if (filteredData.length > 0) {
        setVisibleItems((prevItems) => [...prevItems, ...filteredData]);
        setPage((prevPage) => prevPage + 1);
        setHasMore(pagination?.hasNextPage || false); // Update hasMore based on API response
      } else {
        setHasMore(false); // No more data to load
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoadingMore(false);
      setLoading(false); // Set loading to false after the first fetch
    }
  }, [page, searchQuery, activeButton, loadingMore, hasMore, location]);

  // Initial data fetch when the component mounts or searchQuery/activeButton changes
  useEffect(() => {
    setVisibleItems([]); // Clear existing data
    setPage(1); // Reset page
    setHasMore(true); // Reset hasMore
    setLoading(true); // Set loading to true before fetching
    fetchData(); // Fetch new data
  }, [searchQuery, activeButton, location]); // Add activeButton to dependency array

  // Debounce scroll event
  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;

      if (scrollHeight - (scrollTop + clientHeight) < 700 && !loadingMore) {
        fetchData();
      }
    };

    const debouncedScroll = debounce(handleScroll, 200); // Debounce for 200ms
    window.addEventListener("scroll", debouncedScroll);
    return () => window.removeEventListener("scroll", debouncedScroll);
  }, [searchQuery, activeButton, loadingMore]);

  // Filter out duplicates based on _id
  const uniqueItems = useMemo(() => {
    const seen = new Set();
    return visibleItems.filter((item) => {
      if (seen.has(item._id)) {
        return false; // Skip duplicate
      }
      seen.add(item._id);
      return true;
    });
  }, [visibleItems]);

  const handleItemClick = (item: FoodData) => {
    setSelectedItem(item);
    console.log(item);
    // Check if the item's _id is in the cartItems
    const isItemInCart = cartItems.some(
      (cartItem) => cartItem._id === item._id
    );

    // Navigate to the checkout page
    router.push(`/food/checkout`);
  };

  console.log("Cart items", cartItems)

  const handleItemAddToCart = async (item: FoodData) => {
    try {
      const currentVendor = getCurrentVendor();
      
      // Check if there's a current vendor and if it's different from the new item's vendor
      if (currentVendor && currentVendor !== item.vendor.name) {
        setVendorModal({
          isOpen: true,
          currentVendor: currentVendor
        });
        return;
      }
  
      // Ensure extras is included in the item
      const itemWithExtras = {
        ...item,
        extras: item.extras ?? [], // Initialize extras as an empty array if undefined
      };
  
      // Add the item to the cart using the store's method
      await addToCartWithExtras(itemWithExtras, itemWithExtras.extras);
      setShowToast(true);
    } catch (error: any) {
      console.error('Error adding item to cart:', error);
      toast.error(error.message || 'Failed to add item to cart');
    }
  };

  const handleCloseVendorModal = () => {
    setVendorModal({
      isOpen: false,
      currentVendor: ''
    });
  };

  return (
    <div>
      <section className="mostsold_container">
        <div className="mostsold-frame">
          {/* Moved search bar to the Custom booking file */}
          {/* <div style={{ display: "flex", justifyContent: "flex-end" }}>
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
                  paddingRight: "2.5rem",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#fcfcfc",
                  outline: "none",
                  width: "100%",
                }}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
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
          </div> */}
          <div className="mostload">
            {loading ? ( // Show loading effect while fetching initial data
              <p
                style={{
                  textAlign: "center",
                  fontSize: "30px",
                  fontWeight: 600,
                  marginTop: "20px",
                }}
              >
                Loading meals...
              </p>
            ) : uniqueItems.length === 0 ? ( // Show "No meal found" only after loading is complete
              <p
                style={{
                  textAlign: "center",
                  fontSize: "30px",
                  fontWeight: 600,
                  marginTop: "20px",
                  background: "#43e656",
                }}
              >
                No meal found on your current location
              </p>
            ) : (
              <>
                <div className="mostsold-cards">
                  {uniqueItems.map((item) => (
                    <div key={item._id} className="mostsold-card">
                      <div
                        onClick={() => handleItemClick(item)}
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
                          onClick={() => handleItemClick(item)}
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
                            <span
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              {" "}
                              <MdOutlineTimer style={{ marginTop: "-2px" }} /> {item.prep_time}{" "}
                              {item?.prep_time == "1" || item?.prep_time == "0"
                                ? "min"
                                : "mins"}
                            </span>
                          </div>
                        </div>
                        <p
                          style={{
                            fontSize: "14px",
                            color: "#8F8F8F",
                          }}
                          onClick={() => handleItemClick(item)}
                        >
                          {item?.vendor?.name}
                        </p>
                        <div className="mostsold-card_prize">
                          <p
                            onClick={() => handleItemClick(item)}
                            className="mostsold-card_prize-text"
                          >
                            ₦{item.price}
                          </p>
                          <button
                            onClick={() => handleItemAddToCart(item)}
                            type="button"
                            className={`mostsold-card_prize-link ${
                              ""
                              // addedItems.has(item._id) ? "added-to-cart" : ""
                            }`}
                            // disabled={addedItems.has(item._id)}
                          >
                            <FaBagShopping className="mostsold-card_prize-icon" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
          {loadingMore && (
            <p style={{ textAlign: "center", marginTop: "20px" }}>
              Loading more meals...
            </p>
          )}
          {/* {!hasMore && (
            <p style={{ textAlign: "center", marginTop: "20px" }}>
              No more meals to load.
            </p>
          )} */}
        </div>
      </section>

      {/* Toast for adding item to cart */}
      <Toast
        message="Item added to cart!"
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
      <VendorModal 
        isOpen={vendorModal.isOpen}
        onClose={handleCloseVendorModal}
        currentVendor={vendorModal.currentVendor}
      />
    </div>
  );
};

export default MostSold;
