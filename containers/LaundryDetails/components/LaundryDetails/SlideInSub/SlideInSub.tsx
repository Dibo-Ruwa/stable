"use client";

import React, { useState } from "react";
import { IoCheckmarkSharp, IoClose } from "react-icons/io5";
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


const RegulaPlan = process.env.NEXT_PUBLIC_LAUNDRY_REG || "";
const ProfessionalPlan = process.env.NEXT_PUBLIC_LAUNDRY_PRO || "";
const FamilyPlan = process.env.NEXT_PUBLIC_LAUNDRY_FAM || "";

const SlideInSubData: SlideInSubDataType[] = [
  {
    subImg: "/laundry to.png",
    subType: "Regular",
    subAmount: 8900,
    planCode: RegulaPlan,
    subItem: [
      { tickIcon: IoCheckmarkSharp, subItemText: "Approx 20 items in a bag" },
      { tickIcon: IoCheckmarkSharp, subItemText: "Gentle washing for delicate fabrics" },
      { tickIcon: IoCheckmarkSharp, subItemText: "Stain treatment" },
      { tickIcon: IoCheckmarkSharp, subItemText: "Picked up once a month" },
      { tickIcon: IoCheckmarkSharp, subItemText: "Ideal for individual" },
    ],
    subFeeText: "Service Fee:",
    ViewSubDetailsLink: "View",
  },
  {
    subImg: "/laundry to.png",
    subType: "Professional",
    subAmount: 15900,
    planCode: ProfessionalPlan,
    subItem: [
      { tickIcon: IoCheckmarkSharp, subItemText: "Free Diboruwa Laundry Bag" },
      { tickIcon: IoCheckmarkSharp, subItemText: "Approx 44 items in a bag" },
      { tickIcon: IoCheckmarkSharp, subItemText: "Gentle washing for delicate fabrics" },
      { tickIcon: IoCheckmarkSharp, subItemText: "Stain treatment" },
      { tickIcon: IoCheckmarkSharp, subItemText: "2 pickups/month (22 items each)" },
      { tickIcon: IoCheckmarkSharp, subItemText: "Ideal for family of two" },
    ],
    subFeeText: "Service Fee:",
    ViewSubDetailsLink: "View",
  },
  {
    subImg: "/laundry to.png",
    subType: "Family",
    subAmount: 37500,
    planCode: FamilyPlan,
    subItem: [
      { tickIcon: IoCheckmarkSharp, subItemText: "Dibo Ruwa Laundry Bag" },
      { tickIcon: IoCheckmarkSharp, subItemText: "Approx 100 items in a bag" },
      { tickIcon: IoCheckmarkSharp, subItemText: "Gentle washing for delicate fabrics" },
      { tickIcon: IoCheckmarkSharp, subItemText: "Stain treatment" },
      { tickIcon: IoCheckmarkSharp, subItemText: "Quick-dry service" },
      { tickIcon: IoCheckmarkSharp, subItemText: "Emergencies" },
      { tickIcon: IoCheckmarkSharp, subItemText: "Max 4 pickups/month (25 items each)" },
      { tickIcon: IoCheckmarkSharp, subItemText: "Ideal for family of four" },
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
      type: "laundry",
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
    <div className="SlideInSub_container"
    style={{ 
      zIndex: 100, width: "95vw", marginLeft: "-85px" 
    }}
    >
      <div className="SlideInSub_customSub">
        <p className="SlideInSub_customSub_Title">Subscription Plan</p>
        {/* <button className="SlideInSub_restaurantSub">
          <p className="SlideInSub_restaurantSubText">Custom Subscription</p>
          <LiaAngleRightSolid className="SlideInSub_restaurantSubIcon" />
        </button> */}
        <IoClose onClick={onClose} style={{ cursor: 'pointer' }} />
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