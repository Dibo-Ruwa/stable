import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 10% 5% 4%;

  @media screen and (max-width: 900px) {
    button {
      width: 100%;
    }
  }
`;
export const Header = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  margin-bottom: 10vh;

  img {
    width: 50px;
    margin: auto;
  }

  small {
    font-size: 18px;
    color: var(--primary);
  }

  h5 {
    font-size: 40px;
  }

  @media screen and (max-width: 900px) {
    small {
      font-size: 15px;
      color: var(--primary);
    }

    h5 {
      font-size: 28px;
    }
  }
`;
export const Text = styled.div`
  width: 50%;
`;

export const Timeline = styled.div`
  display: flex;
  margin-bottom: 10vh;
  gap: 50px;
  @media screen and (max-width: 900px) {
    flex-direction: column;
    gap: 30px;
  }
`;

export const TimelineItem = styled.div`
  text-align: center;
  .icon {
    width: 150px;
    height: 150px;
    margin: auto;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 1px 1px 8px 1px rgba(0, 0, 0, 0.163);
    margin-bottom: 20px;
    position: relative;

    .step {
      position: absolute;
      top: 0;
      right: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: #3C4A3E;
      color: #fff;
    }

    img {
      width: 50%;
      margin: auto;
    }
  }
  h5 {
    font-size: 28px;
    line-height: 100%;
    margin-bottom: 10px;
    font-weight: 700;
    letter-spacing: 2px;
  }

  p {
    font-size: 20px;
    color: var(--sub-text);
    font-weight: 200;
    line-height: 120%;
  }

  @media screen and (max-width: 900px) {
    .icon {
    width: 100px;
    height: 100px;

    .step {
  
      width: 30px;
      height: 30px;
     
    }
   

    img {
      width: 50%;
      margin: auto;
    }
  }
    h5 {
    font-size: 24px;
 
  }

  p {
    font-size: 16px;
   
  }
  }
`;
