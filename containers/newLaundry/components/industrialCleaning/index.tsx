import "../laundry/index.css";
import Image from "next/image";
import Link from "next/link";

export default function OfficeCleaning() {
    return (
      <section className="vendor_container">
        <div className="vendor_width">
          <div className="image_section">

            <Image
              src="/images/industrial_clean.jpg" 
              alt="Industrial cleaning"
              width={700}
              height={700}
              style={{
                borderRadius: "0.6rem",
                height: "700px",
                width: "90%"
              }}
              />
          </div>
          <div className="vendor_text-content">
            <h3>Comprehensive Industrial Cleaning</h3>
            <p>Keep your workspace pristine and professional with our tailored office cleaning services, ensuring a healthy and productive environment.</p>
            <Link href="/new-laundry/request" className="vendor_signup">
          Get a Quote
            <span className="get_started_icon">▶</span>
          </Link>
          </div>
        </div>
      </section>
    );
  }
  