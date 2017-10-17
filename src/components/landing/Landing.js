import React, { Component } from 'react';
import { Form, FormGroup, Button, FormControl, ControlLabel, HelpBlock, Link } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import Collegecarousel from '../collegecarousel/Collegecarousel';

import './Landing.css'
import {LoginModel} from '../../models/LoginModel'

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
    browserHistory.push('/user');
  }

  routeDashboard(tempUser) {
    browserHistory.push('/dashboard');
  }

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();
    //new UserModel object that we populate with the form data to make the api request
    let formData = new LoginModel;
  
    //looping over all the fields from the form and working with each one 
    //the variable input represents the form field we are currently working with
    for (const input of formSubmitEvent.target) {
      //lets skip this iteration of the loop if they field was left blank
      if(input.value){
        
      // using a switch to handle building the data for majors and location properly.
      // needs to be a comma separated string with all the selected values together
            formData[input.name] = input.value
      }
    }
    let myJSON = JSON.stringify(formData);
    console.log(myJSON);
    
    //make the api call
    this.props.loginUser(myJSON)
    console.log(localStorage.getItem("currentUser"))
    this.routeDashboard(localStorage.getItem("currentUser"));
    }
  
  render() {
    return (

      <div>
        <div className="login-container">
          <Form inline onSubmit={this.handleFormSubmit}>
          <FormGroup controlId="userName" className="login-form">
            <ControlLabel>Email/ID</ControlLabel>
            {' '}
            <FormControl name="username" type="email" placeholder="Jane.Doe@test.com" />
          </FormGroup>
          {' '}
          <FormGroup controlId="password" className="login-form">
            <ControlLabel>Password</ControlLabel>
            {' '}
            <FormControl name="password" type="text" placeholder="password" />
          </FormGroup>
          {' '}
          <Button className="btn btn-default login-form"type="submit">
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
