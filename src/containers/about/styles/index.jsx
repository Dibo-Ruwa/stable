import styled from "styled-components";
import strokes from "../../../assets/strokes.svg";

export const Container = styled.section`
  padding: 5%;
  display: flex;
  flex-direction: column;
  gap: 10vh;

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;
export const Sec1 = styled.div`
  .cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;

    @media screen and (max-width: 900px) {
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
  }

  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 10px;
    padding: 50px;
    box-shadow: -10px 15px 30px 2px rgba(0, 0, 0, 0.059);
    width: 100%;
    border-radius: 4%;
    height: 350px;
    background: #fff;
    position: relative;
    transition: all 0.5s ease;

    &::before {
      content: url(${strokes});
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: block;
      z-index: -1;
      transition: all 0.5s ease;
      @media screen and (max-width: 900px) {
        display: none;
      }
    }

    &:hover {
      background: var(--primary);

      .icon {
        background: #fff;
        color: var(--primary);
        box-shadow: -5px -5px 1px 1px #63b68f;
      }

      .title {
        color: #fff;
      }

      .sub {
        color: #fff;
      }
      &::before {
        bottom: -5px;
        left: -20px;
      }
    }

    .icon {
      width: 60px;
      height: 60px;
      border-radius: 4px;
      background: var(--primary);
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 25px;
      color: #fff;
      box-shadow: -5px -5px 1px 1px #eeeff2;
      transition: all 0.5s ease;
    }

    .title {
      font-size: 24px;
      transition: all 0.5s ease;
    }

    .sub {
      color: var(--sub-text);
      transition: all 0.5s ease;
    }

    @media screen and (max-width: 900px) {
        .title {
        font-size: 20px;
      
      }

      .sub {
       font-size: 15px;
        transition: all 0.5s ease;
      }
      }
  }
`;

export const Header1 = styled.h5`
  width: 40%;
  margin: auto;
  line-height: 100%;
  text-align: center;
  font-size: 48px;
  margin-bottom: 10vh;
  @media screen and (max-width: 900px) {
    font-size: 28px;
    width: 100%;
  }
`;
export const Sec2 = styled.div`
  .cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;

    @media screen and (max-width: 900px) {
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
  }

  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 10px;
    overflow: hidden;
    box-shadow: -10px 15px 30px 2px rgba(0, 0, 0, 0.059);
    width: 100%;
    border-radius: 4%;
    .image {
      overflow: hidden;
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
      .icon {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 55px;
        height: 55px;
        display: flex;
        font-size: 40px;
        color: #fff;
        justify-content: center;
        align-items: center;
        background: var(--primary);
      }
    }

    .info {
      padding: 30px;
      .title {
        font-size: 24px;
        transition: all 0.5s ease;
      }

      .sub {
        color: var(--sub-text);
        transition: all 0.5s ease;
      }
      @media screen and (max-width: 900px) {
        .title {
        font-size: 20px;
      
      }

      .sub {
       font-size: 15px;
        transition: all 0.5s ease;
      }
      }
    }
  }
`;
export const Header2 = styled.div`
  /* width: 40%; */
  margin: auto;
  text-align: center;
  margin-bottom: 10vh;
  display: flex;
  flex-direction: column;
  gap: 15px;

  img {
    width: 50px;
    margin: auto;
  }

  h5 {
    line-height: 100%;

    font-size: 48px;
  }

  p {
    font-size: 20px;
  }

  @media screen and (max-width: 900px) {
        h5 {
        font-size: 28px;
      
      }

      p {
       font-size: 15px;
        transition: all 0.5s ease;
      }
      }
`;
