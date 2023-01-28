import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Container } from "@mui/material";
import Header from "./Header";
import Map from "./Map";
// import Timeline from "./Timeline";
// import Contact from "./Contact";
// import Footer from "./Footer";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Map />
      {/* <Timeline />
      <Contact />
      <Footer /> */}
    </ThemeProvider>
  );
}

export default App;
