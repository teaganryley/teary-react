import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Header from '../../components/header';
import Home from '../home';
import GlobalStyles from './globalStyles';

const App = () => (
  <Router>
    <div>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
);

const About = () => (
  <h2>About</h2>
);

export default App;
