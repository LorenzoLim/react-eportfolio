import React, { Component } from 'react';
import NavBar from '../components/navbar';
const village = require('../images/village.jpg')

class Home extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <img alt="Landing Page" src={ village } style={{width: '100%', height: '800px'}} />
      </div>
    );
  }
}

export default Home;
