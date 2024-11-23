import Profile from "@/containers/profile/Profile";
import "../../../containers/profile/profile.css";

const page = () => {
  return (
    <div style={{ background: 'var(--Background-color, #f8f8f8)' }}>
      <Profile />
    </div>
  );
};

export default page;