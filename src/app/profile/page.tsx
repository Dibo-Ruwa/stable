import Profile from "@/containers/profile/Profile";
import "../../containers/profile/profile.css";

export const metadata = {
  title: "Profile",
  description: "User profile page with personalized content",
};

const page = () => {
  return (
    <>
      <div className="bg-[#f8f8f8]">
        <Profile />
      </div>
    </>
  );
};

export default page;
