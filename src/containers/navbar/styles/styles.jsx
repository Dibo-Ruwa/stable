import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  backdrop-filter: blur(20px);
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
`;
