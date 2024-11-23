import  { useState, useEffect } from 'react';

const ScrollDetector = ({ children }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      setVisible(scrolled <= 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return children(visible);
};

export default ScrollDetector;
