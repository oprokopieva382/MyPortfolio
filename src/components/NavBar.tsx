import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Drawer,
  IconButton,
  List,
  Toolbar,
  ListItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { AudioPlayer } from "./AudioPlayer";

export const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{ backgroundColor: "transparent", position: "fixed" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleMobileMenuToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ marginLeft: "20px" }}>
            <AudioPlayer />
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexGrow: 1,
            }}
          >
            <Box sx={{ display: { xs: "none", sm: "flex" } }}>
              <NavLink to="/">
                <Button
                  onClick={() => console.log("click")}
                  sx={{
                    color: "#fff",
                    backgroundColor: "rgba(88, 88, 88, 0.1)",
                    ml: 2,
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                    },
                  }}
                >
                  About
                </Button>
              </NavLink>
              <NavLink to="/projects">
                <Button
                  onClick={() => console.log("click")}
                  sx={{
                    color: "#fff",
                    backgroundColor: "rgba(88, 88, 88, 0.1)",
                    ml: 2,
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                    },
                  }}
                >
                  Projects
                </Button>
              </NavLink>
              <NavLink to="/contact">
                <Button
                  onClick={() => console.log("click")}
                  sx={{
                    color: "#fff",
                    backgroundColor: "rgba(88, 88, 88, 0.1)",
                    ml: 2,
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                    },
                  }}
                >
                  Contact
                </Button>
              </NavLink>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={mobileMenuOpen}
        onClose={handleMobileMenuToggle}
      >
        <List>
          <NavLink to="/">
            <ListItem button onClick={handleMobileMenuToggle}>
              About
            </ListItem>
          </NavLink>
          <NavLink to="/projects">
            <ListItem button onClick={handleMobileMenuToggle}>
              Projects
            </ListItem>
          </NavLink>
          <NavLink to="/contact">
            <ListItem button onClick={handleMobileMenuToggle}>
              Contact
            </ListItem>
          </NavLink>
        </List>
      </Drawer>
    </Box>
  );
};
