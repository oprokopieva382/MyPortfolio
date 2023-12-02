import sweetDreams from "../../assets/img/sweetDreams.png";
import vibeTogether from "../../assets/img/vibeTogether.png";
import weatherTracker from "../../assets/img/weather.png";
import crownClothing from "../../assets/img/crownClothing.png";
import todoList from "../../assets/img/todoListApp.png";
import { uid } from "uid";
import { ProjectCard } from "../ProjectCard";
import { Box, Grid } from "@mui/material";

export const Projects = () => {
  const projects = [
    {
      id: uid(),
      src: sweetDreams,
      name: "Sweet Dreams",
      description: "Update later",
      icons: [
        "express",
        "mysql",
        "sequelize",
        "nodejs",
        "handlebars",
        "git",
        "dotenv",
        "github",
        "fontawesome",
      ],
    },
    {
      id: uid(),
      src: vibeTogether,
      name: "Vibe Together",
      description: "Update later",
      icons: ["nodejs", "html", "css", "bulma", "js", "git", "github"],
    },
    {
      id: uid(),
      src: weatherTracker,
      name: "Track Weather",
      description: "Update later",
      icons: ["js", "nodejs", "github", "css", "html", "git"],
    },
    {
      id: uid(),
      src: crownClothing,
      name: "Crown Clothing",
      description: "Update later",
      icons: [
        "typescript",
        "react",
        "redux",
        "stripe",
        "firebase",
        "reactrouter",
        "github",
        "git",
        "netlify",
        "apollo",
        "graphql",
      ],
    },
    {
      id: uid(),
      src: todoList,
      name: "TodoList App",
      description: "Update later",
      icons: [
        "github",
        "react",
        "typescript",
        "axios",
        "reactrouter",
        "redux",
        "mui",
        "git",
      ],
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#7c7b75",
      }}
    >
      <Grid container marginTop={10} padding="10px 10px">
        {projects.map((project) => (
          <Grid key={project.id} item xs={12} sm={6} md={4} lg={3}>
            <ProjectCard
              name={project.name}
              description={project.description}
              src={project.src}
              icons={project.icons}
              id={project.id}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
