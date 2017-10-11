import React, { Component } from 'react';
import Navigation from '../navigation/Navigation';


class Editpreferences extends Component {

  render() {

    let stuff = this.props.params.id || "no route params";
    
    return (
      <div>
        <Navigation />
        edit preferences page
        <br/>
        {stuff}
      </div>
    );
  }
}

export default Editpreferences;
