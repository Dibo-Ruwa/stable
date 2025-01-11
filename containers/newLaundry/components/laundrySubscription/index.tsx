import Image from "next/image";
import "../index.css";
import Link from "next/link";

export default function LaundrySubscription() {
  return (
    <section className="laundry_subscription_container">
      <div className="container">
        <div className="laundry_subscription_content">
          <div className="laundry_subscription_image">
            <Image
              src="/images/laundry_machine.jpg"
              alt="Laundry subscription"
              width={500}
              height={500}
              className="laundry_subscription_main_image"
            />
          </div>
          <div className="laundry_subscription_text_container">
            <div className="text_content">
              <button className="laundry_subscription_btn_text">Laundry Subscription</button>
              <h4 className="laundry_subscription_subtitle">Monthly Laundry Subscription</h4>
              <p className="laundry_subscription_description">
                Subscribe to our monthly laundry packages and enjoy hassle-free laundry
                services with regular pickups and deliveries.
              </p>
              <Link href="/laundry/request" className="laundry_subscription_link">
                Subscribe Now
                <span className="get_started_icon">▶</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
