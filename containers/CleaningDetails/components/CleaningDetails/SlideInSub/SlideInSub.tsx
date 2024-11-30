"use client";

import React, { useState } from "react";
import { IoCheckmarkSharp } from "react-icons/io5";
import { LiaAngleRightSolid } from "react-icons/lia";
import { IconType } from "react-icons/lib";
import "./SlideInSub.css";

export interface SlideInSubDataType {
  subImg: string;
  subType: string;
  subAmount: string;
  subItem: {
    tickIcon: IconType;
    subItemText: string;
  }[];
  subFeeText: string;
  ViewSubDetailsLink: string;
};

interface SlideInSubProps {
  onClose: () => void
}


const SlideInSubData: SlideInSubDataType[] = [
  {
    subImg: "/images/Rectangle 194.png",
    subType: "Weekly Plan",
    subAmount: "$40,000",
    subItem: [
      {
        tickIcon: IoCheckmarkSharp,
        subItemText: "2 meal per week",
      },
      {
        tickIcon: IoCheckmarkSharp,
        subItemText: "Weekly delivery",
      },
      {
        tickIcon: IoCheckmarkSharp,
        subItemText: "Standard plate",
      },
      {
        tickIcon: IoCheckmarkSharp,
        subItemText: "Delivery",
      },
    ],
    subFeeText: "Service Fee:",
    ViewSubDetailsLink: "View",
  },
  {
    subImg: "/images/Rectangle 194.png",
    subType: "Weekly Plan",
    subAmount: "$40,000",
    subItem: [
      {
        tickIcon: IoCheckmarkSharp,
        subItemText: "2 meal per week",
      },
      {
        tickIcon: IoCheckmarkSharp,
        subItemText: "Weekly delivery",
      },
      {
        tickIcon: IoCheckmarkSharp,
        subItemText: "Standard plate",
      },
      {
        tickIcon: IoCheckmarkSharp,
        subItemText: "Delivery",
      },
    ],
    subFeeText: "Service Fee:",
    ViewSubDetailsLink: "View",
  },
  {
    subImg: "/images/Rectangle 194.png",
    subType: "Weekly Plan",
    subAmount: "$40,000",
    subItem: [
      {
        tickIcon: IoCheckmarkSharp,
        subItemText: "2 meal per week",
      },
      {
        tickIcon: IoCheckmarkSharp,
        subItemText: "Weekly delivery",
      },
      {
        tickIcon: IoCheckmarkSharp,
        subItemText: "Standard plate",
      },
      {
        tickIcon: IoCheckmarkSharp,
        subItemText: "Delivery",
      },
    ],
    subFeeText: "Service Fee:",
    ViewSubDetailsLink: "View",
  },
  {
    subImg: "/images/Rectangle 194.png",
    subType: "Weekly Plan",
    subAmount: "$40,000",
    subItem: [
      {
        tickIcon: IoCheckmarkSharp,
        subItemText: "2 meal per week",
      },
      {
        tickIcon: IoCheckmarkSharp,
        subItemText: "Weekly delivery",
      },
      {
        tickIcon: IoCheckmarkSharp,
        subItemText: "Standard plate",
      },
      {
        tickIcon: IoCheckmarkSharp,
        subItemText: "Delivery",
      },
    ],
    subFeeText: "Service Fee:",
    ViewSubDetailsLink: "View",
  },
];

export const SlideInSub: React.FC<SlideInSubProps> = ({onClose}) => {
  const [showAll, setShowAll] = useState(false);
  const visibleData = showAll ? SlideInSubData : SlideInSubData.slice(0, 2);

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
            <button className="SlideInSub_Cust_sub_btn">
              {plan.ViewSubDetailsLink}
            </button>
          </div>
        ))}
      </div>
      <div className="SlideInSub_SeeMore_close">
        <button className="SlideInSub_Close_SubText" onClick={onClose}>Close</button>
        <button className="SlideInSub_SeeMore_Sub" onClick={handleSeeMoreClick}>
          <p className="SlideInSub_SeeMore_SubText">
            {showAll ? "See Less" : "See More"}
          </p>
          <LiaAngleRightSolid className="SlideInSub_SeeMore_SubIcon" />
        </button>
      </div>
    </div>
  );
};
