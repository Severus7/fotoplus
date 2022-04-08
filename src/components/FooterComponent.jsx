import React from "react";
import { Box, Container, Grid, Typography, Link } from "@mui/material";
import FooterLinksComponent from "./FooterLinksComponent";

const FooterComponent = () => {
  return (
    <Box
      sx={{
        backgroundColor: "grey.700",
        marginTop: "400px",
        height: "50%",
        padding: "70px 0px 150px 0px",
      }}
    >
      <Container>
        <Grid container spacing={20}>
          <Grid item xs={6} sm={4} sx={{ textAlign: "center" }}>
            <Typography
              variant="h4"
              sx={{ marginBottom: "10px" }}
              color="text.primary"
            >
              Link
            </Typography>
            <FooterLinksComponent route="/" page="Home" />
            <FooterLinksComponent route="/about" page="About" />
            <FooterLinksComponent route="/contact" page="Contact" />
          </Grid>
          <Grid item xs={6} sm={4} sx={{ textAlign: "center" }}>
            <Typography
              variant="h4"
              sx={{ marginBottom: "10px" }}
              color="text.primary"
            >
              Link
            </Typography>
            <FooterLinksComponent route="/" page="Home" />
            <FooterLinksComponent route="/about" page="About" />
            <FooterLinksComponent route="/contact" page="Contact" />
          </Grid>
          <Grid item xs={12} sm={4} sx={{ textAlign: "center" }}>
            <Typography
              variant="h4"
              sx={{ marginBottom: "10px" }}
              color="text.primary"
            >
              PhotoPlus
            </Typography>
            <FooterLinksComponent route="/" page="Home" />
            <FooterLinksComponent route="/about" page="About" />
            <FooterLinksComponent route="/contact" page="Contact" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FooterComponent;
