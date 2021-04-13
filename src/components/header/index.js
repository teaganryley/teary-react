import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, StyledHeader } from './styles';
import logo from './assets/kensa_logo.png';

const Header = () => (
  <StyledHeader className="row">
    <figure className="col-xs-8">
      <img
        src={logo}
        alt="logo"
      />
    </figure>

    <Menu className="col-xs-4">
      <ul className="row">
        <li className="col-xs">
          <Link to="/">Home</Link>
        </li>
        <li className="col-xs">
          <Link to="about">About</Link>
        </li>
        <li className="col-xs">
          <Link to="contact">Contact</Link>
        </li>
      </ul>
    </Menu>
  </StyledHeader>
);

export default Header;
