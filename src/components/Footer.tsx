import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { styled, IconButton } from "@mui/material";

const ExternalLink = styled("a")({
  color: "#fff",
  textDecoration: "none",
});

export const Footer = () => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        backgroundColor: "rgba(43, 42, 42, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 55,
        padding: "8px 0",
      }}
    >
      <ExternalLink
        href="https://github.com/oprokopieva382"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconButton
          sx={{ padding: 0}}
        >
          <GitHubIcon sx={{ color: "#fff", fontSize: 30 }} />
        </IconButton>
      </ExternalLink>
      <ExternalLink
        href="https://www.linkedin.com/in/oksana-prokopieva/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconButton sx={{ padding: 0 }}>
          <LinkedInIcon sx={{ color: "#fff", fontSize: 30 }} />
        </IconButton>
      </ExternalLink>
    </div>
  );
};
