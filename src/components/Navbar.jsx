import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar(props) {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to={props.href}>{props.titulo}</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
