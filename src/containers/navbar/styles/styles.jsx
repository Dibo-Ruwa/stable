import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  width: 100%;
  top: ${({ isTop }) => (isTop ? "5vh" : 0)};
  left: 0;
  backdrop-filter: ${({ scroll }) => (scroll ? "blur(20px)" : "none")};
  padding: 0 5%;
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 999;
  max-width: 1800px;
  @media screen and (max-width: 768px) {
    .cta {
      display: none;
    }
  }

  @media screen and (min-width: 1600px) {
    padding: 0 15%;
  }
`;
