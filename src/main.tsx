import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "./App.tsx";
import "./index.css";
import { Projects } from "./components/pages/Projects.tsx";
import { Contact } from "./components/pages/Contact.tsx";
import { Home } from "./components/pages/Home.tsx";
import { Error } from "./components/pages/Error.tsx";
import { Greeting } from "./components/pages/Greeting.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Greeting />,
    errorElement: <Error />,
  },
  {
    path: "/portfolio",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
