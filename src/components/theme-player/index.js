import React from 'react';
import PropTypes from 'prop-types';
import { StyledPlayer, SkipPrevious, SkipNext } from './styles';

const ThemePlayer = ({ onIncrement, onDecrement, themeName }) => (
  <StyledPlayer className="row center-xs">
    <div className="col-xs">
      <SkipPrevious onClick={onDecrement} />
    </div>
    <div className="col-xs">
      {themeName}
    </div>
    <div className="col-xs">
      <SkipNext onClick={onIncrement} />
    </div>
  </StyledPlayer>
);

ThemePlayer.propTypes = {
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  themeName: PropTypes.string.isRequired,
};

export default ThemePlayer;
