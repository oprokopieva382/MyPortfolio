import {
  CardContent,
  CardMedia,
  Typography,
  useTheme,
} from "@mui/material";
import { FC } from "react";
import { UsedTools } from "./UsedTools";
import {
  CardMediaWrapper,
  CardWrapper,
  ProjectCardContainer,
  ProjectCardTypography,
} from "../style/ProjectStyle";

type ProjectCardPropsType = {
  name: string;
  description: string;
  src: string;
  icons: string[];
};

export const ProjectCard: FC<ProjectCardPropsType> = ({
  src,
  description,
  name,
  icons,
}) => {
  const theme = useTheme();
  return (
    <ProjectCardContainer>
      <CardWrapper
        sx={{
          boxShadow: theme.shadows[15],
        }}
      >
        <CardMediaWrapper>
          <CardMedia component="img" image={src} alt={name} />
        </CardMediaWrapper>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {name}
          </Typography>
          <ProjectCardTypography variant="body2" color="text.secondary">
            {description}
          </ProjectCardTypography>
          <UsedTools icons={icons} />
        </CardContent>
      </CardWrapper>
    </ProjectCardContainer>
  );
};
