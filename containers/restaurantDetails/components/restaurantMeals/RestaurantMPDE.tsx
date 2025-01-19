import React, { useState, useEffect, useCallback, useMemo } from "react";
import "./restaurant-meal.css";
import axios from "axios";
import { debounce } from "lodash";
import { MdOutlineTimer } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { Toast } from "@/lib/Toast";
import toast from "react-hot-toast";
import useCartStore from "@/store/useCart.store";
import VendorModal from "@/component/modals/VendorModal";

type TabType =
  | "All"
  | "Rice and Grain"
  | "Protein"
  | "Swallow"
  | "Drinks"
  | "Snacks and Fries"
  | "Extras";

interface RestaurantMPDEProps {
  activeButton: string; // Accept the active button state
  searchQuery: string;
}

export const RestaurantMPDE: React.FC<RestaurantMPDEProps> = ({
  activeButton,
  searchQuery,
}) => {
  const [activeTab, setActiveTab] = useState<TabType>("All");
  const [visibleItems, setVisibleItems] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(true);
  const [showToast, setShowToast] = useState(false);
  const [vendorModal, setVendorModal] = useState({
    isOpen: false,
    currentVendor: "",
  });
  const { addToCartWithExtras, getCurrentVendor } = useCartStore();
  const router = useRouter();

  useEffect(() => {
    localStorage.setItem("activeTab", activeTab);
  }, [activeTab]);

  useEffect(() => {
    const storedActiveTab = localStorage.getItem("activeTab");
    if (storedActiveTab) {
      setActiveTab(storedActiveTab as TabType);
    }
  }, []);

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    setLoading(true);
    setVisibleItems([]);
    setPage(1);
    setHasMore(true);
    fetchData(tab, 1);
  };

  const fetchData = useCallback(
    async (tab: TabType, page: number) => {
      if (loadingMore || !hasMore) return;

      setLoadingMore(true);

      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_ADMIN_URL}/api/products?type=food`,
          {
            params: {
              page,
              limit: 20,
              search: tab === "All" ? undefined : tab.toLowerCase(),
            },
          }
        );

        const newData = response.data?.data;
        const pagination = response.data?.pagination;

        if (newData.length > 0) {
          setVisibleItems((prevItems) => [...prevItems, ...newData]);
          setPage((prevPage) => prevPage + 1);
          setHasMore(pagination?.hasNextPage || false);
        } else {
          setHasMore(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        toast.error("Failed to fetch data. Please try again.");
      } finally {
        setLoadingMore(false);
        setLoading(false);
      }
    },
    [loadingMore, hasMore]
  );

  useEffect(() => {
    setVisibleItems([]);
    setPage(1);
    setHasMore(true);
    setLoading(true);
    fetchData(activeTab, 1);
  }, [searchQuery, activeButton]);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;

      if (scrollHeight - (scrollTop + clientHeight) < 700 && !loadingMore) {
        fetchData(activeTab, page);
      }
    };

    const debouncedScroll = debounce(handleScroll, 200);
    window.addEventListener("scroll", debouncedScroll);
    return () => window.removeEventListener("scroll", debouncedScroll);
  }, [fetchData, loadingMore, page]);

  const uniqueItems = useMemo(() => {
    const seen = new Set();
    return visibleItems.filter((item) => {
      if (seen.has(item._id)) {
        return false;
      }
      seen.add(item._id);
      return true;
    });
  }, [visibleItems]);

  const handleItemClick = (item: any) => {
    // Handle item click logic
  };

  const handleItemAddToCart = async (item: any) => {
    try {
      const currentVendor = getCurrentVendor();

      if (currentVendor && currentVendor !== item.vendor.name) {
        setVendorModal({
          isOpen: true,
          currentVendor: currentVendor,
        });
        return;
      }

      const itemWithExtras = {
        ...item,
        extras: item.extras ?? [],
      };

      await addToCartWithExtras(itemWithExtras, itemWithExtras.extras);
      setShowToast(true);
    } catch (error: any) {
      console.error("Error adding item to cart:", error);
      toast.error(error.message || "Failed to add item to cart");
    }
  };

  const handleCloseVendorModal = () => {
    setVendorModal({
      isOpen: false,
      currentVendor: "",
    });
  };

  return (
    <div className="MPDE_Container">
      <div className="MPDE_Tabs">
        {[
          "All",
          "Rice and Grain",
          "Protein",
          "Swallow",
          "Drinks",
          "Snacks and Fries",
          "Extras",
        ].map((tab) => (
          <div
            key={tab}
            className={`MPDE_Tab ${activeTab === tab ? "Active" : ""}`}
            onClick={() => handleTabChange(tab as TabType)}
          >
            <p className="MPDE_TabText">{tab}</p>
            {activeTab === tab && <div className="MPDE_ActiveTabLine"></div>}
          </div>
        ))}
      </div>
      <hr />
      {loading ? (
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
      ) : uniqueItems.length === 0 ? (
        <p
          style={{
            textAlign: "center",
            fontSize: "30px",
            fontWeight: 600,
            marginTop: "20px",
            background: "#43e656",
          }}
        >
          No meal found
        </p>
      ) : (
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
                      {item.title?.slice(0, 10)}...
                    </small>
                    <div className="mostsold-card_dot"></div>
                    <div className="mostsold-card_rating">
                      <FaStar className="mostsold-card_star" />
                      <small className="mostsold-card_ratingNum">4.5</small>
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
                        {item?.prep_time == "1" || item?.prep_time == "0"
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
                          {item?.prep_time == "1" || item?.prep_time == "0"
                            ? "min"
                            : "mins"}
                        </p>
                      </span>
                    </div>
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
      )}
      {loadingMore && (
        <p style={{ textAlign: "center", marginTop: "20px" }}>
          Loading more meals...
        </p>
      )}
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
