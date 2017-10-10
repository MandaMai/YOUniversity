import React, { Component } from 'react';


class NewUser extends Component {

  render() {

    let stuff = this.props.params.id || "no route params";
    
    return (
      <div>
        this is the new User setup page
        <br/>
        {stuff}
      </div>
    );
  }
}

export default NewUser;
