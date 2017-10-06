import React, { Component } from 'react';
import './App.css';


import Currentpreferences from './components/currentpreferences/currentpreferences'
import Dashboard from './components/dashboard/dashboard'
import Editpreferences from './components/editpreferences/editpreferences'
import Favorites from './components/favorites/favorites'
import Landing from './components/landing/landing'
import Navigation from './components/navigation/Navigation'
import Newuser from './components/newuser/newuser'

class App extends Component {
  render() {
    return (
      <div>
        eric was here
        <Currentpreferences />
        <Dashboard />
        <Editpreferences />
        <Favorites />
        <Landing />
        <Navigation />
        <Newuser />
      </div>
    );
  }
}

export default App;
