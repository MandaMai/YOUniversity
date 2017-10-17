import React, { Component } from 'react';
import Navigation from '../navigation/Navigation';
import { FormGroup, Button, FormControl, ControlLabel, HelpBlock, DropdownButton, MenuItem } from 'react-bootstrap';
import { browserHistory } from 'react-router';

import Checkbox from '../checkbox/Checkbox'
// import './Editpreferences.css';
import { states, majors, cost } from '../newuser/NewUser'


// import './NewUser.css';

//model that represents data that is needed to create a user
import { UserModel } from '../../models/UserModel'
import { PreferencesModel } from '../../models/PreferencesModel'

//since we have a model the represents the preferences that need to be set
//for each user, I use object.keys to get the properties on the object as an array for when 
//I need to check if the field i am working with belongs in preferences
//see line 64
const preferencesFields = Object.keys(new PreferencesModel);


function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}


class EditPreferences extends Component {


  routeBacktoLanding() {
    browserHistory.push('/#');
  }

  routetoDashboard() {
    browserHistory.push('/dashboard');
  }
  // onClick = { this.routetoDashboard.bind(this) } 

  //method to render the option values for a dropdown
  //used for states, cost, and majors
  renderOptions(value, key) {
    return <option key={key} value={value}>{value}</option>
  }

  //method that runs when the form is submitted
  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    //new UserModel object that we populate with the form data to make the api request
    let formData = new UserModel;

    //looping over all the fields from the form and working with each one 
    //the variable input represents the form field we are currently working with
    for (const input of formSubmitEvent.target) {

      //lets skip this iteration of the loop if they field was left blank
      if (!input.value) {
        continue;
      }

      //using a switch to handle building the data for majors and location properly.
      //needs to be a comma separated string with all the selected values together
      switch (input.name) {

        case 'major':
        case "location":
          var value = "";
          for (var i = 0; i < input.length; i++) {
            console.log(input.length)
            if (input[i].selected) {
              value += input[i].value + ","
            }
          }

          //get index of the last comma from the generated comma separated list
          let lastComma = value.lastIndexOf(',');

          //set the matching property in formDate.preferences minus the last comma
          formData.preferences[input.name] = value.substring(0, lastComma);
          break;

        default:
          //if the input field we are working with has a name that is in preferencesFields array
          //lets make sure it gets put inside the preferences property of the UserModel
          if (preferencesFields.includes(input.name)) {
            formData.preferences[input.name] = input.value
          } else {
            formData[input.name] = input.value
          }

      }

    }

    console.log(formData)

    //make the api call
    this.props.createUser(formData)

  }

  /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// 



  render() {


    // let statusMessage = (this.props.user.user) ? <div className='alert alert-success'>User Created Successfully</div> : "";

    return (


      <div className="parentContainer">
        <Button onClick={this.routetoDashboard.bind(this)} bsStyle="primary">Back</Button>
        <div className="container">


      
          {/* {statusMessage} */}


          <form onSubmit={this.handleFormSubmit}>


            <h1>Edit Preferences</h1>

           

            <label>Major</label>


            <div className="form-group">
              <select multiple="true" name="major">
                {majors.map(this.renderOptions)}
              </select>
            </div>

            <br />
            <label>Location</label>
            <div className="form-group">
              <select multiple="true" name="location">
                {states.map(this.renderOptions)}
              </select>
            </div>

        

            <Button className="btn btn-default" type="submit">Update</Button>




          </form>
        </div>
      </div>

    );

  }
}






export default EditPreferences;


