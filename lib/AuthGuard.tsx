"use client";
import Loader from "@/component/ui/loader/Loader";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session, status } = useSession();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const publicRoutes = ["/dashboard", "/cart", "/profile"];
    const privateRoutes = ["/signin", "/signup"];

    if (status !== "loading") {
      if (!session || !session.user) {
        if (publicRoutes.includes(pathname)) {
          router.push("/");
        }
      } else if (session && session.user) {
        if (privateRoutes.includes(pathname)) {
          router.push("/dashboard");
        }
      }
      setIsLoading(false);
    }
  }, [session, status, pathname, router]);

  if (isLoading || (status === "loading" && pathname !== "/profile")) {
    return <Loader />;
  }

  return <>{children}</>;
};

export default AuthGuard;
