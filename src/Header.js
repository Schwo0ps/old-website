import * as React from "react";
import { Container, Paper, Typography } from "@mui/material";

function Header(props) {
  return (
    <Paper
      sx={{
        position: "relative",
        backgroundImage: "url(/header.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "30vh",
        width: "100%",
      }}
      square
    >
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: 'column',
          width: "100%",
          height: "100%",
          color: "white",
          // paddingBottom: '3vh',
        }}
      >
        <Typography variant="h4" gutterBottom>Hypertrousers</Typography>
        <Typography variant="subtitle" gutterBottom>Nikita Kosolobov</Typography>
      </Container>
    </Paper>
  );
}

export default Header;
