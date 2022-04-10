import React from "react";
import headerImage from "../assets/headerimg2.png";
import { Link } from "react-router-dom";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardMedia,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
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
import itemRemovalBefore1 from "../assets/item_removal_1_before.jpg";
import itemRemovalAfter1 from "../assets/item_removal_1_after.jpg";
import sketchTo2DBefore1 from "../assets/sketch_to_2d_before_1.png";
import sketchTo2DAfter1 from "../assets/sketch_to_2d_after_1.jpg";
import mockups from "../assets/mockups.png";
import virtualAssistant from "../assets/virtual-assistant.jpg";

import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import GradeIcon from "@mui/icons-material/Grade";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";

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
        beforeImage={sketchTo2DBefore1}
        afterImage={sketchTo2DAfter1}
        component={Link}
        url="/services/2D-floor-plan-to-3D-floor-plan"
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
        beforeImage={itemRemovalBefore1}
        afterImage={itemRemovalAfter1}
        component={Link}
        url="/services/item-removal"
      />

      <Container sx={{ marginBottom: 10 }}>
        <Grid container spacing={5}>
          <Grid item lg={12}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="h4">
                Property Website Design and Development
              </Typography>
              <Typography variant="h6" color="secondary.dark">
                $300.00 simple showcase website
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={12} sx={{ display: "flex", justifyContent: "center" }}>
            <Card
              sx={{
                backgroundColor: "transparent",
                width: "70%",
              }}
              elevation="0"
            >
              <CardMedia
                component="img"
                width="100%"
                height="100%"
                image={mockups}
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
            component={Link}
            to="/services/web-design-and-development"
          >
            <Typography color="text.primary" sx={{ fontWeight: "bold" }}>
              See more
            </Typography>
          </Button>
        </Box>
      </Container>

      <Container sx={{ marginBottom: 10 }}>
        <Grid container spacing={5}>
          <Grid item lg={12}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="h4">
                Real Estate Virtual Assistant Services
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={12} sx={{ display: "flex", justifyContent: "center" }}>
            <Card
              sx={{
                backgroundColor: "transparent",
                width: "70%",
              }}
              elevation="0"
            >
              <CardMedia
                component="img"
                width="100%"
                height="100%"
                image={virtualAssistant}
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
            component={Link}
            to="/services/real-estate-virtual-assistant"
          >
            <Typography color="text.primary" sx={{ fontWeight: "bold" }}>
              See more
            </Typography>
          </Button>
        </Box>
      </Container>

      {/* PROPERTY WEBSITE DESIGN AND DEVELOPMENT */}
      {/* <ServicesSummaryComponent
        serviceName="Property Website Design and Development"
        description="$300.00 simple showcase website"
        beforeImage={uneditedHouse1}
        afterImage={editedHouse1}
        component={Link}
        url="#"
      /> */}

      {/* REAL ESTATE VIRTUAL ASSISTANT SERVICES */}
      {/* <ServicesSummaryComponent
        serviceName="Real Estate Virtual Assistant Services"
        description="$10.00 per image"
        beforeImage={uneditedHouse1}
        afterImage={editedHouse1}
        component={Link}
        url="/services/real-estate-virtual-assistant"
      /> */}

      <Box
        sx={{
          backgroundColor: "grey.900",
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
        <Container sx={{ marginBottom: 10 }}>
          <Grid container spacing={10}>
            <Grid item lg={4}>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Paper
                  sx={{
                    padding: "16px",
                    backgroundColor: "#ab47bc",
                    borderRadius: "100px",
                    marginBottom: "20px",
                    height: "36px",
                    width: "36px",
                  }}
                >
                  <AccessTimeFilledIcon
                    sx={{ color: "black" }}
                    fontSize="large"
                  />
                </Paper>
              </Box>
              <Typography
                variant="h4"
                color="common.white"
                sx={{ fontWeight: "100" }}
              >
                Fast Delivery
              </Typography>
            </Grid>
            <Grid item lg={4}>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Paper
                  sx={{
                    padding: "16px",
                    backgroundColor: "#ab47bc",
                    borderRadius: "100px",
                    marginBottom: "20px",
                    height: "36px",
                    width: "36px",
                  }}
                >
                  <GradeIcon sx={{ color: "black" }} fontSize="large" />
                </Paper>
              </Box>
              <Typography
                variant="h4"
                color="common.white"
                sx={{ fontWeight: "100" }}
              >
                High Quality
              </Typography>
            </Grid>
            <Grid item lg={4}>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Paper
                  sx={{
                    padding: "16px",
                    backgroundColor: "#ab47bc",
                    borderRadius: "100px",
                    marginBottom: "20px",
                    height: "36px",
                    width: "36px",
                  }}
                >
                  <HeadsetMicIcon sx={{ color: "black" }} fontSize="large" />
                </Paper>
              </Box>
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

      <FooterComponent marginTop="200px" />
    </React.Fragment>
  );
};

export default Home;
