import React, { Component } from 'react';
import { FormGroup, Button, FormControl, ControlLabel, HelpBlock, DropdownButton, MenuItem } from 'react-bootstrap';
import { browserHistory } from 'react-router';

import './NewUser.css';

//model that represents data that is needed to create a user
import {UserModel} from '../../models/UserModel'
import {PreferencesModel} from '../../models/PreferencesModel'

//since we have a model the represents the preferences that need to be set
//for each user, I use object.keys to get the properties on the object as an array for when 
//I need to check if the field i am working with belongs in preferences
//see line 64
const preferencesFields = Object.keys(new PreferencesModel);

export const states = ['AK', 'AL', 'AR', 'AS', 'AZ', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA', 'GU', 'HI', 'IA', 'ID', 'IL', 'IN', 'KS', 'KY', 'LA', 'MA', 'MD', 'ME', 'MI', 'MN', 'MO', 'MS', 'MT', 'NC', 'ND', 'NE', 'NH', 'NJ', 'NM', 'NV', 'NY', 'OH', 'OK', 'OR', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VA', 'VI', 'VT', 'WA', 'WI', 'WV','WY'];

export const majors = ['all', 'education', 'mathematics', 'business_marketing', 'communications_technology', 'language', 'visual_performing', 'engineering_technology', 'parks_recreation_fitness', 'agriculture', 'security_law_enforcement', 'computer', 'precision_production', 'humanities', 'library', 'psychology', 'social_science', 'legal', 'english', 'construction', 'military', 'communication', 'public_administration_social_service', 'architecture', 'ethnic_cultural_gender', 'resources', 'health', 'engineering', 'history', 'theology_religious_vocation', 'transportation', 'physical_science', 'science_technology', 'biological', 'family_consumer_science', 'philosophy_religious', 'personal_culinary', 'multidiscipline', 'mechanic_repair_technology']

export const cost = [ '$0-2,000', 'up to $5,000', 'up to $10,000', 'up to $30,000', 'up to $50,000', 'any' ]

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}



class NewUser extends Component {

routeBacktoLanding() {
    browserHistory.push('/#');
  }


routetoDashboard() {
  //Put login here
  browserHistory.push('/dashboard');
}
// onClick = { this.routetoDashboard.bind(this) } 

//method to render the option values for a dropdown
//used for states, cost, and majors
renderOptions(value, key){
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
    if(!input.value){
      continue;
    }
    
    //using a switch to handle building the data for majors and location properly.
    //needs to be a comma separated string with all the selected values together
    switch(input.name){

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
          let lastComma =  value.lastIndexOf(',');
          
          //set the matching property in formDate.preferences minus the last comma
          formData.preferences[input.name] = value.substring(0, lastComma);
        break;

      default:
        //if the input field we are working with has a name that is in preferencesFields array
        //lets make sure it gets put inside the preferences property of the UserModel
        if(preferencesFields.includes(input.name)){
          formData.preferences[input.name] = input.value
        }else{
          formData[input.name] = input.value
        }
        
    }
        
  }

  console.log(formData)

  //make the api call
  this.props.createUser(formData)
  this.routeBacktoLanding()
}

/// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// 



  render() {

    //if a user was created successfully then this.props.user.user will be populated
    //set a status message
    let statusMessage = (this.props.user.user) ? <div className='alert alert-success'>User Created Successfully</div> : "";
    
    return (


      <div className = "parentContainer">
        <Button className="pull-right" onClick={this.routeBacktoLanding.bind(this)} bsStyle="primary" id="backbutton">Back</Button>
      <div className="container">
      

      {/* display the status message if the user was created */}
      {statusMessage}
    
    
        <form onSubmit={this.handleFormSubmit} id="newuser">
 

          <h1>New User Profile</h1>

          <FieldGroup
            className="form-field"
            id="formControlsFirstName"
            type="string"
            label="First Name"
            placeholder="First Name"
            name="firstName"
          />
          <FieldGroup
            className="form-field"
            id="formControlsLastName"
            type="string"
            label="Last Name"
            placeholder="Last Name"
            name="lastName"
          />

          <FieldGroup
            className="form-field"
            id="formControlsEmail"
            type="email"
            label="Email address"
            placeholder="Enter email"
            name="username"
          />
          <FieldGroup
            className="form-field"
            id="formControlsPassword"
            type="password"
            label="Password"
            placeholder="Password"
            name="password"
          />

          <br /> 

          <label><h4>Preferences</h4> </label>

          <table className="center">
            <tr>
                <th><label>States (select one or more)</label></th>
                <th><label>Area of Study (select one)</label></th>
            </tr>
            <tr>
              <td>
                <div className="form-group">
                <select multiple="true" name="location">
                    {states.map(this.renderOptions)}
                  </select> 
                </div>          
                 <br /> 
              </td>

              <td>     
                <div className="form-group">
                  <select name="major">
                    {majors.map(this.renderOptions)}
                  </select>
                </div>
              </td>
              <br /> 
              </tr>
  </table>
       
{/* ////// /// /// /// ///  /// /// /// /// /// /// /// /// */}

            <Button  className="btn btn-default" type="submit" id="subnewuser">Create Profile</Button>


 

        </form>
      </div>
    </div>

);
   
  }
}


export default NewUser;



