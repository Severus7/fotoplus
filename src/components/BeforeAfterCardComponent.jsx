import React from "react";
import { Card, CardHeader, CardMedia } from "@mui/material";

const BeforeAfterCardComponent = (props) => {
  return (
    <Card>
      <CardHeader title={props.title} />
      <CardMedia component="img" height="500" image={props.image} />
    </Card>
  );
};

export default BeforeAfterCardComponent;
