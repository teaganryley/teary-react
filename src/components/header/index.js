import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, StyledHeader } from './styles';
import logo from './assets/kensa_logo.png';

const Header = () => (
  <StyledHeader>
    <figure>
      <img
        src={logo}
        alt="logo"
      />
    </figure>

    <Menu>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="contact">Contact</Link>
        </li>
      </ul>
    </Menu>
  </StyledHeader>
);

export default Header;
