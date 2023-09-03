import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Bag from "../../assets/bag.png";
import { MdOutlineClose } from "react-icons/md";

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
  border-radius: 30px;
  display: flex;
  padding: 2%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  max-width: 500px;
  z-index: 998;
  @media screen and (max-width: 900px) {
    width: 95%;
  }
`;

const Title = styled.h2`
  font-size: 20px;
  margin: 20px 20px;
  text-align: center;
  color: #333333;
  /* width: 50%; */
  p{
    &.order{
      font-size: 30px;
      span{
        font-size: 30px;
      }
    }
    span{
      color: #2F6634;
      font-size: 30px;

      .order{
        cursor: pointer;
        
      }
    }
  }


 @media screen and (max-width: 900px) {
  font-size: 16px;
  margin-bottom: 20px;
  text-align: center;
  p{
    span{
      color: #2F6634;
      font-size: 16px;
      .order{
        cursor: pointer
      }
    }
  }
 }
`;

const Content = styled.p`
  font-size: 16px;
  line-height: 1.5;
  text-align: center;
  padding: 0 20px;
  margin-bottom: 20px;
  @media screen and (max-width: 900px) {
    font-size: 16px;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  background-color: var(--primary);
  color: white;
  border: none;
  font-size: 18px;
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
  cursor: pointer;
  z-index: 999;
  @media screen and (max-width: 900px) {
    right: 10%;
  }
`;

const ImageWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  font-size: 35px;

  .icon {
    color: var(--primary);
    margin-left: 25px;
  }

  @media screen and (max-width: 900px) {
    .icon {
      color: var(--primary);
      // margin-left: 5px;
    }
    .img2{
      margin-right: 40px;
    }
  }
`;

const Image = styled.img`
  width: 220px;
  height: 180px;

  @media screen and (max-width: 768px) {
  width: 120px;
  height: 120px;
  }
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

  /* const imageVariants = {
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
  }; */

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
              <Image src={Bag} alt="laundry bag" />
            </ImageWrapper>


            <Title> 
              <p className='order'> With just <span>N4990, </span>  </p>
              <p>grab our exclusive Dibo Ruwa laundry bag. </p>
              <p>Say goodbye to laundry stress, forever!</p>                
              </Title>
            <Content>
              Our Representative will be right on the way to pick up and deliver your laundry twice a month
            </Content>
            <Button onClick={() => {
              window.open("https://wa.link/fjurh5");
              handleClose();
            }} >Order Now</Button>
            <Text variants={textVariants}>Terms and Conditions apply</Text>
          </ModalWrapper>
        </Overlay>
      )}
    </>
  );
};

export default DiscountModal;
