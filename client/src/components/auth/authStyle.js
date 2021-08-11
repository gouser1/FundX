import { makeStyles } from '@material-ui/styles';

export default makeStyles(() => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#ecf0f1',
  },
  typography: {
    fontFamily: "'Karla', sans-serif;",
    fontSize: '1.2em',
    color: '#46637f',
  },
  button: {
    fontFamily: "'Karla', sans-serif;",
    fontSize: '1.2em',
    color: 'white',
    backgroundColor: '#3bc693',
    '&:hover': {
      backgroundColor: '#34b384',
    },
    textTransform: 'none',
  },
  h1: {
    textAlign: 'center',
    fontFamily: "'Karla', sans-serif;",
    fontSize: '2.2em',
    color: '#22303d',
    fontWeight: '700',
    '@media (min-width:700px)': {
      fontSize: '4rem',
    },
  },
  h2: {
    fontFamily: "'Rubik', sans-serif;",
    fontSize: '1em',
    color: '#22303d',
    '@media (min-width:700px)': {
      fontSize: '1.4rem',
    },
  },
  paper: {
    padding: 20,
    height: '45vh',
    '@media (max-width:800px)': {
      height: '60vh',
    },
    width: 280,
    margin: '20px auto',
  },
  avatarStyle: { backgroundColor: '#3bc693' },

  textfield: {
    fontFamily: "'Karla', sans-serif;",
    color: '#22303d',
  },
}));
