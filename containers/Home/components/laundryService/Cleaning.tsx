import "./laundry.css";

export default function Cleaning() {
  return (
    <section className="laundry_resturant_container">
      <div className="container">
        <div className="hero_frame laundry_resturant-content">
          <p className="laundry_sub_food">Courier</p>
          <div className="laundry_resturant-image">
            <img
              src="/images/image 159 (1).png"
              className="laundry_desktop-image"
              alt="resturant guys"
            />
            <div className="laundry_mobile-image">
              <img
                src="/images/image 161.png"
                className="laundry_img-main"
                alt="resturant guys"
              />
              <img
                src="/images/image 158.png"
                className="laundry_mobile-img"
                alt="resturant guys"
              />
            </div>
          </div>
          <div className="laundry_resturant-text_container">
            <button className="laundry_resturant-btn_text">Cleaning</button>
            <h4 className="laundry_rest-subtitle">Cleaning Service</h4>
            <p className="laundry_rest-des">
              Our hassle-free laundry service ensures that your clothes are
              cleaned, folded, and delivered with care, so you can spend less
              time on chores and more time doing what you love.
            </p>
            <a href="/cleaning" className="Check-Out_Vendors">
              Book Now
            </a>
            <div className="laundry-service_img">
              <img
                src="/images/Rectangle 248 (1).png"
                className="service_img"
                alt="resturant guys"
              />

              <img
                src="/images/Rectangle 249.png"
                className="service_img"
                alt="resturant guys"
              />
              <img
                src="/images/Rectangle 250.png"
                className="service_img"
                alt="resturant guys"
              />
              <img
                src="/images/Rectangle 251.png"
                className="service_img"
                alt="resturant guys"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
