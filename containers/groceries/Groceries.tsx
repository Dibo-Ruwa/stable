"use client";
import HeroContainer from "@/component/shared/HeroContainer";
import {
  Container,
  HWWCard,
  HWWList,
  HWWSecetion,
  HeroImage,
  HeroImageContainer,
  HeroList,
  HeroListItem,
  MenuContainer,
  MenuSection,
  MenuTitle,
  CTAButton,
  CTAButtonWrapper,
  CTAIcon,
} from "./Food.styles";
import "./component/groceries.css";
import Button from "@/component/ui/button/Button";
import MoreServices from "@/component/shared/MoreServices";
import { assets } from "@/public/assets";
import { HWW, restaurants } from "@/constants";
// import ProductList from "@/component/ProductList/ProductList";
import useCartStore from "@/store/useCart.store";
import Modal from "@/component/modals/Modal";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import RestaurantList from "@/component/restaurants/Restaurants";
import FoodList from "../foodList/FoodList";
import { FaBowlFood } from "react-icons/fa6";
import Discount from "./component/discount/Discount";
import CustomBooking from "./component/custombooking/CustomBooking";
import MostSold from "./component/mostsold/MostSold";
import MinsMeals from "./component/30MinsMeals/MinsMeals";
import FreeDelivery from "./component/freedelivery/FreeDelivery";

const isBetween10amAnd6pm = () => {
  const now = new Date();
  const hours = now.getHours();
  return hours >= 10 && hours < 18;
};

interface FoodProps {
  params: {
    id: string;
  };
}

const Groceries: React.FC<FoodProps> = ({ params }) => {
  const { id } = params;
  const { modal, closeModal } = useCartStore();

  const { data: session } = useSession();
  const router = useRouter();

  return (
    <div className="food-container">
      <Discount />
      <CustomBooking />
      <MostSold id={id} />
      <MinsMeals />
      <FreeDelivery />
      <Container>
  <HeroContainer bg="primary-20">
    <div className="hero__text">
      <h3 className="title">
        Don&apos;t want to cook? Don&apos;t know what to eat? We got you.
      </h3>
      <HeroList>
        <HeroListItem>
          <div className="dot"></div>
          <div className="text">
            {/* <strong>Book Online</strong> */}
            <small>
            Experience new cultures with homemade meals from top chefs and restaurants near you.
            </small>
          </div>
        </HeroListItem>
        <HeroListItem>
          <div className="dot"></div>
          <div className="text">
            {/* <strong>Expert Clean </strong> */}
            <small>
            Select your dish and enjoy hassle-free delivery.
            </small>
          </div>
        </HeroListItem>
        <HeroListItem>
          <div className="dot"></div>
          <div className="text">
            {/* <strong>Enjoy Your Space</strong> */}
            <small>
              {" "}
              Save up to 14 hours a week in food prep time.
            </small>
          </div>
        </HeroListItem>
      </HeroList>

      <div className="ctaBtn">
        <Button
          size="large"
          color="primary"
          onClick={() => router.push(session ? "/food/#food" : "/signin")}
        >
         Order Now

        </Button>
      </div>
    </div>

    <HeroImageContainer>
      <div className="image food">
        <HeroImage src="/cheff.png" fill={true} alt=".." />
      </div>
    </HeroImageContainer>
  </HeroContainer>

  <HWWSecetion>
    <h3 className="title_header">How we work</h3>
    <div className="content">
    <HWWList>
        {HWW.map((step, index) => (
          <div className="card" key={index}>
            <HWWCard>
              <div className="image"> <FaBowlFood  color="green" /> </div>
              <h3 className="title">{step.title}</h3>
              <p>{step.content}</p>
            </HWWCard>
          </div>
        ))}
      </HWWList>
      <div className="save_time">
          <h3>Quick Time Saving Hack 🕒</h3>
          <p>Subscribe to our monthly food plan and save up to 56 hours a month on food preparation time.</p>
          <CTAButton href={{ pathname: '/subscriptions', query: { tabName: 'Food' } }}>
              Subscribe now
              <CTAButtonWrapper>
                <CTAIcon />
              </CTAButtonWrapper>
            </CTAButton>

       </div>

      </div>
  </HWWSecetion>

  <MenuSection id="food">
    {/* <RestaurantList restaurants={restaurants}/> */}

    <FoodList/>

  </MenuSection>
  <MoreServices />

  <Modal
    isOpen={modal.isOpen}
    type={modal.type}
    message={modal.message}
    onClose={closeModal}
  />
</Container>
    </div>
  );
};

export default Groceries;


