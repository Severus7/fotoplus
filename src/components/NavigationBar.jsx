import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  Menu,
  MenuItem,
  ListItem,
  Paper,
  Tabs,
  Tab,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import DrawerComponent from "./DrawerComponent.jsx";
import fotoplusLogo from "../assets/foto-plus-logo-white.png";

const NavigationBar = () => {
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const openMenu = Boolean(anchorEl);

  const dropDownClick = (e) => {
    setAnchorEl(e.currentTarget);
    console.log(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
              <Paper
                component="img"
                elevation={0}
                src={fotoplusLogo}
                sx={{
                  backgroundColor: "transparent",
                  height: "50px",
                  margin: "10px 10px 10px 20px",
                }}
              />

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
              {/* <Tab
                label="Services"
                sx={{ textTransform: "none" }}
                component={Link}
                to="/services"
              /> */}
              <Typography
                color="grey.400"
                sx={{
                  marginLeft: "28px",
                  marginRight: 10,
                  fontWeight: 500,
                  cursor: "pointer",
                }}
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={openMenu ? "true" : undefined}
                onClick={dropDownClick}
              >
                Services
              </Typography>

              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={openMenu}
                onClose={handleClose}
              >
                <MenuItem
                  onClose={handleClose}
                  component={Link}
                  to="/services/image-enhancement"
                >
                  Image Enhancement
                </MenuItem>

                <MenuItem
                  onClose={handleClose}
                  component={Link}
                  to="/services/sketch-to-2d-floor-plan"
                >
                  Sketch Plan to 2D Floor Plan
                </MenuItem>

                <MenuItem
                  onClose={handleClose}
                  component={Link}
                  to="/services/virtual-staging"
                >
                  Virtual Staging
                </MenuItem>

                <MenuItem
                  onClose={handleClose}
                  component={Link}
                  to="/services/2D-floor-plan-to-3D-floor-plan"
                >
                  2D Floor Plan to 3D Floor Plan
                </MenuItem>

                <MenuItem
                  onClose={handleClose}
                  component={Link}
                  to="/services/item-removal"
                >
                  Item Removal
                </MenuItem>

                <MenuItem
                  onClose={handleClose}
                  component={Link}
                  to="/services/real-estate-virtual-assistant"
                >
                  Real Estate Virtual Assistant
                </MenuItem>

                <MenuItem
                  onClose={handleClose}
                  component={Link}
                  to="/services/web-design-and-development"
                >
                  Property Website Design and Development
                </MenuItem>
              </Menu>

              <Button
                variant="contained"
                color="common"
                sx={{ textTransform: "none", backgroundColor: "grey.50" }}
              >
                <Typography color="grey.900">Sign in</Typography>
              </Button>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavigationBar;
