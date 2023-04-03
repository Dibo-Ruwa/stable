import React, { useState, useEffect } from "react";
import { NavItem, NavLink, NavLinksContainer } from "./styles";
import { transition } from "../../exports";

const navLinks = [
  { id: "home", name: "Home" },
  { id: "about", name: "About" },
  { id: "why_us", name: "Why Us" },
  { id: "faq", name: "faq" },
  { id: "contact", name: "Contact Us" },
];

const sidebar = {
  open: (height = 1000) => ({
    x: "-200%",
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      ...transition,
      duration: .5,
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    x: 0,
    clipPath: "circle(0px at 145px 50px)",
    transition: {
      ...transition,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const NavLinks = ({ open, setOpen }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsMobile(screenWidth <= 900);
      if (screenWidth > 900) {
        setOpen(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setOpen, setIsMobile]);

  return (
    <NavLinksContainer
      initial={false}
      animate={isMobile ? (open ? "open" : "closed") : false}
      variants={sidebar}
    >
      {navLinks.map((link) => (
        <NavItem key={link.id}>
          <NavLink to={link.id} smooth={true} duration={500} onClick={() => setOpen(!open)}>
            {link.name}
          </NavLink>
        </NavItem>
      ))}
    </NavLinksContainer>
  );
};

export default NavLinks;
