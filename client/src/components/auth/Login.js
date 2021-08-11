import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import {
  Grid,
  Box,
  Button,
  Paper,
  TextField,
  InputAdornment,
  Avatar,
  FormControlLabel,
  Checkbox,
  Typography,
  withStyles,
  IconButton,
} from '@material-ui/core';
import Email from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import LogoNav from '../../images/home/LogoNav.png';
import useStyles from './authStyle';

const Login = (props) => {
  const { history } = props;
  const btnstyle = {
    margin: '8px 0',
    color: 'white',
    backgroundColor: '#3bc693',
  };
  const handleButtonClick = (pageURL) => {
    history.push(pageURL);
  };

  const classes = useStyles();

  const [value, setValue] = React.useState('Login');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const LogoButton = withStyles(() => ({}))(IconButton);

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={0}
        direction='column'
        alignItems='center'
        justify='center'
        style={{ minHeight: '100vh' }}
      >
        <LogoButton to='/' style={{ backgroundColor: 'transparent' }}>
          <img src={LogoNav} alt='' width='130px' height='35px' />
        </LogoButton>
        <Paper elevation={10} className={classes.paper}>
          <Grid align='center'>
            <Avatar class={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <h2 className={classes.h2}>Sign In</h2>
          </Grid>
          <Box pb={3}>
            {' '}
            <TextField
              id='email'
              label={
                <Typography className={classes.textfield}>Email</Typography>
              }
              variant='outlined'
              color='primary'
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <Email style={{ fill: '#c8c8c8' }} />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <TextField
            id='password'
            label={
              <Typography className={classes.textfield}>Password</Typography>
            }
            variant='outlined'
            color='primary'
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <LockIcon style={{ fill: '#c8c8c8' }} />
                </InputAdornment>
              ),
            }}
          />
          <FormControlLabel
            control={<Checkbox name='checkedB' color='primary' />}
            label={
              <Typography className={classes.textfield}>Remember me</Typography>
            }
          />
          <Button type='submit' variant='contained' style={btnstyle} fullWidth>
            Sign in
          </Button>
          <Typography className={classes.textfield}>
            <Link href='#' style={{ textDecoration: 'none' }}>
              Forgot password?
            </Link>
          </Typography>
          <Typography className={classes.textfield}>
            {' '}
            I am a new user
            <Link
              href='#'
              onClick={() => handleChange('event', 1)}
              style={{ textDecoration: 'none' }}
            >
              and I want to Sign Up
            </Link>
          </Typography>
        </Paper>
      </Grid>
    </div>
  );
};

export default withRouter(Login);
