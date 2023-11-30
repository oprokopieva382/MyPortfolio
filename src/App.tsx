import { Outlet } from "react-router-dom";
import { NavBar } from "./components/NavBar";

export const App = () => {
  return (
    <>
      <NavBar />
      <Outlet/>
    </>
  );
};
