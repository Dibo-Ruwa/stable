"use client";

import { CaretDownIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  width: 106px;
  height: 44px;
  border-radius: 50%;
  `;
export const Initials = styled.div`
  padding: 0.5rem;
  width: 106px;
  height: 44px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  background: #e9f6e9;
`;

export const Img = styled(Image)`
width: 100%;
height: 100%;
border-radius: 50%;
overflow: hidden;
`;


export const AvatarDropdown = styled(CaretDownIcon)`
width: 20px;
height: 20px;
display: flex;
justify-content: center;
align-items: center;
color: #2a2a2a;
`;