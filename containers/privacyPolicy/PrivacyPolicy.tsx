import { FaCheckCircle } from "react-icons/fa";
import {
  BulletList,
  BulletListItem,
  BulletListItemHeader,
  BulletListItemText,
  Container,
  Section,
  SectionHeader,
  SectionText,
} from "./privacyPolicy.styles";
import { PrivacyContent } from "@/constants";

import { CheckCircledIcon } from "@radix-ui/react-icons";

const PrivacyPolicy = () => {
  return (
    <Container>
      <SectionHeader className="main">Effective Date: November 27th, 2023</SectionHeader>
      <SectionText>
        Thank you for visiting Dibo Ruwa&rsquo;s website. This Privacy Policy
        outlines how we collect, use, disclose, and safeguard your personal
        information when you access our website or use our services. We value
        your privacy and are committed to protecting your personal data in
        compliance with applicable laws and regulations. By using our website or
        availing our services, you consent to the practices described in this
        Privacy Policy.
      </SectionText>

      {PrivacyContent.map((section, index) => (
        <Section key={index}>
          <SectionHeader>{section.header}</SectionHeader>
          {section.text && <SectionText>{section.text}</SectionText>}

          {section.bulletList && (
            <BulletList>
              {section.bulletList.map((item, itemIndex) => (
                <BulletListItem key={itemIndex}>
                  <BulletListItemHeader>
                    <CheckCircledIcon className="icon" /> <p>{item.header}</p>
                  </BulletListItemHeader>
                  <BulletListItemText>{item.text}</BulletListItemText>
                </BulletListItem>
              ))}
            </BulletList>
          )}
        </Section>
      ))}
      <SectionText>
        By using our website or services, you agree to the terms and conditions
        of this Privacy Policy. Your continued use of our website following the
        posting of any changes to this policy signifies your acceptance of those
        changes.
      </SectionText>
    </Container>
  );
};

export default PrivacyPolicy;
