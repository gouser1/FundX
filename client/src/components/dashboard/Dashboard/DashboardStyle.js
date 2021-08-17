import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  typography: {
    fontFamily: "'Karla', sans-serif;",
    fontSize: "1.2em",
    color: "#46637f",
  },
  button: {
    fontFamily: "'Karla', sans-serif;",
    fontSize: "1.2em",
    color: "white",
    backgroundColor: "#3bc693",
    "&:hover": {
      backgroundColor: "#34b384",
    },
    textTransform: "none",
  },
  h1: {
    fontFamily: "'Karla', sans-serif;",
    color: "#22303d",
    fontWeight: "500",
    [theme.breakpoints.up("sm")]: {
      fontSize: "18px",
    },
  },
  h2: {
    fontFamily: "'Rubik', sans-serif;",
    fontSize: "1.2em",
    color: "#46637f",
    "@media (min-width:700px)": {
      fontSize: "1.6rem",
    },
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  icons: {
    display: "flex",
    alignItems: "center",
  },
  badge: {
    marginRight: "1em",
  },
  container: {
    paddingTop: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "white",
      color: "#555",
      border: "1px solid #ece7e7",
    },
  },
  containerItem: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(3),
      cursor: "pointer",
    },
  },
  icon: {
    marginRIght: theme.spacing(1),
  },
}));
