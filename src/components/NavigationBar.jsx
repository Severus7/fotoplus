import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  Tabs,
  Tab,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import DrawerComponent from "./DrawerComponent.jsx";

const NavigationBar = () => {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  // const tabs = () => {
  //   return (

  //   );
  // };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {isMatch ? (
            <>
              <Typography>Foto+</Typography>
              <DrawerComponent />
            </>
          ) : (
            <>
              <Typography>Foto+</Typography>
              <Tabs
                textColor="inherit"
                sx={{ marginLeft: "auto" }}
                value={value}
                onChange={(event, value) => setValue(value)}
                indicatorColor="secondary"
              >
                <Tab
                  label="Home"
                  sx={{ textTransform: "none" }}
                  component={Link}
                  to="/"
                />
                <Tab
                  label="Services"
                  sx={{ textTransform: "none" }}
                  component={Link}
                  to="/services"
                />
                <Tab
                  label="About"
                  sx={{ textTransform: "none" }}
                  component={Link}
                  to="/about"
                />
                <Tab
                  label="Contact Us"
                  sx={{ textTransform: "none" }}
                  component={Link}
                  to="/contact"
                />
              </Tabs>
              <Button variant="contained" sx={{ textTransform: "none" }}>
                Sign in
              </Button>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavigationBar;
