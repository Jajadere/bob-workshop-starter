import React from "react";
import { Avatar, Typography, Stack } from "@mui/material";

function Profile() {
  return (
    <Stack
      alignItems="center"
      textAlign="center"
      py={5}
      bgcolor="#8BD1F6"
      borderRadius={3}
      boxShadow={3}
      spacing={2}
    >
      <Avatar
        src="/Testbilde.jpg"
        alt="Utsikt"
        sx={{
          width: 250,
          height: 250,
          margin: "auto",
          border: "4px solid #3f51b5",
          borderRadius: "20%"
        }}
      />
      <Typography variant="h4" gutterBottom color="#3f51b5">
        Verøy
      </Typography>
    </Stack>
  );
}

export default Profile;
