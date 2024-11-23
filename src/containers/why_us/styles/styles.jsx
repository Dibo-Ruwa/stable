import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;
  padding: 5%;
  width: 100%;
  gap: 30px;

  @media screen and (max-width: 900px) {
    flex-direction: column-reverse;
  }
`;
export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  .benefits {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 5vh;

    .benefit {
      width: 50%;
      img {
        width: 50px;
      }

      h5 {
        font-size: 20px;
      }

      p {
        font-size: 16px;
        color: var(--sub-text);
      }
    }
  }

  @media screen and (max-width: 900px) {
    width: 100%;
    margin-top: 5vh;
    gap: 30px;

    .benefits {
      margin-top: 20px;

      .benefit {
        width: 50%;

        img {
          width: 50px;
        }

        h5 {
          font-size: 18px;
        }

        p {
          font-size: 15px;
        }
      }
    }
  }
`;
export const Header = styled.div`
  display: flex;
  gap: 15px;
  flex-direction: column;

  img {
    width: 50px;
  }

  small {
    font-size: 18px;
    color: var(--primary);
  }
  h5 {
    font-size: 40px;
  }
  p {
    font-size: 16px;
    color: var(--sub-text);
  }
  @media screen and (max-width: 900px) {
    small {
      font-size: 16px;
    }
    h5 {
      font-size: 28px;
      line-height: 100%;
    }
    p {
      font-size: 15px;
    }
  }
`;
