import ServiceMenu from "../serviceMenu";
import Avatar from "../ui/avatar/Avatar";
import { Container } from "./userDropdown.styles";
import { useSession } from "next-auth/react";

const UserDropdown = () => {
  const { data: session } = useSession({
    required: false,
  });
  const initials = session
    ? `${session?.user?.firstName} ${session?.user?.lastName[0]}`
    : "Guest";
    console.log(initials)
  return (
    <Container>
      <ServiceMenu
        trigger={<Avatar initials={initials} />}
        routes={[
          { name: "Profile", path: "/profile" },

          {
            name: "Dashboard",
            path: session?.user?.role === "admin" ? "/admin" : "/dashboard",
          },
          { name: "Sign Out", path: "/" },
        ]}
      />
    </Container>
  );
};

export default UserDropdown;
