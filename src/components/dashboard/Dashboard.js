import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
// import SearchResults from '../searchResults/SearchResults';
import Navigation from '../navigation/Navigation';

import CurrentPreferences from '../currentpreferences/CurrentPreferences';
import Schools from '../../containers/School';

class Dashboard extends Component {
  render() {

    return (
      <div>
        <Navigation />
        <CurrentPreferences />
        <SearchResults />
        <Schools />

      </div>
    );
  }
}

export default Dashboard;
