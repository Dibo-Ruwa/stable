"use client";
import { routes } from "@/constants";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { HiBars3 } from "react-icons/hi2";
import { VscClose } from "react-icons/vsc";
import { CaretDownIcon } from "@radix-ui/react-icons";
import { AuthModal } from "@/component/AuthModal";
import ServiceMenu from "@/component/serviceMenu";
import {
  Cta,
  LogoImage,
  MenuList,
  MobileMenu,
  Mobile,
  MobileMenuBackdrop,
  NavbarContainer,
  Toggle,
  SMCDI,
  NavbarFrame,
  Toast,
} from "./navbar.styles";
import UserDropdown from "@/component/userDropdown/UserDropdown";
import { useLocation } from "@/context/LocationProvider";
import { FaBagShopping } from "react-icons/fa6";
import { ImLocation } from "react-icons/im";
import { useSession } from "next-auth/react";
import useCartStore from "@/store/useCart.store";
import Cookies from "js-cookie";
import LocationModal from "@/component/newLocationModal/LocationModal";
import { FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";
import { CartDropdown } from "@/containers/CartDropdown/CartDropdown";
import { CartDropdownMobile } from "@/containers/CartDropdown/cartMobile";

const Navbar = () => {
  const { data: session, status } = useSession({
    required: false,
  });
  const pathname = usePathname();
  const router = useRouter();
  const { location } = useLocation();
  const { cartItems, getCart } = useCartStore(); // Use the store's state and actions
  const [showToast, setShowToast] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCartDropdownOpen, setIsCartDropdownOpen] = useState(false);
  const [authModal, setAuthModal] = useState<"signup" | "signin" | null>(null);
  const switchModal = (type: "signup" | "signin") => setAuthModal(type);
  const [companyName] = useState<string>("diboruwa");
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const cartDropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    getCart(); // Fetch cart data on mount
  }, [getCart]);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Call handleScroll on initial render
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openAuthModal = (type: "signup" | "signin") => setAuthModal(type);
  const closeAuthModal = () => setAuthModal(null);

  useEffect(() => {
    const checkModalVisibility = () => {
      const locationData = Cookies.get("diboruwa_location");
      const lastModalShown = Cookies.get("diboruwa_modal_timestamp");

      if (!locationData) {
        setIsLocationModalOpen(true);
      } else if (lastModalShown) {
        const lastShownTime = new Date(lastModalShown).getTime();
        const currentTime = new Date().getTime();
        const hoursSinceLastShown =
          (currentTime - lastShownTime) / (1000 * 60 * 60);

        // Open modal if more than 24 hours have passed
        if (hoursSinceLastShown >= 24) {
          setIsLocationModalOpen(true);
        }
      }
    };

    checkModalVisibility();
  }, []);

  const openLocationModal = () => setIsLocationModalOpen(true);
  const closeLocationModal = () => setIsLocationModalOpen(false);

  const triggerToast = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleCheckoutClick = () => {
    setIsCartDropdownOpen(false);
    router.push(`/food/checkout`); // Navigate to the item's page
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        cartDropdownRef.current &&
        !cartDropdownRef.current.contains(event.target as Node)
      ) {
        setIsCartDropdownOpen(false); // Close the dropdown if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [cartDropdownRef]);

  return (
    <>
      <NavbarContainer
        style={
          isScrolled
            ? {
                backdropFilter: "blur(20px)",
                background: "rgb(255, 255, 255)",
                borderBottom: "1px solid var(--primary-20)",
              }
            : {}
        }
      >
        <NavbarFrame>
          <div className="logo">
            <Link href="/" passHref>
              <LogoImage src="/logo.png" fill={true} alt="logo" />
            </Link>
          </div>
          
   
          <div className="mobile-cart-toggle">
            {cartItems.length > 0 && (
              <div className="cart">
                {cartItems.length >= 1 ? (
                  <div className="badge">{cartItems.length}</div>
                ) : (
                  <></>
                )}
                {isCartDropdownOpen ? (
                  <div
                    style={{
                      textDecoration: "none",
                      color: "var(--primary)",
                    }}
                  >
                    <p style={{ display: "none" }}></p>
                    <FaBagShopping className="cart_icon" />
                  </div>
                ) : (
                  <button
                    type="button"
                    style={{
                      textDecoration: "none",
                      color: "var(--primary)",
                    }}
                    onClick={() => {
                      // setIsCartDropdownOpen(true);
                      handleCheckoutClick()
                    }}
                  >
                    <FaBagShopping className="cart_icon" />
                  </button>
                )}

                {isCartDropdownOpen && (
                  <div ref={cartDropdownRef} className="CartDropdown_mobile">
                    <CartDropdownMobile setIsCartDropdownOpen={setIsCartDropdownOpen}/> {/* Use mobile cart dropdown */}
                  </div>
                )}
              </div>
            )}
            <Toggle onClick={() => setToggle((prev) => !prev)}>
              {toggle ? <VscClose /> : <HiBars3 />}
            </Toggle>
          </div>

          <MenuList className="menu">
            {routes.map((link, index) => {
              return (
                <li key={index}>
                  {link?.subroutes ? (
                    <SMCDI>
                      <ServiceMenu
                        trigger={link.name}
                        routes={link?.subroutes}
                      />
                      <CaretDownIcon className="icon" aria-hidden />
                    </SMCDI>
                  ) : (
                    <Link className="link" href={link.path}>
                      {link.name}
                    </Link>
                  )}
                </li>
              );
            })}
          </MenuList>
          <AnimatePresence>
            {toggle && (
              <>
                <MobileMenuBackdrop
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  onClick={() => setToggle((prev) => !prev)}
                ></MobileMenuBackdrop>
                <MobileMenu
                  initial={{ right: "-100%", opacity: 0 }}
                  animate={{ right: "0%", opacity: 1 }} // Adjusted to fit within the screen
                  exit={{ right: "-100%", opacity: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  {routes.map((link, index) => (
                    <li key={index}>
                      {link.subroutes ? (
                        <>
                          <ServiceMenu
                            toggle={() =>
                              setToggle((prev) =>
                                prev === true ? false : false
                              )
                            }
                            trigger={link.name}
                            routes={link?.subroutes}
                          />
                        </>
                      ) : (
                        <Link
                          className="link"
                          href={link.path}
                          
                          onClick={() =>
                            setToggle((prev) => (prev === true ? false : false))
                          }
                        >
                          {link.name}
                        </Link>
                      )}
                    </li>
                  ))}
                  {!session && (
                    <li>
                      <Link className="link" href={"/sign-in"}>
                        Sign In
                      </Link>
                    </li>
                  )}
                  {!session && (
                    <li>
                      <Link className="link" href={"/sign-up"}>
                        Sign Up
                      </Link>
                    </li>
                  )}
                  {!session && (
                    <Cta href="./partner" target="_blank">
                      Partner with us
                    </Cta>
                  )}
                  {session && (
                    <div
                      className="SA_location"
                      aria-label="User location"
                      onClick={openLocationModal}
                      style={{ cursor: "pointer" }}
                    >
                      <ImLocation className="SA_location_icon" />
                      <p className="SA_location_text">
                        {location?.state && location?.region ? (
                          `${location?.state}, ${location?.region}`
                        ) : (
                          <span onClick={() => router.push("/")}>
                            Reload to select your location
                          </span>
                        )}
                      </p>
                    </div>
                  )}
                  {session && <UserDropdown toggle={() => setToggle(false)} />}
                </MobileMenu>
              </>
            )}
          </AnimatePresence>
          <MenuList>
            {!session && (
              <li>
                <Link
                  href="/sign-up"
                  style={{
                    color: "var(--green-bg)",
                  }}
                  className="link"
                >
                  Sign Up
                </Link>
              </li>
            )}
            {!session && (
              <li>
                <Link
                  href="/sign-in"
                  style={{
                    color: "var(--green-bg)",
                  }}
                  className="link"
                >
                  Sign In
                </Link>
              </li>
            )}
            {!session && (
              <Cta href="./partner" target="_blank">
                Partner with us
              </Cta>
            )}

            {session && (
              <div
                className="SA_location"
                aria-label="User location"
                onClick={openLocationModal}
                style={{ cursor: "pointer" }}
              >
                <ImLocation className="SA_location_icon" />
                <p className="SA_location_text">
                  {location?.state && location?.region ? (
                    `${location?.state}, ${location?.region}`
                  ) : (
                    <span onClick={() => router.push("/")}>
                      Reload to select your location
                    </span>
                  )}
                </p>
              </div>
            )}

            {session && <UserDropdown toggle={() => setToggle(false)} />}
            {session && cartItems.length > 0 && (
              <div className="cart">
                {cartItems.length >= 1 ? (
                  <div className="badge">{cartItems.length}</div>
                ) : (
                  <></>
                )}
                {isCartDropdownOpen ? (
                  <div
                    style={{
                      textDecoration: "none",
                      color: "var(--primary)",
                    }}
                  >
                    <p style={{ display: "none" }}></p>
                    <FaBagShopping className="cart_icon" />
                  </div>
                ) : (
                  <button
                    type="button"
                    style={{
                      textDecoration: "none",
                      color: "var(--primary)",
                    }}
                    onClick={() => {
                      // setIsCartDropdownOpen(true);
                      handleCheckoutClick()
                    }}
                  >
                    <FaBagShopping className="cart_icon" />
                  </button>
                )}

                {isCartDropdownOpen && (
                  <div ref={cartDropdownRef} className="CartDropdown">
                    <CartDropdown setIsCartDropdownOpen={setIsCartDropdownOpen}/> {/* Use mobile cart dropdown */}
                  </div>
                )}
              </div>

            )}
          </MenuList>
          {/* Render AuthModal based on state */}

          {authModal && (
            <AuthModal
              type={authModal}
              closeModal={closeAuthModal}
              switchModal={switchModal}
            />
          )}
        </NavbarFrame>
      </NavbarContainer>
      {isLocationModalOpen && (
        <LocationModal
          isOpen={isLocationModalOpen}
          onClose={closeLocationModal}
          onShowToast={triggerToast}
        />
      )}

      {showToast && (
        <Toast $isVisible={showToast}>
          <FaCheckCircle />
          Location successfully updated!
        </Toast>
      )}
    </>
  );
};

export default Navbar;
