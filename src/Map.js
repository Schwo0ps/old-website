import { Container, Typography } from "@mui/material";
import * as React from "react";

class Map extends React.Component {
  render() {
    return (
      <div
        style={{
          width: '100%',
          minHeight: '20vh',
        }}
      >
        <img alt="" src={require("./map.png")}
          style={{
            width: '100%',
          }}
        />
      </div>
    );
  }
}

export default Map;
