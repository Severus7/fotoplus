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
                  to="/services/real-estate-virtual-assistant"
                >
                  Real Estate Virtual Assistant
                </MenuItem>
                <MenuItem
                  onClose={handleClose}
                  component={Link}
                  to="/services/2D-floor-plan-to-3D-floor-plan"
                >
                  2D Floor Plan to 3D Floor Plan
                </MenuItem>
                <MenuItem onClose={handleClose} component={Link} to="/contact">
                  Property Website Design and Development
                </MenuItem>
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
                  to="/services/virtual-staging"
                >
                  Virtual Staging
                </MenuItem>
                <MenuItem
                  onClose={handleClose}
                  component={Link}
                  to="/services/item-removal"
                >
                  Item Removal
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
