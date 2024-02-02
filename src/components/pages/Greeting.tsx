import {
  StyledBoxButtons,
  StyledBoxSkills,
  StyledButton,
  StyledContainer,
  StyledTypography,
} from "../../style/GreetingStyle";
import { PiLinkedinLogoLight } from "react-icons/pi";
import { PiFolderUserThin } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const skills = [
  "React.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "REST API's",
  "Axios",
  "Express.js",
  "Redux",
  "GraphQL",
  "JWT",
  "Material UI",
  "Bootstrap",
  "styled-components",
  "Figma",
  "MongoDB",
  "Mongoose",
  "Jest",
  "RTL",
  "Git",
  "CSS3",
  "HTML5",
];

export const Greeting = () => {
  const navigate = useNavigate();
  const handleLinkedInNavigation = () => {
    window.open("https://www.linkedin.com/in/oksana-prokopieva/");
  };
  const handlePortfolioNavigation = () => {
    navigate("/portfolio");
  };
  return (
    <>
      <StyledContainer>
        <StyledBoxSkills>
          {skills.map((skill, i) => {
            return <StyledTypography key={i}>{skill}</StyledTypography>;
          })}
        </StyledBoxSkills>
        <StyledBoxButtons>
          <StyledButton onClick={handleLinkedInNavigation}>
            <PiLinkedinLogoLight size="1.5em" />
            LinkedIn
          </StyledButton>
          <StyledButton onClick={handlePortfolioNavigation}>
            <PiFolderUserThin size="1.5em" />
            Portfolio
          </StyledButton>
        </StyledBoxButtons>
      </StyledContainer>
    </>
  );
};
