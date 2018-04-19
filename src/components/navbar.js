import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { css } from 'glamor';

let s = css({
  background: 'RGBA(104,34,139,0.9)',
  height: '60px',
  position: 'fixed',
  width: '100%'
})

class NavBar extends Component {
  render() {
    return (
      <div {...s}>Hello</div>
    );
  }
}

export default NavBar;
