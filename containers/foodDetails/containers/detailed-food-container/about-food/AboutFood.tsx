import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./about-food.module.css";
import { IoIosStar } from "react-icons/io";
import { MdOutlineTimer } from "react-icons/md";
import { AdditionBtn } from "./AdditionBtn";
import { Product, Extra, FoodData } from "@/utils/types/types";
import { CTADelivery } from "../cta-delivery/CTADelivery";
import { useCartItems } from "@/context/CartItems"; // Import the cart context
import useCartStore from "@/store/useCart.store";
import toast from "react-hot-toast";
import { FaShoppingCart, FaCheck } from 'react-icons/fa';
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import { AuthPromptModal } from '@/components/ui/AuthPromptModal/AuthPromptModal';
import { useRouter } from 'next/navigation';
import VendorModal from '@/component/modals/VendorModal';

interface CartDropdownProps {
  selectedItem: FoodData | null; // Allow null
}

const url = process.env.NEXT_PUBLIC_ADMIN_URL;

export const AboutFood: React.FC<CartDropdownProps> = ({ selectedItem }) => {
  const [foodDetails, setFoodDetails] = useState<FoodData | null>(null);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [isProductInCart, setIsProductInCart] = useState<boolean>(false);
  const [extrasQuantities, setExtrasQuantities] = useState<Record<string, number>>({});
  const [isAdding, setIsAdding] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isCheckingCart, setIsCheckingCart] = useState(false);
  const [vendorModal, setVendorModal] = useState({
    isOpen: false,
    currentVendor: ''
  });

  // Move useSession to component level
  const { data: session } = useSession();
  const { setIsCart } = useCartItems();
  const { addToCartWithExtras, cartItems, getCurrentVendor, } = useCartStore(); // Add cartItems from store
  const router = useRouter();

  useEffect(() => {
    if(!selectedItem?._id){
      window.location.href = '/food';
    }
  }, [selectedItem])

  useEffect(() => {
    const fetchFoodData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${url}/api/products/${selectedItem?._id}`);
        const data = response.data?.data;
        setFoodDetails(data);
      } catch (error) {
        console.error("Error fetching food data:", error);
        setError("Failed to fetch food data");
      } finally {
        setLoading(false);
      }
    };

    if (selectedItem?._id) {
      fetchFoodData();
    }
  }, [selectedItem?._id, url]);

  // Fix the cart check logic to use API
  useEffect(() => {
    const checkItemInCart = async () => {
      if (!selectedItem || !session) return;
      
      try {
        setIsCheckingCart(true);
        const response = await axios.get('/api/cart');
        
        if (response.data.cart) {
          const isInCart = response.data.cart.cartItems.some((item: any) => 
            item.id === selectedItem._id || 
            item._id === selectedItem._id
          );
          setIsProductInCart(isInCart);
        }
      } catch (error) {
        console.error('Error checking cart:', error);
      } finally {
        setIsCheckingCart(false);
      }
    };

    checkItemInCart();
  }, [selectedItem?._id, session]);

  // Handle "Add to Cart" button click
  const handleAddToCart = async () => {
    if (!selectedItem || isProductInCart || isAdding) return;

    if (!session) {
      setShowAuthModal(true);
      return;
    }

    try {
      setIsAdding(true);
      
      // Check for current vendor
      const currentVendor = getCurrentVendor();
      if (currentVendor && currentVendor !== selectedItem.vendor.name) {
        setVendorModal({
          isOpen: true,
          currentVendor: currentVendor
        });
        setIsAdding(false);
        return;
      }

      // Format the product for cart according to the new structure
      const cartProduct: FoodData = {
        _id: selectedItem._id,
        title: selectedItem.title,
        price: selectedItem.price,
        imageUrl: selectedItem.imageUrl || "/placeholder.png", // Ensure imageUrl is used
        prep_time: selectedItem.prep_time || "",
        categories: selectedItem.categories || [],
        slug: selectedItem.slug,
        vendor: {
          _id: selectedItem.vendor._id,
          name: selectedItem.vendor.name,
          owner: selectedItem.vendor.owner,
          branch: selectedItem.vendor.branch.map(branch => ({
            location: {
              city: {
                _id: branch.location.city._id,
                name: branch.location.city.name
              },
              region: {
                _id: branch.location.region._id,
                name: branch.location.region.name
              }
            },
            _id: branch._id,
            deliveries: branch.deliveries.map(delivery => ({
              region: {
                _id: delivery.region._id,
                name: delivery.region.name
              },
              price: delivery.price,
              _id: delivery._id
            }))
          })),
          operations: selectedItem.vendor.operations.map(operation => ({
            day: operation.day,
            openingHour: operation.openingHour,
            closingHour: operation.closingHour,
            _id: operation._id
          }))
        },
        discount: selectedItem.discount || 0,
        extras: selectedItem.extras || [],
        createdAt: selectedItem.createdAt,
        updatedAt: selectedItem.updatedAt,
        __v: selectedItem.__v,
        id: selectedItem.id,
        quantity: selectedItem.quantity
      };

      console.log("Cart data before adding:", cartProduct, extrasQuantities);

      const extras = Object.keys(extrasQuantities).map(extraId => {
        const extra = selectedItem.extras.find(extra => extra._id === extraId);
        if (!extra) return null;
        return {
          ...extra,
          quantity: extrasQuantities[extraId]
        };
      }).filter(extra => extra !== null) as Extra[];

      await addToCartWithExtras(cartProduct, extras);

      setIsProductInCart(true);
      setIsCart(true);
      toast.success('Added to cart successfully');
    } catch (error) {
      console.error('Failed to add item to cart:', error);
      toast.error('Failed to add item to cart. Please try again.');
    } finally {
      setIsAdding(false);
    }
  };

  const handleSignIn = () => {
    setShowAuthModal(false);
    router.push('/sign-in');
  };

  const handleCloseVendorModal = () => {
    setVendorModal({
      isOpen: false,
      currentVendor: ''
    });
  };

  // Handle extra quantity changes
  const handleExtraQuantityChange = (extraId: string, change: number) => {
    if (!selectedItem) return;

    const extra = selectedItem.extras.find(e => e._id === extraId);
    if (!extra) return;

    const currentQuantity = extrasQuantities[extraId] || 0;
    const newQuantity = Math.max(0, currentQuantity + change);

    setExtrasQuantities(prev => {
      const updatedQuantities = {
        ...prev,
        [extraId]: newQuantity
      };

      const updatedExtras = Object.keys(updatedQuantities).map(extraId => {
        const extra = selectedItem.extras.find(extra => extra._id === extraId);
        if (!extra) return null;
        return {
          ...extra,
          quantity: updatedQuantities[extraId]
        };
      }).filter(extra => extra !== null) as Extra[];

      console.log("Updated cart data:", {
        ...selectedItem,
        extras: updatedExtras
      });

      return updatedQuantities;
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!foodDetails) {
    return <div>No food details available.</div>;
  }

  // Update button loading state
  const buttonState = isCheckingCart ? "checking" : isAdding ? "adding" : isProductInCart ? "added" : "default";

  // console.log("Selected item:", selectedItem);
  // console.log("Extras quantities:", extrasQuantities);
  
  return (
    <>
      <div className={styles.about_container}>
        <div className={styles.about_content}>
          <button
            className={
              isCheckingCart 
                ? styles.button_loading
                : isAdding 
                  ? styles.button_loading 
                  : isProductInCart 
                    ? styles.added_to_cart 
                    : styles.add_to_cart_button
            }
            onClick={handleAddToCart}
            disabled={isCheckingCart || isProductInCart || isAdding}
          >
            {isCheckingCart ? (
              <span>Checking...</span>
            ) : isAdding ? (
              <span>Adding to Cart...</span>
            ) : isProductInCart ? (
              <>
                <FaCheck className={styles.button_icon} />
                <span>Added to Cart</span>
              </>
            ) : (
              <>
                <FaShoppingCart className={styles.button_icon} />
                <span>Add to Cart</span>
              </>
            )}
          </button>
          <div className={styles.frsr_time}>
            <div className={styles.food_rating}>
              <p className={styles.ptext}>{foodDetails?.title}</p>
              <div className={styles.dot}></div>
              <IoIosStar className={styles.rating_star} />
              <div className={styles.rating_num}>4.5</div>
            </div>
            <div className={styles.food_timer}>
              <MdOutlineTimer className={styles.food_time_icon} />
              <div className={styles.time_num}>
                {foodDetails?.prep_time}{" "}
                {foodDetails?.prep_time == "1" || foodDetails?.prep_time == "0"
                  ? "min"
                  : "mins"}
              </div>
            </div>
          </div>
          <p className={styles.food_des}>
            Explore our mouthwatering menu featuring dishes from top restaurants.
            Each item lists preparation time, so you'll know when to expect your
            meal.
          </p>
          <div className={styles.ofd_lr}>
            {/* <div className={styles.ofd}>Offers Free Delivery</div> */}
            {/* <div className={styles.lr}>10 Liters remaining</div> */}
          </div>
          <AdditionBtn
            foodDetails={foodDetails}
            onExtraQuantityChange={handleExtraQuantityChange}
          />
        </div>
      </div>

      {showAuthModal && (
        <AuthPromptModal 
          onClose={() => setShowAuthModal(false)}
          onSignIn={handleSignIn}
        />
      )}

      <VendorModal 
        isOpen={vendorModal.isOpen}
        onClose={handleCloseVendorModal}
        currentVendor={vendorModal.currentVendor}
      />
    </>
  );
};