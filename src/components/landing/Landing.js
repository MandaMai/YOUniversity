import React, { Component } from 'react';
import { FormGroup, Button, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';

import './Landing.css'


// import LandingNavigation from './components/landingnavigation/LandingNavigation'
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

          <Button type="submit">
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

export default Landing;
