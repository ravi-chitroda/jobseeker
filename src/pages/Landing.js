import { Box, Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
// import MainImage from "../images/MainImage";
import MainImage from "../images/MainImage.svg";

const Landing = () => {
  return (
    <Container>
      <Box>
        <Typography
          variant="h2"
          style={{
            fontWeight: "bold",
            fontStyle: "revert",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "darkred",
          }}
          sx={{ my: 2 }}
        >
          Find Job On your finger tip
        </Typography>
      </Box>
      <Box
        style={{
          display: "flex",
          alignItems: "space-around",
          justifyContent: "center",
        }}
        sx={{ my: 8 }}
      >
        <Box
          component="img"
          sx={{
            mx: 2,
            height: 600,
            width: 600,
            // maxHeight: { xs: 900, md: 800 },
            // maxWidth: { xs: 900, md: 800 },
          }}
          style={{
            display: "flex",
            objectFit: "cover",
            alignItems: "end",
          }}
          alt="Logo"
          src={MainImage}
        />
        <Box sx={{ my: 20 }}>
          <Typography
            style={{ border: "blue", borderStyle: "solid", borderRadius: 20 }}
            sx={{ py: 2, px: 2 }}
          >
            Craft beer roof party JOMO pitchfork. Vibecession venmo lomo poutine
            gatekeep post-ironic. Jean shorts glossier edison bulb aesthetic,
            lo-fi seitan paleo. Viral helvetica flexitarian, distillery truffaut
            heirloom tofu live-edge celiac hoodie tote bag. Pitchfork kitsch
            banh mi pinterest hexagon beard 8-bit swag crucifix kogi. Banh mi
            hell of 90's woke, portland four loko listicle glossier semiotics
            jianbing enamel pin blue bottle.
          </Typography>
          <Link to="/register">
            <Button
              style={{
                color: "whitesmoke",
                backgroundColor: "blueviolet",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              sx={{ mx: 30, my: 3 }}
            >
              Login/Register
            </Button>
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default Landing;
