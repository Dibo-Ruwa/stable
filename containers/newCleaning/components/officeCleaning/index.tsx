import "../homeCleaning/index.css";
import Image from "next/image";
import Link from "next/link";

export default function OfficeCleaning() {
  return (
    <section className="office_cleaning_container">
      <div className="container">
        <div className="office_cleaning_content">
        <div className="office_cleaning_text_container">
            <div className="text_content">
              <button className="office_cleaning_btn_text">Office Cleaning</button>
              <h4 className="office_cleaning_subtitle">Comprehensive Office Cleaning</h4>
              <p className="office_cleaning_description">
                Keep your workspace pristine and professional with our tailored
                office cleaning services, ensuring a healthy and productive
                environment.
              </p>
              <Link href="/cleaning/request" className="office_cleaning_link">
                Request a Quote
                <span className="get_started_icon">▶</span>
              </Link>
            </div>
          </div>
          <div className="office_cleaning_image">
            <Image
              src="/images/office_cleaning.jpg"
              alt="Office cleaning"
              width={500}
              height={500}
              className="office_cleaning_main_image"
            />
          </div>
         
        </div>
      </div>
    </section>
  );
}
