import React from 'react';
import PropTypes from 'prop-types';
import SkipPreviousOutlinedIcon from '@material-ui/icons/SkipPreviousOutlined';
import SkipNextOutlinedIcon from '@material-ui/icons/SkipNextOutlined';

import { StyledHeader } from './styles';

const Header = ({ onIncrement, onDecrement, themeName }) => (
  <StyledHeader className="row between-xs">
    <div className="col-xs">
      <SkipPreviousOutlinedIcon onClick={onDecrement} />
      {themeName}
      <SkipNextOutlinedIcon onClick={onIncrement} />
    </div>
  </StyledHeader>
);

Header.propTypes = {
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  themeName: PropTypes.string.isRequired,
};

export default Header;
