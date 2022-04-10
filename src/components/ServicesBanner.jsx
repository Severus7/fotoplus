import React from "react";
import { Box, Container, Typography } from "@mui/material";

const ServicesBanner = (props) => {
  return (
    <Box
      sx={{
        backgroundColor: "grey.900",
        marginBottom: "100px",
        height: "40%",
        textAlign: "center",
        padding: "60px 0 100px 0",
      }}
    >
      <Container>
        <Typography
          variant="h5"
          color="common.white"
          sx={{ marginBottom: "50px" }}
        >
          Services
        </Typography>
        <Typography
          variant="h3"
          color="common.white"
          sx={{ marginBottom: "50px", fontWeight: "100" }}
        >
          {props.service}
        </Typography>
      </Container>
    </Box>
  );
};

export default ServicesBanner;
