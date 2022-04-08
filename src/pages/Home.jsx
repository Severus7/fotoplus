import React from "react";
import headerImage from "../assets/headerimg2.png";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import FooterComponent from "../components/FooterComponent";
import BeforeAfterCardComponent from "../components/BeforeAfterCardComponent";
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
        {/* <img src={headerimage} alt="" width="100%" height="auto" /> */}
        <HeroSection
          height="90vh"
          headerText="Hero Section"
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
      <Container sx={{ marginBottom: 10 }}>
        <Box sx={{ display: "flex" }}>
          <Typography variant="h4" gutterBottom sx={{ marginRight: "20px" }}>
            Image Enhancement
          </Typography>
          <Typography variant="h6" color="secondary.dark">
            $5.00 per image
          </Typography>
        </Box>
        <Grid container spacing={5}>
          <Grid item lg={6} xs={12}>
            <BeforeAfterCardComponent title="Before" image={uneditedHouse1} />
          </Grid>
          <Grid item lg={6} xs={12}>
            <BeforeAfterCardComponent title="After" image={editedHouse1} />
          </Grid>
        </Grid>
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Button variant="contained" sx={{ marginTop: 5 }}>
            See more
          </Button>
        </Box>
      </Container>

      {/* SKETCH PLANS TO 2D FLOOR PLAN */}
      <Container sx={{ marginBottom: 10 }}>
        <Box sx={{ display: "flex" }}>
          <Typography variant="h4" gutterBottom sx={{ marginRight: "20px" }}>
            Sketch Plans to 2D Floor Plan
          </Typography>
          <Typography variant="h6" color="secondary.dark">
            $5.00 per floor plan
          </Typography>
        </Box>
        <Grid container spacing={5}>
          <Grid item lg={6} xs={12}>
            <BeforeAfterCardComponent title="Before" image={uneditedHouse1} />
          </Grid>
          <Grid item lg={6} xs={12}>
            <BeforeAfterCardComponent title="After" image={editedHouse1} />
          </Grid>
        </Grid>
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Button variant="contained" sx={{ marginTop: 5 }}>
            See more
          </Button>
        </Box>
      </Container>

      {/* VIRTUAL STAGING */}
      <Container sx={{ marginBottom: 10 }}>
        <Box sx={{ display: "flex" }}>
          <Typography variant="h4" gutterBottom sx={{ marginRight: "20px" }}>
            Virtual Staging
          </Typography>
          <Typography variant="h6" color="secondary.dark">
            $25.00 per image
          </Typography>
        </Box>
        <Grid container spacing={5}>
          <Grid item lg={6} xs={12}>
            <BeforeAfterCardComponent
              title="Before"
              image={virtualStagingBefore1}
            />
          </Grid>
          <Grid item lg={6} xs={12}>
            <BeforeAfterCardComponent
              title="After"
              image={virtualStagingAfter1}
            />
          </Grid>
        </Grid>
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Button variant="contained" sx={{ marginTop: 5 }}>
            See more
          </Button>
        </Box>
      </Container>

      {/* 2D FLOOR PLAN TO 3D FLOOR PLAN */}
      <Container sx={{ marginBottom: 10 }}>
        <Box sx={{ display: "flex" }}>
          <Typography variant="h4" gutterBottom sx={{ marginRight: "20px" }}>
            2D Floor Plan to 3D Floor Plan
          </Typography>
          <Typography variant="h6" color="secondary.dark">
            $10.00 per image
          </Typography>
        </Box>
        <Grid container spacing={5}>
          <Grid item lg={6} xs={12}>
            <BeforeAfterCardComponent
              title="Before"
              image={twoDThreeDBefore1}
            />
          </Grid>
          <Grid item lg={6} xs={12}>
            <BeforeAfterCardComponent title="After" image={twoDThreeDAfter1} />
          </Grid>
        </Grid>
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Button variant="contained" sx={{ marginTop: 5 }}>
            See more
          </Button>
        </Box>
      </Container>
      {/* ITEM REMOVAL */}
      <Container sx={{ marginBottom: 10 }}>
        <Box sx={{ display: "flex" }}>
          <Typography variant="h4" gutterBottom sx={{ marginRight: "20px" }}>
            Item Removal
          </Typography>
          <Typography variant="h6" color="secondary.dark">
            $1.00 per image
          </Typography>
        </Box>
        <Grid container spacing={5}>
          <Grid item lg={6} xs={12}>
            <BeforeAfterCardComponent title="Before" image={uneditedHouse1} />
          </Grid>
          <Grid item lg={6} xs={12}>
            <BeforeAfterCardComponent title="After" image={editedHouse1} />
          </Grid>
        </Grid>
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Button variant="contained" sx={{ marginTop: 5 }}>
            See more
          </Button>
        </Box>
      </Container>

      {/* PROPERTY WEBSITE DESIGN AND DEVELOPMENT */}
      <Container sx={{ marginBottom: 10 }}>
        <Box sx={{ display: "flex" }}>
          <Typography variant="h4" gutterBottom sx={{ marginRight: "20px" }}>
            Property Website Design and Development
          </Typography>
          <Typography variant="h6" color="secondary.dark">
            $300.00 simple showcase website
          </Typography>
        </Box>
        <Grid container spacing={5}>
          <Grid item lg={6} xs={12}>
            <BeforeAfterCardComponent title="Before" image={uneditedHouse1} />
          </Grid>
          <Grid item lg={6} xs={12}>
            <BeforeAfterCardComponent title="After" image={editedHouse1} />
          </Grid>
        </Grid>
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Button variant="contained" sx={{ marginTop: 5 }}>
            See more
          </Button>
        </Box>
      </Container>

      {/* REAL ESTATE VIRTUAL ASSISTANT SERVICES */}
      <Container sx={{ marginBottom: 10 }}>
        <Box sx={{ display: "flex" }}>
          <Typography variant="h4" gutterBottom sx={{ marginRight: "20px" }}>
            Real Estate Virtual Assistant Services
          </Typography>
          <Typography variant="h6" color="secondary.dark">
            $10.00 per image
          </Typography>
        </Box>
        <Grid container spacing={5}>
          <Grid item lg={6} xs={12}>
            <BeforeAfterCardComponent title="Before" image={uneditedHouse1} />
          </Grid>
          <Grid item lg={6} xs={12}>
            <BeforeAfterCardComponent title="After" image={editedHouse1} />
          </Grid>
        </Grid>
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Button variant="contained" sx={{ marginTop: 5 }}>
            See more
          </Button>
        </Box>
      </Container>

      <Box
        sx={{
          backgroundColor: "grey.800",
          marginTop: "100px",
          marginBottom: "100px",
          height: "40%",
          textAlign: "center",
          padding: "40px 0 40px 0",
        }}
      >
        <Typography
          variant="h4"
          color="common.white"
          sx={{ marginBottom: "50px" }}
        >
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

      <Container sx={{ marginTop: "50px", marginBottom: "50px" }}>
        <Typography variant="h4" sx={{ marginBottom: "75px" }}>
          People we serve
        </Typography>
        <Grid container spacing={5}>
          <Grid item lg={4} xs={12}>
            <Typography variant="h5" sx={{ fontWeight: "100" }}>
              Real Estate Developers
            </Typography>
          </Grid>
          <Grid item lg={4} xs={12}>
            <Typography variant="h5" sx={{ fontWeight: "100" }}>
              Real Estate Brokers and Agents
            </Typography>
          </Grid>
          <Grid item lg={4} xs={12}>
            <Typography variant="h5" sx={{ fontWeight: "100" }}>
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
