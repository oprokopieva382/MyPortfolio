import { Box, alpha, styled } from "@mui/material";
import Switch from "@mui/material/Switch";
import { useEffect, useState } from "react";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import MusicOffIcon from "@mui/icons-material/MusicOff";
import { lightGreen } from "@mui/material/colors";

const GreenSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: lightGreen[400],
    "&:hover": {
      backgroundColor: alpha(
        lightGreen[400],
        theme.palette.action.hoverOpacity
      ),
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: lightGreen[400],
  },
}));

export const AudioPlayer = () => {
  const [checked, setChecked] = useState(false);

   useEffect(() => {
     const audioElement = new Audio("/src/assets/audio/Lo-Fi-Chillhop.mp3");
     audioElement.loop = checked;

     const playAudio = () => {
       audioElement
         .play()
         .catch((error) => console.error("Play error:", error));
     };

     const stopAudio = () => {
       audioElement.pause();
       audioElement.currentTime = 0;
     };

     if (checked) {
       playAudio();
     } else {
       stopAudio();
     }

     return () => {
       // Cleanup function to stop audio when component unmounts
       stopAudio();
     };
   }, [checked]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Switch changed:", event.target.checked);
    setChecked(event.target.checked);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexGrow: 1,
      }}
    >
      {checked ? (
        <MusicNoteIcon
          sx={{ fontSize: 36, color: checked ? "#9ccc65" : "inherit" }}
        />
      ) : (
        <MusicOffIcon sx={{ fontSize: 36 }} />
      )}

      <GreenSwitch
        checked={checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
      />
    </Box>
  );
};
