import "./foodvendors.css";
import { IoIosCheckmark } from "react-icons/io";
const VendorStepContent = () => {
  return (
    <div className="vendor_text-content">
      <ul className="vendor_text-ul">
        <span className="vendor_text_cicle"></span>
        <li className="vendor_text-li">Food vendors</li>
      </ul>
      <div className="Foodvendor_get_started_container">
        <div className="Foodvendor_get_started_content">
          <div className="Foodvendor_get_started_icon_div">
            <div className="round_progress_line">
              <IoIosCheckmark className="careers_interview-item-left-tags__u0bD1" />
            </div>
            <div className="careers_line__N8bur">
              <span className="foodvendor_line"></span>
            </div>
          </div>
          <div className="Foodvendor_get_started_text_div">
            <small className="Foodvendor_get_started_icon_div"> Sign Up</small>
            <p className="Foodvendor_get_started_icon_div">
              Create your account and provider basic information.
            </p>
          </div>
        </div>
        <div className="Foodvendor_get_started_content">
          <div className="Foodvendor_get_started_icon_div">
            <div className="round_progress_line">
              <IoIosCheckmark className="careers_interview-item-left-tags__u0bD1" />
            </div>
            <div className="careers_line__N8bur">
              <span className="foodvendor_line"></span>
            </div>
          </div>
          <div className="Foodvendor_get_started_text_div">
            <small className="Foodvendor_get_started_icon_div">
              {" "}
              Menu Setup
            </small>
            <p className="Foodvendor_get_started_icon_div">
              Customize you menu with dishes and prices.
            </p>
          </div>
        </div>
        <div className="Foodvendor_get_started_content">
          <div className="Foodvendor_get_started_icon_div">
            <div className="round_progress_line">
              <IoIosCheckmark className="careers_interview-item-left-tags__u0bD1" />
            </div>
            <div className="careers_line__N8bur">
              <span className="foodvendor_line"></span>
            </div>
          </div>
          <div className="Foodvendor_get_started_text_div">
            <small className="Foodvendor_get_started_icon_div">
              {" "}
              Set Location
            </small>
            <p className="Foodvendor_get_started_icon_div">
              Specify your business location and hours.
            </p>
          </div>
        </div>
        <div className="Foodvendor_get_started_content">
          <div className="Foodvendor_get_started_icon_div">
            <div className="round_progress_line">
              <IoIosCheckmark className="careers_interview-item-left-tags__u0bD1" />
            </div>
          </div>
          <div className="Foodvendor_get_started_text_div">
            <small className="Foodvendor_get_started_icon_div">
              {" "}
              Launch Store
            </small>
            <p className="Foodvendor_get_started_icon_div">
              Start accepting orders and reaching hungry customers.
            </p>
          </div>
        </div>
      </div>
      <a href="/" className="vendor_signup">
        Sign Up
      </a>

      <div className="vendor_img-transparent">
        <img
          src="/images/image 249.png"
          className="vendor_img-transparent_content "
          alt=""
        />
      </div>
    </div>
  );
};

export default VendorStepContent;
