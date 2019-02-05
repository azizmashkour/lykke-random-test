import React from 'react';
import logo from './logo.svg';
import './Header.css';

const Header = () => (
  <div>
    <div className="header-title">
      <span>
        Discover random images with a filter option
      </span>
    </div>
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Filter images by related categories. Add&nbsp;
        <code>?mode=forest</code>
        &nbsp; in the URL params for forest images.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
);

export default Header;
