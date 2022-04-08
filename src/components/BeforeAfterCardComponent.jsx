import React from "react";
import { Card, CardHeader, CardMedia } from "@mui/material";

const BeforeAfterCardComponent = (props) => {
  return (
    <Card elevation={12}>
      <CardHeader title={props.title} />
      <CardMedia
        component="img"
        height="500"
        image={props.image}
        sx={props.sx}
      />
    </Card>
  );
};

export default BeforeAfterCardComponent;
