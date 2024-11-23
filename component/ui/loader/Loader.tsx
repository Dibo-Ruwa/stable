import { assets } from "@/public/assets";
import { Container, LoadingImg } from "./loader.styles";

const Loader = () => {
  return (
    <Container>
      <LoadingImg src={assets.favicon} width={100} height={100} alt="loader" />
    </Container>
  );
};

export default Loader;
