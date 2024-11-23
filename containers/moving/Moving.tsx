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
} from "./Moving.styles";
import Button from "@/component/ui/button/Button";
import Image from "next/image";
import { assets } from "@/public/assets";
import WhatYouGetCard from "@/component/WhatYouGetCard";
import MoreServices from "@/component/shared/MoreServices";
import { Wyg, WygMoving, subscriptionPlans } from "@/constants";
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

const MovingContainer = () => {
  const { addSubscription, subscriptions, modal, closeModal } = useCartStore();
  const { data: session } = useSession();
  const router = useRouter();
  const [selectedItems, setSelectedItems] = useState([]);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [quote, setQuote] = useState<string | null>(null);
  const [notification, setNotification] = useState<string | null>(null);

  const dropdownRef = useRef<HTMLDivElement | null>(null);

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
           Move or Deliver Items Without Hassles
          </h3>

          <HeroList>
            <HeroListItem>
              <span className="dot" />
              <div className="text">
                {/* <strong>Book Online</strong> */}
                <small>
                Reclaim your day—let us handle the logistics.
                </small>
              </div>
            </HeroListItem>
            <HeroListItem>
              <span className="dot" />
              <div className="text">
                {/* <strong>Expert Clean </strong> */}
                <small>
                Safe and efficient moving and delivery services.
                </small>
              </div>
            </HeroListItem>
            <HeroListItem>
              <span className="dot" />
              <div className="text">
                {/* <strong>Enjoy Your Space</strong> */}
                <small>
                  {" "}
                  Experience hassle-free relocation and deliveries.
                </small>
              </div>
            </HeroListItem>
          </HeroList>

          <div className="ctaBtn">
            <Button
              size="large"
              color="primary"
              onClick={() => router.push(session ? "/moving/#moving" : "/signin")}
            >
              Schedule a Move
            </Button>
          </div>
        </div>

        <HeroImageContainer>
          <HeroImage src="/movers.png" fill={true} alt="..." /> 
        </HeroImageContainer>
      </HeroContainer>
     
      <WYGSection>
        <div className="heading">
            <h3 className="title">What you get</h3>
         </div>
        <BenefitList>
            {WygMoving.map((item, index) => (
              <div className="card" key={index}>
                <WhatYouGetCard icon={item.icon} description={item.description} />
              </div>
            ))}
          </BenefitList>   
          {/* <div className="text_container">
            <div className="save_time">
              <h3>Quick Time Saving Hack 🕒</h3>
              <p>Subscribe for a cleaning plan and save up to 12 hours a month. </p>
              <div className="sub_button">
              <CTAButton href={{ pathname: '/subscriptions', query: { tabName: 'Cleaning' } }}>
                  Subscribe now
                  <CTAButtonWrapper>
                    <CTAIcon />
                  </CTAButtonWrapper>
                </CTAButton>
                </div>
            </div>
          </div> */}
      </WYGSection>

      <SubscriptionSection id="moving">
        <div className="mover_top">
          <h2>Explore Our Moving and Delivery Services</h2>
          <p>Choose from a range of moving and delivery options to fit your needs.</p>
        </div>
        <SubscriptionList>
          <Moving />
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

export default MovingContainer;