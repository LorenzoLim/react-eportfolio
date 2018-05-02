import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
        <img id="logo" alt="Landing Page" src={ logo } />
          <Link to="/About" className="navButton">About</Link>
          <Link to="/Portfolio" className="navButton">Portfolio</Link>
          <Link to="/Contact" className="navButton">Contact</Link>
          <Link to="/" className="navButton">Home</Link>
      </div>
    );
  }
}

export default NavBar;
