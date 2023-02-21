import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./Header";
import Map from "./Map";
import Timeline from "./Timeline";
import { Alert, AlertTitle } from "@mui/material";
import { CalendarMonth } from "@mui/icons-material";
// import Contact from "./Contact";
// import Footer from "./Footer";

const theme = createTheme();

function WaitingStub() {
  return (
    <Alert variant="filled" severity="warning">
      <AlertTitle>Website is still under development</AlertTitle>
      <CalendarMonth/> Please check back in 2 weeks <CalendarMonth/>
    </Alert>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <br />
      <WaitingStub />
      <br />
      <hr />
      <Map />
      <hr />
      <Timeline />
      {/* <Contact />
      <Footer /> */}
    </ThemeProvider>
  );
}

export default App;
