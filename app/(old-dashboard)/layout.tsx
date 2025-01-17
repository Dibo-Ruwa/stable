import DashboardRoutes from "@/component/DasboardRoutes/DashBoardRoutes";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <DashboardRoutes />
      {children}
    </section>
  );
}
