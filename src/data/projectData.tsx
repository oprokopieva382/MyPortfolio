import sweetDreams from "../assets/img/sweetDreams.png";
import vibeTogether from "../assets/img/vibeTogether.png";
import weatherTracker from "../assets/img/weather.png";
import crownClothing from "../assets/img/crownClothing.png";
import todoList from "../assets/img/todoListApp.png";
import { uid } from "uid";

const projects = [
  {
    id: uid(),
    src: sweetDreams,
    name: "Sweet Dreams",
    description:
      "Struggling to get a good night's sleep? Sweet Dreams app can be a helpful tool for improving sleep quality and overall health and well-being.",
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
    description:
      "Stay up to date with upcoming concerts and festivals in USA, based on your preference. Use our Artist Bio to know more about your favorite artist. Let's Vibe Together!",
    icons: ["nodejs", "html", "css", "bulma", "js", "git", "github"],
  },
  {
    id: uid(),
    src: weatherTracker,
    name: "Track Weather",
    description:
      "Check real-time weather condition local or in any other city all over the world. Take care of your plans during vacation and app take care of weather tracking.",
    icons: ["js", "nodejs", "github", "css", "html", "git"],
  },
  {
    id: uid(),
    src: crownClothing,
    name: "Crown Clothing",
    description: "E-commerce clothing adaptive website",
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
    description:
      "Keep track todo list by prioritise and manage your tasks, improve time management as well as workflow",
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

export default projects;
