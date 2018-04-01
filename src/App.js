import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/home';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Home />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
