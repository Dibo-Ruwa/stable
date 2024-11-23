import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./newsletter.css";
const Newsletter: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show the button when the user scrolls down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <section className="newsletter_container">
      <div className="newsletter_width">
        <div className="newsletter_content">
          <p className="newsletter-text">Subscribed to Our Newsletter</p>
          <div className="newsletter-box">
            <input
              type="text"
              placeholder="Chikeziekelvin24@gmail.com"
              required
              className="newsletter_input"
            />
            <button className="newsletter-btn" type="submit">
              Subscribe
            </button>
          </div>
        </div>
        <div className="newsletter-back-to-top">
          {isVisible && (
            <div className="scroll-to-top" onClick={scrollToTop}>
              <FaArrowUp className="to-top-icon" />
              <p>Back to Top</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
