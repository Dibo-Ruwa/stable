"use client";

import styled from "styled-components";

export const Container = styled.div`
  padding: 15vh 8% 5%;
`;
export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 20px 0;
`;
export const SectionHeader = styled.h2`
  color: var(--primary);
  font-size: 16px;
  margin-bottom: 20px;

  &.main {
    font-size: 18px;
  }
`;
export const SectionText = styled.p`
font-size: 18px;
`;
export const BulletList = styled.ul`
  list-style: none;
  display: flex;
  gap: 10px;
  flex-direction: column;
`;
export const BulletListItem = styled.li`
  display: flex;
  gap: 5px;
  flex-direction: column;
  /* align-items: center; */

 
`;
export const BulletListItemHeader = styled.p`
  display: flex;
  gap: 10px;
  align-items: center;

  .icon {
    color: var(--primary);
  }
`;
export const BulletListItemText = styled.p`
  display: flex;
  gap: 10px;
  align-items: center;

  .icon {
    color: var(--primary);
  }
`;
