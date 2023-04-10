import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import img1 from "../../assets/one.png";
import img2 from "../../assets/two.png";
import { MdOutlineClose } from "react-icons/md";
import { ImSpinner9 } from "react-icons/im";

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled(motion.div)`
  width: auto;
  height: auto;
  background-color: white;
  border-radius: 10px;
  display: flex;
  padding: 5%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
`;

const Content = styled.p`
  font-size: 18px;
  line-height: 1.5;
  text-align: center;
  padding: 0 20px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  background-color: var(--primary);
  color: white;
  border: none;
  font-size: 16px;
  font-weight: bold;
  margin-top: 20px;
  cursor: pointer;
`;
const CloseButton = styled.button`
  position: absolute;
  top: 5%;
  background: 0 0;
  right: 5%;
  border: none;
  font-size: 26px;
`;

const ImageWrapper = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  font-size: 35px;

  .icon {
    color: var(--primary);
    margin-left: 25px;
  }
`;

const Image = styled.img`
  width: 160px;
  height: 160px;
`;

const Text = styled(motion.p)`
  font-size: 12px;
  margin-top: 20px;
`;

const DiscountModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => setIsOpen(true), 5000);
    return () => clearTimeout(timeoutId);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const overlayVariants = {
    initial: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  const modalVariants = {
    initial: {
      opacity: 0,
      y: "-100%",
    },
    visible: {
      opacity: 1,
      y: "0%",
    },
    exit: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
      },
    },
  };

  const imageVariants = {
    initial: {
      opacity: 0,
      scale: 0.8,
    },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.5,
        duration: 1,
      },
    }),
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
      },
    },
  };

  const textVariants = {
    initial: {
      scale: 0.5,
    },
    visible: {
      scale: 1,
      transition: {
        duration: 1,
        yoyo: Infinity,
      },
    },
  };

  return (
    <>
      {isOpen && (
        <Overlay
          initial="initial"
          animate="visible"
          variants={overlayVariants}
          onClick={handleClose}
        >
          <ModalWrapper
            variants={modalVariants}
            onClick={(e) => e.stopPropagation()}
          >
            <CloseButton  onClick={handleClose}>
              <MdOutlineClose />
            </CloseButton>

            <ImageWrapper>
              <motion.div variants={imageVariants} custom={0}>
                <Image src={img1} />
              </motion.div>
              <motion.div className="icon">
                <ImSpinner9 />
              </motion.div>

              <motion.div variants={imageVariants} custom={1}>
                <Image src={img2} />
              </motion.div>
            </ImageWrapper>

            <Title>Order now and get 30% discount for the next 6 weeks</Title>
            <Content>
              Our Representative will be right on the way to pick up your laundry
            </Content>
            <Button onClick={handleClose}>Order Now!</Button>
            <Text variants={textVariants}>Terms and Conditions apply</Text>
          </ModalWrapper>
        </Overlay>
      )}
    </>
  );
};

export default DiscountModal;
