import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  TextField,
} from "@mui/material";

const DaysSelection = ({ onUsageSubmit }) => {
  const [customDays, setCustomDays] = useState("");
  const [selectedDays, setSelectedDays] = useState(null);

  const handleDaySelection = (days) => {
    setSelectedDays(days);
  };

  const handleCustomDaysChange = (event) => {
    setCustomDays(event.target.value);
  };

  const handleUsageSubmit = () => {
    const days = customDays ? parseInt(customDays) : selectedDays;
    if (days && days > 0) {
      onUsageSubmit(days);
    }
  };

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
          HOW MANY DAYS WILL YOU BE AWAY?
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 4, fontFamily: "Roboto, sans-serif" }}
        >
          Select the duration of your trip or enter the exact amount of days
          below.
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mb: 4,
          }}
        >
          {[3, 7, 10, 14].map((days) => (
            <Button
              key={days}
              variant={selectedDays === days ? "contained" : "outlined"}
              color="primary"
              onClick={() => handleDaySelection(days)}
              sx={{ fontSize: 24, fontWeight: "bold", my: 1 }}
            >
              {days} DAYS
            </Button>
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mb: 4,
          }}
        >
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mb: 2, fontFamily: "Roboto, sans-serif" }}
          >
            Or enter custom duration:
          </Typography>
          <TextField
            label="Custom Days"
            variant="outlined"
            value={customDays}
            onChange={handleCustomDaysChange}
            sx={{ width: "50%", mb: 2 }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleUsageSubmit}
            sx={{ fontFamily: "Roboto, sans-serif" }}
          >
            Get your usage
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default DaysSelection;
