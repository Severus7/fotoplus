import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
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
            color="primary"
            sx={{ display: "flex", justifyContent: "center" }}
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
                <Button variant="contained">Submit</Button>
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
      <FooterComponent />
    </React.Fragment>
  );
};

export default Contact;
