"use client";
import { ProfileSidebar } from "@/containers/profile/profile-sidebar/ProfileSidebar";
import styled from "styled-components";

const PsPfContainer = styled.div`
  display: flex;
  width: min(93%, 1443px);
  height: 100%;
  margin: 6rem auto 0;
  padding-top: 2rem;
  gap: 2rem;
  position: relative;
  padding-bottom: 3rem;

  @media (max-width: 1024px) {
    gap: 1rem;
    width: 93%;
  }

  @media (max-width: 768px) {
    gap: 0;
    width: 100%;
    display: block;
  }
`;

const ProfileChildren = styled.div`
width: 75%;

@media screen and (max-width: 768px){
  width: 100%;

}
`;

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <PsPfContainer>
      <ProfileSidebar />
      <ProfileChildren >{children}</ProfileChildren>
    </PsPfContainer>
  );
};

export default ProfileLayout;
