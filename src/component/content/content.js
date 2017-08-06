import React, { Component } from 'react';
import '../content/content.scss';

export default class Content extends Component {
  render(){
    return (
        <div className="content">
          <div className="subitems">
          <form className="subitems-search">
            <input type="search" className="search" placeholder="Search Notes ..." />
          </form>
          <ul className="subitems-list">

          <li className="subitems-list-item">
            <div className="preview">
              <h3>Sara McLaclan <small>Jul 15</small></h3>
              <p>The brand new season of Top Gear</p>
            </div>
          </li>

          <li className="subitems-list-item active">
            <div className="preview">
              <h3>Sara McLaclan <small>Jul 15</small></h3>
              <p>The brand new season of Top Gear</p>
            </div>
          </li>

          <li className="subitems-list-item">
            <div className="preview">
              <h3>Sara McLaclan <small>Jul 15</small></h3>
              <p>The brand new season of Top Gear</p>
            </div>
          </li>

          <li className="subitems-list-item">
            <div className="preview">
              <h3>Sara McLaclan <small>Jul 15</small></h3>
              <p>The brand new season of Top Gear</p>
            </div>
          </li>

          <li className="subitems-list-item">
            <div className="preview">
              <h3>Sara McLaclan <small>Jul 15</small></h3>
              <p>The brand new season of Top Gear</p>
            </div>
          </li>
          <li className="subitems-list-item">
            <div className="preview">
              <h3>Sara McLaclan <small>Jul 15</small></h3>
              <p>The brand new season of Top Gear</p>
                <ul className="tags">
                  <li className="tags-list-item red">Important</li>
                  <li className="tags-list-item draft">Draft</li>                
                </ul>
            </div>
          </li>
          <li className="subitems-list-item">
            <div className="preview">
              <h3>Sara McLaclan <small>Jul 15</small></h3>
              <p>The brand new season of Top Gear</p>
            </div>
          </li>
          <li className="subitems-list-item">
            <div className="preview">
              <h3>Sara McLaclan <small>Jul 15</small></h3>
              <p>The brand new season of Top Gear</p>
            </div>
          </li>

          </ul>
          </div>
        </div>
    )
  }
}