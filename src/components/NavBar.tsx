import { useState } from "react";
import { CssBaseline, Drawer, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { AudioPlayer } from "./AudioPlayer";
import {
  AudioPlayerContainer,
  NavBarButtonContainer,
  NavBarButtonScreenView,
  NavBarContainer,
  NavBarContainerMobileView,
  StyledAppBar,
  StyledIconButton,
} from "../style/NavBarStyle";
import { MobileNavLink } from "./reusableComponents/MobileNavLink";
import { FullScreenNavLink } from "./reusableComponents/FullScreenNavLink";

export const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <NavBarContainer>
      <CssBaseline />
      <StyledAppBar>
        <Toolbar>
          <StyledIconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleMobileMenuToggle}
          >
            <MenuIcon />
          </StyledIconButton>
          <AudioPlayerContainer>
            <AudioPlayer />
          </AudioPlayerContainer>
          <NavBarButtonContainer>
            <NavBarButtonScreenView>
              <FullScreenNavLink to="/" label="About" />
              <FullScreenNavLink to="/projects" label="Projects" />
              <FullScreenNavLink to="/contact" label="Contact" />
            </NavBarButtonScreenView>
          </NavBarButtonContainer>
        </Toolbar>
      </StyledAppBar>
      <Drawer
        anchor="left"
        open={mobileMenuOpen}
        onClose={handleMobileMenuToggle}
      >
        <NavBarContainerMobileView>
          <MobileNavLink
            to="/"
            callback={handleMobileMenuToggle}
            linkname="About"
          />
          <MobileNavLink
            to="/projects"
            callback={handleMobileMenuToggle}
            linkname="Projects"
          />
          <MobileNavLink
            to="/contact"
            callback={handleMobileMenuToggle}
            linkname="Contact"
          />
        </NavBarContainerMobileView>
      </Drawer>
    </NavBarContainer>
  );
};
