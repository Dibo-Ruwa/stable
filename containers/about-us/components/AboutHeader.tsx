"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import "../AboutUs.css";

interface serviceChange {
  image: string;
  title: string;
}

const Services: serviceChange[] = [
  {
    image: "/images/image 15.png",
    title: "Moving",
  },
  {
    image: "/images/image 15.png",
    title: "Food",
  },
  {
    image: "/images/image 15.png",
    title: "Groceries",
  },
  {
    image: "/images/image 15.png",
    title: "Laundry",
  },
  {
    image: "/images/image 15.png",
    title: "Cleaning",
  },
];

export const AboutHeader = () => {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);

  // Cycle through services every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentServiceIndex((prevIndex) =>
        prevIndex === Services.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup interval
  }, []);

  const currentService = Services[currentServiceIndex];

  return (
    <section className="AboutHeader_Container">
      <div className="Header_LeftContainer">
        <div className="Header_logo">
          <Image
            src="/images/Frame 2608738.png"
            alt="Logo"
            width={218.48}
            height={59.91}
            className="Dibo_ellipse_Logo"
          />
        </div>
        <div className="AboutHeader_content">
          <p className="AboutHeader_Title">
            DIBORUWA is your go-to solution for{" "}
            <AnimatePresence mode="wait">
              <motion.span
                key={currentService.title} // Unique key for animation
                initial={{ y: 30, opacity: 0 }} // Start off-screen below
                animate={{ y: 0, opacity: 1 }} // Slide up into view
                exit={{ y: -30, opacity: 0 }} // Slide out upwards
                transition={{ duration: 0.5 }} // Smooth transition
                className="AboutHeader_ChangingText"
              >
                {currentService.title}{" "}
                <Image
                  src={currentService.image}
                  alt={currentService.title}
                  width={24}
                  height={24}
                  className="AboutHeader_ChangingImage"
                />
              </motion.span>
            </AnimatePresence>
          </p>
          <p className="AboutHeader_Description">
            we've been committed to simplifying your life by offering a range of
            high-quality, convenient services.
          </p>
        </div>
        <div className="AboutHeader_AbsoluteImage">
          <Image
            src="/images/image 20.png"
            alt="Atom"
            width={456}
            height={456}
            className="AboutHeader_AtomImg"
          />
        </div>
      </div>
      <div className="Header_RightContainer">
        <Image
          src="/images/Ellipse 7.png"
          alt="Ellipse"
          width={157.437}
          height={100.577}
          className="Ellipse_top"
        />
        <Image
          src="/images/Rectangle 26.png"
          alt=""
          width={783.371}
          height={633}
          className="People_Image"
        />
        <Image
          src="/images/Ellipse 6.png"
          alt="Ellipse"
          width={157.437}
          height={100.577}
          className="Ellipse_bottom"
        />
      </div>
    </section>
  );
};
