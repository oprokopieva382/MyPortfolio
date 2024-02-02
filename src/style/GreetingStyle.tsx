import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import backgroundImg from "../assets/img/greeting.png"

export const StyledContainer = styled(Box)`
  background-image: url(${backgroundImg});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
`;
