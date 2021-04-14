import React from 'react';
import ReactDOM from 'react-dom';
import 'flexboxgrid/css/flexboxgrid.min.css';
import App from './routes/app/App';
import CssResetWrapper from './styles';

ReactDOM.render(
  <React.Fragment>
    <CssResetWrapper>
      <App />
    </CssResetWrapper>
  </React.Fragment>,
  document.getElementById('root'),
);
