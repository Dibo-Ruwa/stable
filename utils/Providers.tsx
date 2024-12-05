"use client";
import AuthGuard from "@/lib/AuthGuard";
import StyledComponentsRegistry from "@/lib/registery";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { MantineProvider } from '@mantine/core';

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <SessionProvider>
      <MantineProvider>
        <NextUIProvider>
        <StyledComponentsRegistry>
          <AuthGuard>
            {children} <Toaster />
          </AuthGuard>
        </StyledComponentsRegistry>
        </NextUIProvider>
      </MantineProvider>
    </SessionProvider>
  );
};

export default Providers;
