import React from "react";
import { Box, Typography, Grid, Button } from "@material-ui/core";
import { useStyles } from "./stylesHero";
import { Link } from "react-router-dom";
import logo from "../../assets/favicon.png";
import bg from "../../assets/bg.png";

const Hero = () => {
  const classes = useStyles();

  return (
    <Box
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "bottom",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Grid
        style={{
          height: "95vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <img
          style={{
            height: "30vh",
            pointerEvents: "none",
            filter: "drop-shadow(16px 6px 4px black)",
          }}
          className={classes.rotateImg}
          src={logo}
          alt="logo"
        />
        <Box
          sx={{
            display: "flex",
            color: "#22333c",
            fontWeight: "600",
            letterSpacing: "5px",
            paddingTop: "20px",
          }}
        >
          <Typography>App for</Typography>
          <Typography
            style={{
              paddingLeft: "10px",
              paddingRight: "10px",
            }}
          >
            <a
              style={{
                background: "#fb7c1b",
                color: "white",
                borderRadius: "5px",
                textDecoration: "none",
                letterSpacing: "5px",
                padding: "7px",
              }}
              href="https://www.itengine.rs/"
              rel="noopener noreferrer"
              target="_blank"
            >
              IT Engine
            </a>
          </Typography>

          <Typography> office manager</Typography>
        </Box>
        <Button
          component={Link}
          to="/auth"
          variant="outlined"
          size="small"
          style={{
            margin: "35px",
            color: "#00243ac7",
            backgroundColor: "#eaeaea",
          }}
        >
          Sign in
        </Button>
      </Grid>
    </Box>
  );
};

export default Hero;
