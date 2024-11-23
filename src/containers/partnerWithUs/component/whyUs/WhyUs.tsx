import FoodVendors from "../foodvendors/FoodVendors";
import BarbingService from "../barbingservices/BarbingService";
import DeliveryService from "../deliveryservice/DeliveryService";
import LaundryService from "../laundryservice/LaundryService";
import "./whyus.css";

export default function WhyUs() {
  return (
    <section className="why_us-container">
      <div className="why_us-cards">
        <div className="why_us-card">
          <img
            src="/images/image 243.png"
            className="why_us-card_img"
            alt="why us?"
          />
          <h4 className="why_us-card_h4">Streamlined Operations</h4>
          <p className="why_us-card_p">
            The software offers a centralized platform to manage all aspects of
            your business operations, from scheduling appointments to processing
            orders and tracking.
          </p>
        </div>
        <div className="why_us-card">
          <img
            src="/images/image 244.png"
            className="why_us-card_img"
            alt="why us?"
          />
          <h4 className="why_us-card_h4">Customizable Solutions</h4>
          <p className="why_us-card_p">
            Tailor the software to fit your specific business needs with
            customizable features and settings, allowing you to adapt and scale
            as your business grows and evolves.
          </p>
        </div>
        <div className="why_us-card">
          <img
            src="/images/image 245.png"
            className="why_us-card_img"
            alt="why us?"
          />
          <h4 className="why_us-card_h4">Real-time Insights</h4>
          <p className="why_us-card_p">
            Gain valuable insights into your business performance with advanced
            analytics and reporting tools, providing actionable data to make
            informed decision.
          </p>
        </div>
      </div>
      <div>
        <FoodVendors />
        <DeliveryService />
        <BarbingService />
        <LaundryService />
      </div>
    </section>
  );
}
