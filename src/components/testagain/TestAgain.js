import React, { Component } from 'react';


class TestAgain extends Component {

  render() {

    let stuff = this.props.params.id || "no route params";
    
    return (
      <div>
        this is another eric
        <br/>
        {stuff}
      </div>
    );
  }
}

export default TestAgain;
