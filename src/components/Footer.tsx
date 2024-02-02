import { useNavigate } from "react-router-dom";
import {
  FooterContainer,
  FooterIconButton,
  IconStyle,
} from "../style/FooterStyle";
import { FooterIcon } from "./reusableComponents/FooterIcon";
import { CiLogout } from "react-icons/ci";

export const Footer = () => {
  const navigate = useNavigate();
  const gitHub = "https://github.com/oprokopieva382";
  const linkedin = "https://www.linkedin.com/in/oksana-prokopieva/";

  const handleNavigationToGreeting = () => {
    navigate("/");
  };
  return (
    <FooterContainer>
      <FooterIconButton onClick={handleNavigationToGreeting}>
        <IconStyle>
          <CiLogout style={{ fontSize: "25px" }} />
        </IconStyle>
      </FooterIconButton>

      <FooterIcon hrefinfo={gitHub} icon="GitHub" />
      <FooterIcon hrefinfo={linkedin} icon="LinkedIn" />
    </FooterContainer>
  );
};
