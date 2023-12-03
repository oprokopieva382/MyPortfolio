import { Box, Typography } from "@mui/material";
import video from "../../assets/video/aboutBackground.mp4";

export const Home = () => {
  return (
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
        <Box
          sx={{
            maxWidth: "40%",
            minWidth: "400px",
            backgroundColor: "rgba(63, 62, 62, 0.5)",
            borderRadius: "8px",
            padding: 10,
          }}
        >
          <Typography sx={{ fontSize: "20px" }}>It's me,</Typography>
          <Typography sx={{ fontSize: "40px" }}>Oksana</Typography>
          <Typography sx={{ fontSize: "27px" }}>
            Full Stack Developer (MERN)
          </Typography>
          <Typography sx={{ marginTop: "3%", fontSize: 17 }}>
            Believe, it's so important to keep work and rest in a balance, that
            is why live yoga lifestyle and in a free time enjoying exploring the
            Nature, so if you can't find me here, you definitely find me there🤍
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
