import React, { Component } from 'react';
import { Form, FormGroup, Button, FormControl, ControlLabel, HelpBlock, Link } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import Collegecarousel from '../collegecarousel/Collegecarousel';

import './Landing.css'

class Landing extends Component {
  
  routeNewUser() {
    browserHistory.push('/user');
  }

  routeDashboard() {
    browserHistory.push('/dashboard');
  }

  render() {
    return (

      <div>
        <div className="login-container">
          <Form inline>
          <FormGroup controlId="formInlineName" className="login-form">
            <ControlLabel>Email/ID</ControlLabel>
            {' '}
            <FormControl type="email" placeholder="Jane.Doe@test.com" />
          </FormGroup>
          {' '}
          <FormGroup controlId="formInlineEmail" className="login-form">
            <ControlLabel>Password</ControlLabel>
            {' '}
            <FormControl type="text" placeholder="password" />
          </FormGroup>
          {' '}
          <Button onClick={this.routeDashboard.bind(this)} type="submit" className="login-form">
            Login
          </Button>
          <Button onClick={this.routeNewUser.bind(this)} className="new-account" bsStyle="success">Create New User Account</Button>
        </Form>
        </div>

        <Collegecarousel />
      </div>
    );
  }
}

export default Landing;
