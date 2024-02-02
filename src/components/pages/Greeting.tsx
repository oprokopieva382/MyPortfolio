import {
  StyledBoxButtons,
  StyledBoxSkills,
  StyledButton,
  StyledContainer,
  StyledTypography,
} from "../../style/GreetingStyle";
import { PiLinkedinLogoLight } from "react-icons/pi";
import { PiFolderUserThin } from "react-icons/pi";

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
  return (
    <>
      <StyledContainer>
        <StyledBoxSkills>
          {skills.map((skill, i) => {
            return <StyledTypography key={i}>{skill}</StyledTypography>;
          })}
        </StyledBoxSkills>
        <StyledBoxButtons>
          <StyledButton>
            <PiLinkedinLogoLight size="1.5em" />
            LinkedIn
          </StyledButton>
          <StyledButton>
            <PiFolderUserThin size="1.5em" />
            Portfolio
          </StyledButton>
        </StyledBoxButtons>
      </StyledContainer>
    </>
  );
};
