"use client";
import Loader from "@/component/ui/loader/Loader";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session, status } = useSession();

  // useEffect(() => {
  const publicRoutes = ["/dashboard", "/cart", "/profile"];
  const privateRoutes = ["/signin", "/signup"];

  if (status !== "loading") {
    if (!session || !session.user) {
      if (publicRoutes.includes(pathname)) {
        router.push("/");
        // router.push("/signin");
      }
    } else if (session && session.user) {
      if (privateRoutes.includes(pathname)) {
        router.back();
        router.push("/dashboard");
      }
    }
  }

  // setTimeout(() => {}, 2000);
  // }, [session, status, pathname, router]);

  if (status === "loading" && pathname !== "/profile") return <Loader />;

  return <>{children}</>;
};

export default AuthGuard;
