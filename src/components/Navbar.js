import { Fullscreen } from "@mui/icons-material";
import { lightBlue } from "@mui/material/colors";
import { Box, Container } from "@mui/system";
import React from "react";

const Navbar = () => {
  return (
    <Container
      sx={{
        backgroundColor: "#60a5fa",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box
        component="img"
        sx={{
          height: 100,
          width: 100,
          maxHeight: { xs: 100, md: 80 },
          maxWidth: { xs: 100, md: 80 },
        }}
        style={{ border: "1px", borderRadius: "60px" }}
        alt="Logo"
        src="https://p.kindpng.com/picc/s/171-1718063_javascript-logo-circle-png-png-download-js-logo.png"
      />
    </Container>
  );
};

export default Navbar;
