import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
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
            to="/home"
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
            to="/services"
            selected={value === 1}
          >
            <ListItemText>Services</ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(2);
            }}
            divider
            button
            component={Link}
            to="/about"
            selected={value === 2}
          >
            <ListItemText>About</ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(3);
            }}
            divider
            button
            component={Link}
            to="/contact"
            selected={value === 3}
          >
            <ListItemText>Contact us</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Sign in</ListItemText>
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
