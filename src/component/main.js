import React, { Component } from 'react';
import '../component/styles.scss';
import Header from '../component/header/header';
import Sidebar from '../component/sidebar/sidebar';

export default class App extends Component {
  render(){
    return (
      <div>
        <Header />
        <Sidebar />
      </div>
  )}
}