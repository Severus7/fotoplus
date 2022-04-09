import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import FooterComponent from "../components/FooterComponent";
import BoxContactComponent from "../components/BoxContactComponent";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const Contact = () => {
  return (
    <React.Fragment>
      <Box
        sx={{
          backgroundColor: "grey.800",
          height: "70%",
          paddingTop: 10,
          paddingBottom: 10,
        }}
      >
        <Container>
          <Typography
            variant="h2"
            color="grey.50"
            sx={{
              display: "flex",
              justifyContent: "center",
              fontWeight: "100",
            }}
          >
            Send us a message
          </Typography>
          <Grid container spacing={10} sx={{ marginTop: "10px" }}>
            <Grid item lg={6}>
              <Box component="form">
                <TextField
                  label="Name"
                  fullWidth
                  sx={{ marginBottom: "30px" }}
                />
                <TextField
                  label="Email address"
                  fullWidth
                  sx={{ marginBottom: "30px" }}
                />
                <TextField
                  label="Message"
                  fullWidth
                  sx={{ marginBottom: "30px" }}
                  multiline
                  rows={5}
                  maxRows={5}
                />
                <Button
                  variant="contained"
                  color="common"
                  sx={{
                    backgroundColor: "grey.50",
                    padding: "50px, 25px",
                  }}
                >
                  Submit
                </Button>
              </Box>
            </Grid>
            <Grid item lg={6}>
              <Typography
                variant="h4"
                component="h4"
                color="text.primary"
                gutterBottom
              >
                Foto+
              </Typography>
              <BoxContactComponent
                icon={<LocationOnIcon sx={{ fontSize: 30, color: "#fff" }} />}
                value={
                  <Typography
                    variant="body1"
                    sx={{ fontSize: "20px", marginLeft: 3 }}
                    color="common.white"
                  >
                    Manila
                  </Typography>
                }
              />
              <BoxContactComponent
                icon={<PhoneIphoneIcon sx={{ fontSize: 30, color: "#fff" }} />}
                value={
                  <Typography
                    variant="body1"
                    sx={{ fontSize: "20px", marginLeft: 3 }}
                    color="common.white"
                  >
                    +63 9xx xxxxxxx
                  </Typography>
                }
              />
              <BoxContactComponent
                icon={<PhoneIcon sx={{ fontSize: 30, color: "#fff" }} />}
                value={
                  <Typography
                    variant="body1"
                    sx={{ fontSize: "20px", marginLeft: 3 }}
                    color="common.white"
                  >
                    123456789
                  </Typography>
                }
              />
              <BoxContactComponent
                icon={<EmailIcon sx={{ fontSize: 30, color: "#fff" }} />}
                value={
                  <Typography
                    variant="body1"
                    sx={{ fontSize: "20px", marginLeft: 3 }}
                    color="common.white"
                  >
                    fotoplus@email.com
                  </Typography>
                }
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Container sx={{ marginTop: "75px" }}>
        <Typography
          variant="h4"
          component="div"
          sx={{ marginBottom: "50px", fontWeight: "700" }}
        >
          About
        </Typography>
        <Box sx={{ width: "100%", marginBottom: "30px" }}>
          <Typography
            variant="h4"
            component="div"
            sx={{ lineHeight: "75px", textAlign: "left", fontWeight: "100" }}
          >
            In PhotoPlus, we are dedicated to providing excellent service to
            you, our client, to win your condifence.
          </Typography>
        </Box>
        <Link href="/about">
          <Typography color="primary.dark" variant="h5">
            Learn more about us!
          </Typography>
        </Link>
      </Container>
      <FooterComponent />
    </React.Fragment>
  );
};

export default Contact;
