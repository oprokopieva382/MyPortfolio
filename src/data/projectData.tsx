import sweetDreams from "../assets/img/sweetDreams.png";
import vibeTogether from "../assets/img/vibeTogether.png";
import weatherTracker from "../assets/img/weather.png";
import crownClothing from "../assets/img/crownClothing.png";
import todoList from "../assets/img/todoListApp.png";
import gameHub from "../assets/img/gameHub.png";
import LoveLink from "../assets/img/LoveLink.png";
import jobHunt from "../assets/img/jobHunt.png";
import { uid } from "uid";

const projects = [
  {
    id: uid(),
    src: jobHunt,
    name: "Job Hunt",
    description:
      "Full Stack Project. Optimize a streamlined job search experience with all-in-one app designed to manage applications seamlessly.",
    icons: [
      "express",
      "react",
      "mongoose",
      "mongoDB",
      "axios",
      "nodejs",
      "vite",
      "styled-components",
      "JWT",
      "js",
      "github",
      "git",
    ],
    source: "https://github.com/oprokopieva382/JobHunt",
    deploy: "https://job-hunt-app.onrender.com/",
  },
  {
    id: uid(),
    src: LoveLink,
    name: "LoveLink",
    description:
      "MERN project. Premier dating platform designed to bring people together based on shared interests and hobbies.",
    icons: [
      "express",
      "react",
      "apollo",
      "graphql",
      "nodejs",
      "vite",
      "mui",
      "tensorflow",
      "github",
      "git",
      "JWT",
    ],
    source: "https://github.com/oprokopieva382/Love-Link",
    deploy: "https://hidden-garden-06286-72f8e54246d1.herokuapp.com/",
  },
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
    source: "https://github.com/oprokopieva382/sweetDreams",
    deploy: "https://sweetdreamsproject-8e54b05db96b.herokuapp.com/",
  },
  {
    id: uid(),
    src: vibeTogether,
    name: "Vibe Together",
    description:
      "Stay up to date with upcoming concerts and festivals in USA, based on your preference. Use our Artist Bio to know more about your favorite artist. Let's Vibe Together!",
    icons: ["nodejs", "html", "css", "bulma", "js", "git", "github"],
    source: "https://github.com/oprokopieva382/vibeTogether",
    deploy: "https://oprokopieva382.github.io/vibeTogether/",
  },
  {
    id: uid(),
    src: gameHub,
    name: "Game Hub",
    description:
      "The app aims to enhance the gaming experience by offering a streamlined platform for discovering new and exciting games.",
    icons: ["vite", "mui", "html", "css", "js", "git", "react", "github"],
    source: "https://github.com/oprokopieva382/gameHubApp",
    deploy: "https://game-hub-2023.vercel.app/",
  },
  {
    id: uid(),
    src: weatherTracker,
    name: "Track Weather",
    description:
      "Check real-time weather condition local or in any other city all over the world. Take care of your plans during vacation and app take care of weather tracking.",
    icons: ["js", "nodejs", "github", "css", "html", "git"],
    source: "https://github.com/oprokopieva382/WeatherDashboard",
    deploy: "https://oprokopieva382.github.io/WeatherDashboard/",
  },
  {
    id: uid(),
    src: crownClothing,
    name: "Crown Clothing",
    description:
      "E-commerce clothing store. Discover the latest trends and elevate your style with Crown Clothing. 'Crown Clothing - where trends meet convenience.'",
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
    source: "https://github.com/oprokopieva382/crwn-clothing",
    deploy: "https://crown-clothing-usa.netlify.app/",
  },
  {
    id: uid(),
    src: todoList,
    name: "TodoList App",
    description:
      "Keep track todo list by prioritise and manage your tasks, improve time management as well as workflow.",
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
    source: "https://github.com/oprokopieva382/todolistApp/tree/main",
    deploy: "https://oprokopieva382.github.io/todolistApp/",
  },
];

export default projects;
