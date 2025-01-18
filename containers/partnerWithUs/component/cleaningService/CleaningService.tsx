import "./cleaningservice.css";
import CleaningStep from "./CleaningSteps";

const CleaningService = () => {
  return (
    <section className="cleaning_container">
      <div className="cleaning_width">
        <div className="cleaning-img-text">
          <div className="cleaning_img">
            <img
              src="/images/cleaning_quote.jpg"
              className="cleaning_img-content_update cleaning_img-mobile"
              alt=""
            />
          </div>
          <CleaningStep />
        </div>
      </div>
    </section>
  );
};
export default CleaningService;
