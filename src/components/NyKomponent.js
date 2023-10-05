import React from "react";
import { Typography, Box, Rating } from "@mui/material";

function Description() {
  return (
    <Box py={5} bgcolor="#e8eaf6" borderRadius={3} boxShadow={3} mt={4} px={3}>
      <Typography variant="h6" gutterBottom color="#3f51b5">
        Hva synes du om denne utsikten?
      </Typography>
     <Rating />
    </Box>
  );
}

export default Description;