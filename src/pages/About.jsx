import React from "react";
import { Container, Box, Typography } from "@mui/material";
import FooterComponent from "../components/FooterComponent";
import HeroSection from "../components/HeroSection";
import testimonialBanner from "../assets/meeting.png";

const About = () => {
  return (
    <React.Fragment>
      <Container sx={{ marginTop: 15, marginBottom: 20 }}>
        <Typography
          variant="h4"
          component="div"
          sx={{ marginBottom: "50px", fontWeight: "700" }}
        >
          About
        </Typography>
        <Box sx={{ width: "100%" }}>
          <Typography
            variant="h4"
            component="div"
            sx={{ lineHeight: "75px", textAlign: "left", fontWeight: "100" }}
          >
            In PhotoPlus, we are dedicated to providing excellent service to
            you, our client, to win your condifence.
          </Typography>
        </Box>
      </Container>
      <HeroSection
        height="70vh"
        image={testimonialBanner}
        component="h2"
        variant="h3"
        headerText="Testomial here"
        display="none"
      />
      <Container sx={{ marginTop: 15, marginBottom: 20 }}>
        <Typography
          variant="h4"
          component="div"
          sx={{ marginBottom: "50px", fontWeight: "700" }}
        >
          Mission
        </Typography>
        <Box sx={{ width: "100%" }}>
          <Typography
            variant="h4"
            component="div"
            sx={{ lineHeight: "75px", textAlign: "left", fontWeight: "100" }}
          >
            Our mission is to be able to assist both photographers and realtors
            so that we can become forerunners in the real estate visual media
            sector when it comes to the use of technology.
          </Typography>
        </Box>
      </Container>
      <FooterComponent />
    </React.Fragment>
  );
};

export default About;
