import "../moving/index.css";
import Image from "next/image";
import Link from "next/link";

export default function CityDelivery() {
  return (
    <section className="vendor_container">
      <div className="vendor_width">
        <div className="vendor_text-content">
          <h3>Intra-City Delivery Services</h3>
          <p>
            Our intra-city delivery services ensure your packages and documents are delivered swiftly and securely within the city, providing you with peace of mind and convenience.
          </p>
          <Link href="/new-moving/request" className="vendor_signup">
            Get Started
            <span className="get_started_icon">▶</span>
          </Link>
        </div>
        <div className="image_section">
          <Image
            src="/images/fd1.png"
            alt="Intra-city delivery"
            width={700}
            height={700}
            style={{
              borderRadius: "0.6rem",
              height: "700px",
              width: "90%",
            }}
          />
        </div>
      </div>
    </section>
  );
}
