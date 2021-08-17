import React from "react";
import {
  createTheme,
  ThemeProvider,
  AppBar,
  Toolbar,
  withStyles,
  IconButton,
  Box,
  Badge,
  Avatar,
  Grid,
  Container,
  Hidden,
} from "@material-ui/core";
import Mail from "@material-ui/icons/Mail";
import Notifications from "@material-ui/icons/Notifications";
import Home from "@material-ui/icons/Home";
import Create from "@material-ui/icons/Create";
import Favorite from "@material-ui/icons/Favorite";
import Person from "@material-ui/icons/Person";
import ExitToApp from "@material-ui/icons/ExitToApp";
import { Route, useHistory } from "react-router-dom";
import LogoNav from "../../../images/dashboard/LogoNav.png";
import Listings from "../Listings/Listings";
import CreateListing from "../CreateListing/CreateListing";
import useStyles from "./DashboardStyle";
import Favourites from "../Favourites/Favourites";
import Messages from "../Messages/Messages";
import Profile from "../Profile/Profile";

function Dashboard(props) {
  const history = useHistory();
  const classes = useStyles();

  const LogoButton = withStyles(() => ({
    root: {
      "&:hover": {},
    },
  }))(IconButton);

  return (
    <div>
      <AppBar position="static" elevation="0">
        <Toolbar className={classes.toolbar}>
          <Box display="flex" m={1}>
            <LogoButton to="/" style={{ backgroundColor: "transparent" }}>
              <img src={LogoNav} alt="" width="130px" height="35px" />
            </LogoButton>
          </Box>
          <Box className={classes.icons}>
            <Badge badgeContent={4} color="secondary" className={classes.badge}>
              <Mail />
            </Badge>
            <Badge badgeContent={2} color="secondary" className={classes.badge}>
              <Notifications />
            </Badge>
            <Avatar />
          </Box>
        </Toolbar>
      </AppBar>

      <Grid container>
        <Grid item xs={1.5}>
          <Container className={classes.container}>
            <Box className={classes.containerItem}>
              <Home
                className={classes.icon}
                onClick={() => history.push("/dashboard/listings")}
              />
              <Hidden smDown>
                <h1
                  className={classes.h1}
                  onClick={() => history.push("/dashboard/listings")}
                >
                  Listings
                </h1>
              </Hidden>
            </Box>
            <Box className={classes.containerItem}>
              <Create
                className={classes.icon}
                onClick={() => history.push("/dashboard/createListing")}
              />
              <Hidden smDown>
                <h1
                  className={classes.h1}
                  onClick={() => history.push("/dashboard/createlisting")}
                >
                  Create Listing
                </h1>
              </Hidden>
            </Box>
            <Box className={classes.containerItem}>
              <Favorite
                className={classes.icon}
                onClick={() => history.push("/dashboard/favourites")}
              />
              <Hidden smDown>
                <h1
                  className={classes.h1}
                  onClick={() => history.push("/dashboard/favourites")}
                >
                  Favourites
                </h1>
              </Hidden>
            </Box>
            <Box className={classes.containerItem}>
              <Mail
                className={classes.icon}
                onClick={() => history.push("/dashboard/messages")}
              />
              <Hidden smDown>
                <h1
                  className={classes.h1}
                  onClick={() => history.push("/dashboard/messages")}
                >
                  Messages
                </h1>
              </Hidden>
            </Box>
            <Box className={classes.containerItem}>
              <Person
                className={classes.icon}
                onClick={() => history.push("/dashboard/profile")}
              />
              <Hidden smDown>
                <h1
                  className={classes.h1}
                  onClick={() => history.push("/dashboard/profile")}
                >
                  Profile
                </h1>
              </Hidden>
            </Box>
            <Box className={classes.containerItem}>
              <ExitToApp className={classes.icon} />
              <Hidden smDown>
                <h1 className={classes.h1}>Logout</h1>
              </Hidden>
            </Box>
          </Container>
        </Grid>
        <Grid grid item xs={10.5}>
          <Route path="/dashboard/listings" exact component={Listings} />
          <Route
            path="/dashboard/createlisting"
            exact
            component={CreateListing}
          />
          <Route path="/dashboard/favourites" exact component={Favourites} />
          <Route path="/dashboard/messages" exact component={Messages} />
          <Route path="/dashboard/profile" exact component={Profile} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Dashboard;
