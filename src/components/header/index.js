import React from 'react';
import PropTypes from 'prop-types';
// import SkipPreviousOutlinedIcon from '@material-ui/icons/SkipPreviousOutlined';
// import SkipNextOutlinedIcon from '@material-ui/icons/SkipNextOutlined';
import { StyledHeader, StyledButton } from './styles';

const Header = ({ onChangeTheme, currentTheme }) => (
  <StyledHeader className="row between-xs">
    <StyledButton
      className="col-xs"
      onClick={onChangeTheme}
    >
      {currentTheme}
    </StyledButton>
  </StyledHeader>
);

Header.propTypes = {
  onChangeTheme: PropTypes.func.isRequired,
  currentTheme: PropTypes.string.isRequired,
};

export default Header;
