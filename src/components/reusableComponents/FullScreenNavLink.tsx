import { FC } from "react";
import { FullScreenNavLinkButton, FullScreenStyledNavLink } from "../../style/NavBarStyle";

type FullScreenNavLinkPropsType = {
  to: string;
  label: string;
};

export const FullScreenNavLink: FC<FullScreenNavLinkPropsType> = ({ to, label }) => {
  return (
    <FullScreenStyledNavLink to={to} >
      <FullScreenNavLinkButton
        variant="contained"
        color="primary">
        {label}
      </FullScreenNavLinkButton>
    </FullScreenStyledNavLink>
  );
};