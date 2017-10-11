import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import SearchResults from '../searchResults/SearchResults';
import Navigation from '../navigation/Navigation';

class Dashboard extends Component {
  render() {

    return (
      <div>
        <Navigation />
        this is the Dashboard
        <SearchResults />
      </div>
    );
  }
}

export default Dashboard;
