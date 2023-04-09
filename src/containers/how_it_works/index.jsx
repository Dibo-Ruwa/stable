import React from "react";
import logo from "../../assets/logo.svg";
import pickUp from "../../assets/pickUp.svg";
import laundry from "../../assets/laundry.svg";
import clean from "../../assets/clean.svg";
import { Container, Header, Timeline, TimelineItem } from "./styles";
import Button from "../../components/button";
const steps = [
  {
    icon: pickUp, // replace with the appropriate icon class or image source
    title: "Pick up your clothes",
    sub: "To avail of Dibo Ruwa's laundry service, you can schedule a pickup through our website. The website allows students and workers to select the most convenient date and time for pickup, as well as specify any special instructions or preferences for the cleaning of their clothes. Once the pickup is scheduled, our team will arrive at the specified time to collect the laundry.",
  },
  {
    icon: laundry,
    title: "Laundry & dry clean",
    sub: "After the pickup, the clothes are transported to our facility where they are sorted and washed according to the specified preferences. Our team uses only high-quality detergents and follows eco-friendly laundry practices to ensure that the clothes are cleaned to the highest standards. The clothes are then dried and carefully ironed before being packaged for delivery.",
  },
  {
    icon: clean,
    title: "Fold clothes & deliver",
    sub: "Once the clothes are cleaned and ironed, they are packaged and delivered back to your specified location. We make sure that the clothes remain clean and wrinkle-free during transportation. You will be notified when the clothes are on the way, and our team will deliver the clothes at the specified time and location.",
  },
  // add more steps as needed
];

const Index = () => {
  return (
    <Container id="how_it_works">
      <Header>
        <img src={logo} alt="" />
        <small>Pickup & Deliver</small>

        <h5>How Dibo Wura Works</h5>
      </Header>
      <Timeline>
        {steps.map((step, index) => (
          <TimelineItem key={index}>
            <div className="icon">
              {" "}
              <span className="step">{index + 1}</span>{" "}
              <img src={step.icon} alt="" />
            </div>
            <h5 className="title">{step.title}</h5>
            <p className="sub">{step.sub}</p>
          </TimelineItem>
        ))}
      </Timeline>

      <Button size="lg" color={`var(--primary)`} text="Book our services" />
    </Container>
  );
};

export default Index;
