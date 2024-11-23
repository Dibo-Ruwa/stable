import "./header.css"
export default function Header() {
  return (
    <>
      <section className="partner_header-container">
        <div className="partner_header-content header_container-frame">
          <div className="partner_header-text">
            <h1 className="partner_header-h1">
              Elevate Your Business Operations with Our Comprehensive Management
              Platform
            </h1>
            <p className="partner_header-p">
              Streamline Operations, Manage Logistics, and Delight Customers
              Across Laundry, Food Delivery, Moving, and Barbing Services
            </p>
            <button className="partner_header-btn">Get Started</button>
          </div>
          <div className="partner_header-top">
            <span className="partner_header-top_text">Top Partners</span>
            <img
              src="/images/Frame 2611554.png"
              className="partner_header-top_img"
              alt="top paertner"
            />
          </div>
        </div>
        <div className="partner_header-img_container">
          <img
            src="/images/Frame 2611551.png"
            className="partner_header-img"
            alt="dashboard"
          />
        </div>
      </section>
    </>
  );
}
