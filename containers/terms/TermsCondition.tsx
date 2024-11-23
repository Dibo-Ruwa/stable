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
} from "./termscondition.styles";
import { TermsContent } from "@/constants";

import { CheckCircledIcon } from "@radix-ui/react-icons";

const TermsCondition = () => {
  return (
    <Container>
      <SectionHeader className="main">Effective Date: November 27th, 2023</SectionHeader>
      <SectionText>
        Welcome to Dibo Ruwa&rsquo;s website. These Terms and Conditions govern
        your use of our website and the services provided by Dibo Ruwa. By
        accessing our website or using our services, you agree to comply with
        and be bound by these Terms and Conditions. If you do not agree with any
        part of these terms, please refrain from using our website or services.
      </SectionText>

      {TermsContent.map((section, index) => (
        <Section key={index}>
          <SectionHeader>{section.header}</SectionHeader>
          {section.text && <SectionText>{section.text}</SectionText>}

          {section.bulletList && (
            <BulletList>
              {section.bulletList.map((item, itemIndex) => (
                <BulletListItem key={itemIndex}>
                  {item?.header && (
                    <BulletListItemHeader>
                      <CheckCircledIcon className="icon" /> <p>{item?.header}</p>
                    </BulletListItemHeader>
                  )}

                  <BulletListItemText>{item.text}</BulletListItemText>
                </BulletListItem>
              ))}
            </BulletList>
          )}
        </Section>
      ))}
      <SectionText>
      By accessing our website or using our services, you acknowledge that you have read, understood, and agreed to these Terms and Conditions. Your continued use of our website constitutes your acceptance of these terms.
      </SectionText>
    </Container>
  );
};

export default TermsCondition;
