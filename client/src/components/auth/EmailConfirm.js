import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import {
  Grid,
  Box,
  Button,
  Paper,
  withStyles,
  IconButton,
} from '@material-ui/core';
import LogoNav from '../../images/home/LogoNav.png';
import useStyles from './authStyle';

const EmailConfirm = (props) => {
  const { history } = props;
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
        <Paper elevation={10} className={classes.paper4}>
          <h1 className={classes.h1}>Welcome to FundX!</h1>
          <Box pb={1}>
            <h2 className={classes.h2}>
              Please check your inbox for a confirmation email. Click the link
              in the email to confirm your email address.
            </h2>{' '}
          </Box>
          <h2 className={classes.h2}>After you confirm click Continue.</h2>
          <Grid item xs={12}>
            <Box textAlign='center' pt={4}>
              <Button
                onClick={() => handleButtonClick('/register')}
                className={classes.button}
              >
                Continue
              </Button>
              <Button
                onClick={() => handleButtonClick('/register')}
                className={classes.button2}
                variant='outlined'
              >
                Re-send confirmation email
              </Button>
            </Box>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
};

export default withRouter(EmailConfirm);
