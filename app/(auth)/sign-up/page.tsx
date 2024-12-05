import AuthModal from "@/components/ui/modal/authModal";
import SignUp from "@/containers/auth/SignUp";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Register",
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
        <SignUp />
      </AuthModal>
    </div>
  );
};

export default page;
