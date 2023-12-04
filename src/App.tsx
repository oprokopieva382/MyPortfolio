import { Outlet } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { AnimatedCursorPlay } from "./components/AnimatedCursorPlay";

export const App = () => {
  
  return (
    <>
     <AnimatedCursorPlay/>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};
