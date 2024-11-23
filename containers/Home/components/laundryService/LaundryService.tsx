import Link from "next/link";
import "./laundry.css";

export default function LaundryService() {
  return (
    <section className="laundry_resturant_container">
      <div className="container">

      <div className="hero_frame laundry_resturant-content">
        {/* <p className="laundry_sub_food">Courier</p> */}
        <div className="laundry_resturant-image">
          <img
            src="/images/image 159 (1).png"
            className="laundry_desktop-image"
            alt="Laundry guys"
          />
          <div className="laundry_mobile-image">
            <img
              src="/images/image 161.png"
              className="laundry_img-main"
              alt="Laundry guys"
            />
            <img
              src="/images/image 158.png"
              className="laundry_mobile-img"
              alt="Laundry guys"
            />
          </div>
        </div>
        <div className="laundry_resturant-text_container">
          <div className="text-content">
          <button className="laundry_resturant-btn_text">Laundry</button>
          <h4 className="laundry_rest-subtitle">Laundry Service</h4>
          <p className="laundry_rest-des">
            Our hassle-free laundry service ensures that your clothes are
            cleaned, folded, and delivered with care, so you can spend less time
            on chores and more time doing what you love.
          </p>
          <Link href="/laundry" className="Check-Out_Vendors">
            Book Now
          </Link>
          </div>
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
