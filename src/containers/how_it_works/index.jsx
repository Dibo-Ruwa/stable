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
    sub: "Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod.",
  },
  {
    icon: laundry,
    title: "Laundry & dry clean",
    sub: "Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod.",
  },
  {
    icon: clean,
    title: "Fold clothes & deliver",
    sub: "Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod.",
  },
  // add more steps as needed
];

const Index = () => {
  return (
    <Container>
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
