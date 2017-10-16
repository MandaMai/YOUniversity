import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
// import SearchResults from '../searchResults/SearchResults';
import Navigation from '../navigation/Navigation';

import CurrentPreferences from '../currentpreferences/CurrentPreferences';

import './UserFavorites.css';
import Favorites from '../../containers/Favorites';

class UserFavorites extends Component {
  render() {

    return (
      <div>
        
        <Navigation />
        <h2 className="welcome">Hey there, INSERT NAME HERE, Here are your favorite Schools!</h2>
        {/* <CurrentPreferences /> */}
        {/* <SearchResults /> */}
        <Favorites />

      </div>
    );
  }
}

export default UserFavorites;
