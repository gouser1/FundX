import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import {
  Button,
  AppBar,
  Toolbar,
  MenuItem,
  Box,
  Menu,
  useMediaQuery,
  withStyles,
  useTheme,
  IconButton,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import LogoNav from "../../../images/home/LogoNav.png";
import useStyles from "./NavBarStyle";
import { AuthContext } from "../../../helpers/AuthContext";

function NavBar(props) {
  const { history } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [authState, setAuthState] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3001/auth/auth", {
        headers: { accessToken: localStorage.getItem("accessToken") },
      })
      .then((response) => {
        if (response.data.error) {
          setAuthState(false);
        } else {
          setAuthState(true);
        }
      });
  }, []);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (pageURL) => {
    history.push(pageURL);
    setAnchorEl(null);
  };

  const handleButtonClick = (pageURL) => {
    history.push(pageURL);
  };

  const NavButton = withStyles(() => ({
    root: {
      fontFamily: "'Karla', sans-serif;",
      fontSize: "1.2em",
      color: "#46637f",
      textTransform: "none",
    },
  }))(Button);

  const LogoButton = withStyles(() => ({
    root: {
      "&:hover": {},
    },
  }))(IconButton);

  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
      <div className={classes.root} style={{ width: "100%" }}>
        <AppBar className={classes.appBar} style={{ margin: 0 }}>
          <Toolbar>
            <Box display="flex" m={3} flexGrow={1}>
              <LogoButton to="/" style={{ backgroundColor: "transparent" }}>
                <img src={LogoNav} alt="" width="130px" height="35px" />
              </LogoButton>
            </Box>
            <div>
              {isMobile ? (
                <>
                  <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="#46637f"
                    aria-label="menu"
                    onClick={handleMenu}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={open}
                    onClose={() => setAnchorEl(null)}
                  >
                    {!authState && (
                      <>
                        <MenuItem
                          style={{ color: "white", backgroundColor: "#3bc693" }}
                          onClick={() => handleMenuClick("/login")}
                        >
                          Login
                        </MenuItem>
                      </>
                    )}
                    {authState && (
                      <>
                        <MenuItem
                          style={{ color: "white", backgroundColor: "#3bc693" }}
                          onClick={() => handleMenuClick("/login")}
                        >
                          My Dashboard
                        </MenuItem>
                      </>
                    )}
                    <MenuItem onClick={() => handleMenuClick("/")}>
                      Features
                    </MenuItem>
                    <MenuItem onClick={() => handleMenuClick("/")}>
                      FAQs
                    </MenuItem>
                    <MenuItem onClick={() => handleMenuClick("/")}>
                      About
                    </MenuItem>
                    <MenuItem onClick={() => handleMenuClick("/")}>
                      Support
                    </MenuItem>
                  </Menu>
                </>
              ) : (
                <div className={classes.navOptions}>
                  <Box m={1} pt={2}>
                    <NavButton onClick={() => handleButtonClick("/")}>
                      Features
                    </NavButton>
                  </Box>
                  <Box m={1} pt={2}>
                    <NavButton onClick={() => handleButtonClick("/")}>
                      FAQs
                    </NavButton>
                  </Box>
                  <Box m={1} pt={2}>
                    <NavButton onClick={() => handleButtonClick("/")}>
                      About
                    </NavButton>
                  </Box>
                  <Box m={1} pt={2} display="flex" flexGrow={1}>
                    <NavButton onClick={() => handleButtonClick("/")}>
                      Support
                    </NavButton>
                  </Box>
                  {!authState && (
                    <>
                      <Box m={1} pt={2}>
                        <NavButton onClick={() => handleButtonClick("/login")}>
                          Login
                        </NavButton>
                      </Box>

                      <Box m={1} pt={2}>
                        <NavButton
                          variant="contained"
                          className={classes.button}
                          style={{ color: "white" }}
                          onClick={() => handleButtonClick("/register")}
                        >
                          Get Started
                        </NavButton>
                      </Box>
                    </>
                  )}

                  {authState && (
                    <>
                      <Box m={1} pt={2}>
                        <NavButton
                          variant="contained"
                          className={classes.button}
                          style={{ color: "white" }}
                          onClick={() =>
                            handleButtonClick("/dashboard/pitches")
                          }
                        >
                          My Dashboard
                        </NavButton>
                      </Box>
                    </>
                  )}
                </div>
              )}
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </AuthContext.Provider>
  );
}
export default withRouter(NavBar);
