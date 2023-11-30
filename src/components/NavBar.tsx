import { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { AudioPlayer } from "./AudioPlayer";

export const NavBar = () => {
  const navItems = ["About", "Projects", "Contact me"];
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
          <Box sx={{marginLeft: "20px"}}>
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
              {navItems.map((item) => (
                <Button
                  key={item}
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
                  {item}
                </Button>
              ))}
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
          {navItems.map((item) => (
            <ListItem button key={item} onClick={handleMobileMenuToggle}>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
