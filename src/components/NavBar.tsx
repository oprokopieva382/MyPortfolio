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

export const NavBar = () => {
  const navItems = ["About me", "My work", "Contact", "Resume"];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
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
          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#fff", ml: 2 }}>
                {item}
              </Button>
            ))}
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
