import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';


export class LandingNavigation extends Component {

  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            YOUniversity
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Form pullRight>
            <FormGroup>
              <FormControl type="text" placeholder="User Name" />
            </FormGroup>
            <FormGroup>
              <FormControl type="text" placeholder="Password" />
            </FormGroup>
            {' '}
            <Button type="submit">Login</Button>
          </Navbar.Form>
          {' '}
          {' '}
          <Button bsStyle="primary">Create Account</Button>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default LandingNavigation;
