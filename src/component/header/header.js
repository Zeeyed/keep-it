import React, { Component } from 'react';
import '../header/styles.scss';

export default class Header extends Component {
  render(){
    return (
      <header>
        <nav className="navigation">
          <div className="logotype">KeepIt</div>
          <ul className="menu">
            <li className="menu_item">Design</li>
            <li className="menu_item">Coding</li>
            <li className="menu_item">Books</li>
          </ul>
        </nav>
        <div className="nav_settings">
          <ul className="nav_settings_elems">
            <li className="nav_settings_elem">
              <a href="#">New Note</a>
            </li>
          </ul>
        </div>
      </header>
    )
  }
}