import { Box, Typography } from "@mui/material";
import error from "../../assets/video/error.mp4";

export const Error = () => {
  return (
    <Box>
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
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        <Typography>Page is not found</Typography>
      </Box>
    </Box>
  );
};
