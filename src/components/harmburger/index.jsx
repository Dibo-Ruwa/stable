import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
  z-index: 999;
  transform: ${({ open }) => (open ? "rotate(90deg)" : "")};
  transition: all 0.6s ease;

@media screen and (min-width: 900px) {
display: none;
}
`;

const Button = styled(motion.button)`
  cursor: pointer;
  width: 48px;
  height: 48px;
  outline: none;
  border: none;
  padding: 10px 25px;
  /* transform: rotate(45deg); */
  background: 0 0;
  color: #000;
  font-size: 15px;
  letter-spacing: 1px;

  &::after,
  &::before {
    content: "";
    width: 48px;
    height: 2px;
    background: #000;
    position: absolute;
    left: 0;
    top: 50%;
    display: block;
    transform: ${({ open }) => (open ? "rotate(90deg)" : "")};
    will-change: transform;
    transform: all 1s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  &::before {
    transform: ${({ open }) =>
      open
        ? `translate(0, 1px)
      scale(0.7) rotate(315deg)`
        : `translateY(5px)
      scale(0.7) rotate(180deg)`};
  }
  &::after {
    transform: ${({ open }) =>
      open
        ? `translate(0, -1px)
      scale(0.7) rotate(45deg)`
        : `translateY(-5px)
      scale(0.7) rotate(0)`};
  }
`;

const Index = (props) => {
  const { open, setOpen } = props;

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Container onClick={handleClick} open={open}>
      <Button
        open={open}
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 500,
          damping: 50,
        }}
      />
    </Container>
  );
};

export default Index;
