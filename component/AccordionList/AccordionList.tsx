"use client";

import { FC, useState } from "react";
import { Container } from "./AccordionList.styles";
import { accordionData } from "@/constants";
import Accordion from "../ui/accordion/Accordion";

const AccordionList = () => {
  const [active, setActive] = useState(null);

  const handleToggle = (index: any) => {
    if (active === index) {
      setActive(null);
    } else {
      setActive(index);
    }
  };

  return (
    <Container>
      {accordionData.map((faq, index) => {
        return (
          <Accordion
            key={index}
            active={active}
            faq={faq}
            handleToggle={handleToggle}
          />
        );
      })}
    </Container>
  );
};

export default AccordionList;
