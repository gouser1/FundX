import React, { Component } from 'react';
import NavBar from './components/home/NavBar/NavBar';
import Hero from './components/home/Hero/Hero';
import Features from './components/home/Features/Features';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import { Hello } from './components/hello';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Switch>
            <Route path='/' exact />
            <Route path='/Home' component={NavBar} />
          </Switch>
          <Hero />
          <Features />
        </Router>
      </div>
    );
  }
}

export default App;
