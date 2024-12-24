import "../moving/index.css";
import Image from "next/image";
import Link from "next/link";

export default function OfficeMoving() {
  return (
    <section className="vendor_container">
      <div className="vendor_width">
        <div className="image_section">
          <Image
            src="/images/fd3.png"
            alt="Office equipment moving"
            width={700}
            height={700}
            style={{
              borderRadius: "0.6rem",
              height: "700px",
              width: "90%",
            }}
          />
        </div>
        <div className="vendor_text-content">
          <h3>Office Equipment Moving</h3>
          <p>
            Our specialized office equipment moving services ensure the safe and efficient relocation of your valuable office assets, minimizing downtime and ensuring a smooth transition.
          </p>
          <Link href="/new-moving/request" className="vendor_signup">
          Get Started
            <span className="get_started_icon">▶</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
