import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";
import backgroundImg from "../assets/img/greeting.png";

export const StyledContainer = styled(Box)`
  background-image: url(${backgroundImg});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
`;

export const StyledBoxSkills = styled(Box)`
  display: flex;
  justify-content: center;
  padding-top: 1%;
  flex-wrap: wrap;
`;

export const StyledTypography = styled(Typography)`
  display: flex;
  color: #e0dcdc;
  justify-content: center;
  padding: 0.5% 2.2%;
  flex-wrap: wrap;
`;

export const StyledButton = styled(Button)`
  display: flex;
  color: #022920;
  border: 1px solid white;
  border-radius: 35px;
  justify-content: center;
  padding: 0.5% 2.2%;
  flex-wrap: wrap;
  padding: 8px 21px;
  margin-bottom: 10%;
  background-color: rgba(255, 255, 255, 0.3);
  box-shadow: 0px 4px 8px rgba(255, 255, 255, 0.5);
  &:hover {
    color: white;
  }
  svg {
    margin-right: 8px; 
  }
`;

export const StyledBoxButtons = styled(Box)`
  display: flex;
  justify-content: space-around;
  padding: 0 35%;
  padding-top: 62vh;
  flex-wrap: wrap;
`;
