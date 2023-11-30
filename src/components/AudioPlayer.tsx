import { Box } from "@mui/material";
import Switch from "@mui/material/Switch";
import { useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StopIcon from "@mui/icons-material/Stop";

export const AudioPlayer = () => {
  const [checked, setChecked] = useState(true);

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
        <StopIcon sx={{ fontSize: 36 }} />
      ) : (
        <PlayArrowIcon sx={{ fontSize: 36 }} />
      )}
      <Switch
        checked={checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
      
      />
    </Box>
  );
};
