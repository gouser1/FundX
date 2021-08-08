import React from "react";
import { Grid, Box, Hidden } from "@material-ui/core";
import useStyles from "./FeaturesStyle";

function Features(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Box className={classes.box} textAlign="center">
            <h1 className={classes.h1}>How does it work?</h1>
          </Box>
        </Grid>
        <Grid item lg={6} md={12} sm={12} xs={12}>
          <Box className={classes.box}>
            <h2 className={classes.h2}>
              Providing Unique Value to Entrepreneurs and Investors
            </h2>
          </Box>
          <Box>
            <p className={classes.p1}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
          </Box>
        </Grid>
        <Grid item lg={6} md={12} sm={12} xs={12}>
          <Hidden mdDown>
            <Box pt={20} justifyContent="center" display="flex">
              <img src="https://loremflickr.com/600/300" alt=""></img>
            </Box>
          </Hidden>
        </Grid>
        <Grid item lg={6} md={12} sm={12} xs={12}>
          <Hidden mdDown>
            <Box pt={20} justifyContent="center" display="flex">
              <img src="https://loremflickr.com/600/300" alt=""></img>
            </Box>
          </Hidden>
        </Grid>
        <Grid item lg={6} md={12} sm={12} xs={12}>
          <Box className={classes.box}>
            <h2 className={classes.h2}>
              Providing Unique Value to Entrepreneurs and Investors
            </h2>
          </Box>
          <Box>
            <p className={classes.p1}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
          </Box>
        </Grid>
        <Grid item lg={6} md={12} sm={12} xs={12}>
          <Box className={classes.box}>
            <h2 className={classes.h2}>
              Providing Unique Value to Entrepreneurs and Investors
            </h2>
          </Box>
          <Box>
            <p className={classes.p1}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
          </Box>
        </Grid>
        <Grid item lg={6} md={12} sm={12} xs={12}>
          <Hidden mdDown>
            <Box pt={20} justifyContent="center" display="flex">
              <img src="https://loremflickr.com/600/300" alt=""></img>
            </Box>
          </Hidden>
        </Grid>
      </Grid>
    </div>
  );
}

export default Features;
