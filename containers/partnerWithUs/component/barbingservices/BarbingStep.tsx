import "../foodvendors/foodvendors.css";
import { IoIosCheckmark } from "react-icons/io";
const BarbingStep = () => {
  return (
    <div className="BarbingStep-content">
      <ul className="BarbingStep-ul">
        <span className="BarbingStep_cicle"></span>
        <li className="BarbingStep-li">Grooming</li>
      </ul>
      <div className="BarbingStep_get_started_container">
        <div className="BarbingStep_get_started_content">
          <div className="BarbingStep_get_started_icon_div">
            <div className="round_progress_line">
              <IoIosCheckmark className="careers_interview-item-left-tags__u0bD1" />
            </div>
            <div className="careers_line__N8bur">
              <span className="foodvendor_line"></span>
            </div>
          </div>
          <div className="BarbingStep_get_started_text_div">
            <small className="BarbingStep_get_started_icon_div"> Sign Up</small>
            <p className="BarbingStep_get_started_icon_div">
              Register your barbing service and provide necessary details.
            </p>
          </div>
        </div>
        <div className="BarbingStep_get_started_content">
          <div className="BarbingStep_get_started_icon_div">
            <div className="round_progress_line">
              <IoIosCheckmark className="careers_interview-item-left-tags__u0bD1" />
            </div>
            <div className="careers_line__N8bur">
              <span className="foodvendor_line"></span>
            </div>
          </div>
          <div className="BarbingStep_get_started_text_div">
            <small className="BarbingStep_get_started_icon_div">
              {" "}
              Profile Setup
            </small>
            <p className="Foodvendor_get_started_icon_div">
              Create your barber profile, including services offered and
              pricing.
            </p>
          </div>
        </div>
        <div className="BarbingStep_get_started_content">
          <div className="BarbingStep_get_started_icon_div">
            <div className="round_progress_line">
              <IoIosCheckmark className="careers_interview-item-left-tags__u0bD1" />
            </div>
            <div className="careers_line__N8bur">
              <span className="foodvendor_line"></span>
            </div>
          </div>
          <div className="BarbingStep_get_started_text_div">
            <small className="BarbingStep_get_started_icon_div">
              {" "}
              Location and Hours
            </small>
            <p className="BarbingStep_get_started_icon_div">
              Specify your barbershop location and operating hours.
            </p>
          </div>
        </div>
        <div className="BarbingStep_get_started_content">
          <div className="BarbingStep_get_started_icon_div">
            <div className="round_progress_line">
              <IoIosCheckmark className="careers_interview-item-left-tags__u0bD1" />
            </div>
          </div>
          <div className="BarbingStep_get_started_text_div">
            <small className="BarbingStep_get_started_icon_div">
              {" "}
              Launch Your Service
            </small>
            <p className="BarbingStep_get_started_icon_div">
              Start accepting appointments and serving clients at your
              barbershop.
            </p>
          </div>
        </div>
      </div>
      <a href="/" className="vendor_signup">
        Sign Up
      </a>
      <div className="barbingservice_img-transparent">
        <img
          src="/images/Ellipse 108.png"
          className="barbingservice_img-transparent_content"
          alt=""
        />
      </div>
    </div>
  );
};

export default BarbingStep;
