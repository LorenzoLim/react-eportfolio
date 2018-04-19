import React, { Component } from 'react';
import NavBar from '../components/navbar';

class Home extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <img src="../images/village.jpg" alt="Village" />
      </div>
    );
  }
}

export default Home;
