import React from "react";
import { Box, Typography, Link } from "@mui/material";

const FooterLinksComponent = (props) => {
  return (
    <Box>
      <Link href={props.route} sx={{ textDecoration: "none" }}>
        <Typography
          variant="p"
          color="text.primary"
          sx={{ fontSize: "18px" }}
          gutterBottom
        >
          {props.page}
        </Typography>
      </Link>
    </Box>
  );
};

export default FooterLinksComponent;
