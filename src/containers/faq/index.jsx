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
    question: "How does Dibo Ruwa work?",
    answer:
      "You can schedule a pick-up of your laundry on the Dibo Ruwa website, WhatsApp or Call. The laundry will be picked up by one of our representative and taken to our facility for cleaning. Once cleaned, the laundry will be delivered back to your doorstep.",
  },
  {
    id: 2,
    question: "How can I schedule a pick-up?",
    answer:
      "You can schedule a pick-up on the Dibo Ruwa website, WhatsApp or Call. Just inform us of the date and time that works best for you, and a representative will come to your doorstep to pick up your laundry.",
  },
  {
    id: 3,
    question: "Is there a minimum order size?",
    answer:
      "No, there is no minimum order size. Dibo Ruwa is happy to pick up and clean any amount of laundry.",
  },
  {
    id: 4,
    question: "What kind of laundry can I send?",
    answer:
      "Dibo Ruwa can clean a wide range of laundry, including clothes, bed sheets, towels, and more.",
  },
  {
    id: 5,
    question: "Is Dibo Ruwa environmentally friendly?",
    answer:
      " Yes, Dibo Ruwa uses eco-friendly products and methods to clean your laundry. We also use energy-efficient machines to reduce our carbon footprint.",
  },
  {
    id: 6,
    question: "How does Dibo Ruwa wash my clothes?",
    answer:
      "Dibo Ruwa separate the light and darks before washing them using odour-free, non-allergenic, and biodegradable detergent in our special environmentally friendly technique (which helps remove stains that your home washer can't).",
  },
];

const FAQPage = () => {
  return (
    <Container id="faq">
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
          Can’t find the answer your looking for? please contact our friendly
          team.
        </p>
      </Card>
    </Container>
  );
};

export default FAQPage;
