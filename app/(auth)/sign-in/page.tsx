import AuthModal from "@/components/ui/modal/authModal";
import SignIn from "@/containers/auth/SignIn";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Sign in",
  robots: {
    index: false,
    follow: true,
  },
};

export type IpageProps = {};

const page: React.FC<IpageProps> = () => {
  return (
    <div>
      <AuthModal isModal={true}>
        <SignIn />
      </AuthModal>
    </div>
  );
};

export default page;
