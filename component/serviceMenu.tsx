import { CaretDownIcon } from "@radix-ui/react-icons";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { FC, ReactNode } from "react";

interface Routes {
  trigger?: string | ReactNode;
  toggle?: () => void;
  routes?: {
    name: string;
    path: string;
    icon?: string;
  }[];
}

const ServiceMenu: FC<Routes> = ({ trigger, routes, toggle }) => {
  return (
    <NavigationMenu.Root>
      <NavigationMenu.List
        style={{
          listStyle: "none",
          display: "flex",
          alignItems: "center",
        }}
      >
        <NavigationMenu.Item>
          <NavigationMenu.Trigger
            style={{
              outline: "none",
              border: "none",
              background: "transparent",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "14px",
              letterSpacing: "1px",
              color: "#2A2A2A",
            }}
          >
            {trigger}
          </NavigationMenu.Trigger>
          <NavigationMenu.Content
            className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight"
            style={{
              position: "absolute",
              top: "110%",
              right: 0,
              borderRadius: "12px",
              background: "#fff",
              padding: "15px",
              width: "auto",
              minWidth: "200px",
              display: "grid",
              gridGap: "10px",
            }}
          >
            {routes &&
              routes.map((link, index) => (
                <li key={index} onClick={toggle}>
                  <Link
                    className="link dropdown"
                    href={
                      link.name === "Sign Out"
                        ? `/`
                        : link?.path
                    }
                    style={
                      link.name === "Sign Out"
                        ? {
                            textDecoration: "none",
                            display: "flex",
                            gap: "10px",
                            padding: "10px",
                            width: "100%",
                            textAlign: "center",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "8px",
                            background: "rgba(234, 0, 82, 0.85)",
                            color: "white",
                          }
                        : {
                            textDecoration: "none",
                            display: "flex",
                            gap: "10px",
                            color: "var(--content)",
                          }
                    }
                    onClick={() => {
                      link.name === "Sign Out" ? signOut() : "";
                    }}
                  >
                    {link?.icon && (
                      <div className="icon">
                        <Image
                          src={link?.icon}
                          width={17}
                          height={17}
                          alt="..."
                        />
                      </div>
                    )}

                    <div>{link.name}</div>
                  </Link>
                </li>
              ))}
          </NavigationMenu.Content>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};

export default ServiceMenu;
