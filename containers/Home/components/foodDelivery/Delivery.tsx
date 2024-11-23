import "./delivery.css";
import Link from "next/link"
export default function Delivery() {
  return (
    <section className="delivery_container">
      <div className="hero_frame delivery-content">
        <p className="sub_food">Courier</p>
        <div className="delivery-image">
          <img
            src="/images/Frame 2610228 (1).png"
            className="delivery_desktop-image"
            alt="resturant guys"
          />
          <div className="delivery_mobile-image">
            <img
              src="/images/image 160.png"
              className="delivery_img-main"
              alt="resturant guys"
            />
            <img
              src="/images/image 158.png"
              className="delivery_mobile-img"
              alt="resturant guys"
            />
          </div>
        </div>
        <div className="delivery-text_container">
          <button className="delivery-btn_text">Courier</button>
          <h4 className="delivery-subtitle">Food delivery & Moving</h4>
          <p className="delivery-des">
            Need to move or deliver food? We've got the wheels and the expertise
            to make it happen seamlessly. Count on us for reliable
            transportation solutions tailored to your needs.
          </p>
          <Link href="/moving" className="Check-Out_Vendors">
            Book Service
          </Link>
        </div>
      </div>
    </section>
  );
}