import React from "react";
import { Box } from "@mui/material";

const BoxContactComponent = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        marginBottom: "20px",
      }}
    >
      {props.icon}
      {props.value}
    </Box>
  );
};

export default BoxContactComponent;
