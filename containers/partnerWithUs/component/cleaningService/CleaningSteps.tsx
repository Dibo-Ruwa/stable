import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { IoIosCheckmark } from "react-icons/io";
import "./cleaningservice.css";

const CleaningStep = () => {
  return (
    <div className="CleaningStep-content">
      <ul className="CleaningStep-ul">
        <span className="CleaningStep_cicle"></span>
        <li className="CleaningStep-li">Cleaning</li>
      </ul>

      <div className="cleaning_img-text_Frame">
        <div className="cleaning_img-text">
          <div className="CleaningStep_get_started_container">
            <div className="CleaningStep_get_started_content">
              <div className="CleaningStep_get_started_icon_div">
                <div className="round_progress_line">
                  <IoIosCheckmark className="careers_interview-item-left-tags__u0bD1" />
                </div>
                <div className="careers_line__N8bur">
                  <span className="foodvendor_line"></span>
                </div>
              </div>
              <div className="CleaningStep_get_started_text_div">
                <small className="CleaningStep_get_started_icon_div">
                  {" "}
                  Join Us
                </small>
                <p className="CleaningStep_get_started_icon_div">
                  Register your cleaning service and provide necessary details.
                </p>
              </div>
            </div>
            <div className="CleaningStep_get_started_content">
              <div className="CleaningStep_get_started_icon_div">
                <div className="round_progress_line">
                  <IoIosCheckmark className="careers_interview-item-left-tags__u0bD1" />
                </div>
                <div className="careers_line__N8bur">
                  <span className="foodvendor_line"></span>
                </div>
              </div>
              <div className="CleaningStep_get_started_text_div">
                <small className="CleaningStep_get_started_icon_div">
                  {" "}
                  Service Setup
                </small>
                <p className="CleaningStep_get_started_icon_div">
                  Define your cleaning services, pricing, and availability.
                </p>
              </div>
            </div>
            <div className="CleaningStep_get_started_content">
              <div className="CleaningStep_get_started_icon_div">
                <div className="round_progress_line">
                  <IoIosCheckmark className="careers_interview-item-left-tags__u0bD1" />
                </div>
                <div className="careers_line__N8bur">
                  <span className="foodvendor_line"></span>
                </div>
              </div>
              <div className="CleaningStep_get_started_text_div">
                <small className="Foodvendor_get_started_icon_div">
                  {" "}
                  Location and Scheduling
                </small>
                <p className="CleaningStep_get_started_icon_div">
                  Specify your service areas and setup scheduling options.
                </p>
              </div>
            </div>
            <div className="CleaningStep_get_started_content">
              <div className="CleaningStep_get_started_icon_div">
                <div className="round_progress_line">
                  <IoIosCheckmark className="careers_interview-item-left-tags__u0bD1" />
                </div>
              </div>
              <div className="CleaningStep_get_started_text_div">
                <small className="CleaningStep_get_started_icon_div">
                  {" "}
                  Launch Your Service
                </small>
                <p className="CleaningStep_get_started_icon_div">
                  Start receiving cleaning orders and serving customers.
                </p>
              </div>
            </div>
          </div>
          <Link href="https://admin.diboruwa.com/sign-in" className="vendor_signup">
            Join Us
            <FaArrowRight className="get_started_icon" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CleaningStep;
