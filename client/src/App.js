import React, { Component } from 'react';
import NavBar from './components/home/NavBar/NavBar';
import Hero from './components/home/Hero/Hero';
import Features from './components/home/Features/Features';
import Hero2 from './components/home/Hero2/Hero2';
import Faq from './components/home/Faq/Faq';
import Support from './components/home/Support/Support';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import EmailConfirm from './components/auth/EmailConfirm';
import EmailRecovery from './components/auth/EmailRecovery';
import Dashboard from './components/dashboard/Dashboard/Dashboard';
import { createTheme, ThemeProvider } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import { Hello } from './components/hello';
const theme = createTheme({
  palette: {
    primary: {
      main: '#3bc693',
    },
  },
});

class App extends Component {
  render() {
    return (
      <div>
        <ThemeProvider theme={theme}>
          <Router>
            <Switch>
              <Route path='/' exact component={NavBar} />
              <Route path='/login' exact component={Login} />
              <Route path='/register' exact component={Register} />
              <Route path='/confirmemail' exact component={EmailConfirm} />
              <Route path='/recoverpassword' exact component={EmailRecovery} />
              <Route path='/dashboard' component={Dashboard} />
            </Switch>

            <Route path='/' exact component={Hero} />
            <Route path='/' exact component={Features} />
            <Route path='/' exact component={Hero2} />
            <Route path='/' exact component={Faq} />
            <Route path='/' exact component={Support} />
          </Router>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
