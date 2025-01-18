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

  // List of protected routes
  const protectedRoutes = ["/dashboard", "/cart", "/profile", "/settings", "/orders"];

  useEffect(() => {
    if (status !== "loading") {
      if (!session || !session.user) {
        // Redirect to /signin if user is unauthenticated and on a protected route
        if (protectedRoutes.some((route) => pathname.startsWith(route))) {
          router.push("/sign-in");
        }
      } else if (session && session.user) {
        // Redirect to /profile if user is authenticated and tries to access /signin or /signup
        if (["/sign-in", "/sign-up"].includes(pathname)) {
          router.push("/");
        }
      }
      setIsLoading(false); // End loading state
    }
  }, [session, status, pathname, router]);

  if (isLoading || status === "loading") {
    return <Loader />; // Show a loader while checking the session
  }

  return <>{children}</>;
};

export default AuthGuard;
