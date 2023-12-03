import { Typography } from "@mui/material";
import error from "../../assets/video/error.mp4";
import { UniversalBoxContainer } from "../../style/UniversalStyle";

export const Error = () => {
  return (
    <>
      <video
        autoPlay
        loop
        muted
        src={error}
        style={{
          width: "100%",
          height: "100vh",
          objectFit: "cover",
          display: "block",
        }}
      />
      <UniversalBoxContainer
      >
        <Typography>Page not found</Typography> 
      </UniversalBoxContainer> 
    </>
  );
};
