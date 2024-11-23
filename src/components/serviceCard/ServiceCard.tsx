import React from "react";
import {
  ServiceCardArrowIcon,
  ServiceCardCTA,
  ServiceCardContainer,
  ServiceCardContent,
  ServiceCardImage,
  ServiceCardTitle,
} from "./serviceCard.styles";
import Image from "next/image";

interface CTA {
  label: string;
  path: string;
}

interface ServiceCardProps {
  title: string;
  content: string;
  bg: string;
  imageSrc: string;
  cta: CTA;
  ctaTextColor: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  content,
  bg,
  imageSrc,
  cta,
  ctaTextColor,
}) => {
  return (
    <ServiceCardContainer bg={bg}>
      <ServiceCardImage bg={bg}>
        <Image src={imageSrc} width={40} height={40} alt={title} />
      </ServiceCardImage>
      <ServiceCardTitle>{title}</ServiceCardTitle>
      <ServiceCardContent>{content}</ServiceCardContent>
      <ServiceCardCTA bg={bg} ctaTextColor={ctaTextColor} href={cta.path}>
        {cta.label}
        <ServiceCardArrowIcon className="arrow-icon">
          {">"}
        </ServiceCardArrowIcon>
      </ServiceCardCTA>
    </ServiceCardContainer>
  );
};

export default ServiceCard;
