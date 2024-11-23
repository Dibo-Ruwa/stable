import "./laundryservice.css";
import LaundryStep from "./LaundryStep";
const LaundryService = () => {
  return (
    <section className="laundry_container">
      <div className="laundry_width">
        <div className="laundry-img-text">
          <div className="laundry_img">
            <img
              src="/images/Rectangle 321.png"
              className="laundry_img-content"
              alt=""
            />

            <div className="laundry_overlay-img">
              <img
                src="/images/component 79.png"
                className="laundry_overlay-img_content"
                alt=""
              />
            </div>
          </div>
          <LaundryStep />
        </div>
      </div>
    </section>
  );
};
export default LaundryService;
