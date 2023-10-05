import React from "react";
import { Typography, Box } from "@mui/material";

function Description() {
  return (
    <Box py={5} bgcolor="#e8eaf6" borderRadius={3} boxShadow={3} mt={4} px={3}>
      <Typography variant="h6" gutterBottom color="#3f51b5">
        Om Meg
      </Typography>
      <Typography>
      En fin utsikt kan gi oss glede, inspirasjon og ro. Den kan være over et naturlandskap, en storby eller en himmel full av stjerner. En fin utsikt kan få oss til å stoppe opp og beundre verden rundt oss. 
      </Typography>
    </Box>
  );
}

export default Description;
