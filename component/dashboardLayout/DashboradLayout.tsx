"use client";

import React, { useEffect } from "react";
import DashboardRoutes from "../DasboardRoutes/DashBoardRoutes";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import AdminRoutes from "../adminRoutes/AdminRoutes";

const Dashboard = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { data: session, status } = useSession();



  return (
    <div>
      <DashboardRoutes />

      {children}
    </div>
  );
};

export default Dashboard;
