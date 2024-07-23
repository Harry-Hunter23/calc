import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Slider,
} from "@mui/material";
import HeadsetIcon from "@mui/icons-material/Headset";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import LanguageIcon from "@mui/icons-material/Language";
import PhoneIcon from "@mui/icons-material/Phone";
import SecondSliders from "./SecondSlider"; // Import the SecondSliders component

const Sliders = () => {
  const [streaming, setStreaming] = useState(0);
  const [social, setSocial] = useState(0);
  const [browsing, setBrowsing] = useState(0);
  const [calls, setCalls] = useState(0);
  const [showSecondSliders, setShowSecondSliders] = useState(false);

  if (showSecondSliders) {
    return <SecondSliders />;
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
          WHAT WILL A TYPICAL DAY LOOK LIKE?
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 4, fontFamily: "Roboto, sans-serif" }}
        >
          Push the sliders to let us know how much time you'll be spending on
          each activity every day.
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <HeadsetIcon sx={{ marginRight: 2, fontSize: 40 }} />
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            STREAMING MUSIC/PODCASTS:
          </Typography>
          <Typography variant="h6" color="primary">
            {streaming} MINS
          </Typography>
        </Box>
        <Slider
          value={streaming}
          onChange={(e, newValue) => setStreaming(newValue)}
          aria-labelledby="streaming-slider"
          step={5}
          min={0}
          max={300}
          sx={{ mb: 2 }}
        />
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <PhoneIphoneIcon
            sx={{ marginRight: 2, fontSize: 40, color: "orange" }}
          />
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            SCROLLING ON SOCIAL:
          </Typography>
          <Typography variant="h6" color="secondary">
            {social} MINS
          </Typography>
        </Box>
        <Slider
          value={social}
          onChange={(e, newValue) => setSocial(newValue)}
          aria-labelledby="social-slider"
          step={5}
          min={0}
          max={300}
          sx={{ mb: 2 }}
        />
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <LanguageIcon sx={{ marginRight: 2, fontSize: 40, color: "blue" }} />
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            WEB BROWSING:
          </Typography>
          <Typography variant="h6" color="primary">
            {browsing} MINS
          </Typography>
        </Box>
        <Slider
          value={browsing}
          onChange={(e, newValue) => setBrowsing(newValue)}
          aria-labelledby="browsing-slider"
          step={5}
          min={0}
          max={300}
          sx={{ mb: 2 }}
        />
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <PhoneIcon sx={{ marginRight: 2, fontSize: 40, color: "purple" }} />
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            CALLS & TEXTS:
          </Typography>
          <Typography variant="h6" color="secondary">
            {calls} MINS
          </Typography>
        </Box>
        <Slider
          value={calls}
          onChange={(e, newValue) => setCalls(newValue)}
          aria-labelledby="calls-slider"
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
            onClick={() => setShowSecondSliders(true)}
          >
            Next
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Sliders;
