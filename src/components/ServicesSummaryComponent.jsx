import React from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const ServicesSummaryComponent = (props) => {
  return (
    <Container sx={{ marginBottom: 10 }}>
      <Box sx={{ display: "flex" }}>
        <Typography variant="h4" gutterBottom sx={{ marginRight: "20px" }}>
          {props.serviceName}
        </Typography>
        <Typography variant="h6" color="secondary.dark">
          {props.description}
        </Typography>
      </Box>
      <Grid container spacing={5}>
        <Grid item lg={6} xs={12}>
          <Card elevation={12}>
            <CardHeader title="Before" />
            <CardMedia
              component="img"
              height="500"
              image={props.beforeImage}
              sx={props.sxBefore}
            />
          </Card>
        </Grid>
        <Grid item lg={6} xs={12}>
          <Card elevation={12}>
            <CardHeader title="After" />
            <CardMedia
              component="img"
              height="500"
              image={props.afterImage}
              sx={props.sxAfter}
            />
          </Card>
        </Grid>
      </Grid>
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          color="common"
          sx={{
            marginTop: 5,
            backgroundColor: "grey.900",
            padding: "50px, 25px",
          }}
          component={props.component}
          to={props.url}
        >
          <Typography color="text.primary" sx={{ fontWeight: "bold" }}>
            See more
          </Typography>
        </Button>
      </Box>
    </Container>
  );
};

export default ServicesSummaryComponent;
