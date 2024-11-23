import "./deliveryservice.css";
import DeliveryStepContent from "./DeliveryStepContent";
const DeliveryService = () => {
  return (
    <section className="deliveryservice_container">
      <div className="deliveryservice_width">
        <div className="deliveryservice-img-text">
          <div className="deliveryservice_img">
            <img
              src="/images/Rectangle 318.png"
              className="deliveryservice_img-content"
              alt=""
            />
          </div>
          <DeliveryStepContent />
        </div>
        <div className="deliveryservice_overlay-img">
          <img
            src="/images/Frame 2609672.png"
            className="deliveryservice_overlay-img_content"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};
export default DeliveryService;
