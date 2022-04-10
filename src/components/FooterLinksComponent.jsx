import React from "react";
import { Box, Button, Typography } from "@mui/material";

const FooterLinksComponent = (props) => {
  return (
    <Box>
      <Button
        component={props.component}
        to={props.route}
        sx={{
          textDecoration: "none",
          "&:hover": { backgroundColor: "transparent" },
        }}
        disableRipple
        disableFocusRipple
      >
        <Typography
          variant="p"
          color="black"
          sx={{ fontSize: "18px", textTransform: "none", fontWeight: 100 }}
          gutterBottom
        >
          {props.page}
        </Typography>
      </Button>
    </Box>
  );
};

export default FooterLinksComponent;
