import React, { Component } from 'react';
import { FormGroup, Button, FormControl, ControlLabel, HelpBlock, Link } from 'react-bootstrap';
import { browserHistory } from 'react-router';

import './Landing.css'


function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}



class Landing extends Component {
  
  routeNewUser() {
    browserHistory.push('/newuser');
  }

  routeDashboard() {
    browserHistory.push('/dashboard');
  }

  render() {
    return (

      
      <div>
        <form>
          <FieldGroup
            className="form-field"
            id="formControlsEmail"
            type="email"
            label="Email address"
            placeholder="Enter email"
          />
          <FieldGroup
            className="form-field"
            id="formControlsPassword"
            label="Password"
            type="password"
          />

          <Button onClick={this.routeDashboard.bind(this)} type="submit">
            Login
          </Button>

          
        </form>
      
        <Button onClick={this.routeNewUser.bind(this)} className="new-account" bsStyle="primary" bsSize="large" block>Create New User Account</Button>
      </div>
    );
  }
}

export default Landing;
