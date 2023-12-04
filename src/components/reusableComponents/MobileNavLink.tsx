import ListItem from "@mui/material/ListItem";
import { FC } from "react";
import { StyledNavLink } from "../../style/NavBarStyle";

type MobileNavLinkPropsType = {
    linkname: string;
    callback: ()=> void;
    to: string
}

export const MobileNavLink: FC<MobileNavLinkPropsType> = ({ to, linkname, callback }) => {
  return (
    <StyledNavLink to={to}>
      <ListItem button onClick={callback}>
       {linkname}
      </ListItem>
    </StyledNavLink>
  );
};
