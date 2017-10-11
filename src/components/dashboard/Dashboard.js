import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import SearchResults from '../searchResults/SearchResults';

class Dashboard extends Component {
  render() {

    return (
      <div>this is the Dashboard
      <SearchResults />
      </div>
    );
  }
}

export default Dashboard;
