import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  useTheme,
} from "@mui/material";
import { FC } from "react";

type ProjectCardPropsType = {
  name: string;
  description: string;
  src: string;
};

export const ProjectCard: FC<ProjectCardPropsType> = ({ src, description, name }) => {
  const theme = useTheme();
  return (
    <>
      <Card
        sx={{
          maxWidth: 300,
          maxHeight: 270,
          boxShadow: theme.shadows[6],
          marginTop: 10
        }}
      >
        <CardMedia sx={{ height: 180 }} image={src} title={name} />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};


