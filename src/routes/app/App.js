import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import * as themes from '../../themes';
import Header from '../../components/header';
import Home from '../home';
import GlobalStyles from './globalStyles';

const App = () => {
  const [currentTheme, setCurrentTheme] = useState('ocean');
  const toggleTheme = () => setCurrentTheme(currentTheme === 'ocean' ? 'praire' : 'ocean');

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      {console.log(themes[currentTheme])}
      <GlobalStyles />
      <Header onChangeTheme={toggleTheme} currentTheme={currentTheme} />
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
