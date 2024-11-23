import "./foodvendors.css";
import VendorStepContent from "./VendorStepContent";

function FoodVendors() {
  return (
    <section className="vendor_container">
      <div className="vendor_width">
        <div className="vendor_img">
          <img
            src="/images/Frame 2611543.png"
            className="vendor_img-content"
            alt=""
          />
        </div>
        <VendorStepContent />
      </div>
    </section>
  );
}

export default FoodVendors;
