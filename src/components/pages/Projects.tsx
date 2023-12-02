import sweetDreams from "../../assets/img/sweetDreams.png";
import vibeTogether from "../../assets/img/vibeTogether.png";
import weatherTracker from "../../assets/img/weather.png";
import crownClothing from "../../assets/img/crownClothing.png";
import todoList from "../../assets/img/todoListApp.png";
// import { ProjectCard } from "../ProjectCard";
import chillOffice from "../../assets/img/chillOffice.jpeg"
import { uid } from "uid";

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
    <>
      <img
        src={chillOffice}
        alt="chillOffice"
        style={{
          width: "100%",
          height: "100vh",
          objectFit: "cover",
          display: "block",
        }}
      />
    </>
  );
};
