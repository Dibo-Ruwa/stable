import React, { useState } from "react";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { AnimatePresence } from "framer-motion";
import { AccordionContainer, AccordionContent, AccordionHeader } from "./styles";


const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionContainer>
      <AccordionHeader onClick={toggleAccordion} initial={false}>
        {title}
        {isOpen ? <AiOutlineMinusCircle/> : <AiOutlinePlusCircle />}
      </AccordionHeader>
      <AnimatePresence>
        <AccordionContent
          key="content"
          initial="collapsed"
          animate={isOpen ? "open" : "collapsed"}
          exit="collapsed"
          variants={{
            open: { opacity: 1, display: "block", y: 0 },
            collapsed: { opacity: 0, display: "none", y: "-100%" },
          }}
          transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
        >
          {content}
        </AccordionContent>
      </AnimatePresence>


    </AccordionContainer>
  );
};

export default Accordion;
