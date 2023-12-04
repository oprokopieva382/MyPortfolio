import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { FC} from "react";
import { ExternalLink, FooterIconButton, IconStyle } from "../../style/FooterStyle";

type Props = {
  hrefinfo: string;
  icon: "GitHub" | "LinkedIn";
};

export const FooterIcon: FC<Props> = ({ hrefinfo, icon }) => {
  const IconComponent = icon === "GitHub" ? GitHubIcon : LinkedInIcon;
  return (
    <ExternalLink href={hrefinfo} target="_blank" rel="noopener noreferrer">
      <FooterIconButton>
        <IconStyle>
          <IconComponent />
        </IconStyle>
      </FooterIconButton>
    </ExternalLink>
  );
};