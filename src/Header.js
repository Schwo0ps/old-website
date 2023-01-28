import * as React from "react";
import { Box, Container, Paper, Typography } from "@mui/material";

function Header(props) {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
      }}
      square
    >
      <img
        alt=""
        src={require("./header.jpg")}
        style={{
          width: "100%",
        }}
      />
      <Box
        style={{
          position: 'absolute',
          bottom: '0%',
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          color: "white",
          // paddingBottom: '3vh',
        }}
      >
        <Typography component="h1" variant="h4" gutterBottom>
          Hypertrousers
        </Typography>
        <Typography variant="subtitle" gutterBottom>
          Nikita Kosolobov
        </Typography>
      </Box>
    </Box>
  );
}

export default Header;
