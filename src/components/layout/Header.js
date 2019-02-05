import React, { Fragment } from 'react';
import logo from './logo.svg';
import './Header.css';

const Header = () => (
  <Fragment>
    <div className="header-title">
      <span>
        Discover random images with a filter option
      </span>
    </div>
    <header className="app-header">
      <img src={logo} className="app-logo" alt="logo" />
      <p>
        Filter images by related categories. Add&nbsp;
        <code>?mode=forest</code>
        &nbsp; in the URL params for forest images.
      </p>
      <a
        className="app-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </Fragment>
);

export default Header;
