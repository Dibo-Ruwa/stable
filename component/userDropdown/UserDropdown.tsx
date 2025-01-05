import ServiceMenu from "../serviceMenu";
import Avatar from "../ui/avatar/Avatar";
import { Container } from "./userDropdown.styles";
import { useSession } from "next-auth/react";
import useAuth from "@/hooks/useAuth";

const UserDropdown = () => {
  const { data: session } = useSession({ required: false });
  const { signout } = useAuth();

  const initials = session
    ? `${session?.user?.firstName} ${session?.user?.lastName[0]}`
    : "Guest";

  const menuItems = [
    { name: "Profile", path: "/profile" },
    {
      name: "Dashboard",
      path: session?.user?.role === "admin" ? "/admin" : "/profile/orders",
    },
    { 
      name: "Sign Out", 
      path: "/",
      onClick: signout 
    },
  ];

  return (
    <Container>
      <ServiceMenu
        trigger={<Avatar initials={initials} />}
        routes={menuItems}
      />
    </Container>
  );
};

export default UserDropdown;
