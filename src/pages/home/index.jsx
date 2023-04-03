import React from "react";
import Navbar from "../../containers/navbar";
import Hero from "../../containers/hero";
import About from "../../containers/about";
import WhyUs from "../../containers/why_us";
import HowItWorks from "../../containers/how_it_works";
// import FeedbackCarousel from "../../containers/feedbacks";
import FAQPage from "../../containers/faq";
import Footer from "../../components/footer";


const Index = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <WhyUs />
      <HowItWorks />
      {/* <FeedbackCarousel feedbacks={feedbacks} /> */}
      <FAQPage />
      <Footer />
    </div>
  );
};

export default Index;
