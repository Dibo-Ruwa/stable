import React, { useState, useEffect } from "react";
import { interceptor } from "@/axios.config";
import { useRouter } from "next/navigation";
import { IoCheckmarkSharp } from "react-icons/io5";
import { format } from "date-fns";
import LoaderComponent from "@/app/loading";

export const LaundrySubscription = () => {
  const [subscriptions, setSubscriptions] = useState([]);
   const [isLoading, setIsLoading] = useState(true);
   const router = useRouter();
 
   const getSubscriptions = async () => {
     try {
       const res = await interceptor.get("/subscriptions/all");
       const foodSubscriptions = res.data.subscriptions.filter(
         (sub: any) => sub.type === "laundry"
       );
       setSubscriptions(foodSubscriptions);
     } catch (error) {
       console.error("Error fetching subscriptions:", error);
     } finally {
       setIsLoading(false);
     }
   };
 

  useEffect(() => {
    getSubscriptions();
  }, []);

  const handleSubscriptionClick = (subscriptionId: string) => {
    router.push(`/profile/subscriptions/${subscriptionId}?type=laundry`);
  };


  if (isLoading) {
    return <LoaderComponent />;
  }

  if (subscriptions.length === 0) {
    return <p>No laundry subscriptions available.</p>;
  }

  return (
    <div className="sub_cards">
      {subscriptions.map((plan: any, index) => (
        <div className="sub_card" key={index}>
          <div className="sub_ITA">
            <div className="sub_image laundry_sub_image">
              <img
                src="/laundry to.png"
                alt="sub image"
                className="sub_img laundry_sub_img"
              />
            </div>
            <div className="sub_TA">
              <p className="sub_type_text">{plan.plan}</p>
              <p className="sub_amount_text">₦{plan.total}</p>
            </div>
          </div>
          <hr className="sub_line_divider" />
          <div className="sub_list_items">
            <div className="sub_list_item">
              <IoCheckmarkSharp className="sub_list_item_icon" />
              <p className="sub_list_item_text">
                Subscription Type: {plan.type}
              </p>
            </div>
            <div className="sub_list_item">
              <IoCheckmarkSharp className="sub_list_item_icon" />
              <p className="sub_list_item_text">
                Start Date: {format(new Date(plan.start), "MMMM do, yyyy")}
              </p>
            </div>
            <div className="sub_list_item">
              <IoCheckmarkSharp className="sub_list_item_icon" />
              <p className="sub_list_item_text">
                Due Date: {format(new Date(plan.due), "MMMM do, yyyy")}
              </p>
            </div>
          </div>
          <hr className="sub_line_divider" />
          <div className="sub_SA">
            <p className="sub_SA_text">Service Fee:</p>
            <p className="sub_amount_text SA_amount">₦{plan.total}</p>
          </div>
          <hr className="sub_line_divider" />
          <button
            className="sub_btn"
            onClick={() => handleSubscriptionClick(plan._id)}
          >
            View Details
          </button>
        </div>
      ))}
    </div>
  );
};
