"use client";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

interface TeamCardProps {
  name: string;
  role: string;
  imageUrl: string;
}

const CardContainer = styled.div`
  padding: 16px;
  margin: auto;
  text-align: center;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  gap: 10px;
  /* border-radius: 7%; */

  .imageContainer {
    width: 200px;
    height: 200px;
    position: relative;
    /* border-radius: 200px;
    overflow: hidden; */

  
    /* border-radius: 20px; */
    
  }

  p{
    font-size: 14px;
  }

  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
`;

const TeamImg = styled(Image)<{ thumb: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: contain;
  

  opacity: ${({ thumb }) => (thumb ? 0.1 : 1)};
 
`;

const TeamCard: React.FC<TeamCardProps> = ({ name, role, imageUrl }) => {
  return (
    <CardContainer>
      <div className="imageContainer">
        <TeamImg
          src={imageUrl}
          alt={`${name}'s Photo`}
          fill={true}
          thumb={imageUrl === "/logo.png"}
        />
      </div>

      <h3>{name}</h3>
      <p>{role}</p>
    </CardContainer>
  );
};

export default TeamCard;
