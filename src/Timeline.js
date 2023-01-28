import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Item,
  Container,
  Grid,
  Typography,
  Button,
  ButtonBase,
  Divider,
} from "@mui/material";
import * as React from "react";

const title = "Getting Ready to Go";

const date = "Jan-Feb 2023";

const content =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed ullamcorper morbi tincidunt ornare massa eget egestas. Enim nec dui nunc mattis enim ut tellus elementum. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Id volutpat lacus laoreet non curabitur. Augue ut lectus arcu bibendum at varius vel pharetra. Nisi est sit amet facilisis magna etiam tempor orci eu. Neque aliquam vestibulum morbi blandit cursus risus at ultrices. Rutrum quisque non tellus orci. Ac placerat vestibulum lectus mauris ultrices eros in cursus. Ac tincidunt vitae semper quis lectus nulla at volutpat. Libero justo laoreet sit amet. Aliquam sem et tortor consequat. Laoreet sit amet cursus sit amet dictum sit amet justo. Purus viverra accumsan in nisl nisi scelerisque eu. Fames ac turpis egestas maecenas pharetra convallis posuere. Aenean sed adipiscing diam donec.";

function TimelinePost(props) {
  return (
    <Button
      variant="text"
      color="inherit"
      sx={{ marginBottom: "3em", textTransform: "none" }}
    >
      <Grid container columnSpacing={2} rowSpacing={0}>
        <Grid item xs={0} sm={3} display={{ xs: "none", sm: "block" }}>
          <Typography variant="h1" component="span">
            ~~
          </Typography>
        </Grid>
        <Grid item xs={12} sm={9} textAlign={{ xs: "center", sm: "left" }}>
          <Typography variant="h4">{props.date}</Typography>
          <Divider />
          <Typography variant="h4">{props.title}</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={5}>
          <img
            alt=""
            src={require("./post_001.jpg")}
            style={{
              width: "100%",
              objectFit: "contain",
              maxHeight: { xs: "none", sm: "16em" },
            }}
          />
        </Grid>
        <Grid item xs={0} sm={6} md={7} display={{ xs: "none", sm: "block" }}>
          <Typography
            overflow="hidden"
            align="left"
            variant="subtitle1"
            paragraph
            color="text.secondary"
            sx={{
              display: "-webkit-box",
              WebkitLineClamp: "8",
              WebkitBoxOrient: "vertical",
            }}
          >
            {props.content}
          </Typography>
        </Grid>
      </Grid>
    </Button>
  );
}

function Timeline(props) {
  return (
    <Container>
      <Typography align="center" variant="h2" gutterBottom>
        Timeline
      </Typography>
      <TimelinePost title={title} date={date} content={content} />
      <TimelinePost title={title} date={date} content={content} />
    </Container>
  );
}

export default Timeline;
