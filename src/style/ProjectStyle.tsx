import { Box, Card, Typography } from "@mui/material";
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
`;

export const ProjectCardContainer = styled(Box)`
  margin-bottom: 40;
`;

export const ProjectCardTypography = styled(Typography)`
  font-size: 17px;
`;

export const CardWrapper = styled(Card)`
  max-width: 450px;
  max-height: 420px;
  margin: 0 auto;
`;

export const UsedToolsContainer = styled(Box)`
  display: flex;
  align-items: center;
  margin-top: 16px;
`;
