import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardMedia,
  Grid,
} from "@mui/material";
import ServicesBanner from "../components/ServicesBanner";
import FooterComponent from "../components/FooterComponent";
import virtualAssistant from "../assets/virtual-assistant.jpg";
import ServicesAboutBanner from "../components/ServicesAboutBanner";

const ServicesREVirtualAsssistant = () => {
  return (
    <React.Fragment>
      <ServicesBanner service="Real Estate Virtual Assistant Service" />
      <Container>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "100",
            lineHeight: "75px",
            marginBottom: 10,
            textAlign: "center",
          }}
        >
          Time is the most valuable currency. We'd all like to see more of it.
          Work more efficiently and effectively with the help of a Virtual
          Assistant.
        </Typography>
        <Card sx={{ maxWidth: "100%" }}>
          <CardMedia component="img" height="600" image={virtualAssistant} />
        </Card>
      </Container>
      <ServicesAboutBanner />
      {/* <Box
        sx={{
          backgroundColor: "grey.800",
          marginTop: "150px",

          height: "40%",
          textAlign: "center",
          padding: "60px 0 100px 0",
        }}
      >
        <Container>
          <Typography
            variant="h3"
            color="common.white"
            sx={{ fontWeight: "bolder", marginBottom: 15 }}
          >
            Leave the hard tasks to us. Focus on the important things.
          </Typography>
          <Grid container spacing={10}>
            <Grid item lg={4}>
              <Typography
                variant="h4"
                color="common.white"
                sx={{ fontWeight: "100" }}
              >
                Fast Delivery
              </Typography>
            </Grid>
            <Grid item lg={4}>
              <Typography
                variant="h4"
                color="common.white"
                sx={{ fontWeight: "100" }}
              >
                High Quality
              </Typography>
            </Grid>
            <Grid item lg={4}>
              <Typography
                variant="h4"
                color="common.white"
                sx={{ fontWeight: "100" }}
              >
                Great Customer Service
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box> */}
      <FooterComponent />
    </React.Fragment>
  );
};

export default ServicesREVirtualAsssistant;
