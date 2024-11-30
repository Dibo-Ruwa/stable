"use client";

import Link from "next/link";
import React, { useState } from "react";
import { IoCheckmarkSharp } from "react-icons/io5";
import { LiaAngleRightSolid } from "react-icons/lia";
import { IconType } from "react-icons/lib";

export interface RestSubPlansDataType {
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

const RestSubPlansData: RestSubPlansDataType[] = [
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

export const RestSub = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleData = showAll ? RestSubPlansData : RestSubPlansData.slice(0, 2);

  const handleSeeMoreClick = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="RestSub_container">
      <div className="customSub">
        <p className="customSub_Title">Subscription Plan</p>
        <Link href='/custom-laundry-subscriptions' className="restaurantSub">
          <p className="restaurantSubText">Custom Subscription</p>
          <LiaAngleRightSolid className="restaurantSubIcon" />
        </Link>
      </div>
      <div className="Cust_sub_cards">
        {visibleData.map((plan: RestSubPlansDataType, index) => (
          <div className="Cust_sub_card" key={index}>
            <div className="Cust_sub_ITA">
              <div className="Cust_sub_image">
                <img
                  src={plan.subImg}
                  alt="sub image"
                  className="Cust_sub_img"
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
            <button className="Cust_sub_btn">{plan.ViewSubDetailsLink}</button>
          </div>
        ))}
      </div>
      <button className="SeeMore_Sub" onClick={handleSeeMoreClick}>
        <p className="SeeMore_SubText">{showAll ? "See Less" : "See More"}</p>
        <LiaAngleRightSolid className="SeeMore_SubIcon" />
      </button>
    </div>
  );
};
