import { FooterContainer } from "../style/FooterStyle";
import { FooterIcon } from "./reusableComponents/FooterIcon";

export const Footer = () => {
  const gitHub= "https://github.com/oprokopieva382";
  const linkedin= "https://www.linkedin.com/in/oksana-prokopieva/";

  return (
    <FooterContainer
    >
      <FooterIcon hrefinfo={gitHub} icon="GitHub" />
      <FooterIcon hrefinfo={linkedin} icon="LinkedIn" />
    </FooterContainer>
  );
};
