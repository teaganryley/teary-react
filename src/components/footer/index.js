import React from 'react';
import StyledFooter from './styles';

const Footer = () => (
  <StyledFooter className="row center-xs">
    <div className="col-xs">
      ©
      {new Date().getFullYear()}
    </div>
  </StyledFooter>
);

export default Footer;
