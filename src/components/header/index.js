import React from 'react';
import { StyledHeader } from './styles';
import MuiPlayer from '../mui-player';

const Header = () => (
  <StyledHeader className="row between-xs">
    <MuiPlayer className="col-xs" />
  </StyledHeader>
);

export default Header;
