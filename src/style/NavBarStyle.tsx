import { AppBar, Box, Button, IconButton } from "@mui/material";
import { NavLink } from "react-router-dom";
import { styled } from "@mui/system";

export const NavBarContainer = styled(Box)`
  display: flex;
`;

export const StyledAppBar = styled(AppBar)`
  background-color: transparent;
  position: fixed;
`;

export const StyledIconButton = styled(IconButton)`
  ${({ theme }) => theme.breakpoints.up("sm")} {
    display: none;
  }
`;

export const NavBarButtonContainer = styled(Box)`
  display: flex;
  justify-content: center;
  flex-grow: 1;
`;

export const AudioPlayerContainer = styled(Box)`
  margin-left: 20px;
`;

export const NavBarButtonScreenView = styled(Box)`
  ${({ theme }) => theme.breakpoints.up("xs")} {
    display: none;
  }
  ${({ theme }) => theme.breakpoints.up("sm")} {
    display: flex;
  }
`;

export const NavBarContainerMobileView = styled(Box)`
  display: flex;
  flex-direction: column;
  background-color: rgba(156, 204, 101, 0.6);
  height: 100%;
  align-items: center;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  width: 100%;
  padding: 10px 0;
`;

export const FullScreenStyledNavLink = styled(NavLink)`
  text-decoration: none;
`;

export const FullScreenNavLinkButton = styled(Button)`
  margin: 8px;
  background-color: rgba(156, 204, 101, 0.2);
  &:hover {
    background-color: rgba(156, 204, 101, 0.6);
  }
`;