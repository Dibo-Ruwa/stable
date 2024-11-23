"use client";
import HeroContainer from "@/component/shared/HeroContainer";
import React, { useState, useEffect, useMemo } from "react";
import {
  Container,
  FaqAccordionList,
  FaqSection,
  FeedBackSection,
  ServiceList,
  ServicesSection,
  WhyChooseUsColored,
  WhyChooseUsContent,
  WhyChooseUsImage,
  WhyChooseUsImageContainer,
  WhyChooseUsSection,
  WhyChooseUsText,
  WhyChooseUsTitle,
  HeroList,
  HeroListItem,
  HeroImageContainer,
  HeroImage,
} from "./home.styles";
import "./components/home.css";
import Button from "@/component/ui/button/Button";
import { FiPhoneCall } from "react-icons/fi";
import { accordionData, services } from "@/constants";
import ServiceCard from "@/component/serviceCard/ServiceCard";
import { assets } from "@/public/assets";
import Accordion from "@/component/ui/accordion/Accordion";
import NewsletterForm from "@/component/NewsletterForm";
import { motion } from "framer-motion";
import FeedbackCarousel from "@/component/feedBacksCarousel/FeedBacks";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import AccordionList from "@/component/AccordionList/AccordionList";
import ProductServices from "./components/ProductServices";
import RestAdvert from "./components/restAdvert/RestAdvert";
import Meal from "./components/Meal/Meal";
import Resturant from "./components/restCont/RestContent";
import FoodImage from "./components/foodImage/FoodImage";
import Groceries from "./components/Groceries/Groceries";
import Delivery from "./components/foodDelivery/Delivery";
import Partner from "./components/Partner/Partner";
import LaundryService from "./components/laundryService/LaundryService";
import GroomingService from "./components/groomingService/GroomingService";
import Cleaning from "./components/laundryService/Cleaning";
import Newsletter from "../partnerWithUs/component/newsletter/Newsletter";
import { Data } from "@/constants/index";

type ServiceName =
  | "Laundry chores."
  | "Cleaning duties"
  | "Cooking responsibilities"
  | "Moving/Packing stress";

const serviceTextColorMapping: Record<ServiceName, string> = {
  "Laundry chores.": "#3277a8",
  "Cleaning duties": "#e67300",
  "Cooking responsibilities": "#a67c00",
  "Moving/Packing stress": "#800080",
};

const Home: React.FC = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const serviceOptions: string[] = useMemo(
    () => [
      "Laundry chores.",
      "Cleaning duties",
      "Cooking responsibilities",
      "Moving/Packing stress",
    ],
    []
  );

  const [currentService, setCurrentService] = useState<ServiceName>(
    serviceOptions[0] as ServiceName
  );
  const [serviceIndex, setServiceIndex] = useState(0);

  const currentServiceTextColor =
    serviceTextColorMapping[currentService] || "defaultTextColor";

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (serviceIndex + 1) % serviceOptions.length;
      setServiceIndex(nextIndex);
      setCurrentService(serviceOptions[nextIndex] as ServiceName);
    }, 3000);

    return () => clearInterval(interval);
  }, [serviceIndex, serviceOptions]);

  // Extract the tags from the Data array
  const tags = useMemo(() => Data.map((item: { tag: any; }) => item.tag), []);

  const [selectedTag, setSelectedTag] = useState<string>(tags[0] || "Food");

  // Change the selectedTag every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedTag((prevTag) => {
        const currentIndex = tags.indexOf(prevTag);
        const nextIndex = (currentIndex + 1) % tags.length;
        return tags[nextIndex];
      });
    }, 4000); // 4000 milliseconds = 4 seconds

    return () => clearInterval(interval);
  }, [tags]);
  return (
    <>
      <div className="home-container">
        <div className="hero_frame">
          <ProductServices
            selectedTag={selectedTag}
            setSelectedTag={setSelectedTag}
            data={[]}
          />
        </div>
        <RestAdvert selectedTag={selectedTag} />
        <Resturant />
        <Meal />
        <Delivery />
        <FoodImage />
        <LaundryService />
        <Cleaning />
        <GroomingService />
        <Groceries />
        <Partner />
        <Newsletter />
      </div>



      

      
    </>
  );
};
export default Home;


// {/* <Container>

// <HeroContainer bg="#F5F5F5">

//   <motion.div className="hero__text">
//     <div className="title" >
//       {/* Live easy. Free yourself from
//         <span style={{ color: currentServiceTextColor, marginRight: "3px"  }}>
//           {" "} {currentService}
//         </span>  */}
//         Home service subscriptions for techies, entrepreneurs, professionals and students.
//     </div>

//     <h2 className="sub_title">We take away the drama of house chores with services designed just for you.</h2>

//     {/* <HeroList>
//       <HeroListItem>
//         <span className="dot" />
//         <div className="text">
//           <strong>Fresh clothes, always ready:</strong>
//           <small>Fresh clothes, ready when you are.</small>
//         </div>
//       </HeroListItem>
//       <HeroListItem>
//         <span className="dot" />

//         <div className="text">
//           <strong>Sparkling clean homes:</strong>
//           <small>
//             Step into a fresh, clean space every day, without lifting a
//             finger.
//           </small>
//         </div>
//       </HeroListItem>
//       <HeroListItem>
//         <span className="dot" />
//         <div className="text">
//           <strong>Tasty meals delivered:</strong>
//           <small>
//             Fresh, delicious meals delivered to you - no effort required.
//           </small>
//         </div>
//       </HeroListItem>
//     </HeroList> */}

//     <div className="btn_grp">
//       <Button
//         size="large"
//         color="primary"
//         onClick={() => router.push(session ? "/dashboard" : "/signin")}
//       >
//         Get Started
//       </Button>
//       <div className="contact">
//         <button className="withIcon">
//           <FiPhoneCall />
//         </button>
//         <div className="content">
//           <span>Call us</span>
//           <span className="cell">+2348059303261</span>
//         </div>
//       </div>
//     </div>
//   </motion.div>

//   <HeroImageContainer>
//     <div className="image home">
//       <HeroImage src="/homepage_hero.png" fill={true} alt=".." />
//     </div>
//   </HeroImageContainer>
// </HeroContainer>

// <ServicesSection>
//   <header>
//     <h3 className="title">Our Services</h3>
//     {/* <p className="subtitle">
//       Reliable convenience, always at your service.
//     </p> */}
//   </header>
//   <ServiceList>
//     {services.map((service) => (
//       <div key={service.title}>
//         <ServiceCard
//           title={service.title}
//           content={service.content}
//           bg={service.bg}
//           imageSrc={service.image}
//           cta={service.cta}
//           ctaTextColor={service.color}
//         />
//       </div>
//     ))}
//     <div className="pattern">
//       <Image
//         src={assets.pattern1}
//         width={300}
//         height={300}
//         alt="line_patterns"
//       />
//     </div>
//   </ServiceList>
// </ServicesSection>

// <WhyChooseUsSection>
//   <WhyChooseUsImageContainer>
//     <WhyChooseUsImage>
//       <div className="ball blueBall"></div>
//       <div className="ball yellowBall"></div>
//       <div className="ball purpleBall"></div>

//       <div className="image">
//         <Image src="/phone user.png" fill={true} alt="..." />
//       </div>
//     </WhyChooseUsImage>
//   </WhyChooseUsImageContainer>

//   <WhyChooseUsText>
//     <WhyChooseUsColored>Why choose DiboRuwa?</WhyChooseUsColored>
//     <WhyChooseUsTitle>
//       Because we are a team of techies, entrepreneurs, professionals and students like you who understand the drama of house chores.
//     </WhyChooseUsTitle>
//     <WhyChooseUsContent>
//       <li>
//         <span className="dot"></span>
//         <p>No ready-made home service solution, so we decided to build one ourselves.</p>
//      </li>

//       <li>
//         <span className="dot"></span>
//         <p>We work with certified professionals to deliver top-quality home services.</p>
//      </li>
//       {/* <li>
//         <span className="dot"></span>
//         <p>Are you convinced yet?</p>
//      </li> */}
//     </WhyChooseUsContent>
//     <Button
//       size="large"
//       color="primary"
//       onClick={() => router.push(session ? "/dashboard" : "/signin")}
//     >
//       Get Started
//     </Button>
//   </WhyChooseUsText>
// </WhyChooseUsSection>

// {/* feedbacksection */}

// <FeedBackSection>
//   <h3 className="title">
//     What our Customers <br /> Say about us
//   </h3>

//   <div className="content">
//     <div className="image">
//       <Image src="/lady thinking.png" fill={true} alt="...." />
//     </div>

//     <div className="carousel">
//       <FeedbackCarousel />
//     </div>
//   </div>
// </FeedBackSection>

// <FaqSection>
//   <div className="container">
//     <NewsletterForm />

//     <AccordionList />
//   </div>
// </FaqSection>

// </Container> */}