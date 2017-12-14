import React, { Component } from 'react';

// Components
import Board from './components/Board';
import Sidenav from './components/Sidenav';

// css
import css from './App.css';

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
