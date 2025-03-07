import Link from "next/link";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { usePathname, useSearchParams } from "next/navigation";
import { BsPersonCircle } from "react-icons/bs";
import { LiaAngleRightSolid } from "react-icons/lia";
import { IoPersonOutline } from "react-icons/io5";
import { HiOutlineCube } from "react-icons/hi2";
import { IoIosHeartEmpty } from "react-icons/io";
import { LiaAwardSolid } from "react-icons/lia";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { HiMenuAlt4 } from "react-icons/hi";
import { MdRestaurantMenu } from "react-icons/md";
import useAuth from "@/hooks/useAuth";


interface MenuItem {
  icon: JSX.Element;
  label: string;
  href: string;
}

interface ProfileSidebarContainerProps {
  isVisible: boolean;
}

const ProfileSidebarContainer = styled.div<ProfileSidebarContainerProps>`
  width: 30vw;
  height: 100%;
  flex-shrink: 0;
  border-radius: 20px;
  background: #fff;

  @media (max-width: 868px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 97%;
    height: 60vh;
    position: absolute;
    background: #fff;
    top: 0; // Adjust top to 0 to cover the entire height
    z-index: 2;
    transition: transform 0.3s ease-in-out;
    transform: ${({ isVisible }) =>
      isVisible ? "translateX(2%)" : "translateX(-200%)"};
  }
`;

const MenuIcon = styled(HiMenuAlt4)`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    width: 28px;
    height: 28px;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 4px;
    left: 1.5rem;
    cursor: pointer;
  }
`;
const CancelIcon = styled(MdRestaurantMenu)`
  display: none;
  @media (max-width: 768px) {
    width: 28px;
    height: 28px;
    cursor: pointer;
    position: absolute;
    right: 1rem;
  }
`;

const ProfileContainer = styled.div``;

const ProfileSidebarProfileLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 1rem 1.4rem 0.5rem;
`;

const ProfileSidebarPics = styled.div`
  width: 49.465px;
  height: 49.465px;
  flex-shrink: 0;
  background: #f4f4f4;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
`;

const ProfileIcon = styled(IoPersonOutline)`
  font-size: 24px;
  color: #27a124;
`;

const ProfileSidebarName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.7rem;
`;

const ProfileName = styled.p`
  color: #2a2a2a;
  font-family: Poppins, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
`;

const ProfileEmail = styled.p`
  color: #2a2a2a;
  font-family: Poppins, sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
`;

const SidebarLine = styled.hr`
  width: 88%;
  height: 1px;
  background: #d2d2d2;
  margin-inline: auto;
`;

const ProfileSidebarSidemenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 92%;
  gap: 20px;
  margin-inline: auto;
`;

const ProfileSidebarList = styled.ul`
  display: flex;
  padding: 10px;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  margin-inline: auto;
`;

const ProfileSidebarItem = styled.li<{ active: boolean }>`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0.4rem;
  border-radius: 8px;
  margin-inline: auto;
  background-color: ${(props) =>
    props.active ? "rgba(233, 233, 233, 0.25)" : "transparent"};
  &:hover {
    background: rgba(233, 233, 233, 0.25);
  }
`;

const ProfileSidebarLink = styled(Link)<{ active: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: ${(props) => (props.active ? "#27a124" : "#2a2a2a")};
`;

const ProfileSidebarLeftIcon = styled.div`
  display: flex;
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
`;

const ProfileSidebarLinkName = styled.p<{ active: boolean }>`
  color: ${(props) => (props.active ? "#27a124" : "#2a2a2a")};
  font-family: Poppins, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
`;

const ProfileSidebarRightIcon = styled(LiaAngleRightSolid)<{ active: boolean }>`
  display: flex;
  width: 20px;
  height: 20px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  color: ${(props) => (props.active ? "#27a124" : "#2a2a2a")};
  cursor: pointer;
`;

export const ProfileSidebar: React.FC = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const pathname = usePathname();
  const { session, userUpdate } = useAuth();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".profile-sidebar-container") && !target.closest(".menu-icon")) {
        setSidebarVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleTabClick = (href: string) => {
    setSidebarVisible(false);
    window.location.href = href; // Navigate to the selected tab
  };

  console.log(session?.user);

  const firstName = session?.user?.firstName;
  const lastName = session?.user?.lastName;
  const email = session?.user?.email;

  const profileInfo = {
    icon: <ProfileIcon />,
    name: `${firstName} ${lastName}`,
    email: email,
    href: "/profile",
  };

  const menuItems: MenuItem[] = [
    {
      icon: <BsPersonCircle />,
      label: "Profile Settings",
      href: "/profile/profile-settings",
    },
    {
      icon: <HiOutlineCube />,
      label: "Orders",
      href: "/profile/orders",
    },
    // {
    //   icon: <IoIosHeartEmpty />,
    //   label: "Favorite",
    //   href: "/profile/favorite",
    // },
    {
      icon: <LiaAwardSolid />,
      label: "Subscriptions",
      href: "/profile/subscriptions",
    },
    {
      icon: <HiOutlineEnvelope />,
      label: "Notifications",
      href: "/profile/notifications",
    },
  ];

  // Determine the active item dynamically based on the current pathname
  const activeItem = menuItems.find((item) => pathname.startsWith(item.href))?.label || "";

  return (
    <ProfileContainer>
      <MenuIcon className="menu-icon" onClick={() => setSidebarVisible(!isSidebarVisible)} />
      <ProfileSidebarContainer className="profile-sidebar-container" isVisible={isSidebarVisible}>
        <CancelIcon onClick={() => setSidebarVisible(!isSidebarVisible)} />
        <ProfileSidebarProfileLink href={profileInfo.href} onClick={() => handleTabClick(profileInfo.href)}>
          <ProfileSidebarPics>{profileInfo.icon}</ProfileSidebarPics>
          <ProfileSidebarName>
            <ProfileName>{profileInfo.name}</ProfileName>
            <ProfileEmail>{profileInfo.email}</ProfileEmail>
          </ProfileSidebarName>
        </ProfileSidebarProfileLink>
        <SidebarLine />
        <ProfileSidebarSidemenu>
          <ProfileSidebarList>
            {menuItems.map((item, index) => (
              <ProfileSidebarItem
                key={index}
                active={activeItem === item.label}
                onClick={() => handleTabClick(item.href)}
              >
                <ProfileSidebarLink href={item.href} active={activeItem === item.label}>
                  <ProfileSidebarLeftIcon>{item.icon}</ProfileSidebarLeftIcon>
                  <ProfileSidebarLinkName active={activeItem === item.label}>
                    {item.label}
                  </ProfileSidebarLinkName>
                </ProfileSidebarLink>
                <ProfileSidebarRightIcon active={activeItem === item.label} />
              </ProfileSidebarItem>
            ))}
          </ProfileSidebarList>
        </ProfileSidebarSidemenu>
      </ProfileSidebarContainer>
    </ProfileContainer>
  );
};
