import React, { useState, useEffect } from "react";
import { Container } from "./styles/styles";
import Logo from "../../components/logo";
import NavLinks from "../../components/navLinks";
import Button from "../../components/button";
import Harmburger from "../../components/harmburger";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      setScroll(scrolled > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isTop = !scroll;

  return (
    <Container scroll={scroll} isTop={isTop}>
      <Logo />
      <NavLinks open={open} setOpen={setOpen} />
      <Harmburger open={open} setOpen={setOpen} />
      <div className="cta">
        <Button
          size="md"
          color={`var(--primary)`}
          bordered={true}
          text="Schedule a pickup"
          onClick={() => alert("Button clicked!")}
        />
      </div>
    </Container>
  );
}
