"use client";
import AuthGuard from "@/lib/AuthGuard";
import StyledComponentsRegistry from "@/lib/registery";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <SessionProvider>
      <NextUIProvider>
      <StyledComponentsRegistry>
        <AuthGuard>
          {children} <Toaster />
        </AuthGuard>
      </StyledComponentsRegistry>
      </NextUIProvider>
    </SessionProvider>
  );
};

export default Providers;
