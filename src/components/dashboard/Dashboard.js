import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import SearchResults from '../searchResults/SearchResults';
import Navigation from '../navigation/Navigation';
import School from '../../containers/School';

class Dashboard extends Component {
  render() {

    return (
      <div>
        <Navigation />
        this is the Dashboard
        <SearchResults />
        <School />
      </div>
    );
  }
}

export default Dashboard;
