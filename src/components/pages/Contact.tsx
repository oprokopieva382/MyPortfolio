import { Box } from "@mui/material";
import contactMe from "../../assets/video/contactMe.mp4";
import { Form } from "../Form";

export const Contact = () => {
  return (
    <Box>
      <video
        autoPlay
        loop
        muted
        src={contactMe}
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
          }}
      >
        <Form />
      </Box>
    </Box>
  );
};
