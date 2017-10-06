import React, { Component } from 'react';
import './App.css';

import Character from './containers/Character'
import Navigation from './components/navigation/Navigation'

class App extends Component {
  render() {
    return (
      <div>
        eric was here
        <Navigation />
        <Character />
      </div>
    );
  }
}

export default App;
