"use client";
import HeroContainer from "@/component/shared/HeroContainer";
import {
  BenefitList,
  ContactForm,
  Container,
  HeroImage,
  HeroImageContainer,
  HeroList,
  HeroListItem,
  LocationInput,
  SubscriptionCard,
  SubscriptionList,
  SubscriptionSection,
  WYGSection,
  CTAButton,
  CTAButtonWrapper,
  CTAIcon,
} from "./Cleaning.styles";
import Button from "@/component/ui/button/Button";
import Image from "next/image";
import { assets } from "@/public/assets";
import WhatYouGetCard from "@/component/WhatYouGetCard";
import MoreServices from "@/component/shared/MoreServices";
import { Wyg, subscriptionPlans } from "@/constants";
import useCartStore from "@/store/useCart.store";
import { toast } from "react-hot-toast";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Modal from "@/component/modals/Modal";
import CustomClean from "@/component/customClean/CustomClean";
import useForm from "@/hooks/useForm";
import { FormEvent, useRef, useState } from "react";
import axios from "axios";
import useQuote from "@/hooks/useQuote";
import NotificationModal from "@/component/NotificationModal";
import Moving from "@/component/movingRequestCard/Moving";
import Link from "next/link";

const Cleaning = () => {
  const { addSubscription, subscriptions, modal, closeModal } = useCartStore();
  const { data: session } = useSession();
  const router = useRouter();
  const [selectedItems, setSelectedItems] = useState([]);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [quote, setQuote] = useState<string | null>(null);
  const [notification, setNotification] = useState<string | null>(null);

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const properties = [
    { id: 1, name: "Shirt", amount: 0 },
    { id: 2, name: "T-Shirt", amount: 0 },
    { id: 3, name: "Jeans", amount: 0 },
    { id: 4, name: "Trouser", amount: 0 },
    { id: 5, name: "Gown", amount: 0 },   
    { id: 6, name: "Abaya", amount: 0 },
    { id: 7, name: "Duvet", amount: 0 },
    { id: 8, name: "Hijab", amount: 0 },
    { id: 9, name: "Skirt", amount: 0 },
    { id: 10, name: "Jalamiya", amount: 0 },
    { id: 11, name: "Curtains", amount: 0 },
    { id: 12, name: "Others", amount: 0 },
    // Add more laundry items as needed
  ];

  const ChoosePlan = (plan: string) => {
    const data = {
      type: "cleaning",
      plan,
      total: 5000,
    };

    addSubscription(data);
  };

  const { handleQuote, showModal, modalErrorType, modalMessage,  } =
    useQuote();

  const { formData, handleChange, resetForm, errors } = useForm(
    {
      from: "",
      to: "",
      date: "",
    },
    () => {}
  );

  const onSubmit = (type: any) => {
    const data = {
      type,
      quote: formData,
    };
    handleQuote(data);
  };

  return (
    <Container>
      <HeroContainer bg="primary-20">
        <div className="hero__text">
          <h3 className="title">
            Clean, organized and relaxing space. 
          </h3>

          <HeroList>
            <HeroListItem>
              <span className="dot" />
              <div className="text">
                {/* <strong>Book Online</strong> */}
                <small>
                 Get back 2 - 3 hours of your day. 
                </small>
              </div>
            </HeroListItem>
            <HeroListItem>
              <span className="dot" />
              <div className="text">
                {/* <strong>Expert Clean </strong> */}
                <small>
                 Hire cleaning professionals with over 2,500 hours of work done.
                </small>
              </div>
            </HeroListItem>
            <HeroListItem>
              <span className="dot" />
              <div className="text">
                {/* <strong>Enjoy Your Space</strong> */}
                <small>
                  {" "}
                  Enjoy a spotless home without lifting a finger.
                </small>
              </div>
            </HeroListItem>
          </HeroList>

          <div className="ctaBtn">
            <Button
              size="large"
              color="primary"
              onClick={() => router.push(session ? "/cleaning/#cleaning" : "/signin")}
            >
              Schedule a Clean
            </Button>
          </div>
        </div>

        <HeroImageContainer>
          <HeroImage src="/cleaner.png" fill={true} alt="..." />
        </HeroImageContainer>
      </HeroContainer>
     
      <WYGSection>
      <div className="heading">
            <h3 className="title">What you get</h3>
          </div>
        <div className="content">    
        <BenefitList>
            {Wyg.map((item, index) => (
              <div className="card" key={index}>
                <WhatYouGetCard icon={item.icon} description={item.description} />
              </div>
            ))}
          </BenefitList>   
          <div className="text_container">
            {/* <p>
              We provide online booking, lightening fast customer service,
              fantastic organic cleaning using only eco sustainable quality
              cleaning product, pricing that beat competitors and a 100% guarantee
              every time
            </p> */}
            <div className="save_time">
              <h3>Quick Time Saving Hack 🕒</h3>
              <p>Subscribe for a cleaning plan  and save up to 12 hours a month. </p>
              <div className="sub_button">
              <CTAButton href={{ pathname: '/subscriptions', query: { tabName: 'Cleaning' } }}>
                  Subscribe now
                  <CTAButtonWrapper>
                    <CTAIcon />
                  </CTAButtonWrapper>
                </CTAButton>
                </div>
            </div>
          </div>

         
        </div>
      </WYGSection>

      <SubscriptionSection id="cleaning">
        <h2>Don&apos;t want to subscribe yet? We&apos;ve  got you covered </h2>
        <p>Try out our cleaning service before you subscribe. Get a cleaning quote?</p>
        <SubscriptionList>
          {subscriptionPlans.map((plan, index) => (
            <div className="card" key={index}>
              <SubscriptionCard>
                <h3 className="title">{plan.title} </h3>
                <p> {plan.content}</p>
                <ul className="features">
                  {plan?.features &&
                    plan?.features.map((feature, index) => (
                      <li key={index}>
                        <div className="dot" />
                        {feature}
                      </li>
                    ))}
                </ul>
                <Button
                  size="medium"
                  color="primary"
                  onClick={() => {
                    if (session) {
                      ChoosePlan(plan.title);
                    } else {
                      router.push("signin");
                      toast("please sign in to add item to cart");
                    }
                  }}
                >
                  <span>Get a quote</span>
                </Button>
              </SubscriptionCard>
            </div>
          ))}

          <CustomClean />

          {/* <Moving /> */}
        
        </SubscriptionList>
      </SubscriptionSection>

      <MoreServices />

      <Modal
        isOpen={modal.isOpen}
        type={modal.type}
        message={modal.message}
        onClose={closeModal}
      />
     
    </Container>
  );
};

export default Cleaning;
