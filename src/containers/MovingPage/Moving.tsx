"use client";
import React from "react";
import "./moving.css";
import { ProductServicesMoving } from "./components/product-service-moving/ProductServicesMoving";
import { TopLaundries } from "./components/top-moving/TopMoving";
import Newsletter from "../partnerWithUs/component/newsletter/Newsletter";
import { SearchFilter } from "./components/search-filter/SearchFilter";
import { OtherMoving1 } from "./components/other-moving/OtherMoving1";
import { OtherMoving2 } from "./components/other-moving/OtherMoving2";
import { MobileOtherMoving } from "./components/other-moving/MobileOtherMoving";

export const Moving: React.FC = () => {
  return (
    <div className="Moving_home-container">
      <div className="Moving_hero_frame">
        <ProductServicesMoving />
      </div>
      <TopLaundries />
      <SearchFilter />
      <MobileOtherMoving />
      <div className="OtherMoving_container">
        <OtherMoving1 />
        <OtherMoving2 />
      </div>
      <Newsletter />
    </div>
  );
};

// "use client";
// import HeroContainer from "@/component/shared/HeroContainer";
// import {
//   Container,
//   HIWList,
//   HIWSection,
//   HIWTitle,
//   HeroImage,
//   HeroImageContainer,
//   HeroList,
//   HeroListItem,
//   PlansSection,
//   PriceTagSection,
//   // Rectangle,
// } from "./Laundry.styles";
// import Button from "@/component/ui/button/Button";
// import HowItWorksCard from "@/component/howitworksCard/HiwCard";
// import PriceCard from "@/component/PriceTag";
// import LaundryCount from "@/component/laundryCounter/LaundryCounter";
// import { CheckCircledIcon } from "@radix-ui/react-icons";
// import { assets } from "@/public/assets";
// import MoreServices from "@/component/shared/MoreServices";
// import Success from "@/component/modals/Modal";
// import useCartStore from "@/store/useCart.store";
// import Modal from "@/component/modals/Modal";
// import { useRouter } from "next/navigation";
// import { useSession } from "next-auth/react";

// const howItWorksData = [
//   {
//     image: assets.snpImg,
//     title: "Schedule and Pickup",
//     content:
//       "Choose a time slot that fits your schedule. Whether it's a one-time pickup or a weekly routine, we adjust to your needs.",
//   },
//   {
//     image: assets.washingmachine,
//     title: "Professional Laundry Service",
//     content:
//       "Our laundry experts treat each garment as their own. From stains to fabric care, we've got it all covered.",
//   },
//   {
//     image: assets.cleaningTowel,
//     title: "Quality Check and Delivery",
//     content:
//       "No long waits. Your clothes are returned fresh and clean, right on schedule.",
//   },
// ];

// const laundryItems = [
//   {
//     id: 1,
//     name: 'T-Shirt',
//     price: 5,
//     amount: 0,
//   },
//   {
//     id: 2,
//     name: 'Jeans',
//     price: 10,
//     amount: 0,
//   },
//   // Add more laundry items as needed
// ];

// const Laundry = () => {
//   const { modal, closeModal } = useCartStore();
//   const { data: session } = useSession();
//   const router = useRouter();

//   return (
//     <Container>
//       <HeroContainer bg="primary-20">
//         <div className="hero__text">
//           <h3 className="title">
//             Save your time <br /> Fresh laundry, in 48 hrs.
//           </h3>

//           <HeroList>
//             <HeroListItem>
//               <div  className="dot" />
//               <div className="text">
//                 {/* <strong> Schedule a Pickup</strong> */}
//                 <small> Choose a time, and we&apos;ll be there.</small>
//               </div>
//             </HeroListItem>
//             <HeroListItem>
//               <div  className="dot" /></div>
//               <div className="text">
//                 {/* <strong>Expert Cleaning </strong> */}
//                 <small>
//                   {" "}
//                   Your clothes are treated with care, ensuring a fresh and clean
//                   feel.
//                 </small>
//               </div>
//             </HeroListItem>
//             <HeroListItem>
//               <div className="dot" ></div>
//               <div className="text">
//                 {/* <strong>Swift Delivery</strong> */}
//                 <small>
//                   Freshly laundered clothes returned to your doorstep, ready to
//                   wear.
//                 </small>
//               </div>
//             </HeroListItem>
//           </HeroList>

//           <div className="ctaBtn">
//             <Button size="large" color="primary"  onClick={() => router.push(session ? "/laundry/#laundry" : "/signin")}>
//               Order Now
//             </Button>
//           </div>
//         </div>

//         <HeroImageContainer>
//           {/* <Rectangle /> */}
//           <HeroImage
//             src='/laundry to.png'
//             fill={true}
//             alt="...."
//           />
//         </HeroImageContainer>
//       </HeroContainer>

//       <HIWSection>
//         <HIWTitle>How it works</HIWTitle>
//         <HIWList>
//           {howItWorksData.map((item, index) => (
//             <div className="card" key={index}>
//               <HowItWorksCard data={item} />
//             </div>
//           ))}
//         </HIWList>
//       </HIWSection>

//       <PriceTagSection>
//         <div className="box top"></div>
//         <div className="box bottom"></div>

//         <div className="price_sub_section">
//            <div className="imageContainer">
//              <HeroImage src='/the bag.png' fill={true} alt="" />
//           </div>
//           <div className="save_money">
//             <h3 className="title">
//               {/* Wash & <br /> Fold <div>Pricing</div> */}
//               Quick Money Saving Hack 💰
//             </h3>
//             <p>Subscribe for a laundry plan and save up to 15% each month on laundry +
//               Get a complimentary branded Diboruwa laundry bag to keep your clothes organized.
//             </p>
//           </div>

//         </div>

//         <div className="pricecard__container">
//           <PriceCard />
//         </div>
//       </PriceTagSection>

//       <PlansSection id="laundry">
//         <div className="text__container">
//           <div className="heading">
//             <h3 className="title">Don&apos;t want to subscribe yet? We&apos;ve got you covered </h3>
//             <p>Try out our laundry service before you subscribe. Get a quote now.</p>
//           </div>

//           <div className="benefits">
//             <div className="benefit">
//               <div className="icon">
//                 <CheckCircledIcon />
//               </div>
//               We provide pickup and delivery services within a 48-hour
//               timeframe.
//             </div>
//             <div className="benefit">
//               <div className="icon">
//                 <CheckCircledIcon />
//               </div>
//               We offer a hassle-free replacement policy for any damaged items.
//               No inquiries needed.
//             </div>
//             {/* <div className="benefit">
//               <divclassName="icon">
//                 <CheckCircledIcon />
//               </div>
//                Need a quick laundry solution without the commitment to a plan? We&apos;ve got you covered.
//             </div> */}
//           </div>
//         </div>

//         <div className="calc">
//         <LaundryCount  />
//         </div>
//       </PlansSection>

//       <MoreServices />

//       <Modal
//         isOpen={modal.isOpen}
//         type={modal.type}
//         message={modal.message}
//         onClose={closeModal}
//       />
//     </Container>
//   );
// };

// export default Laundry;
