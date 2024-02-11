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
  flex-wrap: wrap;
  padding: 7px 20px;
  margin: 0px 8px 18px;
  background-color: rgba(255, 255, 255, 0.3);
  box-shadow: 0px 4px 8px rgba(255, 255, 255, 0.5);
  &:hover {
    color: white;
  }
  svg {
    margin-right: 8px;
  }
  @media (max-width: 593px) {
    padding: 5px 17px;
    font-size: 0.8rem;
    margin-bottom: 18px;
  }
  @media (max-width: 484px) {
    padding: 5px 17px;
    font-size: 0.8rem;
    margin-bottom: 18px;
  }

  @media (max-width: 450px) {
    padding: 5px 17px;
    font-size: 0.8rem;
    margin-bottom: 18px;
  }

  @media (max-width: 425px) {
    padding: 5px 17px;
    font-size: 0.6rem;
    margin-bottom: 18px;
  }
`;

export const StyledBoxButtons = styled(Box)`
  display: flex;
  justify-content: space-around;
  padding: 0 33vw;
  padding-top: 49vh;
  flex-wrap: wrap;
  @media (max-width: 948px) {
    padding: 0 23vw;
    padding-top: 49vh;
  }
  @media (max-width: 450px) {
    padding-top: 45vh;
  }

  @media (max-width: 375px) {
    padding-top: 45vh;
  }
`;
