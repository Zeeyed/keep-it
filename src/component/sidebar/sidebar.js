import React, { Component } from 'react';
import '../sidebar/sidebar.scss';

export default class Sidebar extends Component {
  render(){
    return (
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-item sb-active">
            <img src="http://placehold.it/20x20" className="subitem-logo sb-logo avatar"/>
            <div className="subitem-title">
              Coding
            </div>
          </li>
          <li className="sidebar-item">
            <img src="http://placehold.it/20x20" className="subitem-logo sb-logo avatar" />
            <div className="subitem-title">
              Design
            </div>
          </li>
          <li className="sidebar-item">
            <img src="http://placehold.it/20x20" className="subitem-logo sb-logo avatar" />
            <div className="subitem-title">
              News
            </div>
          </li>
          <li className="sidebar-item">
            <img src="http://placehold.it/20x20" className="subitem-logo sb-logo avatar" />
            <div className="subitem-title">
              New ideas
            </div>
          </li>
            <li className="sidebar-item">
            <img src="http://placehold.it/20x20" className="subitem-logo sb-logo avatar" />
            <div className="subitem-title">
              Movies
            </div>
          </li>
        </ul>
      </aside>
    )
  }
}