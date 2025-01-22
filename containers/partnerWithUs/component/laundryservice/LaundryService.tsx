import "./laundryservice.css";

import LaundryStep from "./LaundryStep";
const LaundryService = () => {
  return (
    <section className="laundry_container">
      <div className="laundry_width">
        <div className="laundry-img-text">
          <div className="laundry_img">
            <img
              src="/images/laundry_partner.png"
              className="laundry_img_update"
              alt=""
            />
          </div>
          <LaundryStep />
        </div>
      </div>
    </section>
  );
};
export default LaundryService;
