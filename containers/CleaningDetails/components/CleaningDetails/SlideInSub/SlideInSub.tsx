"use client";

import React, { useState } from "react";
import { IoCheckmarkSharp } from "react-icons/io5";
import { LiaAngleRightSolid } from "react-icons/lia";
import { IconType } from "react-icons/lib";
import { nanoid } from "nanoid";
import useOrder from "@/hooks/useOrder";
import NotificationModal from "@/component/NotificationModal";
import PaymentButton from "@/component/paymentButton/SubButton";
import "./SlideInSub.css";

export interface SlideInSubDataType {
  subImg: string;
  subType: string;
  subAmount: number;
  planCode: string;
  subAmount: number;
  planCode: string;
  subItem: {
    tickIcon: IconType;
    subItemText: string;
  }[];
  subFeeText: string;
  ViewSubDetailsLink: string;
}
}

interface SlideInSubProps {
  onClose: () => void;
  onClose: () => void;
}

const PUBLIC_CLEANING_STA = process.env.NEXT_PUBLIC_CLEANING_STA || ""
const PUBLIC_CLEANING_PRE = process.env.NEXT_PUBLIC_CLEANING_PRE ||  ""
const PUBLIC_CLEANING_DEE = process.env.NEXT_PUBLIC_CLEANING_DEE || ""


const SlideInSubData: SlideInSubDataType[] = [
  {
    subImg: "/clean.png",
    subType: "Standard",
    subAmount: 24900,
    planCode: PUBLIC_CLEANING_STA,
    subImg: "/clean.png",
    subType: "Standard",
    subAmount: 24900,
    planCode: PUBLIC_CLEANING_STA,
    subItem: [
      { tickIcon: IoCheckmarkSharp, subItemText: "1 Bedroom" },
      { tickIcon: IoCheckmarkSharp, subItemText: "1 Living Rooms/ Dining Areas" },
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
    subAmount: 36900,
    planCode: PUBLIC_CLEANING_PRE,
    subItem: [
      { tickIcon: IoCheckmarkSharp, subItemText: "2 Bedrooms" },
      { tickIcon: IoCheckmarkSharp, subItemText: "1 Living Rooms/ Dining Areas" },
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
    subImg: "/clean.png",
    subType: "Deep",
    subAmount: 45900,
    planCode: PUBLIC_CLEANING_DEE,
    subItem: [
      { tickIcon: IoCheckmarkSharp, subItemText: "3 Bedrooms" },
      { tickIcon: IoCheckmarkSharp, subItemText: "1 Living Rooms/ Dining Areas" },
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

export const SlideInSub: React.FC<SlideInSubProps> = ({ onClose }) => {
  const [showAll, setShowAll] = useState(false);
  const visibleData = showAll ? SlideInSubData : SlideInSubData.slice(0, 2);

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
      type: "meal",
      isPaid: true,
      total: sub.subAmount,
    };

    console.log(subscription);
    handleSubscriptionOrderSubmit(referenceId, { subscription }, "recurring");
  };

  const handleSeeMoreClick = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="SlideInSub_container">
      <div className="SlideInSub_customSub">
        <p className="SlideInSub_customSub_Title">Subscription Plan</p>
        <button className="SlideInSub_restaurantSub">
          <p className="SlideInSub_restaurantSubText">Custom Subscription</p>
          <LiaAngleRightSolid className="SlideInSub_restaurantSubIcon" />
        </button>
      </div>
      <div className="SlideInSub_Cust_sub_cards">
        {visibleData.map((plan: SlideInSubDataType, index) => (
          <div className="SlideInSub_Cust_sub_card" key={index}>
            <div className="SlideInSub_Cust_sub_ITA">
              <div className="CSlideInSub_ust_sub_image">
                <img
                  src={plan.subImg}
                  alt="sub image"
                  className="SlideInSub_Cust_sub_img"
                />
              </div>
              <div className="SlideInSub_Cust_sub_TA">
                <p className="SlideInSub_Cust_sub_type_text">{plan.subType}</p>
                <p className="SlideInSub_Cust_sub_amount_text">
                  {plan.subAmount}
                </p>
              </div>
            </div>
            <hr className="SlideInSub_Cust_sub_line_divider" />
            <div className="SlideInSub_Cust_sub_list_items">
              {plan.subItem.map((item, itemIndex) => (
                <div className="SlideInSub_Cust_sub_list_item" key={itemIndex}>
                  {React.createElement(item.tickIcon, {
                    className: "SlideInSub_Cust_sub_list_item_icon",
                  })}
                  <p className="SlideInSub_Cust_sub_list_item_text">
                    {item.subItemText}
                  </p>
                </div>
              ))}
            </div>
            <hr className="SlideInSub_Cust_sub_line_divider" />
            <div className="SlideInSub_Cust_sub_SA">
              <p className="SlideInSub_Cust_sub_SA_text">{plan.subFeeText}</p>
              <p className="SlideInSub_Cust_sub_amount_text SA_amount">
                {plan.subAmount}
              </p>
            </div>
            <hr className="SlideInSub_Cust_sub_line_divider" />
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
        <button className="SlideInSub_Close_SubText" onClick={onClose}>
          Close
        </button>
        <button className="SlideInSub_SeeMore_Sub" onClick={handleSeeMoreClick}>
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