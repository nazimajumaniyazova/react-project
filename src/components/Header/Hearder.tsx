import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
export default class Hearder extends Component {
  render() {
    return (
      <header className="header">
        <div className="container header__wrapper">
          <a className="logo">Logo</a>
          <ul className="menu">
            <li className="menu__item">
              <Link to={`/`} className="menu__link menu__link_active">
                Home
              </Link>
            </li>
            <li className="menu__item">
              <Link to={`about-us/`} className="menu__link">
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}
