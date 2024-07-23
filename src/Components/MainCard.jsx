import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";
import brand_logo from "../assets/brand_logo.png";
import earth from "../assets/earth.jpg";
import Sliders from "./Slider";

const MainCard = () => {
  const [showSliders, setShowSliders] = useState(false);

  if (showSliders) {
    return <Sliders />;
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
      <Box sx={{ backgroundColor: "skyblue", padding: 4 }}>
        <CardMedia
          component="img"
          image={earth}
          alt="earth background"
          sx={{ width: 200, height: 200, margin: "auto" }}
        />
        <Typography
          variant="h4"
          component="div"
          sx={{ fontWeight: "bold", mt: 2 }}
        >
          GOING ABROAD?
        </Typography>
        <Typography
          variant="h5"
          component="div"
          sx={{ fontWeight: "bold", mt: 1, color: "#4caf50" }}
        >
          HOW MUCH DATA DO YOU NEED?
        </Typography>
      </Box>
      <CardContent>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mt: 2, fontFamily: "Roboto, sans-serif" }}
        >
          Don’t fly home to nightmare roaming charges. Use our quick calculator
          to find out which eSIM plan will help you save money on your trip.
        </Typography>
        <Box sx={{ mt: 3, mb: 2 }}>
          <Button
            variant="contained"
            color="primary"
            sx={{ fontFamily: "Roboto, sans-serif" }}
            onClick={() => setShowSliders(true)}
          >
            Get Started
          </Button>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <CardMedia
            component="img"
            height="60"
            image={brand_logo}
            alt="company logo"
            sx={{ width: "auto" }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default MainCard;
