import styled from "styled-components";

export const Container = styled.div`
  width: 40%;
  height: 450px;
  position: relative;
  @media screen and (max-width: 900px) {
    width: 100%;
    height: 350px;
  }

  &::before {
    content: "";
    width: 76%;
    background: var(--primary);
    height: 88%;
    bottom: 10px;
    left: 16%;
    position: absolute;
    display: block;
    z-index: -1;
    border-radius: 45% 45% 0 0;

    @media screen and (max-width: 900px) {
      width: 86%;
      left: 10%;
    }
  }
  &::after {
    content: "";
    width: 80%;
    height: 90.5%;
    bottom: 10px;
    left: 14%;
    border: 1px solid;
    border-bottom: none;
    position: absolute;
    display: block;
    z-index: -1;
    border-radius: 45% 45% 0 0;
    @media screen and (max-width: 900px) {
      width: 90%;
      left: 8%;
    }
  }

  img {
    width: 100%;
  }
  .img {
    position: absolute;
    top: 15px;
    left: 2%;
    width: 600px;
    margin-left: -15%;
    @media screen and (max-width: 900px) {
      width: 450px;
      left: -2%;
    }
  }

  .svg {
    width: 50px;
    position: absolute;

    &.star {
      top: 27%;
      left: 12%;
      @media screen and (max-width: 900px) {
        left: 5%;
      }
    }

    &.scribble {
      width: 100px;
      top: 30%;
      right: -2%;
      @media screen and (max-width: 900px) {
        right: -7%;
      }
    }

    &.scribbleC {
      width: 80px;
      bottom: 8%;
      left: 5%;
      @media screen and (max-width: 900px) {
        left: -5%;
      }
    }
  }
`;
