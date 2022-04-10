import React from "react";
import { Box, Container, Typography, Card, CardMedia } from "@mui/material";
import ServicesBanner from "../components/ServicesBanner";
import ServicesAboutBanner from "../components/ServicesAboutBanner";
import FooterComponent from "../components/FooterComponent";
import editedImage from "../assets/edited_house_1.jpg";

const ServicesImageEnhancement = () => {
  return (
    <React.Fragment>
      <ServicesBanner service="Image Enhancement" />
      <Box>
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
            Professionally taken photographs improve internet readership and
            have been shown to speed up the sale of properties.
          </Typography>
          <Card sx={{ maxWidth: "100%" }}>
            <CardMedia component="img" image={editedImage} />
          </Card>
        </Container>
      </Box>
      <ServicesAboutBanner />
      <FooterComponent />
    </React.Fragment>
  );
};

export default ServicesImageEnhancement;
