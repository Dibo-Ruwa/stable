"use client";

import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { LiaAngleLeftSolid } from "react-icons/lia";
import styled from "styled-components";

const Container = styled.button`
  border: none;
  outline: none;
  background: transparent;
  color: var(--primary);
  display: flex;
  align-items: center;
  gap: 7px;
  cursor: pointer;
  padding: 21px 0;

  &:hover {
    color: var(--primary);
  }

  .span_back {
    color: var(--Green1, #27a124);
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .icon {
    width: 15px;
    height: 15px;
    flex-shrink: 0;
  }
`;

interface BackButtonProps {
  className?: string;
  onClick?: () => void;
}

export const BackButton: React.FC<BackButtonProps> = ({className, onClick}) => {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) {
      onClick()
    } else (
      router.back()
    )
  }
  return (
    <Container onClick={handleClick} className={className}>
      <ArrowLeftIcon className="icon" /> <span className="span_back">Back</span>
    </Container>
  );
};

export const BackButton2: React.FC<BackButtonProps> = ({ className, onClick }) => {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) {
      onClick()
    } else (
      router.back()
    )
  }
  return (
    <Container onClick={handleClick} className={className}>
      <LiaAngleLeftSolid className="icon" />{" "}
      <span className="span_back">Back</span>
    </Container>
  );
};

 
