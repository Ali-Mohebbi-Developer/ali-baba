import { Typography } from "@mui/material";
import React from "react";

const Typo = ({ children }) => {
  return (
    <Typography
      sx={{
        fontFamily: "Zain",
        fontSize: "18px",
      }}
    >
      {children}
    </Typography>
  );
};

export default Typo;
