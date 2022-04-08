import React from "react";
import headerImage from "../assets/headerimg2.png";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import FooterComponent from "../components/FooterComponent";
import HeroSection from "../components/HeroSection";
import uneditedHouse1 from "../assets/unedited_house_1.jpg";
import editedHouse1 from "../assets/edited_house_1.jpg";
import BeforeAfterCardComponent from "../components/BeforeAfterCardComponent";

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
          <Grid item lg={6}>
            <BeforeAfterCardComponent title="Before" image={uneditedHouse1} />
          </Grid>
          <Grid item lg={6}>
            <BeforeAfterCardComponent title="After" image={editedHouse1} />
          </Grid>
        </Grid>
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Button variant="contained" sx={{ marginTop: 5 }}>
            See more
          </Button>
        </Box>
      </Container>

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
          <Grid item lg={6}>
            <BeforeAfterCardComponent title="Before" image={uneditedHouse1} />
          </Grid>
          <Grid item lg={6}>
            <BeforeAfterCardComponent title="After" image={editedHouse1} />
          </Grid>
        </Grid>
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Button variant="contained" sx={{ marginTop: 5 }}>
            See more
          </Button>
        </Box>
      </Container>

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
          <Grid item lg={6}>
            <BeforeAfterCardComponent title="Before" image={uneditedHouse1} />
          </Grid>
          <Grid item lg={6}>
            <BeforeAfterCardComponent title="After" image={editedHouse1} />
          </Grid>
        </Grid>
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Button variant="contained" sx={{ marginTop: 5 }}>
            See more
          </Button>
        </Box>
      </Container>

      <Container sx={{ marginBottom: 10 }}>
        <Box sx={{ display: "flex" }}>
          <Typography variant="h4" gutterBottom sx={{ marginRight: "20px" }}>
            Day to Dusk Conversion
          </Typography>
          <Typography variant="h6" color="secondary.dark">
            $10.00 per image
          </Typography>
        </Box>
        <Grid container spacing={5}>
          <Grid item lg={6}>
            <BeforeAfterCardComponent title="Before" image={uneditedHouse1} />
          </Grid>
          <Grid item lg={6}>
            <BeforeAfterCardComponent title="After" image={editedHouse1} />
          </Grid>
        </Grid>
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Button variant="contained" sx={{ marginTop: 5 }}>
            See more
          </Button>
        </Box>
      </Container>

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
          <Grid item lg={6}>
            <BeforeAfterCardComponent title="Before" image={uneditedHouse1} />
          </Grid>
          <Grid item lg={6}>
            <BeforeAfterCardComponent title="After" image={editedHouse1} />
          </Grid>
        </Grid>
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Button variant="contained" sx={{ marginTop: 5 }}>
            See more
          </Button>
        </Box>
      </Container>

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
          <Grid item lg={6}>
            <BeforeAfterCardComponent title="Before" image={uneditedHouse1} />
          </Grid>
          <Grid item lg={6}>
            <BeforeAfterCardComponent title="After" image={editedHouse1} />
          </Grid>
        </Grid>
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Button variant="contained" sx={{ marginTop: 5 }}>
            See more
          </Button>
        </Box>
      </Container>

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
          <Grid item lg={6}>
            <BeforeAfterCardComponent title="Before" image={uneditedHouse1} />
          </Grid>
          <Grid item lg={6}>
            <BeforeAfterCardComponent title="After" image={editedHouse1} />
          </Grid>
        </Grid>
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Button variant="contained" sx={{ marginTop: 5 }}>
            See more
          </Button>
        </Box>
      </Container>

      <FooterComponent />
    </React.Fragment>
  );
};

export default Home;
