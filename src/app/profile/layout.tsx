import { ProfileSidebar } from "@/containers/profile/profile-sidebar/ProfileSidebar";
import "./profile.css";

export const metadata = {
  title: "Profile",
  description: "User profile page with personalized content",
};

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="PsPfContainer">
      <ProfileSidebar />
      <div className="ProfileChildren">{children}</div>
    </div>
  );
};

export default ProfileLayout;
