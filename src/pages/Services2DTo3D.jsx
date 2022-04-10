import React from "react";
import { Box, Container, Typography, Card, CardMedia } from "@mui/material";
import ServicesBanner from "../components/ServicesBanner";
import FooterComponent from "../components/FooterComponent";
import ServicesAboutBanner from "../components/ServicesAboutBanner";
import twoDThreeDFloorPlan from "../assets/2D_to_3D_after_1.jpg";

const Services2DTo3D = () => {
  return (
    <React.Fragment>
      <ServicesBanner service="2D Floor Plan to 3D Floor Plan" />
      <Box>
        <Container>
          <Card sx={{ maxWidth: "100%" }}>
            <CardMedia
              height="900"
              component="img"
              image={twoDThreeDFloorPlan}
            />
          </Card>
        </Container>
      </Box>
      <ServicesAboutBanner />
      <FooterComponent />
    </React.Fragment>
  );
};

export default Services2DTo3D;
