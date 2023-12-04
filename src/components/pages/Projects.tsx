import { ProjectCard } from "../ProjectCard";
import projects from "../../data/projectData.tsx";
import { ProjectsContainer } from "../../style/ProjectStyle.tsx";
import Grid from "@mui/material/Grid";

export const Projects = () => {
  return (
    <ProjectsContainer>
      <Grid container marginTop={10} padding="10px">
        {projects.map((project) => (
          <Grid key={project.id} item xs={12} sm={6} md={4} lg={3} padding={2}>
            <ProjectCard
              name={project.name}
              description={project.description}
              src={project.src}
              icons={project.icons}
              sourceCode={project.source}
              deploy={project.deploy}
            />
          </Grid>
        ))}
      </Grid>
    </ProjectsContainer>
  );
};
