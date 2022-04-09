import React from "react";
import headerImage from "../assets/headerimg2.png";
import { Link } from "react-router-dom";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import FooterComponent from "../components/FooterComponent";
import BeforeAfterCardComponent from "../components/BeforeAfterCardComponent";
import ServicesSummaryComponent from "../components/ServicesSummaryComponent";
import HeroSection from "../components/HeroSection";
import uneditedHouse1 from "../assets/unedited_house_1.jpg";
import editedHouse1 from "../assets/edited_house_1.jpg";
import virtualStagingBefore1 from "../assets/virtual_staging_before_1.jpg";
import virtualStagingAfter1 from "../assets/virtual_staging_after_1.jpg";
import twoDThreeDBefore1 from "../assets/2D_to_3D_Before_1.jpg";
import twoDThreeDAfter1 from "../assets/2D_to_3D_after_1.jpg";

const Home = () => {
  return (
    <React.Fragment>
      <div>
        <HeroSection
          height="90vh"
          headerText="Welcome to Foto+"
          component="h1"
          variant="h1"
          image={headerImage}
          buttonText="Try it for free"
        />
      </div>
      <Container sx={{ marginTop: "50px", marginBottom: "50px" }}>
        <Typography variant="h3" gutterBottom>
          Services
        </Typography>
        <Typography
          variant="h4"
          component="div"
          sx={{ lineHeight: "75px", marginBottom: "50px", fontWeight: "100" }}
        >
          We are a real estate technology company that specializes in creating
          visual marketing content to increase real estate sales.
        </Typography>
        <Typography variant="h4" sx={{ lineHeight: "75px", fontWeight: "100" }}>
          This is what we can do for you
        </Typography>
      </Container>

      {/* IMAGE ENHANCEMENT */}
      <ServicesSummaryComponent
        serviceName="Image Enhancement"
        description="$5.00 per image"
        beforeImage={uneditedHouse1}
        afterImage={editedHouse1}
        component={Link}
        url="/services/image-enhancement"
      />

      {/* SKETCH PLANS TO 2D FLOOR PLAN */}
      <ServicesSummaryComponent
        serviceName="Sketch Plans to 2D Floor Plan"
        description="$5.00 per floor plan"
        beforeImage={uneditedHouse1}
        afterImage={editedHouse1}
        component={Link}
        url="#"
      />

      {/* VIRTUAL STAGING */}
      <ServicesSummaryComponent
        serviceName="Virtual Staging"
        description="$25.00 per image"
        beforeImage={virtualStagingBefore1}
        afterImage={virtualStagingAfter1}
        component={Link}
        url="/services/virtual-staging"
      />

      {/* 2D FLOOR PLAN TO 3D FLOOR PLAN */}
      <ServicesSummaryComponent
        serviceName="2D Floor Plan to 3D Floor Plan"
        description="$10.00 per image"
        beforeImage={twoDThreeDBefore1}
        afterImage={twoDThreeDAfter1}
        component={Link}
        url="/services/2D-floor-plan-to-3D-floor-plan"
      />

      {/* ITEM REMOVAL */}
      <ServicesSummaryComponent
        serviceName="Item Removal"
        description="$1.00 per image"
        beforeImage={uneditedHouse1}
        afterImage={editedHouse1}
        component={Link}
        url="/services/item-removal"
      />

      {/* PROPERTY WEBSITE DESIGN AND DEVELOPMENT */}
      <ServicesSummaryComponent
        serviceName="Property Website Design and Development"
        description="$300.00 simple showcase website"
        beforeImage={uneditedHouse1}
        afterImage={editedHouse1}
        component={Link}
        url="#"
      />

      {/* REAL ESTATE VIRTUAL ASSISTANT SERVICES */}
      <ServicesSummaryComponent
        serviceName="Real Estate Virtual Assistant Services"
        description="$10.00 per image"
        beforeImage={uneditedHouse1}
        afterImage={editedHouse1}
        component={Link}
        url="/services/real-estate-virtual-assistant"
      />

      <Box
        sx={{
          backgroundColor: "grey.800",
          marginTop: 20,
          marginBottom: "100px",
          height: "40%",
          textAlign: "center",
          padding: "60px 0 80px 0",
        }}
      >
        <Typography variant="h4" color="common.white" sx={{ marginBottom: 15 }}>
          Benefits
        </Typography>
        <Container>
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
      </Box>

      <Container
        sx={{ marginTop: "50px", marginBottom: "50px", textAlign: "center" }}
      >
        <Typography variant="h4" sx={{ marginBottom: 15 }}>
          People we serve
        </Typography>
        <Grid container spacing={5}>
          <Grid item lg={4} xs={12}>
            <Typography variant="h4" sx={{ fontWeight: "100" }}>
              Real Estate Developers
            </Typography>
          </Grid>
          <Grid item lg={4} xs={12}>
            <Typography variant="h4" sx={{ fontWeight: "100" }}>
              Real Estate Brokers and Agents
            </Typography>
          </Grid>
          <Grid item lg={4} xs={12}>
            <Typography variant="h4" sx={{ fontWeight: "100" }}>
              Real Estate Photographers
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <FooterComponent />
    </React.Fragment>
  );
};

export default Home;
