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
  container: {
    paddingTop: "5vh",
    backgroundColor: "white",
    color: "#555",
  },
  h1: {
    textAlign: "center",
    fontFamily: "'Karla', sans-serif;",
    fontSize: "2.2em",
    color: "#22303d",
    fontWeight: "700",
    "@media (min-width:700px)": {
      fontSize: "4rem",
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
  favourite: {
    color: "green",
  },
  badge: {
    marginRight: "5em",
  },
  card: {
    marginBottom: theme.spacing(5),
  },
  media: {
    height: 250,
    [theme.breakpoints.down("sm")]: {
      height: 150,
    },
  },
}));
