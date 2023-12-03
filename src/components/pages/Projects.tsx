import { ProjectCard } from "../ProjectCard";
import { Box, Grid } from "@mui/material";
import projects from "../../data/projectData.tsx";

export const Projects = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        background: "linear-gradient(to right, #F7F8F8, #ACBB78)",
      }}
    >
      <Grid container marginTop={10} padding="10px">
        {projects.map((project) => (
          <Grid key={project.id} item xs={12} sm={6} md={4} lg={3} padding={2}>
            <ProjectCard
              name={project.name}
              description={project.description}
              src={project.src}
              icons={project.icons}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
