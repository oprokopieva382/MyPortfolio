import { Box } from "@mui/material";
import video from "../../assets/video/aboutBackground.mp4";

export const Home = () => {
  return (
    <>
      <Box>
        <video
          autoPlay
          loop
          muted
          src={video}
          style={{
            width: "100%",
            height: "100vh",
            objectFit: "cover",
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
          <h1>Yo</h1>
        </Box>
      </Box>
    </>
  );
};
