import { FaEnvelope } from "react-icons/fa";
import { BsTwitter, BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { MdPhoneInTalk } from "react-icons/md";
import logo from "../../assets/dibo_ruwa_logo.png";
import {
  CopyRight,
  FooterContainer,
  IconWrapper,
  Section,
  SectionItem,
  SectionList,
  SectionTitle,
  Sections,
} from "./styles";

const Footer = () => {
  return (
    <FooterContainer id="contact">
      <Sections>
        <Section>
          <SectionTitle>
            <img src={logo} alt="" /> <span>Dibo Ruwa</span>
          </SectionTitle>
          <p>
            Your on-demand pick up and delivery laundry service. Fast,
            convenient and reliable 24/7
          </p>
          <div className="icon__list">
            <div className="icon">
              <a href="https://twitter.com/DiboRuwa">
                <BsTwitter />
              </a>
            </div>
            <div className="icon">
              <a href="https://web.facebook.com/people/Dibo-Ruwa/100091340989617/">
                <BsFacebook />
              </a>
            </div>
            <div className="icon">
              <a href="https://www.instagram.com/diboruwa/">
                <RiInstagramFill />
              </a>
            </div>
          </div>
        </Section>

        {/* <Section>
          <SectionTitle>Explore</SectionTitle>
          <SectionList>
            <SectionItem>Products</SectionItem>
            <SectionItem>Services</SectionItem>
            <SectionItem>FAQ</SectionItem>
          </SectionList>
        </Section> */}

        <Section>
          <SectionTitle>Contact</SectionTitle>
          <p>
            Suite 4, Student Union Secretariat, BUK New Campus, Bayero
            University Kano, Nigeria
          </p>
          <SectionList>
            <SectionItem>
              <IconWrapper>
                <FaEnvelope />
              </IconWrapper>
              <p>info@diboruwa.com</p>
            </SectionItem>
            <SectionItem>
              <IconWrapper>
                <MdPhoneInTalk />
              </IconWrapper>
              <p>+2348059303261</p>
            </SectionItem>
          </SectionList>
        </Section>

        <Section>
          <SectionTitle>Newsletter</SectionTitle>
          <p>Suscribe to our newsletter for daily news and updates</p>
          <div className="input__field">
            <input type="email" placeholder="Email address" />
            <button>Send</button>
          </div>
        </Section>
      </Sections>

      <CopyRight>© 2023 My Company. All rights reserved.</CopyRight>
    </FooterContainer>
  );
};

export default Footer;
