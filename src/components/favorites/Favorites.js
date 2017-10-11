import React, { Component } from 'react';
import Navigation from '../navigation/Navigation';


class Favorites extends Component {

  render() {

    let stuff = this.props.params.id || "no route params";
    
    return (
      <div>
        <Navigation />
        Favorites Page
        <br/>
        {stuff}
      </div>
    );
  }
}

export default Favorites;
