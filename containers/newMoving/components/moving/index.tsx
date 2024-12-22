import Image from "next/image";
import "./index.css";
import Link from "next/link";

export default function HomeMoving() {
  return (
    <section className="vendor_container">
      <div className="vendor_width">
        <div className="image_section">
          <Image
            src="/images/fd2.png"
            alt="Home moving"
            width={700}
            height={700}
            style={{
              borderRadius: "0.6rem",
              width: "90%",
            }}
          />
        </div>
        <div className="vendor_text-content" style={{ marginTop: "30px" }}>
          <h3>Home Moving Services</h3>
          <p>
            Our home moving services ensure a hassle-free and efficient relocation of your household items, providing you with peace of mind and a smooth transition to your new home.
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
