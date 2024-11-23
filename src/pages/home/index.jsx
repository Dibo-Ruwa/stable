import React from "react";
import Navbar from "../../containers/navbar";
import Hero from "../../containers/hero";
import About from "../../containers/about";
import WhyUs from "../../containers/why_us";
import HowItWorks from "../../containers/how_it_works";
import FeedbackCarousel from "../../containers/feedbacks";
import FAQPage from "../../containers/faq";
import Footer from "../../components/footer";
import { feedbacks } from "../../exports";
import styled from "styled-components";

const Container = styled.div`
   @media screen and (min-width: 1600px) {
        padding:5% 15%;
     }

`


const Index = () => {
  return (
    <Container>
      <Navbar />
      <Hero />
      <About />
      <WhyUs />
      <HowItWorks />
      <FeedbackCarousel feedbacks={feedbacks} />
      <FAQPage />
      <Footer />
    </Container>
  );
};

export default Index;
