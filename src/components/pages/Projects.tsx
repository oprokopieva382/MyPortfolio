import sweetDreams from "../../assets/img/sweetDreams.png";
import vibeTogether from "../../assets/img/vibeTogether.png";
import weatherTracker from "../../assets/img/weather.png";
import crownClothing from "../../assets/img/crownClothing.png";
import todoList from "../../assets/img/todoListApp.png";
import { uid } from "uid";
import { ProjectCard } from "../ProjectCard";
import { Box, Grid } from "@mui/material";
import { ChillOfficeBox} from "../../style/ProjectStyle";


export const Projects = () => {
  const projects = [
    {
      id: uid(),
      src: sweetDreams,
      name: "Sweet Dreams",
      description: "Update later",
    },
    {
      id: uid(),
      src: vibeTogether,
      name: "Vibe Together",
      description: "Update later",
    },
    {
      id: uid(),
      src: weatherTracker,
      name: "Track Weather",
      description: "Update later",
    },
    {
      id: uid(),
      src: crownClothing,
      name: "Crown Clothing",
      description: "Update later",
    },
    {
      id: uid(),
      src: todoList,
      name: "TodoList App",
      description: "Update later",
    },
  ];

  return (
    <Box>
      <ChillOfficeBox />
      <Grid container justifyContent="center">
        {projects.map((project) => (
          <Grid
            key={project.id}
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            sx={{
              marginLeft: 15,
            }}
          >
            <ProjectCard
              name={project.name}
              description={project.description}
              src={project.src}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
