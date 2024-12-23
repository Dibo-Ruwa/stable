import "../homeCleaning/index.css";
import Image from "next/image";
import Link from "next/link";


export default function OfficeCleaning() {
  return (
    <section className="vendor_container">
      <div className="vendor_width">
        <div className="vendor_text-content">
          <h3>Comprehensive Home Cleaning</h3>
          <p>
            Keep your workspace pristine and professional with our tailored
            office cleaning services, ensuring a healthy and productive
            environment.
          </p>
          <Link href="/new-cleaning/request" className="vendor_signup">
            Request a Quote
            <span className="get_started_icon">▶</span>
          </Link>
        </div>
        <div className="image_section">
          <Image
            src="/images/office_cleaning.jpg"
            alt="Office cleaning"
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
