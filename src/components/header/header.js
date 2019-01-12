import React from 'react';

import './header.css';

const Header = () => {
  return (
    <div className="header d-flex">
      <h3>
        <a href="./header">
          Star DB
        </a>
      </h3>
      <ul className="d-flex">
        <li>
          <a href="./header">People</a>
        </li>
        <li>
          <a href="./header">Planets</a>
        </li>
        <li>
          <a href="./header">Starships</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;