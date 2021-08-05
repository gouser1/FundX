import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Grid, Paper, Box, Button, Icon } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import useStyles from "./HeroStyle";

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
        style={{ minHeight: "50vh" }}
      >
        <Grid item lg={6} md={10} sm={10} xs={12}>
          <Box textAlign="center">
            <h1 className={classes.h1}>
              Providing Unique Value to Entrepreneurs and Investors
            </h1>
          </Box>
        </Grid>
        <Grid item lg={6} md={10} sm={10} xs={12}>
          <Box textAlign="center">
            <h2 className={classes.h2}>
              We are an Angel-led Investment platform that connects high grow
              potentional companies with experienced investors.
            </h2>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box textAlign="center" pt={2}>
            <Button
              onClick={() => handleButtonClick("/")}
              className={classes.button}
            >
              Get Started <ArrowForwardIcon />
            </Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Hero;
