"use client";
import { useSession } from "next-auth/react";
import { Container } from "./Admin.styles";
import { useEffect } from "react";
import {  useRouter } from "next/navigation";

const Admin = () => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push("/signin");
    } else if (session?.user?.role !== "admin") {
      router.push("/dashboard");
    }
  }, [session, router]);

  return <Container>Enter</Container>;
};

export default Admin;
