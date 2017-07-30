import React, { Component } from 'react';
import '../header/styles.scss';

export default class Sidebar extends Component {
  render(){
    return (
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-item sb-active">
            <img src="http://placehold.it/20x20" alt="subitem-logo sb-logo avatar"/>
            <div className="subitem-title">
              Coding
            </div>
          </li>
          <li class="sidebar-item">
            <img src="http://placehold.it/20x20" class=" subitem-logo sb-logo avatar" />
            <div class="subitem-title">
              Design
            </div>
          </li>
          <li class="sidebar-item">
            <img src="http://placehold.it/20x20" class=" subitem-logo sb-logo avatar" />
            <div class="subitem-title">
              News
            </div>
          </li>
          <li class="sidebar-item">
            <img src="http://placehold.it/20x20" class=" subitem-logo sb-logo avatar" />
            <div class="subitem-title">
              New ideas
            </div>
          </li>
            <li class="sidebar-item">
            <img src="http://placehold.it/20x20" class=" subitem-logo sb-logo avatar" />
            <div class="subitem-title">
              Movies
            </div>
          </li>
        </ul>
      </aside>
    )
  }
}