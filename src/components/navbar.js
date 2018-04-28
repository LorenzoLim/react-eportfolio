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

class NavBar extends Component {
  render() {
    return (
      <div {...s}>
        <img alt="Landing Page" src={ logo } style={{width: '', height: ''}} />
        <div>
          Home Contact Portfolio About
        </div>
      </div>
    );
  }
}

export default NavBar;
