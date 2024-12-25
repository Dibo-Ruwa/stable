"use client";
import AuthGuard from "@/lib/AuthGuard";
import StyledComponentsRegistry from "@/lib/registery";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { MantineProvider } from "@mantine/core";
import { LocationProvider } from "@/context/LocationProvider";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <SessionProvider>
      <MantineProvider>
        <NextUIProvider>
          <LocationProvider>
            <StyledComponentsRegistry>
              <AuthGuard>
                {children} <Toaster />
              </AuthGuard>
            </StyledComponentsRegistry>
          </LocationProvider>
        </NextUIProvider>
      </MantineProvider>
    </SessionProvider>
  );
};

export default Providers;
