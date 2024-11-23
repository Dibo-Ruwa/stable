import styled from "styled-components";
import Link from "next/link";

// Define colors and other variables
const ashColor = "var(--Ash-100, #8f8f8f)";
const blackColor = "var(--Black-100, #2a2a2a)";
const green1Color = "var(--Green1, #27a124)";
const softBlackColor = "var(--Soft-black, #565656)";

// Styled Components
export const MostSoldContainer = styled.section`
  padding-bottom: 3rem;
`;

export const MostSoldFrame = styled.div`
  width: min(100%, 1440px);
  margin: 0 auto;
`;

export const MostSoldTitle = styled.p`
  color: ${ashColor};
  font-family: Poppins;
  font-size: 19.548px;
  font-weight: 400;
  margin-bottom: 3rem;
`;

export const MostSoldCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  width: 100%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  margin: 0 auto;
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, auto);
    gap: 20px;
  }

  @media (max-width: 430px) {
    grid-template-columns: repeat(1, auto);
    gap: 15px;
  }
`;

export const MostSoldCard = styled.div`
  scroll-snap-align: center;
  box-sizing: border-box;
  background-color: #fff;
  overflow-x: hidden;
  border-radius: 16px;
  text-decoration: none;
`;

export const MostSoldCardLinkDiv = styled(Link)`
  width: 100%;
  scroll-snap-align: center;
  box-sizing: border-box;
  background-color: #fff;
  overflow-x: hidden;
  border-radius: 16px;
  text-decoration: none;
`;

export const MostSoldCardImg = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 20px;

  @media (max-width: 768px) {
    height: 150px;
  }

`;

export const MostSoldCardContent = styled.div`
  padding: 1rem;

  @media (max-width: 480px) {
    padding: 0.8rem;
  }
`;

export const MostSoldCardContext = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export const MostSoldCardTitle = styled.small`
  color: ${blackColor};
  font-family: Poppins;
  font-size: 16px;
  font-weight: 400;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const MostSoldCardDot = styled.div`
  background: #4bb149;
  width: 7px;
  height: 7px;
  border-radius: 100%;
`;

export const MostSoldCardPrize = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  background: #f8f8f8;
  padding: 0.5rem;
  border-radius: 50px;
`;

export const MostSoldCardPrizeText = styled.p`
  color: ${softBlackColor};
  font-family: Poppins;
  font-size: 20px;
  font-weight: 400;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const MostSoldCardReminder = styled.small`
  color: ${green1Color};
  font-family: Poppins;
  font-size: 10px;
  font-weight: 400;
`;

export const MostSoldCardPrizeLink = styled.a`
  display: inline-flex;
  padding: 8.324px;
  justify-content: center;
  align-items: center;
  gap: 8.324px;
  border-radius: 100px;
  background: ${green1Color};
  color: #fefefe;
`;

export const SaleImgsContainer = styled.div`
  display: flex;
  margin: 3rem auto;

  @media (max-width: 768px) {
    margin: 2rem auto;
  }

  @media (max-width: 480px) {
    margin: 1.5rem auto;
  }
`;

export const MostSoldSaleImg = styled.img`
  width: 100%;
  display: flex;
  align-items: center;
`;
