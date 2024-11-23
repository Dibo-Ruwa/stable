"use client";
import { FC } from "react";
import { Container, Title } from "./card.styles";
import { useRouter } from "next/navigation";

interface CardProps {
  title: string;

  value: string | number;
}

const Card: FC<CardProps> = ({ title, value }) => {
  const router = useRouter();
  return (
    <Container onClick={() => router.push(title)}>
      <Title>{title}</Title>
      <div className="value">{value}</div>
    </Container>
  );
};

export default Card;
