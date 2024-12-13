import "./laundry.css";

export default function Cleaning() {
  return (
    <section className="laundry_resturant_container">
      <div className="container">
        <div className="hero_frame Cleaning_resturant-content">
          <p className="laundry_sub_food">Courier</p>
          <div className="cleaning_resturant-image">
            <img
              src="/images/WhatsApp Image 2024-12-06 at 15.56.10_2231738e.jpg"
              className="cleaning_desktop-image"
              alt="resturant guys"
            />
            <div className="laundry_mobile-image">
              <img
                src="/images/WhatsApp Image 2024-12-04 at 15.15.22_a794ab6a.jpg"
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
          <div className="cleaning_resturant-text_container">
            <button className="cleaning_resturant-btn_text">Cleaning</button>
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
                src="/images/WhatsApp Image 2024-12-04 at 15.15.22_a794ab6a.jpg"
                className="service_img"
                alt="resturant guys"
              />

              <img
                src="/images/WhatsApp Image 2024-12-04 at 15.15.27_9bbac718.jpg"
                className="service_img"
                alt="resturant guys"
              />
              <img
                src="/images/WhatsApp Image 2024-12-04 at 15.15.27_9bbac718.jpg"
                className="service_img"
                alt="resturant guys"
              />
              <img
                src="/images/WhatsApp Image 2024-12-04 at 15.15.22_a794ab6a.jpg"
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
