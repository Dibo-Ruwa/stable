import Profile from "@/containers/profile/Profile";
import "../../../containers/profile/profile.css";

export const metadata = {
  title: "Profile",
};

const page = () => {
  return (
    <div>
      <Profile />
    </div>
  );
};

export default page;
