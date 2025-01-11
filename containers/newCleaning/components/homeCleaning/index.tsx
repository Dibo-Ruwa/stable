import Image from "next/image";
import "./index.css";
import Link from "next/link";

export default function HomeCleaning() {
  return (
    <section className="home_cleaning_container">
      <div className="container">
        <div className="home_cleaning_content">
          <div className="home_cleaning_image">
            <Image
              src="/images/WhatsApp Image 2024-12-06 at 15.56.10_2231738e.jpg"
              alt="Home cleaning"
              width={500}
              height={500}
              className="home_cleaning_main_image"
            />
            <div className="home_cleaning_inner_images">
              <Image
                src="/clean2.png"
                alt="Home cleaning"
                width={100}
                height={150}
              />
              <Image
                src="/clean2.png"
                alt="Home cleaning"
                width={100}
                height={150}
              />
            </div>
          </div>
          <div className="home_cleaning_text_container">
            <div className="text_content">
              <button className="home_cleaning_btn_text">Home Cleaning</button>
              <h4 className="home_cleaning_subtitle">Comprehensive Home Cleaning</h4>
              <p className="home_cleaning_description">
                Keep your home spotless and welcoming with our professional home
                cleaning services, tailored to meet your specific needs.
              </p>
              <Link href="/cleaning/request" className="home_cleaning_link">
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
