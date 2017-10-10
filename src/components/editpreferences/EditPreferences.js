import React, { Component } from 'react';


class Editpreferences extends Component {

  render() {

    let stuff = this.props.params.id || "no route params";
    
    return (
      <div>
        edit preferences page
        <br/>
        {stuff}
      </div>
    );
  }
}

export default Editpreferences;
