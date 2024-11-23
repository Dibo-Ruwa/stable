import { FC } from "react";
import { AvatarDropdown, Container, Img, Initials } from "./avatar.styles";
import { CaretDownIcon } from "@radix-ui/react-icons";

interface AvatarProps {
  src?: string;
  initials?: string;
}

const Avatar: FC<AvatarProps> = ({ src, initials }) => {
  return (
    <Container>
      {src ? (
        <Img
          src={src}
          width={100}
          height={100}
          alt={initials ? initials : "avatar"}
        />
      ) : (
        <Initials>
          {initials}
          <AvatarDropdown  aria-hidden />
        </Initials>
      )}
    </Container>
  );
};

export default Avatar;
