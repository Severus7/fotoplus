import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const DrawerComponent = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [value, setValue] = useState(0);

  return (
    <React.Fragment>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue = 0;
            }}
            divider
            button
            component={Link}
            to="/"
            selected={value === 0}
          >
            <ListItemText>Home</ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(1);
            }}
            divider
            button
            component={Link}
            to="/about"
            selected={value === 1}
          >
            <ListItemText>About</ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(2);
            }}
            divider
            button
            component={Link}
            to="/contact"
            selected={value === 2}
          >
            <ListItemText>Contact us</ListItemText>
          </ListItem>
          {/* <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(3);
            }}
            divider
            button
            selected={value === 3}
          >
            <ListItemText>Services</ListItemText>
          </ListItem> */}
          <ListItem>
            <ListItemText>Sign in</ListItemText>
          </ListItem>
        </List>
        <List>
          <ListItem>
            <ListItemText>Services</ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(4);
            }}
            divider
            button
            component={Link}
            to="/services/real-estate-virtual-assistant"
            selected={value === 4}
          >
            <ListItemText>Real Estate Virtual Assistant</ListItemText>
          </ListItem>

          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(5);
            }}
            divider
            button
            component={Link}
            to="/services/2D-floor-plan-to-3D-floor-plan"
            selected={value === 5}
          >
            <ListItemText>2D Floor Plan to 3D Floor Plan</ListItemText>
          </ListItem>

          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(6);
            }}
            divider
            button
            component={Link}
            to="/services/image-enhancement"
            selected={value === 6}
          >
            <ListItemText>2D Floor Plan to 3D Floor Plan</ListItemText>
          </ListItem>

          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(7);
            }}
            divider
            button
            component={Link}
            to="/services/virtual-staging"
            selected={value === 7}
          >
            <ListItemText>Virtual Staging</ListItemText>
          </ListItem>

          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(8);
            }}
            divider
            button
            component={Link}
            to="/services/item-removal"
            selected={value === 8}
          >
            <ListItemText>Item Removal</ListItemText>
          </ListItem>

          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(9);
            }}
            divider
            button
            component={Link}
            to="/services/sketch-to-2d-floor-plan"
            selected={value === 9}
          >
            <ListItemText>Sketch to 2D Floor Plan</ListItemText>
          </ListItem>

          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(10);
            }}
            divider
            button
            component={Link}
            to="/services/web-design-and-development"
            selected={value === 10}
          >
            <ListItemText>Web Design and Development</ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComponent;
