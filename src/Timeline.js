import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import * as React from "react";

const title = "Getting ready to go, LA and Bay Area";

const date = "Jan-Feb 2023";

const content =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.";

function TimelinePost(props) {
  return (
<CardActionArea href="#">
        <Card
          sx={{
            width: "100%",
            display: "flex",
            position: 'relative',
            marginBottom: 3,
          }}
        >
          <CardMedia
            component="img"
            alt="post 1"
            image="/post_001.jpg"
            sx={{
              maxWidth: 280,
              display: { xs: "none", sm: "block" },
            }}
          />
          <CardContent sx={{ width: 'inherit' }}>
            <Typography noWrap variant="h5" component="h2">
              {props.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {props.date}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {props.content}
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>
  )
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
