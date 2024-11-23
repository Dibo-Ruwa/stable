"use client";
import { routes } from "@/constants";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
// import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CaretDownIcon } from "@radix-ui/react-icons";
import ServiceMenu from "@/components/serviceMenu";
import { FaBagShopping } from "react-icons/fa6";
import { ImLocation } from "react-icons/im";

const Navbar = () => {
  // const pathname = usePathname();
  const [toggle, setToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full flex justify-between items-center px-5 py-4 h-[15vh] z-50 transition-all duration-200 ${
        isScrolled
          ? "backdrop-blur-lg bg-white border-b border-primary-20 h-[10vh]"
          : ""
      }`}
    >
      <div className="relative w-24 h-10">
        <Link href="/" passHref>
          <Image
            src="/logo.png"
            fill={true}
            alt="logo"
            className="object-contain"
          />
          <div className="absolute top-[-10px] left-[70%] bg-[#27a124] text-white rounded-2xl px-2 py-1 text-sm">
            beta
          </div>
        </Link>
      </div>

      <ul className="flex gap-8 items-center md:hidden">
        {routes.map((link, index) => (
          <li key={index}>
            {link?.subroutes ? (
              <div className="flex items-center gap-1">
                <ServiceMenu trigger={link.name} routes={link?.subroutes} />
                <CaretDownIcon className="text-gray-500" />
              </div>
            ) : (
              <Link
                href={link.path}
                className="text-gray-800 text-sm hover:bg-primary-20 rounded-md px-2 py-1"
              >
                {link.name}
              </Link>
            )}
          </li>
        ))}
      </ul>

      <AnimatePresence>
        {toggle && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute top-0 left-0 w-full h-full bg-primary-20 backdrop-blur-sm z-20"
              onClick={() => setToggle(false)}
            />
            <motion.ul
              initial={{ right: "-100%", opacity: 0 }}
              animate={{ right: "10%", opacity: 1 }}
              exit={{ right: "-100%", opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute top-[10vh] right-[20%] bg-white rounded-md z-50 w-[50%] p-6 flex flex-col gap-6 text-gray-600"
            >
              {routes.map((link, index) => (
                <li key={index}>
                  {link.subroutes ? (
                    <ServiceMenu trigger={link.name} routes={link?.subroutes} />
                  ) : (
                    <Link
                      href={link.path}
                      onClick={() => setToggle(false)}
                      className="text-gray-600 text-sm"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
              <li>
                <Link href="/signin" className="text-gray-600">
                  Sign In
                </Link>
              </li>
              <li>
                <Link href="/signup" className="text-gray-600">
                  Sign Up
                </Link>
              </li>
            </motion.ul>
          </>
        )}
      </AnimatePresence>

      <ul className="flex gap-8 items-center md:hidden">
        <li>
          <Link href="/signup" className="text-primary">
            Register
          </Link>
        </li>
        <li>
          <Link href="/signin" className="text-primary">
            Login
          </Link>
        </li>
        <Link
          href="https://admin.diboruwa.com/sign-in"
          target="_blank"
          className="bg-[#27a124] text-white px-4 py-2 rounded-md md:hidden inline"
        >
          Partner with us
        </Link>
        <div className="flex items-center gap-2">
          <ImLocation className="text-[#EF5A5A] w-7 h-7" />
          <p className="text-xs text-black">Tanke, Ilorin</p>
        </div>
        <div className="relative flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
          <span className="absolute top-0 right-0 w-5 h-5 bg-[#27a124] text-white text-xs rounded-full flex items-center justify-center">
            0
          </span>
          <Link href="/cart">
            <FaBagShopping className="text-[#27a124] w-6 h-6" />
          </Link>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
