import React from "react";
import { Grid, Box, Button } from "@material-ui/core";
import useStyles from "./Hero2Style";

function Hero(props) {
  const { history } = props;
  const handleButtonClick = (pageURL) => {
    history.push(pageURL);
  };
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "32vh" }}
      >
        <Grid item lg={6} md={10} sm={10} xs={12}>
          <Box textAlign="center">
            <h1 className={classes.h1}>Lorem ipsum dolor sit amet</h1>
          </Box>
        </Grid>
        <Grid item lg={12} md={10} sm={10} xs={12}>
          <Box textAlign="center">
            <h2 className={classes.h2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h2>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box textAlign="center" pt={2}>
            <Button
              onClick={() => handleButtonClick("/register")}
              className={classes.button}
            >
              Find out more!
            </Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Hero;
