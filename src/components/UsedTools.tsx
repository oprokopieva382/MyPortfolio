import { SiMysql } from "react-icons/si";
import { SiSequelize } from "react-icons/si";
import { FaNode } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { SiHandlebarsdotjs } from "react-icons/si";
import { SiDotenv } from "react-icons/si";
import { FaRegFontAwesome } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { SiBulma } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { PiStripeLogoFill } from "react-icons/pi";
import { SiFirebase } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { BiLogoNetlify } from "react-icons/bi";
import { SiApollographql } from "react-icons/si";
import { SiGraphql } from "react-icons/si";
import { SiAxios } from "react-icons/si";
import { SiReactrouter } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { IconType } from "react-icons";
import { FC } from "react";
import { Box, Icon } from "@mui/material";

type UserToolsPropsType = {
  icons: string[];
};

const getIconComponent = (icon: string): IconType | null => {
  const iconMap: { [key: string]: IconType } = {
    express: SiExpress,
    mysql: SiMysql,
    sequelize: SiSequelize,
    nodejs: FaNode,
    handlebars: SiHandlebarsdotjs,
    git: FaGitAlt,
    dotenv: SiDotenv,
    github: FaGithub,
    fontawesome: FaRegFontAwesome,
    html: FaHtml5,
    css: FaCss3,
    bulma: SiBulma,
    js: IoLogoJavascript,
    typescript: SiTypescript,
    react: FaReact,
    redux: SiRedux,
    stripe: PiStripeLogoFill,
    firebase: SiFirebase,
    reactrouter: SiReactrouter,
    netlify: BiLogoNetlify,
    apollo: SiApollographql,
    graphql: SiGraphql,
    axios: SiAxios,
    mui: SiMui,
  };

  return iconMap[icon] || null;
};

export const UsedTools: FC<UserToolsPropsType> = ({ icons}) => (
  <Box sx={{display: "flex", alignItems: "center", marginTop: 2 }}>
    {icons.map((icon) => {
      const IconComponent = getIconComponent(icon);

      if (IconComponent) {
        return (
          <Icon
            component={IconComponent}
            key={icon}
            sx={{
              color: "#9ccc65",
              marginRight: "5px",
            }}
          />
        );
      }

      return null;
    })}
  </Box>
);

