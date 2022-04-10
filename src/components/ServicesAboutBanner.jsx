import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";

import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import GradeIcon from "@mui/icons-material/Grade";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";

const ServicesAboutBanner = () => {
  return (
    <Box
      sx={{
        backgroundColor: "grey.900",
        marginTop: "150px",

        height: "40%",
        textAlign: "center",
        padding: "60px 0 100px 0",
      }}
    >
      <Container>
        <Typography
          variant="h3"
          color="common.white"
          sx={{ fontWeight: "bolder", marginBottom: 15 }}
        >
          Leave the hard tasks to us. Focus on the important things.
        </Typography>
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
  );
};

export default ServicesAboutBanner;
