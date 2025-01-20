import "./laundry.css";

export default function Cleaning() {
  return (
    <section className="laundry_resturant_container">
      <div className="container">
        <div className="hero_frame Cleaning_resturant-content">
          <p className="laundry_sub_food">Cleaning</p>
          <div className="cleaning_resturant-image">
            <img
              src="/images/WhatsApp Image 2024-12-06 at 15.56.10_2231738e.jpg"
              className="cleaning_desktop-image"
              alt="resturant guys"
            />
            <div className="laundry_mobile-image">
              <img
                src="/images/WhatsApp Image 2024-12-06 at 15.56.10_2231738e.jpg"
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
              Our professional cleaning service ensures your space is spotless and hygienic. 
              We offer comprehensive cleaning solutions tailored to your needs, so you can enjoy a clean and healthy environment.
            </p>
            <a href="/cleaning" className="Check-Out_Vendors">
              Book Now
            </a>
            <div className="laundry-service_img">
              <img
                src="/images/cleaning_sub.jpg"
                className="service_img"
                alt="resturant guys"
              />

              <img
                src="/images/cleaning_items.png"
                className="service_img"
                alt="resturant guys"
              />
              <img
                src="/images/WhatsApp Image 2024-12-04 at 15.15.27_9bbac718.jpg"
                className="service_img"
                alt="resturant guys"
              />
              <img
                src="/images/industrial_clean.jpg"
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
