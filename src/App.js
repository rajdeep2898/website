import React, { Component } from 'react';

// Components
import Board from './components/Board';
import Sidenav from './components/NavBar/Sidenav';

// css
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidenav />
        <Board />
      </div>
    );
  }
}

export default App;
