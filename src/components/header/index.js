import React from 'react';
import PropTypes from 'prop-types';
import { StyledHeader, SkipPrevious, SkipNext } from './styles';

const Header = ({ onIncrement, onDecrement, themeName }) => (
  <StyledHeader className="row between-xs">
    <div className="col-xs">
      <SkipPrevious onClick={onDecrement} />
      {themeName}
      <SkipNext onClick={onIncrement} />
    </div>
  </StyledHeader>
);

Header.propTypes = {
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  themeName: PropTypes.string.isRequired,
};

export default Header;
