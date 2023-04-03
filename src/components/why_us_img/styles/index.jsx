import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  position: relative;
  @media screen and (max-width: 900px) {
    width: 80%;
  }

  &::before {
    content: "";
    width: 86%;
    background: var(--primary);
    height: 100%;
    bottom: 5px;
    left: 6.5%;
    position: absolute;
    display: block;
    z-index: -1;
    border-radius: 50%;
  }

  img {
    width: 100%;
  }

  .svg {
    width: 30px;
    position: absolute;

    &.star {
      bottom: 4%;
    }
  }

  .full__service {
    position: absolute;
    top: 15%;
    left: -8%;
    display: flex;
    gap: 10px;
    padding: 10px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 1px 1px 8px 1px rgba(0, 0, 0, 0.179);
    @media screen and (max-width: 900px) {
      top: 13%;
      gap: 5px;
      padding: 7px;
    }
    .info {
      display: flex;
      flex-direction: column;
      gap: 2px;
      p {
        font-size: 16px;
      }

      small {
        font-size: 12px;
        color: var(--sub-text);
      }

      @media screen and (max-width: 900px) {
        gap: 0;
        p {
          font-size: 10px;
        }

        small {
          font-size: 9px;
          color: var(--sub-text);
        }
      }
    }
    img {
      width: 40px;
      @media screen and (max-width: 900px) {
        width: 30px;
      }
    }
  }
`;
