"use client";

import Link from "next/link";
import React, { useState } from "react";
import { IoCheckmarkSharp } from "react-icons/io5";
import { LiaAngleRightSolid } from "react-icons/lia";
import { IconType } from "react-icons/lib";
import { ViewSubscription } from "./ViewSubscription";
import { nanoid } from "nanoid";
import useOrder from "@/hooks/useOrder";
import NotificationModal from "@/component/NotificationModal";
import LoaderComponent from "@/app/loading";
import PaymentButton from "@/component/paymentButton/SubButton";

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

const RestSubPlansData: RestSubPlansDataType[] = [
  {
    subImg: "/laundry to.png",
    subType: "Student",
    subAmount: 6990,
    planCode: "PLN_jjx1iqwxol2hch4a",
    subItem: [
      {
        tickIcon: IoCheckmarkSharp,
        subItemText: "Approx 20 items in a bag",
      },
      {
        tickIcon: IoCheckmarkSharp,
        subItemText: "Gentle washing for delicate fabrics",
      },
      {
        tickIcon: IoCheckmarkSharp,
        subItemText: "Stain treatment",
      },
      {
        tickIcon: IoCheckmarkSharp,
        subItemText: "Picked up once a month",
      },
      {
        tickIcon: IoCheckmarkSharp,
        subItemText: "Ideal for individual",
      },
    ],
    subFeeText: "Service Fee:",
    ViewSubDetailsLink: "View",
  },
  {
    subImg: "/laundry to.png",
    subType: "Professional",
    subAmount: 12900,
    planCode: "PLN_jd0nwcnhvifs0no",
    subItem: [
      {
        tickIcon: IoCheckmarkSharp,
        subItemText: "Free Diboruwa Laundry Bag",
      },
      {
        tickIcon: IoCheckmarkSharp,
        subItemText: "Approx 44 items in a bag",
      },
      {
        tickIcon: IoCheckmarkSharp,
        subItemText: "Gentle washing for delicate fabrics",
      },
      {
        tickIcon: IoCheckmarkSharp,
        subItemText: "Stain treatment",
      },
      {
        tickIcon: IoCheckmarkSharp,
        subItemText: "2 pickups/month (22 items each)",
      },
      {
        tickIcon: IoCheckmarkSharp,
        subItemText: "Ideal for family of two",
      },
    ],
    subFeeText: "Service Fee:",
    ViewSubDetailsLink: "View",
  },
  {
    subImg: "/laundry to.png",
    subType: "Family",
    subAmount: 22400,
    planCode: "PLN_d3km1qswvj8nbot",
    subItem: [
      {
        tickIcon: IoCheckmarkSharp,
        subItemText: "Dibo Ruwa Laundry Bag",
      },
      {
        tickIcon: IoCheckmarkSharp,
        subItemText: "Approx 100 items in a bag",
      },
      {
        tickIcon: IoCheckmarkSharp,
        subItemText: "Gentle washing for delicate fabrics",
      },
      {
        tickIcon: IoCheckmarkSharp,
        subItemText: "Stain treatment",
      },
      {
        tickIcon: IoCheckmarkSharp,
        subItemText: "Quick-dry service",
      },
      {
        tickIcon: IoCheckmarkSharp,
        subItemText: "Emergencies",
      },
      {
        tickIcon: IoCheckmarkSharp,
        subItemText: "Max 4 pickups/month (25 items each)",
      },
      {
        tickIcon: IoCheckmarkSharp,
        subItemText: "Ideal for family of four",
      },
    ],
    subFeeText: "Service Fee:",
    ViewSubDetailsLink: "View",
  },
];

export const RestSub = () => {
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
      type: "laundry",
      isPaid: true,
      total: sub.subAmount,
    };

    console.log(subscription);
    handleSubscriptionOrderSubmit(referenceId, { subscription }, "recurring");
  };

  const onClose = () => {
    console.log("closed");
  };

   // Show loader while data is loading
  //  if (isSubmitting) {
  //   return <LoaderComponent />; 
  // }

  const handleSeeMoreClick = () => {
    setShowAll(!showAll);
  };

  const handleViewDetailsClick = (subscription: RestSubPlansDataType) => {
    setSelectedSubscription(subscription);
    setIsModalOpen(true);
  };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  //   setSelectedSubscription(null);
  // };

  return (
    <div className="RestSub_container">
      <div className="customSub">
        <p className="customSub_Title">Subscription Plan</p>
        {/* <Link href="/custom-laundry-subscriptions" className="restaurantSub">
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
            {/* <button
              className="Cust_sub_btn"
              onClick={() => handleViewDetailsClick(plan)}
            >
              {plan.ViewSubDetailsLink}
            </button> */}
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
      <button className="SeeMore_Sub" onClick={handleSeeMoreClick}>
        <p className="SeeMore_SubText">{showAll ? "See Less" : "See More"}</p>
        <LiaAngleRightSolid className="SeeMore_SubIcon" />
      </button>

      {/* <ViewSubscription
        isOpen={isModalOpen}
        onClose={closeModal}
        subscriptionData={selectedSubscription}
      /> */}

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
