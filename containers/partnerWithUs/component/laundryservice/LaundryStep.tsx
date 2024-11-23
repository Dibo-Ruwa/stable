
import { IoIosCheckmark } from "react-icons/io";
const LaundryStep = () => {
  return (
    <div className="LaundryStep-content">
      <ul className="LaundryStep-ul">
        <span className="LaundryStep_cicle"></span>
        <li className="LaundryStep-li">Laundry</li>
      </ul>
      <div className="laundry_img-text">
        <div className="LaundryStep_get_started_container">
          <div className="LaundryStep_get_started_content">
            <div className="LaundryStep_get_started_icon_div">
              <div className="round_progress_line">
                <IoIosCheckmark className="careers_interview-item-left-tags__u0bD1" />
              </div>
              <div className="careers_line__N8bur">
                <span className="foodvendor_line"></span>
              </div>
            </div>
            <div className="LaundryStep_get_started_text_div">
              <small className="LaundryStep_get_started_icon_div">
                {" "}
                Sign Up
              </small>
              <p className="LaundryStep_get_started_icon_div">
                Register your laundry service and provide necessary details.
              </p>
            </div>
          </div>
          <div className="LaundryStep_get_started_content">
            <div className="LaundryStep_get_started_icon_div">
              <div className="round_progress_line">
                <IoIosCheckmark className="careers_interview-item-left-tags__u0bD1" />
              </div>
              <div className="careers_line__N8bur">
                <span className="foodvendor_line"></span>
              </div>
            </div>
            <div className="LaundryStep_get_started_text_div">
              <small className="LaundryStep_get_started_icon_div">
                {" "}
                Service Setup
              </small>
              <p className="LaundryStep_get_started_icon_div">
                Define your laundry services, pricing, and turnaround time.
              </p>
            </div>
          </div>
          <div className="LaundryStep_get_started_content">
            <div className="LaundryStep_get_started_icon_div">
              <div className="round_progress_line">
                <IoIosCheckmark className="careers_interview-item-left-tags__u0bD1" />
              </div>
              <div className="careers_line__N8bur">
                <span className="foodvendor_line"></span>
              </div>
            </div>
            <div className="LaundryStep_get_started_text_div">
              <small className="Foodvendor_get_started_icon_div">
                {" "}
                Location and Pickup/Delivery
              </small>
              <p className="LaundryStep_get_started_icon_div">
                Specify your service areas and setup pickup/delivery options.
              </p>
            </div>
          </div>
          <div className="LaundryStep_get_started_content">
            <div className="LaundryStep_get_started_icon_div">
              <div className="round_progress_line">
                <IoIosCheckmark className="careers_interview-item-left-tags__u0bD1" />
              </div>
            </div>
            <div className="LaundryStep_get_started_text_div">
              <small className="LaundryStep_get_started_icon_div">
                {" "}
                Launch Your Service
              </small>
              <p className="LaundryStep_get_started_icon_div">
                Start receiving laundry orders and serving customers.
              </p>
            </div>
          </div>
        </div>
        <a href="/" className="vendor_signup">
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default LaundryStep;
