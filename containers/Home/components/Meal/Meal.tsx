"use client";
import React, { useState, useEffect } from "react";
import "./meal.css";
import Link from "next/link";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaBagShopping } from "react-icons/fa6";
import { MdOutlineTimer } from "react-icons/md";
import { RiArrowRightSLine } from "react-icons/ri";
import { Button } from "@/component/shared/Button";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useFoodItem } from "@/context/FooItemProvider";
import useCartStore from "@/store/useCart.store";
import toast from "react-hot-toast";
import { Toast } from "@/lib/Toast";
import VendorModal from "@/component/modals/VendorModal";
import { Extra } from "@/utils/types/types"; // Import the Extra type

// Define the type for a food item
export interface FoodItem {
  _id: string;
  title: string;
  prep_time: string;
  categories: string[];
  price: number;
  totalPrice?: number;
  imageUrl: string;
  vendor: {
    _id: string;
    name: string;
    owner: string;
    branch: {
      location: {
        city: {
          _id: string;
          name: string;
        };
        region: {
          _id: string;
          name: string;
        };
      };
      _id: string;
      deliveries: {
        region: {
          _id: string;
          name: string;
        };
        price: number;
        _id: string;
      }[];
    }[];
    operations: {
      day: string;
      openingHour: string;
      closingHour: string;
      _id: string;
    }[];
  };
  discount: number;
  extras: Extra[];
  createdAt: string;
  updatedAt: string;
  slug: string;
  __v: number;
  id: string;
  quantity?: number;
}

export default function Meal(): JSX.Element {
  const { setSelectedItem } = useFoodItem();
  const { cartItems, addToCartWithExtras, getCurrentVendor } = useCartStore();

  const router = useRouter();

  const [activePrepTime, setActivePrepTime] = useState<string>("30mins");
  const [food, setFood] = useState<FoodItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [vendorModal, setVendorModal] = useState({
    isOpen: false,
    currentVendor: "",
  });
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_ADMIN_URL}/api/products?type=food`,
          {
            params: {
              page: 1,
              limit: 20,
            },
          }
        );

        const newData = response.data?.data;
        if (Array.isArray(newData)) {
          const transformedData = newData.map((item: any) => ({
            _id: item._id,
            title: item.title,
            prep_time: item.prep_time,
            categories: item.categories,
            price: item.price,
            imageUrl: item.imageUrl,
            vendor: item.vendor,
            discount: item.discount,
            extras: item.extras || [],
            createdAt: item.createdAt,
            updatedAt: item.updatedAt,
            slug: item.slug,
            __v: item.__v,
            id: item.id,
          }));
          setFood(transformedData.slice(0, 4));
        } else {
          console.error("Invalid data format:", newData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleItemClick = (item: FoodItem) => {
    setSelectedItem(item);
    console.log(item);
    router.push(`/food/checkout`);
  };

  const handleItemAddToCart = async (item: FoodItem) => {
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

  if (loading) {
    return <p>Loading meals...</p>;
  }

  return (
    <div>
      <div className="meal">
        <div className="hero_frame">
          <div className="duration">
            <p style={{ fontSize: "1.3rem", color: "black" }}>Meals</p>
          </div>
          <div className="FOODMeal_card">
          {food.map((item) => (
              <div key={item?._id} 
              style={{
                cursor:"pointer",
              }}
              className="FOODCard">
              <div 
                  onClick={() => handleItemClick(item)}
              
              className="FOODCard-img">
           
                <img
                  className=""
                  src={item.imageUrl}
                  alt="Chef preparing food"
                />
              </div>
              <div style={{ 
                marginTop: "1rem",
                backgroundColor: "#fff",

              }} >
                <div 
                    onClick={() => handleItemClick(item)}

                className="meal-dis">
                  <div>
                    <div>
                      <p className="FoodMeal-dis">{item.title}</p>
                      <div className="meal-dot"></div>
                      <p className="FoodMeal-disNum">4.5</p>
                    </div>
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
                      className="FoodTime"
                    >
                      {item.prep_time} {item.prep_time === '1' ? "min" : "mins"}
                    </p>
                  </div>
                </div>
                <div className="price">
                  <p>₦{item.price}</p>
                  <p
                    style={{
                      backgroundColor: "#4BB149",
                      padding: "4px 20px",
                      borderRadius: "20px",
                    }}
                    onClick={() => handleItemAddToCart(item)}

                  >
                    <FaBagShopping
                      style={{
                        color: "white",
                      }}
                    />
                  </p>
                </div>
              </div>
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
            <RiArrowRightSLine style={{ fontSize: "1.6rem", marginTop: 2 }} />
          </Link>
        </div>
      </div>
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
}