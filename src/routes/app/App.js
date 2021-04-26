import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { prairie } from '../../themes';
import Header from '../../components/header';
import Home from '../home';
import GlobalStyles from './globalStyles';

const App = () => (
  <Router>
    <ThemeProvider theme={prairie}>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </ThemeProvider>
  </Router>
);

export default App;
