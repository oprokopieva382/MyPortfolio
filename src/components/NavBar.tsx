import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Drawer,
  IconButton,
  ListItem,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { AudioPlayer } from "./AudioPlayer";

export const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const renderNavLink = (to: string, label: string) => (
    <Link to={to} style={{ textDecoration: "none" }}>
      <Button
        variant="contained"
        color="primary"
        sx={{
          margin: 1,
          backgroundColor: "rgba(156, 204, 101, 0.2)",
          "&:hover": {
            backgroundColor: "rgba(156, 204, 101, 0.6)",
          },
        }}
      >
        {label}
      </Button>
    </Link>
  );

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
              {renderNavLink("/", "About")}
              {renderNavLink("/projects", "Projects")}
              {renderNavLink("/contact", "Contact")}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={mobileMenuOpen}
        onClose={handleMobileMenuToggle}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "rgba(156, 204, 101, 0.6)",
            height: "100%",
            alignItems: "center",
          }}
        >
          <NavLink
            to="/"
            style={{
              textDecoration: "none",
              color: "#fff",
              width: "100%",
              padding: "10px 0",
            }}
          >
            <ListItem button onClick={handleMobileMenuToggle}>
              About
            </ListItem>
          </NavLink>
          <NavLink
            to="/projects"
            style={{ textDecoration: "none", color: "#fff", padding: "10px 0" }}
          >
            <ListItem button onClick={handleMobileMenuToggle}>
              Projects
            </ListItem>
          </NavLink>
          <NavLink
            to="/contact"
            style={{ textDecoration: "none", color: "#fff", padding: "10px 0" }}
          >
            <ListItem button onClick={handleMobileMenuToggle}>
              Contact
            </ListItem>
          </NavLink>
        </Box>
      </Drawer>
    </Box>
  );
};
