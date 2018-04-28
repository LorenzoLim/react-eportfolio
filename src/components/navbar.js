import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { css } from 'glamor';
const logo = require('../images/L.png')

const s = css({
  background: 'RGBA(104,34,139,0.9)',
  height: '60px',
  position: 'fixed',
  width: '100%'
})

const navButton = css({
  width: '100px',
  float: 'right',
  margin: '20px',
  color: 'white'
})

class NavBar extends Component {
  render() {
    return (
      <div {...s}>
        <img alt="Landing Page" src={ logo } style={{width: '', height: ''}} />
        <div {...navButton} >
          About
        </div>
        <div {...navButton} >
          Portfolio
        </div>
        <div {...navButton} >
          Contact
        </div>
        <div {...navButton} >
          Home
        </div>
      </div>
    );
  }
}

export default NavBar;
