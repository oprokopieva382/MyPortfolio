import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";

export const ProjectsContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(to right, #f7f8f8, #acbb78);
`;

export const CardMediaWrapper = styled(Box)`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-bottom: 5px solid;
  border-image: linear-gradient(
    to right,
    #acbb78,
    #f7f8f8
  ); 
  border-image-slice: 1;
  box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.3);
`;

export const ProjectCardContainer = styled(Box)`
  margin-bottom: 40;
`;

export const ProjectCardTypography = styled(Typography)`
  font-size: 17px;
`;

export const CardWrapper = styled(Card)`
  max-width: 450px;
  max-height: 470px;
  margin: 0 auto;
`;

export const UsedToolsContainer = styled(Box)`
  display: flex;
  align-items: center;
  margin-top: 16px;
`;

export const LinkBox = styled(Box)`
  display: flex;
  justify-content: end;
  align-items: center;
  margin-bottom: 10px;
`;

export const ProjectLink = styled(Link)`
  text-decoration: none;
  color: #9ccc65;
  padding-right: 25px;
  font-size: 18px;
  &:hover {
    color: rgba(34, 44, 21, 0.6);
    font-weight: bold;
  }
`;
