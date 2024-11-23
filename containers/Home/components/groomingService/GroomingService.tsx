import "./groomingService.css";
import Link from "next/link";

export default function GroomingService() {
  return (
    <section className="grooming_container">
      <div className="hero_frame grooming-content">
        <p className="sub_food">Groceries</p>
        <div className="grooming-image">
          <img
            src="/images/Frame 2610228 (2).png"
            className="grooming_desktop-image"
            alt="resturant guys"
          />
          <div className="grooming_mobile-image">
            <img
              src="/images/image 160 (1).png"
              className="grooming_img-main"
              alt="resturant guys"
            />
            <img
              src="/images/image 158.png"
              className="grooming_mobile-img"
              alt="resturant guys"
            />
          </div>
        </div>
        <div className="grooming-text_container">
          <button className="grooming-btn_text">Groceries</button>
          <h4 className="grooming-subtitle">Groceries Service</h4>
          <p className="grooming-des">
            Ransforming your look has never been easier. Skip the trip to the
            barbershop and indulge in the luxury of professional grooming right
            in the comfort of your own home.
          </p>
          <Link href="/groceries" className="Check-Out_Vendors">
            Order Now
          </Link>
        </div>
      </div>
    </section>
  );
}
