import { IoIosCheckmark } from "react-icons/io";

const DeliveryStepContent = () => {
  return (
    <div className="DeliveryStepContent-content">
      <ul className="DeliveryStepContent-ul">
        <span className="DeliveryStepContent_cicle"></span>
        <li className="DeliveryStepContent-li">
          Moving & food delivery service
        </li>
      </ul>
      <div className="DeliveryStepContent_get_started_container">
        <div className="DeliveryStepContent_get_started_content">
          <div className="DeliveryStepContent_get_started_icon_div">
            <div className="round_progress_line">
              <IoIosCheckmark className="careers_interview-item-left-tags__u0bD1" />
            </div>
            <div className="careers_line__N8bur">
              <span className="foodvendor_line"></span>
            </div>
          </div>
          <div className="DeliveryStepContent_get_started_text_div">
            <small className="DeliveryStepContent_get_started_icon_div">
              {" "}
              Sign Up
            </small>
            <p className="DeliveryStepContent_get_started_icon_div">
              Register your moving service and provide necessary details.
            </p>
          </div>
        </div>
        <div className="DeliveryStepContent_get_started_content">
          <div className="DeliveryStepContent_get_started_icon_div">
            <div className="round_progress_line">
              <IoIosCheckmark className="careers_interview-item-left-tags__u0bD1" />
            </div>
            <div className="careers_line__N8bur">
              <span className="foodvendor_line"></span>
            </div>
          </div>
          <div className="DeliveryStepContent_get_started_text_div">
            <small className="DeliveryStepContent_get_started_icon_div">
              {" "}
              Service Setup
            </small>
            <p className="DeliveryStepContent_get_started_icon_div">
              Define your service areas, rates, and availability.
            </p>
          </div>
        </div>
        <div className="DeliveryStepContent_get_started_content">
          <div className="DeliveryStepContent_get_started_icon_div">
            <div className="round_progress_line">
              <IoIosCheckmark className="careers_interview-item-left-tags__u0bD1" />
            </div>
            <div className="careers_line__N8bur">
              <span className="foodvendor_line"></span>
            </div>
          </div>
          <div className="DeliveryStepContent_get_started_text_div">
            <small className="DeliveryStepContent_get_started_icon_div">
              {" "}
              Profile Verification
            </small>
            <p className="DeliveryStepContent_get_started_icon_div">
              Complete verification to build trust with customers.
            </p>
          </div>
        </div>
        <div className="DeliveryStepContent_get_started_content">
          <div className="DeliveryStepContent_get_started_icon_div">
            <div className="round_progress_line">
              <IoIosCheckmark className="careers_interview-item-left-tags__u0bD1" />
            </div>
          </div>
          <div className="DeliveryStepContent_get_started_text_div">
            <small className="DeliveryStepContent_get_started_icon_div">
              {" "}
              Launch Your Service
            </small>
            <p className="DeliveryStepContent_get_started_icon_div">
              Start receiving moving requests and serving customers.
            </p>
          </div>
        </div>
      </div>
      <a href="/" className="vendor_signup">
        Sign Up
      </a>
      <div className="deliveryservice_img-transparent">
        <img
          src="/images/Ellipse 109.png"
          className="deliveryservice_img-transparent_content"
          alt=""
        />
      </div>
    </div>
  );
};

export default DeliveryStepContent;
