import React from "react";
import Image from "next/image";
export const WSA = () => {

const wsaData = [
  {
    id: 1,
    imageSrc: "/images/Rectangle 27.png",
    title: "Diverse Services:",
    description:
      "From grooming to moving, find everything you need in one place.",
  },
  {
    id: 2,
    imageSrc: "/images/Rectangle 28.png",
    title: "Reliability:",
    description:
      "Trust our skilled professionals for top-notch service every time.",
  },
  {
    id: 3,
    imageSrc: "/images/Rectangle 29.png",
    title: "Convenience:",
    description: "Experience seamless living with hassle-free solutions.",
  },
  {
    id: 4,
    imageSrc: "/images/image 21.png",
    title: "Customer-Centric:",
    description: "Your satisfaction is our priority.",
  },
];



  return (
    <section className="wsa_Container">
      <h3 className="wsa_Title">What Set's Us Apart?</h3>
      <div className="wsa_Cards">
        {wsaData.map((card) => (
          <div key={card.id} className="wsa_Card">
            <div className="wsa_Card_image">
              <Image
                src={card.imageSrc}
                alt={card.title}
                width={331}
                height={241.719}
                className="wsa_Img"
              />
            </div>
            <p className="wsa_card_Des">
              <span className="wsa_card_TickDes">{card.title}</span>{" "}
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
