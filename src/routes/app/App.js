import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Header from '../../components/header';

const App = () => (
  <Router>
    <div>
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

const Home = () => (
  <h2>Home</h2>
);

const About = () => (
  <h2>About</h2>
);

export default App;
