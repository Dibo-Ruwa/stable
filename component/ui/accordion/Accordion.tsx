"use client";
import React, { useRef, useState } from "react";

import { MinusCircledIcon, PlusCircledIcon } from "@radix-ui/react-icons";
import {
  AccordionButton,
  AccordionContent,
  AccordionWrapper,
} from "./accordion.styles";

interface Props {
  faq: {
    id: number;
    title: string;
    content: string;
  };
  active: any;
  handleToggle: (index: any) => void;
}

const Accordion: React.FC<Props> = ({ faq, active, handleToggle }) => {
  const contentEl = useRef<HTMLDivElement>(null);

  const { id, title, content } = faq;

  return (
    <AccordionWrapper>
      <AccordionButton
        className={active === id ? "active" : ""}
        onClick={() => handleToggle(id)}
      >
        <span>{title}</span>
        {active === id ? <MinusCircledIcon /> : <PlusCircledIcon />}
      </AccordionButton>

      <AccordionContent
        ref={contentEl}
        className={`collapse ${active === id ? "show" : ""}`}
        style={
          active === id
            ? { height: contentEl?.current?.scrollHeight }
            : { height: 0 }
        }
      >
        <p>{content}</p>
      </AccordionContent>
    </AccordionWrapper>
  );
};

export default Accordion;
