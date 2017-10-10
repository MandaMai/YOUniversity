import React, { Component } from 'react';


class LogOut extends Component {

  render() {

    let stuff = this.props.params.id || "no route params";
    
    return (
      <div>
        GOODBYE
        <br/>
        {stuff}
      </div>
    );
  }
}

export default LogOut;
