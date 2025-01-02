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
import { FoodItemProvider } from "@/context/FooItemProvider";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <SessionProvider>
      <MantineProvider>
        <NextUIProvider>
          <LocationProvider>
            <FoodItemProvider>
              <StyledComponentsRegistry>
                <AuthGuard>
                  {children} <Toaster />
                </AuthGuard>
              </StyledComponentsRegistry>
            </FoodItemProvider>
          </LocationProvider>
        </NextUIProvider>
      </MantineProvider>
    </SessionProvider>
  );
};

export default Providers;
