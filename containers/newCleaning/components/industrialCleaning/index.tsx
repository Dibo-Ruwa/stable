import "../homeCleaning/index.css";
import Image from "next/image";
import Link from "next/link";

export default function IndustrialCleaning() {
  return (
    <section className="industrial_cleaning_container">
      <div className="container">
        <div className="industrial_cleaning_content">
          <div className="industrial_cleaning_image">
            <Image
              src="/images/industrial_clean.jpg"
              alt="Industrial cleaning"
              width={500}
              height={500}
              className="industrial_cleaning_main_image"
            />
          </div>
          <div className="industrial_cleaning_text_container">
            <div className="text_content">
              <button className="industrial_cleaning_btn_text">Industrial Cleaning</button>
              <h4 className="industrial_cleaning_subtitle">Comprehensive Industrial Cleaning</h4>
              <p className="industrial_cleaning_description">
                Keep your workspace pristine and professional with our tailored
                industrial cleaning services, ensuring a healthy and productive
                environment.
              </p>
              <Link href="/cleaning/request" className="industrial_cleaning_link">
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
