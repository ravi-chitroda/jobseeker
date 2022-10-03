import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
// import MainImage from "../images/MainImage";
import MainImage from "../images/MainImage.svg";

const Landing = () => {
  return (
    <Container>
      <Box>
        <Typography
          variant="h2"
          style={{ fontWeight: "bold", fontStyle: "revert" }}
        >
          Find Job On your finger tip
        </Typography>
      </Box>
      <Box
        style={{
          display: "flex",
          alignItems: "space-between",
          justifyContent: "center",
        }}
      >
        <Box
          component="img"
          sx={{
            height: 700,
            width: 700,
            maxHeight: { xs: 900, md: 800 },
            maxWidth: { xs: 900, md: 800 },
          }}
          style={{ display: "flex", objectFit: "cover", alignItems: "end" }}
          alt="Logo"
          src={MainImage}
        />
        <Box sx={{ my: 20 }}>
          <Typography>
            Craft beer roof party JOMO pitchfork. Vibecession venmo lomo poutine
            gatekeep post-ironic. Jean shorts glossier edison bulb aesthetic,
            lo-fi seitan paleo. Viral helvetica flexitarian, distillery truffaut
            heirloom tofu live-edge celiac hoodie tote bag. Pitchfork kitsch
            banh mi pinterest hexagon beard 8-bit swag crucifix kogi. Banh mi
            hell of 90's woke, portland four loko listicle glossier semiotics
            jianbing enamel pin blue bottle.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Landing;
