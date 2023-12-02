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

export const ProjectCard: FC<ProjectCardPropsType> = ({
  src,
  description,
  name,
}) => {
  const theme = useTheme();
  return (
    <div style={{ marginBottom: 40 }}>
      <Card
        sx={{
          maxWidth: 370,
          maxHeight: 310,
          boxShadow: theme.shadows[10],
          margin: "0 auto",
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: "100%", height: "auto", objectFit: "cover" }}
          image={src}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};
