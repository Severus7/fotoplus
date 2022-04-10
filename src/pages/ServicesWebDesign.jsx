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
import ServicesBanner from "../components/ServicesBanner";
import FooterComponent from "../components/FooterComponent";
import ServicesAboutBanner from "../components/ServicesAboutBanner";
import mockups from "../assets/mockups.png";

const ServicesWebDesign = () => {
  return (
    <React.Fragment>
      <ServicesBanner service="Property Web Design and Development" />
      <Box>
        <Container>
          <Box>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "100",
                lineHeight: "75px",
                marginBottom: 10,
                textAlign: "center",
              }}
            >
              From single-property websites to full-stack real estate websites,
              we do it all!
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Card
                sx={{
                  backgroundColor: "transparent",
                  width: "70%",
                }}
                elevation="0"
              >
                <CardMedia component="img" width="100%" image={mockups} />
              </Card>
            </Box>
          </Box>
        </Container>
      </Box>
      <ServicesAboutBanner />
      <FooterComponent />
    </React.Fragment>
  );
};

export default ServicesWebDesign;
