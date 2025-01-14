import Image from "next/image";
import "../index.css";
import Link from "next/link";

export default function RegularWashing() {
  return (
    <section className="regular_washing_container">
      <div className="container">
        <div className="regular_washing_content">
          <div className="regular_washing_image">
            <Image
              src="/images/laundry_machine.jpg"
              alt="Regular washing"
              width={500}
              height={500}
              className="regular_washing_main_image"
            />
          </div>
          <div className="regular_washing_text_container">
            <div className="text_content">
              <button className="regular_washing_btn_text">Regular Washing</button>
              <h4 className="regular_washing_subtitle">Comprehensive Regular Washing</h4>
              <p className="regular_washing_description">
                Our regular washing service ensures that your everyday clothes are
                cleaned and freshened up with care, using high-quality detergents.
              </p>
              <Link href="/laundry/request" className="regular_washing_link">
                Request a Quote
                <span className="get_started_icon">▶</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
