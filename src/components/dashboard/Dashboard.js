import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import SearchResults from '../searchResults/SearchResults';
import Navigation from '../navigation/Navigation';
import CurrentPreferences from '../currentpreferences/CurrentPreferences';

class Dashboard extends Component {
  render() {

    return (
      <div>
        <Navigation />
        this is the Dashboard
        <CurrentPreferences />
        <SearchResults />
      </div>
    );
  }
}

export default Dashboard;
