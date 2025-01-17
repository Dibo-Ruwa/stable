import "./restContent.css";
import Link from "next/link";

export default function Resturant() {
  return (
    <section className="resturant_container" style={{ marginTop: "30px", marginBottom: "50px" }}>
      <div className="hero_frame resturant-content">
        <div className="rest-title">
          <h1 className="rest-title-h1">Our Services</h1>
          <div className="lines line-one"></div>
          <div className="lines line-two"></div>
          <div className="lines line-three"></div>
        </div>
        <p className="sub_food">Food</p>
        <div className="resturant-image">
          <img
            src="/images/meal3.png"
            className="desktop-image"
            alt="resturant guys"
           
          />
          <div className="mobile-image">
            <img
              src="/images/image 159.png"
              className="img-main"
              alt="resturant guys"
            />
            <img
              src="/images/image 158.png"
              className="mobile-img"
              alt="resturant guys"
            />
          </div>
        </div>
        <div className="resturant-text_container" style={{marginLeft: "40px"}}>
          <button type="button" className="resturant-btn_text">Food</button>
          <h4 className="rest-subtitle">
            Over 100 menu items are waiting for your order!
          </h4>
          <p className="rest-des">
            Explore our mouthwatering menu featuring dishes from top
            restaurants. Each item lists preparation time, so you'll know when
            to expect your meal. Discover new favorites today!
          </p>
          <div className="action-buttons" style={{marginTop: "30px"}}>
            <Link href="/food" className="Check-Out_Vendors">
              Check Out Menu
            </Link>
            <Link href="/food/subscription" className="Subscribe_Button">
              Subscribe
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
