import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
export default class Hearder extends Component {
  render() {
    return (
      <header className="header">
        <div className="container centralize header__wrapper">
          <a className="logo">Logo</a>
          <ul className="menu">
            <li className="menu__item">
              <NavLink to={`/`} className="menu__link">
                Home
              </NavLink>
            </li>
            <li className="menu__item">
              <NavLink to={`about-us/`} className="menu__link">
                About Us
              </NavLink>
            </li>
            <li className="menu__item">
              <NavLink to={`forms/`} className="menu__link">
                Forms
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}
