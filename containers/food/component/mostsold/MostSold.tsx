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
import VendorModal from "@/component/modals/VendorModal";
import { useSession } from "next-auth/react";
import { AuthPromptModal } from '@/components/ui/AuthPromptModal/AuthPromptModal';

interface MostSoldProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  activeButton: string;
  type: string
}

const MostSold: React.FC<MostSoldProps> = ({
  searchQuery,
  setSearchQuery,
  activeButton,
  type,
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
    currentVendor: "",
  });
  const { data: session } = useSession();
  const [showAuthModal, setShowAuthModal] = useState(false);

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
        `${process.env.NEXT_PUBLIC_ADMIN_URL}/api/products`,
        {
          params: {
            page,
            limit: 20,
            search: searchQuery,
            type: type,
            category: activeButton !== "all" ? activeButton : undefined // Add category parameter
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
  }, [page, searchQuery, activeButton, hasMore, location, type]);

  // Initial data fetch when the component mounts or searchQuery/activeButton changes
  useEffect(() => {
    setVisibleItems([]); // Clear existing data
    setPage(1); // Reset page
    setHasMore(true); // Reset hasMore
    setLoading(true); 
    fetchData(); // Fetch new data
  }, [searchQuery, activeButton]); 

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
  }, [loadingMore, hasMore]);

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
    if (item.isOutOfStock) {
      toast.error("This item is currently out of stock");
      return;
    }
    
    setSelectedItem(item);
    // Navigate to the checkout page
    router.push(`/food/checkout`);
  };

  console.log("Cart items", cartItems);

  const handleItemAddToCart = async (item: FoodData) => {
    if (item.isOutOfStock) {
      toast.error("This item is currently out of stock");
      return;
    }

    if (!session) {
      setShowAuthModal(true);
      return;
    }

    try {
      const currentVendor = getCurrentVendor();

      // Check if there's a current vendor and if it's different from the new item's vendor
      if (currentVendor && currentVendor !== item.vendor.name) {
        setVendorModal({
          isOpen: true,
          currentVendor: currentVendor,
        });
        return;
      }

      // Ensure vendor data includes allowPickup
      const normalizedItem = {
        ...item,
        extras: item.extras ?? [],
        vendor: {
          ...item.vendor,
          allowPickup: item.vendor.allowPickup ?? false // Ensure allowPickup is included
        }
      };

      // Add the item to the cart using the store's method
      await addToCartWithExtras(normalizedItem, normalizedItem.extras);
      setShowToast(true);
    } catch (error: any) {
      console.error("Error adding item to cart:", error);
      toast.error(error.message || "Failed to add item to cart");
    }
  };

  const handleSignIn = () => {
    setShowAuthModal(false);
    router.push('/sign-in');
  };

  const handleCloseVendorModal = () => {
    setVendorModal({
      isOpen: false,
      currentVendor: "",
    });
  };

  return (
    <div>
      <section className="mostsold_container">
        <div className="mostsold-frame">
          {/* Moved search bar to the Custom booking file */}
          <div style={{ display: "flex", justifyContent: "center", paddingBottom: "1.5rem" }}>
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "550px",
                padding: "1rem",
                
              }}
            >
              <input
                type="text"
                placeholder="Search here..."
                style={{
                  height: "52px",
                  flexShrink: 0,
                  borderRadius: "4px",
                  paddingLeft: "1rem",
                  paddingRight: "2.5rem",
                  border: "2px solid #27a124",
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
          </div>
          <div className="mostload">
            {loading ? (
              <p
                style={{
                  textAlign: "center",
                  fontSize: "30px",
                  fontWeight: 600,
                  marginTop: "20px",
                }}
              >
               {type ==="grocery" ? "Loading groceries..." : "Loading meals..." }
              </p>
            ) : uniqueItems.length === 0 ? ( // Show "No meal found" only after loading is complete
              <p
                style={{
                  textAlign: "center",
                  fontSize: "30px",
                  fontWeight: 600,
                  marginTop: "20px",
                }}
              >
                
               {type ==="grocery" ? "No product found on your current location" : "No meal found on your current location" }

              </p>
            ) : (
              <>
                <div className="mostsold-cards">
                  {uniqueItems.map((item) => (
                    <div key={item._id} className={`mostsold-card ${item.isOutOfStock ? 'out-of-stock' : ''}`}>
                      <div
                        onClick={() => handleItemClick(item)}
                        className="mostsold-card_food-img"
                      >
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          className="mostsold-card_img"
                        />
                        {item.isOutOfStock && (
                          <div className="out-of-stock-overlay">
                            <span>Out of Stock</span>
                          </div>
                        )}
                      </div>
                      <div className="mostsold-card_content">
                        <div
                          onClick={() => handleItemClick(item)}
                          className="mostsold-card_context"
                        >
                          <div className="mostsold-card_context-top">
                            <small className="mostsold-card_title">
                              {item.title?.length > 20 ? `${item.title.slice(0, 20)}...` : item.title}
                            </small>
                            <div className="mostsold-card_dot"></div>
                            <div className="mostsold-card_rating">
                              <FaStar className="mostsold-card_star" />
                              <small className="mostsold-card_ratingNum">
                                4.5
                              </small>
                            </div>
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
                              <MdOutlineTimer style={{ marginTop: "-2px" }} />
                              <p className="mostsold-card_PrepTimer">
                                {item.prep_time}{" "}
                                {item?.prep_time == "1" ||
                                item?.prep_time == "0"
                                  ? "min"
                                  : "mins"}
                              </p>
                            </span>
                          </div>

                          <div className="Rating_TimerMObile">
                            <div className="mostsold-card_ratingMobile">
                              <FaStar className="mostsold-card_starMobile" />
                              <small className="mostsold-card_ratingNumMobile">
                                4.5
                              </small>
                            </div>
                            <div className="mostsold-card_timerMobile">
                              <span
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                              >
                                {" "}
                                <MdOutlineTimer style={{ marginTop: "-2px" }} />
                                <p className="mostsold-card_PrepTimerMobile">
                                  {item.prep_time}{" "}
                                  {item?.prep_time == "1" ||
                                  item?.prep_time == "0"
                                    ? "min"
                                    : "mins"}
                                </p>
                              </span>
                            </div>
                          </div>
                        </div>
                        <p
                          style={{
                            fontSize: "13px",
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
                              item.isOutOfStock ? "out-of-stock" : ""
                            }`}
                            disabled={item.isOutOfStock}
                          >
                            <FaBagShopping className="mostsold-card_prize-icon" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {loadingMore && (
                  <p style={{ textAlign: "center", marginTop: "20px" }}>
                    Loading more meals...
                  </p>
                )}
              </>
            )}
          </div>
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
      {showAuthModal && (
        <AuthPromptModal 
          onClose={() => setShowAuthModal(false)}
          onSignIn={handleSignIn}
        />
      )}
    </div>
  );
};

export default MostSold;
