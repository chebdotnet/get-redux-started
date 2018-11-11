import React, { Component } from 'react';
import './About.css';
import Menu from './Menu';

export default class About extends Component {
  render() {
    console.log("about")
    return (
      <div>
        <Menu />
        About app
      </div>
    );
  }
}
