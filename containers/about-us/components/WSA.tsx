import React from "react";
import Image from "next/image";
export const WSA = () => {
  return (
    <section className="wsa_Container">
      <h3 className="wsa_Title">What Set's Us Apart?</h3>
      <div className="wsa_Cards">
        <div className="wsa_Card">
          <div className="wsa_Card_image">
            <Image
              src="/images/Rectangle 27.png"
              alt="Card"
              width={331}
              height={241.719}
              className="wsa_Img"
            />
          </div>
          <p className="wsa_card_Des">
            <span className="wsa_card_TickDes">Diverse Services:</span> From grooming to moving, find
            everything you need in one place.
          </p>
        </div>
        <div className="wsa_Card">
          <div className="wsa_Card_image">
            <Image
              src="/images/Rectangle 28.png"
              alt="Card"
              width={331}
              height={241.719}
              className="wsa_Img"
            />
          </div>
          <p className="wsa_card_Des">
            <span className="wsa_card_TickDes">Reliability:</span> Trust our skilled professionals for
            top-notch service every time.
          </p>
        </div>
        <div className="wsa_Card">
          <div className="wsa_Card_image">
            <Image
              src="/images/Rectangle 29.png"
              alt="Card"
              width={331}
              height={241.719}
              className="wsa_Img"
            />
          </div>
          <p className="wsa_card_Des">
            <span className="wsa_card_TickDes">Convenience:</span> Experience seamless living with
            hassle-free solution
          </p>
        </div>
        <div className="wsa_Card">
          <div className="wsa_Card_image">
            <Image
              src="/images/image 21.png"
              alt="Card"
              width={331}
              height={241.719}
              className="wsa_Img"
            />
          </div>
          <p className="wsa_card_Des">
            <span className="wsa_card_TickDes">Customer-Centric:</span> Your satisfaction is our priority.
          </p>
        </div>
      </div>
    </section>
  );
};
