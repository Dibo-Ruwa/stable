import styled from "styled-components";
import { motion } from "framer-motion";
import Slider from "react-slick";
import bg from "../../../assets/feedbackBg.png";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 5%;
  height: 90vh;
  background: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  margin-bottom: 20px;
  @media screen and (max-width: 900px) {
    width: 60%;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 400;
  color: var(--primary);
  margin-bottom: 10px;
  @media screen and (max-width: 900px) {
    font-size: 15px;
  }
`;
export const SubTitle = styled.h2`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 10px;
  @media screen and (max-width: 900px) {
    font-size: 20px;
  }
`;

export const Navigation = styled.div`
  display: flex;
`;

export const NavButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 24px;
  color: #555;
  margin: 0 10px;
  cursor: pointer;
  outline: none;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.025);
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: #fff;
  position: absolute;
  top: -150px;
  right: 5%;

  &.left {
    right: 15%;
  }

  @media screen and (max-width: 900px) {
    width: 34px;
    height: 34px;
    font-size: 15px;
    top: -80px;

    &.left {
      right: 15%;
    }

    &.right {
      right: 0;
    }
  }

  &:disabled {
    color: #ccc;
    cursor: not-allowed;
  }
`;

export const Carousel = styled(Slider)`
  width: 100%;
  position: relative;

  .slick-slide {
    margin: 0 10px;
  }
  .slick-list {
    margin: 0 -10px;
  }
`;

export const Item = styled(motion.div)`
  padding: 30px;

  background: #fff;
  border-radius: 20px;

  img {
    width: 50px;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 900px) {
        width: 300px;
}
`;

export const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ItemAuthor = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: var(--primary);
  letter-spacing: 1px;
`;

export const ItemText = styled.p`
  font-size: 20px;
  color: var(--sub-text);
  margin: 0;
`;
