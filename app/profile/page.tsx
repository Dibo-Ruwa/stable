import Profile from "@/containers/profile/Profile";
import "../../containers/profile/profile.css";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Profile',
}

export default function Page() {
  return (
    <div style={{ background: 'var(--Background-color, #f8f8f8)' }}>
      <Profile />
    </div>
  );
}