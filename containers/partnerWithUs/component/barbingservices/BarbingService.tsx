import "./barbingservice.css";
import BarbingStep from "./BarbingStep";
const BarbingService = () => {
  return (
    <section className="barbingservice_container">
      <div className="barbingservice_width">
        <div className="barbingservice-img-text">
          <div className="barbingservice_img">
            <img
              src="/images/Rectangle 319.png"
              className="barbingservice_img-content"
              alt=""
            />

            <div className="barbingservice_overlay-img">
              <img
                src="/images/Frame 2609849.png"
                className="barbingservice_overlay-img_content"
                alt=""
              />
            </div>
          </div>
          <BarbingStep />
        </div>
      </div>
    </section>
  );
};
export default BarbingService;
