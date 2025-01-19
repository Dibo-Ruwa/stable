"use client";

import Link from "next/link";
import React, { useState } from "react";
import { IoCheckmarkSharp } from "react-icons/io5";
import { LiaAngleRightSolid } from "react-icons/lia";
import { IconType } from "react-icons/lib";
import { nanoid } from "nanoid";
import useOrder from "@/hooks/useOrder";
import NotificationModal from "@/component/NotificationModal";
import LoaderComponent from "@/app/loading";
import PaymentButton from "@/component/paymentButton/SubButton";
import "./SlideInSub.css";
export interface RestSubPlansDataType {
  subImg: string;
  subType: string;
  subAmount: number;
  planCode: string;
  subItem: {
    tickIcon: IconType;
    subItemText: string;
  }[];
  subFeeText: string;
  ViewSubDetailsLink: string;
}

interface SlideInSubProps {
  onClose: () => void;
}

const PUBLIC_CLEANING_STA = "PLN_fw9vc36viohwk6l";
const PUBLIC_CLEANING_PRE = "PLN_b361yykypop2gfz";
const PUBLIC_CLEANING_DEE = "PLN_jsbrun8t72zsbiu";

const RestSubPlansData: RestSubPlansDataType[] = [
  {
    subImg: "/clean.png",
    subType: "Standard",
    subAmount: 24900,
    planCode: PUBLIC_CLEANING_STA,
    subItem: [
      { tickIcon: IoCheckmarkSharp, subItemText: "1 Bedroom" },
      {
        tickIcon: IoCheckmarkSharp,
        subItemText: "1 Living Rooms/ Dining Areas",
      },
      { tickIcon: IoCheckmarkSharp, subItemText: "Bathroom sanitization" },
      { tickIcon: IoCheckmarkSharp, subItemText: "Kitchen cleanup" },
      { tickIcon: IoCheckmarkSharp, subItemText: "Vacuuming and mopping" },
      { tickIcon: IoCheckmarkSharp, subItemText: "Dusting of all surfaces" },
      { tickIcon: IoCheckmarkSharp, subItemText: "Once a week" },
    ],
    subFeeText: "Service Fee:",
    ViewSubDetailsLink: "View",
  },
  {
    subImg: "/clean.png",
    subType: "Premium",
    subAmount: 36950,
    planCode: PUBLIC_CLEANING_PRE,
    subItem: [
      { tickIcon: IoCheckmarkSharp, subItemText: "2 Bedrooms" },
      {
        tickIcon: IoCheckmarkSharp,
        subItemText: "1 Living Rooms/ Dining Areas",
      },
      { tickIcon: IoCheckmarkSharp, subItemText: "2 Bathroom sanitization" },
      { tickIcon: IoCheckmarkSharp, subItemText: "Kitchen cleanup" },
      { tickIcon: IoCheckmarkSharp, subItemText: "Vacuuming and mopping" },
      { tickIcon: IoCheckmarkSharp, subItemText: "Dusting of all surfaces" },
      { tickIcon: IoCheckmarkSharp, subItemText: "Once a week" },
    ],
    subFeeText: "Service Fee:",
    ViewSubDetailsLink: "View",
  },
  {
    subImg: "/clean.png",
    subType: "Deep",
    subAmount: 45900,
    planCode: PUBLIC_CLEANING_DEE,
    subItem: [
      { tickIcon: IoCheckmarkSharp, subItemText: "3 Bedrooms" },
      {
        tickIcon: IoCheckmarkSharp,
        subItemText: "1 Living Rooms/ Dining Areas",
      },
      { tickIcon: IoCheckmarkSharp, subItemText: "2 Bathroom sanitization" },
      { tickIcon: IoCheckmarkSharp, subItemText: "2 Kitchen cleanup" },
      { tickIcon: IoCheckmarkSharp, subItemText: "Vacuuming and mopping" },
      { tickIcon: IoCheckmarkSharp, subItemText: "Dusting of all surfaces" },
      { tickIcon: IoCheckmarkSharp, subItemText: "Once a week" },
    ],
    subFeeText: "Service Fee:",
    ViewSubDetailsLink: "View",
  },
];

export const  SlideInSub: React.FC<SlideInSubProps> = ({ onClose }) => {
  const [showAll, setShowAll] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [selectedSubscription, setSelectedSubscription] =
    useState<RestSubPlansDataType | null>(null);
  const visibleData = showAll ? RestSubPlansData : RestSubPlansData.slice(0, 2);

  const {
    isSubmitting,
    isError,
    isSuccess,
    handleSubscriptionOrderSubmit,
    showModal,
    modalMessage,
    modalErrorType,
    openModal,
    closeModal,
  } = useOrder();

  const referenceId = nanoid(8);

  const onSuccess = (sub: any) => {
    const subscription = {
      plan: sub.subType,
      type: "cleaning",
      isPaid: true,
      total: sub.subAmount,
    };

    console.log(subscription);
    handleSubscriptionOrderSubmit(referenceId, { subscription }, "recurring");
  };

  // const onClose = () => {
  //   console.log("closed");
  // };

  const handleSeeMoreClick = () => {
    setShowAll(!showAll);
  };

  const handleViewDetailsClick = (subscription: RestSubPlansDataType) => {
    setSelectedSubscription(subscription);
    setIsModalOpen(true);
  };

  return (
    <div className="RestSub_container">
      <div className="customSub">
        <p className="customSub_Title">Subscription Plan</p>
        {/* <Link href="/custom-cleaning-subscriptions" className="restaurantSub">
          <p className="restaurantSubText">Custom Subscription</p>
          <LiaAngleRightSolid className="restaurantSubIcon" />
        </Link> */}
      </div>
      <div className="Cust_sub_cards">
        {visibleData.map((plan: RestSubPlansDataType, index) => (
          <div className="Cust_sub_card" key={index}>
            <div className="Cust_sub_ITA">
              <div className="Cust_sub_image">
                <img
                  src={plan?.subImg}
                  alt="sub image"
                  className="Cust_sub_img"
                  style={{
                    height: "50px",
                    width: "50px",
                  }}
                />
              </div>
              <div className="Cust_sub_TA">
                <p className="Cust_sub_type_text">{plan.subType}</p>
                <p className="Cust_sub_amount_text">{plan.subAmount}</p>
              </div>
            </div>
            <hr className="Cust_sub_line_divider" />
            <div className="Cust_sub_list_items">
              {plan.subItem.map((item, itemIndex) => (
                <div className="Cust_sub_list_item" key={itemIndex}>
                  {React.createElement(item.tickIcon, {
                    className: "Cust_sub_list_item_icon",
                  })}
                  <p className="Cust_sub_list_item_text">{item.subItemText}</p>
                </div>
              ))}
            </div>
            <hr className="Cust_sub_line_divider" />
            <div className="Cust_sub_SA">
              <p className="Cust_sub_SA_text">{plan.subFeeText}</p>
              <p className="Cust_sub_amount_text SA_amount">{plan.subAmount}</p>
            </div>
            <hr className="Cust_sub_line_divider" />
            <PaymentButton
              totalPrice={plan.subAmount}
              openModal={openModal}
              buttonText="Select Plan"
              planCode={plan.planCode}
              onSuccess={() => onSuccess(plan)}
              onClose={onClose}
              referenceId={referenceId}
              subscriptionType={plan.subType}
              className="sub_btn"
            />
          </div>
        ))}
      </div>
       <div className="SlideInSub_SeeMore_close">
         <button
           type="button"
           className="SlideInSub_Close_SubText"
           onClick={onClose}
         >
           Close
         </button>
         <button
           type="button"
           className="SlideInSub_SeeMore_Sub"
           onClick={handleSeeMoreClick}
         >
           <p className="SlideInSub_SeeMore_SubText">
             {showAll ? "See Less" : "See More"}
           </p>
           <LiaAngleRightSolid className="SlideInSub_SeeMore_SubIcon" />
         </button>
       </div>
 
      {showModal && (
        <NotificationModal
          message={modalMessage}
          errorType={modalErrorType}
          onClose={closeModal}
        />
      )}
    </div>
  );
};
