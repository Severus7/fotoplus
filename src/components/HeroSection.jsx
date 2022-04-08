import React from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  Box,
  Button,
  Paper,
  Grid,
  Container,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import headerImage from "../assets/headerimg.png";

// const MyComponent = styled('div')({
//     color: 'darkslategray',
//     backgroundColor: 'aliceblue',
//     padding: 8,
//     borderRadius: 4,
//   });

const CustomPaper = styled(Paper)({
  height: "90vh",
  background: `url(${headerImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  borderRadius: 0,
});

const HeroSection = (props) => {
  return (
    <Paper
      sx={{
        height: `${props.height}`,
        background: `url(${props.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: 0,
      }}
    >
      <Container maxWidth="md" sx={{ height: "100%" }}>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          sx={{ height: "100%" }}
        >
          <Grid item>
            <Typography
              component={props.component}
              variant={props.variant}
              sx={{ fontWeight: "100" }}
            >
              {props.headerText}
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button variant="contained" sx={{ display: `${props.display}` }}>
                {props.buttonText}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
      {/* <CardMedia component="img" image={headerImage} height="100%" /> */}
    </Paper>
  );
};

export default HeroSection;
