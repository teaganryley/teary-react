import React from 'react';
import { Link } from 'react-router-dom';

import logo from './assets/kensa_logo.png';

const Header = () => (
  <header>
    <figure>
      <img
        src={logo}
        alt="logo"
      />
    </figure>

    <nav>
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
    </nav>
  </header>
);

export default Header;
