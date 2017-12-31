import React, { Component } from 'react';

// Components
import Board from './views/Board';
import Sidenav from './views/NavBar/Sidenav';

// css
import '../App.css';

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