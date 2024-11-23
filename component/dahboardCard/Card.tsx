'use client'
import { FC } from "react";
import { Container, Img, ImgContainer, Title } from "./card.styles";
import { useRouter } from "next/navigation";

interface CardProps {
  title: string;
  image: string;
  url: string;
}

const Card: FC<CardProps> = ({ title, image, url }) => {
  const router = useRouter();
  return (
    <Container onClick={() => router.push(url)}>
      <Title>{title}</Title>
      <ImgContainer>
        <Img src={image} width={70} height={50} alt="...." />
      </ImgContainer>
    </Container>
  );
};

export default Card;
