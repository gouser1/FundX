import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Button } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import IconButton from "@material-ui/core/IconButton";
import LogoNav from "../../../images/home/LogoNav.png";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { withStyles } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import useStyles from "./NavBarStyle";
import { green } from "@material-ui/core/colors";

function NavBar(props) {
  const { history } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
    <div className={classes.root} style={{ width: "100%" }}>
      <AppBar className={classes.appBar} style={{ margin: 0 }}>
        <Toolbar>
          <Box display="flex" m={3} flexGrow={1}>
            <LogoButton
              component={Link}
              to="/home"
              style={{ backgroundColor: "transparent" }}
            >
              <img src={LogoNav} alt="" width="130px" height="35px" />
            </LogoButton>
          </Box>

          <Typography
            component={Link}
            to="/"
            variant="h6"
            className={classes.title}
            color="black"
          ></Typography>
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
                  <MenuItem onClick={() => handleMenuClick("/")}>
                    Features
                  </MenuItem>
                  <MenuItem onClick={() => handleMenuClick("/")}>FAQs</MenuItem>
                  <MenuItem onClick={() => handleMenuClick("/")}>
                    About
                  </MenuItem>
                  <MenuItem onClick={() => handleMenuClick("/")}>
                    Support
                  </MenuItem>
                  <MenuItem
                    style={{ color: "white", backgroundColor: "#3bc693" }}
                    onClick={() => handleMenuClick("/")}
                  >
                    Login
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <div className={classes.navOptions}>
                <Typography variant="h6" className={classes.title}></Typography>
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
                <Box m={1} pt={2}>
                  <NavButton onClick={() => handleButtonClick("/")}>
                    Login
                  </NavButton>
                </Box>
                <Box m={1} pt={2}>
                  <NavButton
                    variant="contained"
                    className={classes.button}
                    style={{ color: "white" }}
                    onClick={() => handleButtonClick("/")}
                  >
                    Get Started
                  </NavButton>
                </Box>
              </div>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(NavBar);

// import LogoNav from "../../../images/home/LogoNav.png";
/* <AppBar className={classes.appBar}>
<Toolbar>
  <img src={Logo} alt="" width="50px" height="50px" />
  <img src={LogoNav} alt="" width="130px" height="35px" />

  <Button className={classes.navLink}>Features</Button>

  <Button className={classes.navLink}>FAQs</Button>

  <Button className={classes.navLink}>About</Button>

  <Button className={classes.navLink}>Support</Button>

  <Button className={classes.navLink}>Login</Button>

  <Button variant="contained" className={classes.button}>
    <Typography>Get Started</Typography>
  </Button>
</Toolbar>
</AppBar> */
