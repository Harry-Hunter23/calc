import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Slider,
} from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import SecurityIcon from "@mui/icons-material/Security";
import DaysSelection from "./selectDays";

const SecondSliders = () => {
  const [watching, setWatching] = useState(0);
  const [videoCalling, setVideoCalling] = useState(0);
  const [gaming, setGaming] = useState(0);
  const [securityCam, setSecurityCam] = useState(0);
  const [showDaysSelection, setShowDaysSelection] = useState(false);

  const handleNextClick = () => {
    setShowDaysSelection(true);
  };

  if (showDaysSelection) {
    return (
      <DaysSelection
        onUsageSubmit={(days) =>
          alert(`Data usage calculated for ${days} days`)
        }
      />
    );
  }

  return (
    <Card
      sx={{
        maxWidth: 700,
        margin: "auto",
        mt: 5,
        textAlign: "center",
        fontFamily: "Roboto, sans-serif",
        borderRadius: 3,
        boxShadow: 3,
        padding: 3,
      }}
    >
      <CardContent>
        <Typography
          variant="h4"
          component="div"
          sx={{ fontWeight: "bold", mb: 2 }}
        >
          WHAT ABOUT THOSE DATA-HUNGRY APPS?
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 4, fontFamily: "Roboto, sans-serif" }}
        >
          Some apps require more mobile data. Will you be doing any of these
          activities?
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <YouTubeIcon sx={{ marginRight: 2, fontSize: 40, color: "orange" }} />
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            WATCHING TV/MOVIES/YOUTUBE:
          </Typography>
          <Typography variant="h6" color="primary">
            {watching} MINS
          </Typography>
        </Box>
        <Slider
          value={watching}
          onChange={(e, newValue) => setWatching(newValue)}
          aria-labelledby="watching-slider"
          step={5}
          min={0}
          max={300}
          sx={{ mb: 2 }}
        />
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <VideoCallIcon sx={{ marginRight: 2, fontSize: 40, color: "pink" }} />
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            VIDEO CALLING:
          </Typography>
          <Typography variant="h6" color="secondary">
            {videoCalling} MINS
          </Typography>
        </Box>
        <Slider
          value={videoCalling}
          onChange={(e, newValue) => setVideoCalling(newValue)}
          aria-labelledby="video-calling-slider"
          step={5}
          min={0}
          max={300}
          sx={{ mb: 2 }}
        />
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <SportsEsportsIcon
            sx={{ marginRight: 2, fontSize: 40, color: "purple" }}
          />
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            ONLINE GAMING:
          </Typography>
          <Typography variant="h6" color="primary">
            {gaming} MINS
          </Typography>
        </Box>
        <Slider
          value={gaming}
          onChange={(e, newValue) => setGaming(newValue)}
          aria-labelledby="gaming-slider"
          step={5}
          min={0}
          max={300}
          sx={{ mb: 2 }}
        />
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <SecurityIcon sx={{ marginRight: 2, fontSize: 40, color: "blue" }} />
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            CHECKING SECURITY CAM:
          </Typography>
          <Typography variant="h6" color="secondary">
            {securityCam} MINS
          </Typography>
        </Box>
        <Slider
          value={securityCam}
          onChange={(e, newValue) => setSecurityCam(newValue)}
          aria-labelledby="security-cam-slider"
          step={5}
          min={0}
          max={300}
          sx={{ mb: 2 }}
        />
        <Box sx={{ mt: 4 }}>
          <Button
            variant="contained"
            color="primary"
            sx={{ fontFamily: "Roboto, sans-serif" }}
            onClick={handleNextClick}
          >
            Next
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default SecondSliders;
