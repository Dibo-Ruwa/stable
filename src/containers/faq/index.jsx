import styled from "styled-components";
import Accordion from "../../components/accordion";
import av1 from "../../assets/Group 89.png";
import av2 from "../../assets/Group 90.png";
import av3 from "../../assets/Group 91.png";

const Container = styled.div`
  padding: 5%;
`;
const Header = styled.div`
  padding: 5%;
  text-align: center;

  small {
    font-size: 18px;
    font-weight: 200;
  }
  h1 {
    font-size: 40px;
    font-weight: 500;
    margin-bottom: 20px;
  }
  p {
    font-size: 16px;
    font-weight: 100;
  }
`;
const Card = styled.div`
  width: 60%;
  padding: 50px;
  border-radius: 10px;
  background: #eff2f7;
  display: grid;
  grid-gap: 15px;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 10vh auto;
  @media screen and (max-width: 900px) {
          width: 100%;
          padding: 30px;
          grid-gap: 10px;
}
  .images {
    display: flex;
    gap: 10px;
    justify-content: center;
    position: relative;
    @media screen and (max-width: 900px) {
         gap: 5px;
}
    margin: auto;
    img {
      width: 70px;
      @media screen and (max-width: 900px) {
         width: 40%;
}
      margin: 0 auto;
      &.top {
        position: absolute;
        top: -20px;
        left: 40px;
        @media screen and (max-width: 900px) {
         left: 50px;
}
      }
    }
  }

  h1 {
          font-size: 24px;
          font-weight: 500;
         
  }
  p {
          font-size: 16px;
          font-weight: light;
          color: var(--sub-text);
  }
`;

const questions = [
  {
    id: 1,
    question: "What is Lorem Ipsum?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 2,
    question: "Why do we use it?",
    answer:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    id: 3,
    question: "Where does it come from?",
    answer:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  },
];

const FAQPage = () => {
  return (
    <Container>
      <Header>
        <small>FAQ</small>
        <h1>Frequently Asked Questions</h1>
        <p>Have question? we’re here to help.</p>
      </Header>

      {questions.map((q) => (
        <Accordion key={q.id} title={q.question} content={q.answer} />
      ))}

      <Card>
        <div className="images">
          <img src={av1} alt="" />
          <img src={av2} className="top" alt="" />
          <img src={av3} alt="" />
        </div>
        <h1>Still have questions?</h1>
        <p>
          Can’t find the answer your looking for? please chat to our friendly
          team.
        </p>
      </Card>
    </Container>
  );
};

export default FAQPage;
