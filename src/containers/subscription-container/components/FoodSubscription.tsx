import { subscriptionPlansData, subscriptionPlansDataType } from "@/constants";
import React from "react";

export const FoodSubscription = () => {
  return (
    <div className="sub_cards">
      {subscriptionPlansData.map((plan: subscriptionPlansDataType, index) => (
        <div className="sub_card" key={index}>
          <div className="sub_ITA">
            <div className="sub_image">
              <img src={plan.subImg} alt="sub image" className="sub_img" />
            </div>
            <div className="sub_TA">
              <p className="sub_type_text">{plan.subType}</p>
              <p className="sub_amount_text">{plan.subAmount}</p>
            </div>
          </div>
          <hr className="sub_line_divider" />
          <div className="sub_list_items">
            {plan.subItem.map((item, itemIndex) => (
              <div className="sub_list_item" key={itemIndex}>
                {React.createElement(item.tickIcon, {
                  className: "sub_list_item_icon",
                })}
                <p className="sub_list_item_text">{item.subItemText}</p>
              </div>
            ))}
          </div>
          <hr className="sub_line_divider" />
          <div className="sub_SA">
            <p className="sub_SA_text">{plan.subFeeText}</p>
            <p className="sub_amount_text SA_amount">{plan.subAmount}</p>
          </div>
          <hr className="sub_line_divider" />
          <button className="sub_btn">{plan.ViewSubDetailsLink}</button>
        </div>
      ))}
    </div>
  );
};
