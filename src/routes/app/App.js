import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import themes from '../../themes';
import Header from '../../components/header';
import Home from '../home';
import GlobalStyles from './globalStyles';

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const modulo = (n, m) => ((n % m) + m) % m;

  const incrementTheme = () => {
    setCurrentIndex(modulo(currentIndex + 1, themes.length));
  };

  const decrementTheme = () => {
    setCurrentIndex(modulo(currentIndex - 1, themes.length));
  };

  return (
    <ThemeProvider theme={themes[currentIndex]}>
      <GlobalStyles />
      <Header
        onIncrement={incrementTheme}
        onDecrement={decrementTheme}
        themeName={themes[currentIndex].name}
      />
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
