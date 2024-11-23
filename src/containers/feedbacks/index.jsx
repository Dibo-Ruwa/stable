import React from "react";
import PropTypes from "prop-types";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Wrapper,
  Header,
  Title,
  Carousel,
  Item,
  ItemContent,
  ItemAuthor,
  ItemText,
  SubTitle,
  NavButton,
  SliderWrapper,
} from "./styles";
import quote from "../../assets/Quote Left.svg";

const FeedbackCarousel = ({ feedbacks }) => {
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <NavButton className="right" onClick={onClick}>
        <BsArrowRight />
      </NavButton>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <NavButton className="left" onClick={onClick}>
        <BsArrowLeft />
      </NavButton>
    );
  }

  const settings = {
    // className: "center",
    // centerMode: true,
    infinite: true,
    slidesToShow: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <Wrapper>
      <Header>
        <Title>Some Feedbacks</Title>
        <SubTitle>Happy Client Says About Our Company</SubTitle>
      </Header>
      <SliderWrapper>
          <Carousel {...settings}>
        {feedbacks.map((feedback, index) => (
          <Item key={index}>
            <img src={quote} alt="" />
            <ItemContent>
              <ItemText>{feedback.text}</ItemText>
              <ItemAuthor>{feedback.author}</ItemAuthor>
            </ItemContent>
          </Item>
        ))}
      </Carousel>
      </SliderWrapper>
    
    </Wrapper>
  );
};

FeedbackCarousel.propTypes = {
  feedbacks: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FeedbackCarousel;
