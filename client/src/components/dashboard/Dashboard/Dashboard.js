import React, { useEffect, useState } from "react";
import {
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
import { Route, useHistory, Switch } from "react-router-dom";
import LogoNav from "../../../images/dashboard/LogoNav.png";
import Pitches from "../Pitches/Pitches";
import CreatePitch from "../CreatePitch/CreatePitch";
import useStyles from "./DashboardStyle";
import Favourites from "../Favourites/Favourites";
import Messages from "../Messages/Messages";
import EditProfile from "../Profile/EditProfile";
import Profile from "../Profile/Profile";
import SinglePitch from "../SinglePitch/SinglePitch";
import PageNotFound from "../PageNotFound/PageNotFound";
import { AuthContext } from "../../../helpers/AuthContext";
import axios from "axios";

function Dashboard(props) {
  const history = useHistory();
  const classes = useStyles();

  const [authState, setAuthState] = useState({
    displayName: "",
    id: 0,
    status: false,
  });

  useEffect(() => {
    axios
      .get("http://localhost:3001/auth/auth", {
        headers: { accessToken: localStorage.getItem("accessToken") },
      })
      .then((response) => {
        if (response.data.error) {
          setAuthState({ ...authState, status: false });
        } else {
          setAuthState({
            displayName: response.data.displayName,
            id: response.data.id,
            status: true,
          });
        }
      });
  }, []);

  const LogoButton = withStyles(() => ({
    root: {
      "&:hover": {},
    },
  }))(IconButton);

  const logout = () => {
    localStorage.removeItem("accessToken");
    setAuthState({
      displayName: "",
      id: 0,
      status: false,
    });
    history.push("/");
  };

  return (
    <div>
      <AuthContext.Provider value={{ authState, setAuthState }}>
        <AppBar position="static" elevation="0">
          <Toolbar className={classes.toolbar}>
            <Box display="flex" m={1}>
              <LogoButton to="/" style={{ backgroundColor: "transparent" }}>
                <img src={LogoNav} alt="" width="130px" height="35px" />
              </LogoButton>
            </Box>
            {authState.status && (
              <>
                <Box className={classes.icons}>
                  <Badge
                    badgeContent={4}
                    color="secondary"
                    className={classes.badge}
                  >
                    <Mail />
                  </Badge>
                  <Badge
                    badgeContent={2}
                    color="secondary"
                    className={classes.badge}
                  >
                    <Notifications />
                  </Badge>
                  <Avatar />
                </Box>
              </>
            )}
          </Toolbar>
        </AppBar>

        <Grid container>
          <Grid item xs={2}>
            <Container className={classes.container}>
              <Box className={classes.containerItem}>
                <Home
                  className={classes.icon}
                  onClick={() => history.push("/dashboard/pitches")}
                />
                <Hidden smDown>
                  <h1
                    className={classes.h1}
                    onClick={() => history.push("/dashboard/pitches")}
                  >
                    Pitches
                  </h1>
                </Hidden>
              </Box>
              {authState.status && (
                <>
                  <Box className={classes.containerItem}>
                    <Create
                      className={classes.icon}
                      onClick={() => history.push("/dashboard/createPitch")}
                    />
                    <Hidden smDown>
                      <h1
                        className={classes.h1}
                        onClick={() => history.push("/dashboard/createPitch")}
                      >
                        Create Pitch
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
                      onClick={() => history.push("/dashboard/editprofile")}
                    />
                    <Hidden smDown>
                      <h1
                        className={classes.h1}
                        onClick={() => history.push("/dashboard/editprofile")}
                      >
                        Profile
                      </h1>
                    </Hidden>
                  </Box>

                  <Box className={classes.containerItem}>
                    <ExitToApp className={classes.icon} onClick={logout} />
                    <Hidden smDown>
                      <h1 className={classes.h1} onClick={logout}>
                        Logout
                      </h1>
                    </Hidden>
                  </Box>
                  {/* <h1>{authState.displayName}</h1> */}
                </>
              )}

              {!authState.status && (
                <>
                  <Box className={classes.containerItem}>
                    <ExitToApp
                      className={classes.icon}
                      onClick={() => history.push("/login")}
                    />
                    <Hidden smDown>
                      <h1
                        className={classes.h1}
                        onClick={() => history.push("/login")}
                      >
                        Login
                      </h1>
                    </Hidden>
                  </Box>
                </>
              )}
            </Container>
          </Grid>
          <Grid grid item xs={10}>
            <Switch>
              <Route path="/dashboard/pitches" exact component={Pitches} />
              <Route
                path="/dashboard/createpitch"
                exact
                component={CreatePitch}
              />
              <Route
                path="/dashboard/pitch/:id"
                exact
                component={SinglePitch}
              />

              <Route
                path="/dashboard/favourites"
                exact
                component={Favourites}
              />
              <Route path="/dashboard/messages" exact component={Messages} />
              <Route path="/dashboard/profile/:id" exact component={Profile} />

              <Route
                path="/dashboard/editprofile"
                exact
                component={EditProfile}
              />
              <Route path="*" exact component={PageNotFound} />
            </Switch>
          </Grid>
        </Grid>
      </AuthContext.Provider>
    </div>
  );
}

export default Dashboard;
