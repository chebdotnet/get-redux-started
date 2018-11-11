import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Menu extends Component {
  render() {
    console.log("menu")
    return (
      <div>
          <Link to="/" >Tracks</Link>
          <Link to="/about" >About</Link>
      </div>
    );
  }
}
