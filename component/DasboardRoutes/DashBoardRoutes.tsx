"use client";
import { DashboradServices } from "@/constants";
import Card from "@/component/dahboardCard/Card";
import { Services } from "@/containers/dasboard(client)/client.tyles";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const DashboardRoutes = () => {

  const router = useRouter();
  const { data: session, status } = useSession();


  if (status !== "loading") {
    if (!session || !session.user) {
      router.push("/signin");
    }
  }

  return (
          <Services>
          {DashboradServices.map((service, index) => (
            <span key={index} style={{ width: "100%" }}>
              <Card
                title={service.title}
                image={service.image}
                url={service.url}
              />
            </span>
          ))}
        </Services>
  );
};

export default DashboardRoutes;
