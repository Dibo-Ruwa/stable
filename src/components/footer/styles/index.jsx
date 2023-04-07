import styled from "styled-components";

export const FooterContainer = styled.footer`
  padding: 2rem;
`;

export const SectionTitle = styled.h3`
  display: flex;
  align-items: center;
  gap: 5px;
  span {
    color: var(--primary);
  }
  img {
    width: 30px;
    margin-top: -3px;
  }
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;
export const Sections = styled.div`
  display: flex;
  width: 100%;
  /* justify-content: space-between; */
  gap: 30px;
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;
export const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  @media screen and (max-width: 900px) {
    width: 100%;
  }

  p {
    font-size: 18px;
    color: var(--sub-text);
    margin-bottom: 20px;
  }

  .icon__list {
    display: flex;
    gap: 20px;
    a {
      color: #000;
    }

    .icon {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #eff2f7;
      color: var(--primary);
    }
  }

  .input__field {
    input {
      padding: 15px 10px;
      background: rgba(227, 227, 227, 0.787);
      outline: none;
      border: none;
    }

    button {
      padding: 15px 20px;
      background: var(--primary);
      outline: none;
      color: #fff;
      border: none;
    }
  }
`;

export const SectionList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const SectionItem = styled.li`
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
`;

export const IconWrapper = styled.span`
  margin-right: 0.5rem;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--primary);
`;

export const CopyRight = styled.p`
  font-size: 0.8rem;
  margin-top: 2rem;
  text-align: center;
`;
