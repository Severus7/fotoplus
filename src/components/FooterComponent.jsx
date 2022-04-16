import React from "react";
import { Link } from "react-router-dom";
import { Box, Container, Grid, Typography } from "@mui/material";
import FooterLinksComponent from "./FooterLinksComponent";

// backgroundColor: "#ab47bc",
// color="text.primary" white text

const FooterComponent = (props) => {
  return (
    <Box
      sx={{
        backgroundColor: "grey.800",
        marginTop: `${props.marginTop}`,
        height: "50%",
        padding: "70px 0px 80px 0px",
      }}
    >
      <Container>
        <Grid container spacing={20} justifyContent="center">
          <Grid item xs={12} lg={4}>
            <Typography
              variant="h4"
              color="white"
              sx={{ marginBottom: "10px" }}
            >
              Link
            </Typography>
            <FooterLinksComponent component={Link} route="/" page="Home" />
            <FooterLinksComponent
              component={Link}
              route="/about"
              page="About"
            />
            <FooterLinksComponent
              component={Link}
              route="/contact"
              page="Contact"
            />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Typography
              variant="h4"
              color="white"
              sx={{ marginBottom: "10px" }}
            >
              Services
            </Typography>
            <FooterLinksComponent
              component={Link}
              route="/services/real-estate-virtual-assistant"
              page="Real Estate Virtual Assistant"
            />
            <FooterLinksComponent
              component={Link}
              route="/services/2D-floor-plan-to-3D-floor-plan"
              page="2D Floor Plan to 3D Floor Plan"
            />
            <FooterLinksComponent
              component={Link}
              route="/services/image-enhancement"
              page="Image Enhancement"
            />
            <FooterLinksComponent
              component={Link}
              route="/services/virtual-staging"
              page="Virtual Staging"
            />
            <FooterLinksComponent
              component={Link}
              route="/services/item-removal"
              page="Item Removal"
            />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Typography
              variant="h4"
              color="white"
              sx={{ marginBottom: "10px" }}
            >
              Foto+
            </Typography>
            <FooterLinksComponent component={Link} route="/" page="Home" />
            <FooterLinksComponent
              component={Link}
              route="/about"
              page="About"
            />
            <FooterLinksComponent
              component={Link}
              route="/contact"
              page="Contact"
            />
          </Grid>
        </Grid>
        <Box
          sx={{ display: "flex", justifyContent: "center", marginTop: "150px" }}
        >
          <Typography variant="body1" color="white" sx={{ fontWeight: 700 }}>
            Foto+ 2022
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default FooterComponent;
