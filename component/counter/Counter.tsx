"use client";

import { FC } from "react";
import { Container, CounterBtn, CounterValue } from "./counter.styles";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import useCartStore from "@/store/useCart.store";

interface CounterProp {
  id: string;
  value: number;
}

const Counter: FC<CounterProp> = ({ value, id }) => {
  const { updateQuantity } = useCartStore();
  return (
    <Container>
      <CounterBtn
        onClick={() => {
          updateQuantity(id, "decrease");
          console.log("decrement");
        }}
      >
        <AiOutlineMinus />
      </CounterBtn>
      <CounterValue>{value}</CounterValue>
      <CounterBtn onClick={() => updateQuantity(id, "increase")}>
        <AiOutlinePlus />
      </CounterBtn>
    </Container>
  );
};

export default Counter;
